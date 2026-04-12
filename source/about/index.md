---
title: About
date: 2026-04-02 05:12:39
---

<style>
/* ── About page — namespace: ab- ────────────────────────────────── */

.ab-intro {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #2c3e50;
  margin-bottom: 2.5rem;
  max-width: 680px;
}

/* ── Timeline ───────────────────────────────────────────────────── */
.ab-section-title {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #8a9bac;
  margin: 0 0 1.25rem;
}

.ab-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 3rem;
  border-left: 2px solid #e0e4ea;
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
  background: #2a5298;
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px #2a5298;
}

.ab-step-year {
  font-size: 0.75rem;
  font-weight: 600;
  color: #2a5298;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.15rem;
}

.ab-step-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.2rem;
}

.ab-step-desc {
  font-size: 0.875rem;
  color: #5a6a7a;
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
  border: 1px solid #e0e4ea;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
}

.ab-art-placeholder {
  height: 180px;
  background: #f4f5f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  color: #b0bac4;
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
  color: #2c3e50;
  margin: 0 0 0.2rem;
}

.ab-art-caption {
  font-size: 0.8rem;
  color: #5a6a7a;
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
  color: #2c3e50;
}

.ab-outdoor-emoji { font-size: 1.3rem; line-height: 1; }
.ab-outdoor-text  { font-weight: 500; }

.ab-outdoor-sub {
  font-size: 0.875rem;
  color: #5a6a7a;
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
  color: #2c3e50;
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
  color: #2c3e50;
  margin: 0 0 0.15rem;
}

.ab-edu-meta {
  font-size: 0.85rem;
  color: #5a6a7a;
  margin: 0;
}

.ab-section { margin-bottom: 2.75rem; }

/* ── Dark mode ──────────────────────────────────────────────────── */
@media (prefers-color-scheme: dark) {
  .ab-intro             { color: #c4c6c9; }
  .ab-section-title     { color: #687582; }
  .ab-timeline          { border-left-color: #435266; }
  .ab-step::before      { background: #5b8ef0; box-shadow: 0 0 0 2px #5b8ef0; border-color: #252d38; }
  .ab-step-year         { color: #5b8ef0; }
  .ab-step-title        { color: #c4c6c9; }
  .ab-step-desc         { color: #a7a9ad; }
  .ab-art-card          { background: #252d38; border-color: #435266; }
  .ab-art-placeholder   { background: #2e3848; color: #687582; }
  .ab-art-label         { color: #c4c6c9; }
  .ab-art-caption       { color: #a7a9ad; }
  .ab-outdoor-item      { color: #c4c6c9; }
  .ab-outdoor-text      { color: #c4c6c9; }
  .ab-outdoor-sub       { color: #a7a9ad; }
  .ab-research-list li  { color: #c4c6c9; }
  .ab-edu-degree        { color: #c4c6c9; }
  .ab-edu-meta          { color: #a7a9ad; }
}

/* ── Mobile ─────────────────────────────────────────────────────── */
@media (max-width: 600px) {
  .ab-art-grid    { grid-template-columns: 1fr; }
  .ab-outdoor-row { gap: 1rem; }
}
</style>

<p class="ab-intro">
  I think in gradients and paint in watercolor. After six years as a data scientist, I came back to school to do it <em>right</em> — rigorous methods, real biomedical questions, and eventually a PhD. I care just as much about making something beautiful as making something correct.
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
    <p class="ab-step-title">Data Scientist (Hughes, Altria)</p>
    <p class="ab-step-desc">Shipped ML models in production, worked with large-scale datasets, and developed intuition for what breaks in the real world.</p>
  </div>

  <div class="ab-step">
    <p class="ab-step-year">2025 – Present</p>
    <p class="ab-step-title">M.S. Biostatistics (CU Anschutz medical campus)</p>
    <p class="ab-step-desc">Bringing data science into the biomedical world — rigorous methods, clinical data, and the math behind why things work.</p>
  </div>

  <div class="ab-step">
    <p class="ab-step-year">Next</p>
    <p class="ab-step-title">PhD (Planned)</p>
    <p class="ab-step-desc">Research at the intersection of machine learning and biomedical data — methods that are both principled and practically useful.</p>
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
      <p class="ab-art-caption">Loose, expressive, and a little unpredictable — just like data.</p>
    </div>
  </div>

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/artwork/crochet.jpg" alt="Crochet work">
    <div class="ab-art-body">
      <p class="ab-art-label">Crochet</p>
      <p class="ab-art-caption">Repetition with variation — a pattern that's never quite the same twice.</p>
    </div>
  </div>

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/artwork/sewing.jpg" alt="Sewing project">
    <div class="ab-art-body">
      <p class="ab-art-label">Sewing</p>
      <p class="ab-art-caption">Precision and patience — measuring twice, cutting once.</p>
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
      <p class="ab-art-caption">Where I do my best thinking — the further from a screen, the better.</p>
    </div>
  </div>

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/outdoors/biking.jpg" alt="Biking">
    <div class="ab-art-body">
      <p class="ab-art-label">🚴 Biking</p>
      <p class="ab-art-caption">Long rides, open roads, and a very optimistic sense of distance.</p>
    </div>
  </div>

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/outdoors/marathon.jpg" alt="Half Marathon">
    <div class="ab-art-body">
      <p class="ab-art-label">🏃 Half Marathon</p>
      <p class="ab-art-caption">Once a year — the only deadline I never miss.</p>
    </div>
  </div>

</div>
</div>

---

<div class="ab-section">
<p class="ab-section-title">Research Interests</p>
<ul class="ab-research-list">
  <li><strong>Machine learning for biomedical data</strong> — applying ML and deep learning to clinical, genomic, and EHR datasets</li>
  <li><strong>Predictive modeling</strong> — building models that generalize under distribution shift and real-world messiness</li>
  <li><strong>Neural networks in healthcare</strong> — interpretable models, survival prediction, multi-modal data fusion</li>
  <li><strong>Bridging industry DS and academic methods</strong> — making production-grade approaches statistically rigorous</li>
</ul>
</div>

---

I'm always happy to connect - reach me at **[yqhuang1234@gmail.com](mailto:yqhuang1234@gmail.com)** or on [GitHub](https://github.com/yqhuang1234-ui).
