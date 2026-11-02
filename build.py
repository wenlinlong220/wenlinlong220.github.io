"""Build the static site and give changed files fresh URLs on every deployment."""
from pathlib import Path
from datetime import datetime, timedelta, timezone
import hashlib
import re
import shutil
import subprocess

root = Path(__file__).resolve().parent
out = root / '_site'
out.mkdir(exist_ok=True)
html = (root / 'index.html').read_text(encoding='utf-8')
commit_time = subprocess.check_output(
    ['git', 'show', '-s', '--format=%cI', 'HEAD'], cwd=root, text=True
).strip()
updated_date = datetime.fromisoformat(commit_time).astimezone(
    timezone(timedelta(hours=8))
).date().isoformat()
html = html.replace('name="site-updated" content=""',
                    f'name="site-updated" content="{updated_date}"')
for name in ['style.css', 'content.js', 'main.js']:
    version = hashlib.sha256((root / name).read_bytes()).hexdigest()[:12]
    html = re.sub(re.escape(name) + r'(?:\?[^"\s>]*)?', name + '?v=' + version, html)
    shutil.copy2(root / name, out / name)
(out / 'index.html').write_text(html, encoding='utf-8')
shutil.copytree(root / 'assets', out / 'assets', dirs_exist_ok=True)
(out / '.nojekyll').touch()
print('Built homepage with content-based asset versions.')
