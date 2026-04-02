---
title: Explore
date: 2026-04-02
---

<style>
/* ── Explore page — namespace: ex- ──────────────────────────────── */

.ex-intro {
  font-size: 0.9rem;
  color: #5a6a7a;
  margin: 0 0 1.5rem;
}

/* Tag bar */
.ex-tag-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.ex-pill {
  display: inline-block;
  padding: 0.3em 0.85em;
  border: 1px solid #c8d0db;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #2c3e50;
  background: transparent;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  user-select: none;
}

.ex-pill:hover {
  border-color: #2a5298;
  color: #2a5298;
}

.ex-pill.ex-active {
  background: #2a5298;
  border-color: #2a5298;
  color: #fff;
}

/* Grid */
.ex-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.1rem;
}

/* Card */
.ex-card {
  background: #fff;
  border: 1px solid #e0e4ea;
  border-radius: 6px;
  padding: 1.1rem 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  transition: border-color 0.18s, box-shadow 0.18s, opacity 0.2s;
  text-decoration: none;
  color: inherit;
  position: relative;
}

.ex-card:hover {
  border-color: #2a5298;
  box-shadow: 0 3px 12px rgba(42,82,152,0.12);
}

.ex-card.ex-hidden {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  visibility: hidden;
}

/* Badge */
.ex-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.85rem;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.15em 0.55em;
  border-radius: 3px;
}

