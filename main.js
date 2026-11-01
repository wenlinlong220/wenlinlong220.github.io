(() => {
  'use strict';
  const ids = ['about', 'research', 'projects', 'experience', 'education'];
  const text = (id, value) => { document.getElementById(id).textContent = value; };
  const node = (tag, value, className) => { const el = document.createElement(tag); if (value) el.textContent = value; if (className) el.className = className; return el; };
  let language = 'zh';
  try { language = localStorage.getItem('homepage-language') === 'en' ? 'en' : 'zh'; } catch (_) {}
  function render() {
    const data = window.PROFILE[language];
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = language === 'zh' ? '温麟陇 · 个人主页' : 'Wen Linlong · Personal homepage';
    document.querySelector('meta[name="description"]').content = data.biography[0];
    ['name', 'role', 'university', 'school', 'location'].forEach(id => text(id, data[id]));
    text('other-name', data.otherName);
    const nav = document.getElementById('navigation'); nav.replaceChildren();
    ids.forEach((id, i) => { const a = node('a', data.nav[i]); a.href = '#' + id; nav.append(a); text(id + '-title', data.titles[i]); });
    document.getElementById('biography').replaceChildren(...data.biography.map(p => node('p', p)));
    text('contact-link', data.contact);
    document.getElementById('research-list').replaceChildren(...data.research.map((item, i) => { const article = node('article', '', 'research-item'); article.append(node('span', String(i + 1).padStart(2, '0'), 'index'), node('h3', item.title), node('p', item.description)); return article; }));
    document.getElementById('project-list').replaceChildren(...data.projects.map(item => {
      const article = node('article', '', 'project');
      const copy = node('div', '', 'project-copy');
      const meta = node('div', '', 'project-meta');
      meta.append(node('span', item.kind, 'kind'), node('span', item.period));
      const tags = node('div', '', 'tags');
      tags.append(...item.tags.map(t => node('span', t)));
      copy.append(meta, node('h3', item.title), node('p', item.description), tags);
      if (item.links?.length) {
        const links = node('div', '', 'project-links');
        item.links.forEach(itemLink => {
          const link = node('a', itemLink.label + ' ↗', 'text-link');
          link.href = itemLink.href;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          links.append(link);
        });
        copy.append(links);
      }
      if (item.images?.length) {
        const gallery = node('div', '', 'project-gallery');
        item.images.forEach(image => {
          const figure = node('figure');
          const link = node('a');
          link.href = image.src;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.setAttribute('aria-label', image.caption + (language === 'zh' ? '（新窗口查看原图）' : ' (open full image in a new tab)'));
          const img = node('img');
          img.src = image.src;
          img.alt = image.caption;
          img.loading = 'lazy';
          img.width = image.width;
          img.height = image.height;
          link.append(img);
          figure.append(link, node('figcaption', image.caption));
          gallery.append(figure);
        });
        article.append(gallery);
      }
      article.append(copy);
      return article;
    }));
    document.getElementById('experience-list').replaceChildren(...data.experience.map(item => { const row = node('div', '', 'experience-row'); const info = node('div'); info.append(node('h3', item.title), node('p', item.description)); row.append(node('span', item.period, 'period'), info); return row; }));
    const educationItems = Array.isArray(data.education) ? data.education : [data.education];
    document.getElementById('education-content').replaceChildren(...educationItems.map(item => {
      const row = node('div', '', 'education-row');
      const info = node('div');
      info.append(node('h3', item.title), node('p', [item.description, item.degree].filter(Boolean).join(' · ')));
      row.append(info);
      if (item.period) row.append(node('span', item.period));
      return row;
    }));
    text('skills-title', data.skills); text('back-top', data.backTop);
    const button = document.getElementById('language'); button.replaceChildren(document.createTextNode(language === 'zh' ? 'EN ' : '中文 '), node('span', '↗')); button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
    document.getElementById('navigation').setAttribute('aria-label', language === 'zh' ? '主导航' : 'Main navigation');
    document.querySelector('.profile').setAttribute('aria-label', language === 'zh' ? '个人信息' : 'Profile');
    document.querySelector('.portrait img').alt = language === 'zh' ? '温麟陇的 GitHub 头像' : 'Wen Linlong’s GitHub avatar';
    decorateIcons();
    updateActive();
  }
  function decorateIcons() {
    const icons = {
      university: ['M3 9l9-6 9 6', 'M4 10h16', 'M6 10v8m6-8v8m6-8v8', 'M3 21h18M4 18h16'],
      location: ['M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1116 0Z', 'M15 10a3 3 0 11-6 0 3 3 0 016 0Z'],
      mail: ['M3 5h18v14H3Z', 'm3 5 9 8 9-8'],
      github: ['M9 19c-4 1-4-2-6-2', 'M15 22v-4a4 4 0 00-1-3c3-.3 6-1.5 6-6a5 5 0 00-1.4-3.5 5 5 0 00-.1-3.5s-1.2-.4-3.8 1.3a13 13 0 00-7 0C5.1 1.6 4 2 4 2a5 5 0 00-.1 3.5A5 5 0 002.5 9c0 4.5 3 5.7 6 6a4 4 0 00-1 3v4'],
      video: ['M3 7h18v14H3Z', 'm7 2 4 5m6-5-4 5', 'M8 12v3m8-3v3']
    };
    function add(target, name) {
      if (!target || target.querySelector('.ui-icon')) return;
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('class', 'ui-icon');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      icons[name].forEach(d => { const path = document.createElementNS(svg.namespaceURI, 'path'); path.setAttribute('d', d); svg.append(path); });
      target.prepend(svg);
    }
    add(document.getElementById('university'), 'university');
    add(document.getElementById('location'), 'location');
    add(document.querySelector('.social a[href^="mailto:"]'), 'mail');
    add(document.querySelector('.social a[href*="github.com"]'), 'github');
    add(document.querySelector('.social a[href*="bilibili.com"]'), 'video');
  }

  function updateActive() { let active = ids[0]; ids.forEach(id => { if (document.getElementById(id).getBoundingClientRect().top <= 170) active = id; }); document.querySelectorAll('nav a').forEach(a => { const selected = a.hash === '#' + active; a.classList.toggle('active', selected); if (selected) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); }); }
  document.getElementById('language').addEventListener('click', () => { language = language === 'zh' ? 'en' : 'zh'; try { localStorage.setItem('homepage-language', language); } catch (_) {} render(); });
  window.addEventListener('scroll', updateActive, { passive: true });
  document.querySelector('.portrait img').addEventListener('error', event => { event.target.style.visibility = 'hidden'; });
  text('year', new Date().getFullYear());
  render();
})();
