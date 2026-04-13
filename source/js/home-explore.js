(function () {
  /* Only run on the home/index page */
  var path = window.location.pathname;
  if (path !== '/' && !/^\/page\/\d+\/$/.test(path)) return;

  /* Wait for DOM ready */
  function init() {
    var board = document.getElementById('board');
    if (!board) return;
    var target = board.querySelector('.col-md-10') || board;

    /* ── Recent Blog heading ─────────────────────────────────────── */
    var firstCard = target.querySelector('.index-card');
    if (firstCard) {
      var recentHeading = document.createElement('h2');
      recentHeading.className = 'ex-recent-heading';
      recentHeading.textContent = 'Recent Blog';
      target.insertBefore(recentHeading, firstCard);
    }

    /* Build section HTML */
    var section = document.createElement('div');
    section.className = 'ex-home-section';
    section.innerHTML =
      '<h2>Explore</h2>' +
      '<p class="ex-intro">Browse all posts and projects by tag. Click a tag to filter.</p>' +
      '<div class="ex-tag-bar" id="ex-tag-bar-home"><span class="ex-loading">Loading tags\u2026</span></div>' +
      '<div class="ex-grid" id="ex-grid-home"><div class="ex-loading">Loading content\u2026</div></div>';

    target.appendChild(section);

    /* ── Comments section ────────────────────────────────────────── */
    var commentsSection = document.createElement('div');
    commentsSection.className = 'ex-home-section';
    commentsSection.innerHTML =
      '<h2>Comments</h2>' +
      '<article id="home-comments"></article>';
    target.appendChild(commentsSection);

    window.UtterancesThemeLight = 'github-light';
    window.UtterancesThemeDark = 'github-dark';
    var utterTheme = document.documentElement.getAttribute('data-user-color-scheme') === 'dark'
      ? 'github-dark' : 'github-light';
    var utterScript = document.createElement('script');
    utterScript.setAttribute('src', 'https://utteranc.es/client.js');
    utterScript.setAttribute('repo', 'yqhuang1234-ui/yqhuang1234-ui.github.io');
    utterScript.setAttribute('issue-term', 'pathname');
    utterScript.setAttribute('label', 'utterances');
    utterScript.setAttribute('theme', utterTheme);
    utterScript.setAttribute('crossorigin', 'anonymous');
    document.getElementById('home-comments').appendChild(utterScript);

    /* ── Cover image lookup (keyed by post URL) ─────────────────── */
    var POST_IMGS = {
      '/2026/04/03/neural-networks-deep-learning-notes/': '/img/posts/neural-networks.jpg',
      '/2026/04/02/Getting-Started-with-Survival-Analysis-in-R/': '/img/posts/survival-analysis.jpg'
    };

    /* ── Parse local-search.xml → post items ────────────────────── */
    function parsePosts(xmlText) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(xmlText, 'text/xml');
      var entries = Array.from(doc.querySelectorAll('entry'));
      return entries.map(function (e) {
        var tags = Array.from(e.querySelectorAll('tags tag')).map(function (t) { return t.textContent.trim(); });
        var cats = Array.from(e.querySelectorAll('categories category')).map(function (c) { return c.textContent.trim().toLowerCase().replace(/\s+/g, '-'); });
        tags = tags.concat(cats.filter(function (c) { return !tags.includes(c); }));
        var content = (e.querySelector('content') || {}).textContent || '';
        var desc = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160);
        var rawUrl = (e.querySelector('url') || {}).textContent || '#';
        var url = rawUrl.replace(/^https?:\/\/[^\/]+/, '') || rawUrl;
        return {
          type: 'blog',
          title: (e.querySelector('title') || {}).textContent || 'Untitled',
          url: url,
          img: POST_IMGS[url] || null,
          desc: desc,
          tags: tags
        };
      });
    }

    /* ── Build tag frequency map ─────────────────────────────────── */
    function buildTagMap(items) {
      var map = {};
      items.forEach(function (item) {
        (item.tags || []).forEach(function (t) { map[t] = (map[t] || 0) + 1; });
      });
      return map;
    }

    /* ── Helpers ─────────────────────────────────────────────────── */
    function escHtml(s) {
      return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    /* ── Apply filter (show/hide cards + update pills) ───────────── */
    function applyFilter(tag) {
      document.querySelectorAll('#ex-tag-bar-home .ex-pill').forEach(function (p) {
        p.classList.toggle('ex-active', p.dataset.tag === (tag || ''));
      });
      document.querySelectorAll('#ex-grid-home .ex-card').forEach(function (card) {
        var tags = JSON.parse(card.dataset.tags || '[]');
        var hide = tag && !tags.includes(tag);
        card.classList.toggle('ex-hidden', !!hide);
      });
    }

    /* ── Render tag bar ──────────────────────────────────────────── */
    function renderTagBar(tagMap) {
      var bar = document.getElementById('ex-tag-bar-home');
      var sorted = Object.entries(tagMap).sort(function (a, b) { return b[1] - a[1]; });
      var allCount = Object.values(tagMap).reduce(function (s, n) { return s + n; }, 0);
      bar.innerHTML = '';
      var allBtn = document.createElement('span');
      allBtn.className = 'ex-pill ex-active';
      allBtn.dataset.tag = '';
      allBtn.innerHTML = 'All <span class="ex-pill-count">' + allCount + '</span>';
      allBtn.addEventListener('click', function () { applyFilter(''); });
      bar.appendChild(allBtn);
      sorted.forEach(function (entry) {
        var tag = entry[0], count = entry[1];
        var pill = document.createElement('span');
        pill.className = 'ex-pill';
        pill.dataset.tag = tag;
        pill.innerHTML = escHtml(tag) + ' <span class="ex-pill-count">' + count + '</span>';
        pill.addEventListener('click', function () { applyFilter(tag); });
        bar.appendChild(pill);
      });
    }

    /* ── Render cards ────────────────────────────────────────────── */
    function renderCards(items) {
      var grid = document.getElementById('ex-grid-home');
      grid.innerHTML = '';
      items.forEach(function (item) {
        var card = document.createElement('a');
        card.href = item.url;
        card.className = 'ex-card';
        card.dataset.tags = JSON.stringify(item.tags || []);
        var imgHtml = item.img
          ? '<img class="ex-card-img" src="' + escHtml(item.img) + '" alt="' + escHtml(item.title) + '" loading="lazy" onerror="this.style.display=\'none\'">'
          : '';
        card.innerHTML =
          imgHtml +
          '<span class="ex-badge ex-badge-' + item.type + '">' + (item.type === 'blog' ? 'Blog' : 'Project') + '</span>' +
          '<p class="ex-card-title">' + escHtml(item.title) + '</p>' +
          '<p class="ex-card-desc">' + escHtml(item.desc) + '</p>' +
          '<div class="ex-card-tags">' + (item.tags || []).map(function (t) { return '<span class="ex-card-tag">' + escHtml(t) + '</span>'; }).join('') + '</div>';
        grid.appendChild(card);
      });
      if (grid.children.length === 0) {
        grid.innerHTML = '<div class="ex-loading">No results.</div>';
      }
    }

    /* ── Bootstrap ───────────────────────────────────────────────── */
    Promise.all([
      fetch('/local-search.xml').then(function (r) { return r.text(); }).catch(function () { return null; }),
      fetch('/projects-data.json').then(function (r) { return r.json(); }).catch(function () { return []; })
    ]).then(function (results) {
      var posts = results[0] ? parsePosts(results[0]) : [];
      var projectItems = (results[1] || []).map(function (p) {
        return {
          type: 'project',
          title: p.title,
          url: '/projects/',
          img: p.img || null,
          desc: p.desc,
          tags: (p.tags || []).concat(['projects'])
        };
      });
      var allItems = posts.concat(projectItems);
      renderTagBar(buildTagMap(allItems));
      renderCards(allItems);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