.ex-badge-blog    { background: #dce8ff; color: #2a5298; }
.ex-badge-project { background: #d4f4ee; color: #1a7a66; }

.ex-card-title {
  font-size: 0.92rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
  padding-right: 4rem; /* clear badge */
  line-height: 1.4;
}

.ex-card-desc {
  font-size: 0.82rem;
  color: #5a6a7a;
  line-height: 1.55;
  margin: 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.ex-card-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
  border-radius: 4px 4px 0 0;
  margin: -1.1rem -1.25rem 0.75rem;
  width: calc(100% + 2.5rem);
}

.ex-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.2rem;
}

.ex-card-tag {
  font-size: 0.73rem;
  font-weight: 500;
  padding: 0.15em 0.55em;
  background: #eef2fa;
  color: #2a5298;
  border-radius: 20px;
}

/* Loading / empty */
.ex-loading {
  color: #8a9bac;
  font-size: 0.9rem;
  padding: 2rem 0;
  text-align: center;
  grid-column: 1 / -1;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .ex-intro       { color: #a7a9ad; }
  .ex-pill        { color: #c4c6c9; border-color: #435266; }
  .ex-pill:hover  { color: #5b8ef0; border-color: #5b8ef0; }
  .ex-pill.ex-active { background: #5b8ef0; border-color: #5b8ef0; color: #fff; }
  .ex-card        { background: #252d38; border-color: #435266; box-shadow: 0 1px 4px rgba(0,0,0,0.2); }
  .ex-card:hover  { border-color: #5b8ef0; box-shadow: 0 3px 12px rgba(91,142,240,0.15); }
  .ex-card-title  { color: #c4c6c9; }
  .ex-card-desc   { color: #a7a9ad; }
  .ex-badge-blog    { background: #1e2e4a; color: #5b8ef0; }
  .ex-badge-project { background: #1a3530; color: #3dbfa3; }
  .ex-card-tag    { background: #364151; color: #5b8ef0; }
  .ex-loading     { color: #687582; }
}

@media (max-width: 640px) {
  .ex-grid { grid-template-columns: 1fr; }
}
</style>

<p class="ex-intro">Browse all posts and projects by tag. Click a tag to filter.</p>

<div class="ex-tag-bar" id="ex-tag-bar">
  <span class="ex-loading">Loading tags…</span>
</div>

<div class="ex-grid" id="ex-grid">
  <div class="ex-loading">Loading content…</div>
</div>

<script>
(function () {
  /* ── Cover image lookup (keyed by post URL) ─────────────────── */
  const POST_IMGS = {
    '/2026/04/02/neural-networks-deep-learning-notes/': '/img/posts/neural-networks.jpg',
    '/2026/04/02/Getting-Started-with-Survival-Analysis-in-R/': '/img/posts/survival-analysis.jpg'
  };

  /* ── Hardcoded project data ──────────────────────────────────── */
  const PROJECTS = [
    {
      type: 'project',
      title: 'Surgery Timing and 30-Day Mortality Outcomes',
      url: '/projects/',
      img: '/img/projects/surgery-timing.jpg',
      desc: 'Investigates whether the hour of day a surgery is performed correlates with 30-day patient mortality. Applies logistic regression with restricted cubic splines to 32,001 surgical cases.',
      tags: ['R', 'Logistic Regression', 'Restricted Cubic Splines', 'ggplot2', 'gtsummary']
    },
    {
      type: 'project',
      title: 'OLS Under Heteroscedasticity: A Monte Carlo Simulation',
      url: '/projects/',
      img: '/img/projects/monte-carlo-sim.jpg',
      desc: 'A Monte Carlo simulation study (1,000 repetitions) examining how heteroscedasticity violations affect OLS regression inference across four error-variance intensity levels.',
      tags: ['R', 'Monte Carlo Simulation', 'OLS Regression', 'ggplot2', 'bookdown']
    }
  ];

  /* ── Parse local-search.xml → post items ────────────────────── */
  function parsePosts(xmlText) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlText, 'text/xml');
    const entries = Array.from(doc.querySelectorAll('entry'));
    return entries.map(e => {
      const tags = Array.from(e.querySelectorAll('tags tag')).map(t => t.textContent.trim());
      const content = (e.querySelector('content') || {}).textContent || '';
      const desc = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160);
      const url = (e.querySelector('url') || {}).textContent || '#';
      return {
        type: 'blog',
        title: (e.querySelector('title') || {}).textContent || 'Untitled',
        url,
        img: POST_IMGS[url] || null,
        desc,
        tags
      };
    });
  }

  /* ── Build tag frequency map ─────────────────────────────────── */
  function buildTagMap(items) {
    const map = {};
    items.forEach(item => {
      (item.tags || []).forEach(t => { map[t] = (map[t] || 0) + 1; });
    });
    return map;
  }

  /* ── Render tag bar ──────────────────────────────────────────── */
  function renderTagBar(tagMap, activeTag) {
    const bar = document.getElementById('ex-tag-bar');
    const sorted = Object.entries(tagMap).sort((a, b) => b[1] - a[1]).map(([t]) => t);
    const allBtn = makeEl('span', 'ex-pill' + (activeTag === '' ? ' ex-active' : ''), 'All');
    allBtn.addEventListener('click', () => applyFilter(''));
    bar.innerHTML = '';
    bar.appendChild(allBtn);
    sorted.forEach(tag => {
      const pill = makeEl('span', 'ex-pill' + (activeTag === tag ? ' ex-active' : ''), tag);
      pill.addEventListener('click', () => applyFilter(tag));
      bar.appendChild(pill);
    });
  }

  /* ── Render cards ────────────────────────────────────────────── */
  function renderCards(items, activeTag) {
    const grid = document.getElementById('ex-grid');
    grid.innerHTML = '';
    items.forEach(item => {
      const hidden = activeTag && !(item.tags || []).includes(activeTag);
      const card = document.createElement('a');
      card.href = item.url;
      card.className = 'ex-card' + (hidden ? ' ex-hidden' : '');
      card.dataset.tags = JSON.stringify(item.tags || []);
      const imgHtml = item.img
        ? `<img class="ex-card-img" src="${escHtml(item.img)}" alt="${escHtml(item.title)}" loading="lazy" onerror="this.style.display='none'">`
        : '';
      card.innerHTML = `
        ${imgHtml}
        <span class="ex-badge ex-badge-${item.type}">${item.type === 'blog' ? 'Blog' : 'Project'}</span>
        <p class="ex-card-title">${escHtml(item.title)}</p>
        <p class="ex-card-desc">${escHtml(item.desc)}</p>
        <div class="ex-card-tags">${(item.tags || []).map(t => `<span class="ex-card-tag">${escHtml(t)}</span>`).join('')}</div>
      `;
      grid.appendChild(card);
    });
    if (grid.children.length === 0) {
      grid.innerHTML = '<div class="ex-loading">No results.</div>';
    }
  }

  /* ── Apply filter (show/hide cards + update pills) ───────────── */
  let currentItems = [];
  function applyFilter(tag) {
    window.location.hash = tag ? encodeURIComponent(tag) : '';
    document.querySelectorAll('.ex-pill').forEach(p => {
      p.classList.toggle('ex-active', p.textContent === (tag || 'All'));
    });
    document.querySelectorAll('.ex-card').forEach(card => {
      const tags = JSON.parse(card.dataset.tags || '[]');
      const hide = tag && !tags.includes(tag);
      card.classList.toggle('ex-hidden', hide);
    });
  }

  /* ── Helpers ─────────────────────────────────────────────────── */
  function makeEl(tag, cls, text) {
    const el = document.createElement(tag);
    el.className = cls;
    el.textContent = text;
    return el;
  }
  function escHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ── Bootstrap ───────────────────────────────────────────────── */
  fetch('/local-search.xml')
    .then(r => r.text())
    .then(xml => {
      const posts = parsePosts(xml);
      currentItems = [...posts, ...PROJECTS];
      const tagMap = buildTagMap(currentItems);
      const initTag = decodeURIComponent((window.location.hash || '').replace('#', ''));
      renderTagBar(tagMap, initTag);
      renderCards(currentItems, initTag);
    })
    .catch(() => {
      // Fallback: show projects only if XML fetch fails
      currentItems = [...PROJECTS];
      const tagMap = buildTagMap(currentItems);
      renderTagBar(tagMap, '');
      renderCards(currentItems, '');
    });
})();
</script>
