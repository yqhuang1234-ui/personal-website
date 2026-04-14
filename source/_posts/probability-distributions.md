---
title: "Probability Distributions – Reference Notes"
date: 2026-04-13 12:00:00
tags:
  - probability
  - statistical-theory
  - learning-notes
  - blog
categories:
  - Statistical Theory
index_img: /img/posts/probability-distributions.jpg
excerpt: >
  Built for my Statistical Theory class — an interactive reference where you can shift parameters and watch distributions change in real time.
---

In my Statistical Theory class, we covered a lot of distributions — and I kept flipping back and forth between notes trying to remember what each one looked like, how parameters changed the shape, or what the CDF looked like for a specific case. So I built this as a living reference I could actually use during class. The interactive part matters: you can drag the parameters and watch the distribution shift in real time, which makes it a lot easier to build intuition than just memorizing formulas. Covers both discrete and continuous families.

<style>
.st-card {
  position: relative;
  background: #ffffff;
  border: 1px solid #E8E2D9;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin: 1.5rem auto 2rem;
}

.st-card:hover {
  transform: translateY(-5px);
  border-color: #CC785C;
  box-shadow: 0 8px 24px rgba(204,120,92,0.12);
}

.st-thumb {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  flex-shrink: 0;
  background: #faf9f6;
  border-bottom: 1px solid #E8E2D9;
}

.st-thumb iframe {
  width: 1440px;
  height: 860px;
  transform: scale(0.3111);
  transform-origin: top left;
  pointer-events: none;
  border: none;
  display: block;
}

.st-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: block;
}

.st-body {
  padding: 0.9rem 1.1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.st-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.35;
}

.st-desc {
  font-size: 0.82rem;
  color: #5F5F5F;
  line-height: 1.55;
  margin: 0;
}

.st-cta {
  font-size: 0.78rem;
  font-weight: 500;
  color: #CC785C;
  margin: 0.4rem 0 0;
  text-decoration: none;
  display: inline-block;
  position: relative;
  z-index: 3;
}

.st-cta:hover { text-decoration: underline; }

@media (prefers-color-scheme: dark) {
  html:not([data-user-color-scheme]) .st-card  { background: #242424; border-color: #363636; }
  html:not([data-user-color-scheme]) .st-card:hover { border-color: #E8917A; box-shadow: 0 8px 24px rgba(232,145,122,0.15); }
  html:not([data-user-color-scheme]) .st-thumb { background: #1A1A1A; border-bottom-color: #363636; }
  html:not([data-user-color-scheme]) .st-title { color: #E8E4DC; }
  html:not([data-user-color-scheme]) .st-desc  { color: #9B9288; }
  html:not([data-user-color-scheme]) .st-cta   { color: #E8917A; }
}

html[data-user-color-scheme="dark"] .st-card  { background: #242424; border-color: #363636; }
html[data-user-color-scheme="dark"] .st-card:hover { border-color: #E8917A; box-shadow: 0 8px 24px rgba(232,145,122,0.15); }
html[data-user-color-scheme="dark"] .st-thumb { background: #1A1A1A; border-bottom-color: #363636; }
html[data-user-color-scheme="dark"] .st-title { color: #E8E4DC; }
html[data-user-color-scheme="dark"] .st-desc  { color: #9B9288; }
html[data-user-color-scheme="dark"] .st-cta   { color: #E8917A; }
</style>

<div class="st-card">
  <div class="st-thumb">
    <a class="st-overlay" href="/statistical theory/probability_distributions.html" aria-label="Open Probability Distributions Reference"></a>
    <iframe src="/statistical theory/probability_distributions.html" title="Probability Distributions preview" loading="lazy" tabindex="-1" aria-hidden="true"></iframe>
  </div>
  <div class="st-body">
    <p class="st-title">Probability Distributions Reference</p>
    <p class="st-desc">PMF/PDF, CDF, moments, and interactive charts for discrete and continuous distribution families.</p>
    <a class="st-cta" href="/statistical theory/probability_distributions.html">Open full reference &rarr;</a>
  </div>
</div>
