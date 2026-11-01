"""Build the static site and give changed files fresh URLs on every deployment."""
from pathlib import Path
import hashlib
import re
import shutil

root = Path(__file__).resolve().parent
out = root / '_site'
out.mkdir(exist_ok=True)
html = (root / 'index.html').read_text(encoding='utf-8')
for name in ['style.css', 'content.js', 'main.js']:
    version = hashlib.sha256((root / name).read_bytes()).hexdigest()[:12]
    html = re.sub(re.escape(name) + r'(?:\?[^"\s>]*)?', name + '?v=' + version, html)
    shutil.copy2(root / name, out / name)
(out / 'index.html').write_text(html, encoding='utf-8')
shutil.copytree(root / 'assets', out / 'assets', dirs_exist_ok=True)
(out / '.nojekyll').touch()
print('Built homepage with content-based asset versions.')
