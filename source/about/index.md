---
title: About
date: 2026-04-02 05:12:39
---

<style>
/* ── About page — namespace: ab- ────────────────────────────────── */

/* ── Profile header ─────────────────────────────────────────────── */
.ab-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2.5rem;
  gap: 0.75rem;
}

.ab-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #E8E2D9;
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
}

.ab-profile-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1A1A1A;
  margin: 0;
  letter-spacing: -0.01em;
}

.ab-contact-row {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

.ab-contact-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #F5F0E8;
  color: #4A4A4A;
  transition: background 0.2s, color 0.2s, transform 0.15s;
  text-decoration: none;
}

.ab-contact-link:hover {
  background: #CC785C;
  color: #fff;
  transform: translateY(-2px);
}

.ab-contact-link svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
  flex-shrink: 0;
}

.ab-intro {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #1A1A1A;
  margin-bottom: 2.5rem;
  max-width: 680px;
}

/* ── Timeline ───────────────────────────────────────────────────── */
.ab-section-title {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #9B9288;
  margin: 0 0 1.25rem;
}

.ab-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 3rem;
  border-left: 2px solid #E8E2D9;
  padding-left: 1.5rem;
}

.ab-step {
  position: relative;
  padding-bottom: 1.75rem;
}

.ab-step:last-child { padding-bottom: 0; }

.ab-step::before {
  content: "";
  position: absolute;
  left: -1.875rem;
  top: 0.35rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #CC785C;
  border: 2px solid #F7F2EA;
  box-shadow: 0 0 0 2px #CC785C;
}

.ab-step-year {
  font-size: 0.75rem;
  font-weight: 600;
  color: #CC785C;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.15rem;
}

.ab-step-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #1A1A1A;
  margin-bottom: 0.2rem;
}

.ab-step-desc {
  font-size: 0.875rem;
  color: #5F5F5F;
  line-height: 1.55;
  margin: 0;
}

/* ── Artwork grid ───────────────────────────────────────────────── */
.ab-art-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;
  margin-bottom: 3rem;
}

.ab-art-card {
  border: 1px solid #E8E2D9;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
}

.ab-art-placeholder {
  height: 180px;
  background: #F5F0E8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  color: #9B9288;
  font-size: 0.82rem;
}

.ab-art-placeholder svg {
  width: 28px;
  height: 28px;
  opacity: 0.4;
}

.ab-art-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.ab-art-body {
  padding: 0.7rem 0.85rem 0.8rem;
}

.ab-art-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #1A1A1A;
  margin: 0 0 0.2rem;
}

.ab-art-caption {
  font-size: 0.8rem;
  color: #5F5F5F;
  margin: 0;
  line-height: 1.5;
}

/* ── Outdoors ───────────────────────────────────────────────────── */
.ab-outdoor-row {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.ab-outdoor-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.92rem;
  color: #1A1A1A;
}

.ab-outdoor-emoji { font-size: 1.3rem; line-height: 1; }
.ab-outdoor-text  { font-weight: 500; }

.ab-outdoor-sub {
  font-size: 0.875rem;
  color: #5F5F5F;
  margin: 0;
  line-height: 1.65;
}

/* ── Research ───────────────────────────────────────────────────── */
.ab-research-list {
  padding-left: 1.25rem;
  margin: 0 0 3rem;
}

.ab-research-list li {
  font-size: 0.92rem;
  color: #1A1A1A;
  line-height: 1.7;
  margin-bottom: 0.25rem;
}

/* ── Education ──────────────────────────────────────────────────── */
.ab-edu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
}

.ab-edu-degree {
  font-size: 0.95rem;
  font-weight: 600;
  color: #1A1A1A;
  margin: 0 0 0.15rem;
}

.ab-edu-meta {
  font-size: 0.85rem;
  color: #5F5F5F;
  margin: 0;
}

.ab-section { margin-bottom: 2.75rem; }

/* ── Mobile ─────────────────────────────────────────────────────── */
@media (max-width: 600px) {
  .ab-art-grid    { grid-template-columns: 1fr; }
  .ab-outdoor-row { gap: 1rem; }
}
</style>

