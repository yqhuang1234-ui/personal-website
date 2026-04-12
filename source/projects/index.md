---
title: Projects
date: 2026-04-02 06:21:26
---

<style>
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 720px;
  margin: 2rem auto 0;
}

.project-card {
  background: #ffffff;
  border: 1px solid #E8E2D9;
  border-radius: 14px;
  padding: 1.5rem 1.75rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: #CC785C;
  box-shadow: 0 8px 24px rgba(204,120,92,0.12);
}

.project-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.6rem;
  flex-wrap: wrap;
}

.project-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.4;
}

.project-date {
  font-size: 0.8rem;
  color: #9B9288;
  white-space: nowrap;
  flex-shrink: 0;
}

.project-desc {
  font-size: 0.92rem;
  color: #5F5F5F;
  line-height: 1.65;
  margin: 0 0 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.1rem;
}

.tag {
  display: inline-block;
  padding: 0.2em 0.65em;
  background: #F5EDE6;
  color: #A85C42;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.project-links {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.38em 1em;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  cursor: pointer;
}

.btn-primary {
  background: #1A1A1A;
  color: #ffffff;
  border: 1px solid #1A1A1A;
}

.btn-primary:hover {
  background: #CC785C;
  border-color: #CC785C;
  color: #ffffff;
}

.btn-outline {
  background: transparent;
  color: #CC785C;
  border: 1px solid #CC785C;
}

.btn-outline:hover {
  background: #F5EDE6;
  color: #A85C42;
  border-color: #A85C42;
}

/* Dark mode — auto (OS preference, no manual override) */
@media (prefers-color-scheme: dark) {
  html:not([data-user-color-scheme]) .project-card {
    background: #242424;
    border-color: #363636;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  }

  html:not([data-user-color-scheme]) .project-card:hover {
    transform: translateY(-5px);
    border-color: #E8917A;
    box-shadow: 0 8px 24px rgba(232,145,122,0.15);
  }

  html:not([data-user-color-scheme]) .project-title {
    color: #E8E4DC;
  }

  html:not([data-user-color-scheme]) .project-date {
    color: #777777;
  }

  html:not([data-user-color-scheme]) .project-desc {
    color: #9B9288;
  }

  html:not([data-user-color-scheme]) .tag {
    background: #2E2420;
    color: #E8917A;
  }

  html:not([data-user-color-scheme]) .btn-primary {
    background: #E8917A;
    border-color: #E8917A;
    color: #1A1A1A;
  }

  html:not([data-user-color-scheme]) .btn-primary:hover {
    background: #F0A890;
    border-color: #F0A890;
    color: #1A1A1A;
  }

  html:not([data-user-color-scheme]) .btn-outline {
    color: #E8917A;
    border-color: #E8917A;
  }

  html:not([data-user-color-scheme]) .btn-outline:hover {
    background: #2E2420;
    color: #F0A890;
    border-color: #F0A890;
  }
}

/* Dark mode — manual toggle */
html[data-user-color-scheme="dark"] .project-card {
  background: #242424;
  border-color: #363636;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
}

html[data-user-color-scheme="dark"] .project-card:hover {
  transform: translateY(-5px);
  border-color: #E8917A;
  box-shadow: 0 8px 24px rgba(232,145,122,0.15);
}

html[data-user-color-scheme="dark"] .project-title {
  color: #E8E4DC;
}

html[data-user-color-scheme="dark"] .project-date {
  color: #777777;
}

html[data-user-color-scheme="dark"] .project-desc {
  color: #9B9288;
}

html[data-user-color-scheme="dark"] .tag {
  background: #2E2420;
  color: #E8917A;
}

html[data-user-color-scheme="dark"] .btn-primary {
  background: #E8917A;
  border-color: #E8917A;
  color: #1A1A1A;
}

html[data-user-color-scheme="dark"] .btn-primary:hover {
  background: #F0A890;
  border-color: #F0A890;
  color: #1A1A1A;
}

html[data-user-color-scheme="dark"] .btn-outline {
  color: #E8917A;
  border-color: #E8917A;
}

html[data-user-color-scheme="dark"] .btn-outline:hover {
  background: #2E2420;
  color: #F0A890;
  border-color: #F0A890;
}

/* Project image */
.project-img-wrap {
  margin: 0.75rem 0 1rem;
  border-radius: 6px;
  overflow: hidden;
}

.project-img-wrap img {
  width: 100%;
  max-height: 220px;
  object-fit: cover;
  display: block;
}

.project-img-placeholder {
  height: 160px;
  background: #F5F0E8;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.82rem;
  color: #9B9288;
  border: 1px dashed #D8D0C4;
}

@media (prefers-color-scheme: dark) {
  html:not([data-user-color-scheme]) .project-img-placeholder {
    background: #2A2A2A;
    color: #555555;
    border-color: #363636;
  }
}

html[data-user-color-scheme="dark"] .project-img-placeholder {
  background: #2A2A2A;
  color: #555555;
  border-color: #363636;
}

/* Mobile */
@media (max-width: 600px) {
  .project-card {
    padding: 1.2rem 1.25rem;
  }

  .project-header {
    flex-direction: column;
    gap: 0.2rem;
  }
}
</style>

<div class="projects-grid" id="projects-grid"></div>

<script>
(function () {
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function renderProjects(data) {
    var grid = document.getElementById('projects-grid');
    if (!grid) return;
    grid.innerHTML = data.map(function (p) {
      var imgHtml = p.img
        ? '<div class="project-img-wrap"><img src="' + esc(p.img) + '" alt="' + esc(p.title) + '" loading="lazy" onerror="this.parentElement.style.display=\'none\'"></div>'
        : '';
      var tagsHtml = (p.tags || []).map(function (t) {
        return '<span class="tag">' + esc(t) + '</span>';
      }).join('');
      var linksHtml = (p.links || []).map(function (l) {
        return '<a class="btn btn-' + esc(l.style) + '" href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
      }).join('');
      return '<div class="project-card">'
        + '<div class="project-header">'
        + '<h3 class="project-title">' + esc(p.title) + '</h3>'
        + '<span class="project-date">' + esc(p.date) + '</span>'
        + '</div>'
        + '<p class="project-desc">' + esc(p.desc) + '</p>'
        + imgHtml
        + '<div class="project-tags">' + tagsHtml + '</div>'
        + '<div class="project-links">' + linksHtml + '</div>'
        + '</div>';
    }).join('');
  }

  fetch('/projects-data.json')
    .then(function (r) { return r.json(); })
    .then(renderProjects)
    .catch(function () {
      var grid = document.getElementById('projects-grid');
      if (grid) grid.innerHTML = '<p>Could not load projects.</p>';
    });
})();
</script>