<div class="ab-profile">
  <img class="ab-avatar" src="/img/avatar.png" alt="Yanqi Huang">
  <p class="ab-profile-name">Yanqi Huang</p>
  <div class="ab-contact-row">
    <!-- GitHub -->
    <a class="ab-contact-link" href="https://github.com/yqhuang1234-ui" target="_blank" rel="noopener" title="GitHub">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    </a>
    <!-- LinkedIn -->
    <a class="ab-contact-link" href="https://www.linkedin.com/in/yanqi-huang" target="_blank" rel="noopener" title="LinkedIn">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </a>
    <!-- Gmail -->
    <a class="ab-contact-link" href="mailto:yqhuang1234@gmail.com" title="Email">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 11.73 21.615 3.82h.749c.904 0 1.636.737 1.636 1.637z"/></svg>
    </a>
  </div>
</div>

<p class="ab-intro">
  I live in the overlap between data and creativity, logic and art, work and play. Always learning, always making, always moving.
</p>

---

<div class="ab-section">
<p class="ab-section-title">My Path</p>
<div class="ab-timeline">

  <div class="ab-step">
    <p class="ab-step-year">2017 – 2018</p>
    <p class="ab-step-title">Master of Business Analytics (University of Maryland)</p>
    <p class="ab-step-desc">Built the technical foundation — statistics, machine learning, data engineering. Learned to turn messy data into decisions.</p>
  </div>

  <div class="ab-step">
    <p class="ab-step-year">2018 – 2025 </p>
    <p class="ab-step-title">Sr. Data Scientist (Hughes, Altria)</p>
    <p class="ab-step-desc">Shipped ML models in production, worked with large-scale datasets, and developed intuition for what breaks in the real world.</p>
  </div>

  <div class="ab-step">
    <p class="ab-step-year">2025 – Present</p>
    <p class="ab-step-title">M.S. Biostatistics (CU Anschutz medical campus)</p>
    <p class="ab-step-desc">Bringing data science into the biomedical world — rigorous methods, clinical data, and the math behind why things work.</p>
  </div>

</div>
</div>

---

<div class="ab-section">
<p class="ab-section-title">Creative Life</p>
<div class="ab-art-grid">

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/artwork/watercolor.jpg" alt="Watercolor painting">
    <div class="ab-art-body">
      <p class="ab-art-label">Watercolor</p>
      <p class="ab-art-caption">I sketch outside and let it pull me into the present — suddenly I'm noticing every little thing around me.</p>
    </div>
  </div>

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/artwork/crochet.jpg" alt="Crochet work">
    <div class="ab-art-body">
      <p class="ab-art-label">Crochet</p>
      <p class="ab-art-caption">I love seeing something go from yarn to an actual thing I can put in my home or give away.</p>
    </div>
  </div>

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/artwork/sewing.jpg" alt="Sewing project">
    <div class="ab-art-body">
      <p class="ab-art-label">Sewing</p>
      <p class="ab-art-caption">Same feeling as crochet — making something real with my own hands never gets old.</p>
    </div>
  </div>

</div>
</div>

---

<div class="ab-section">
<p class="ab-section-title">Outside the Lab</p>
<div class="ab-art-grid">

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/outdoors/hiking.jpg" alt="Hiking">
    <div class="ab-art-body">
      <p class="ab-art-label">🥾 Hiking</p>
      <p class="ab-art-caption">For the views you can only earn on foot.</p>
    </div>
  </div>

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/outdoors/biking.jpg" alt="Biking">
    <div class="ab-art-body">
      <p class="ab-art-label">🚴 Biking</p>
      <p class="ab-art-caption">Takes me further, shows me more.</p>
    </div>
  </div>

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/outdoors/marathon.jpg" alt="Half Marathon">
    <div class="ab-art-body">
      <p class="ab-art-label">🏃 Half Marathon</p>
      <p class="ab-art-caption">Not the fastest, but three years in and I plan to keep running one every year for the rest of my life.</p>
    </div>
  </div>

</div>
</div>

---

<div class="ab-section">
<p class="ab-section-title">Research Interests</p>
<ul class="ab-research-list">
  <li>Deep learning for biomedical data, with a focus on medical imaging</li>
  <li>passionate about making data approachable and creatively explaining complex concepts</li>
</ul> 
</div>

---

I'm always happy to connect — find me via the icons above.
