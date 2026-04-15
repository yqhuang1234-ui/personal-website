---
title: "Interactive Playground - Neural Networks and Deep Learning"
date: 2026-04-03 12:00:00
tags:
  - deep-learning
  - learning-notes
  - blog
categories:
  - Coursera Deep Learning Specialization
index_img: /img/posts/neural-networks.jpg
excerpt: >
  Four interactive tools I built while learning deep learning fundamentals — activation functions, backprop walkthrough, dimension checker, and an annotated network diagram.
---

When I was going through the deep learning fundamentals, I kept wishing I had something I could actually poke at — not just read. So I built these. Each one started as a quick reference for myself and grew from there. They're interactive in the sense that you can change values and see things update, which honestly helped me build intuition faster than staring at equations.

Four tools here: activation functions with gradient visualizations, a step-by-step backprop walkthrough, a dimension checker for any network architecture, and an annotated network diagram you can click through. Click any card to open it.

<style>
/* ── Deep-learning notes gallery ─────────────────────────────────────── */
/* Namespace: dl-  (no collision with Fluid theme or projects page styles) */

.dl-intro {
  font-size: 0.95rem;
  color: #5F5F5F;
  margin: 0 0 1.5rem;
  line-height: 1.6;
}

.dl-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin: 0 0 2rem;
}

.dl-card {
  position: relative;
  background: #ffffff;
  border: 1px solid #E8E2D9;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
}

.dl-card:hover {
  transform: translateY(-5px);
  border-color: #CC785C;
  box-shadow: 0 8px 24px rgba(204,120,92,0.12);
}

/* iframe thumbnail wrapper */
.dl-thumb {
  position: relative;
  width: 320px;
  height: 191px;
  overflow: hidden;
  flex-shrink: 0;
  background: #1A1A1A;
  border-bottom: 1px solid #E8E2D9;
}

.dl-thumb iframe {
  width: 1440px;
  height: 860px;
  transform: scale(0.2222);
  transform-origin: top left;
  pointer-events: none;
  border: none;
  display: block;
}

/* Full-card overlay link — sits above the iframe */
.dl-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: block;
}

/* Card text body */
.dl-body {
  padding: 0.85rem 1rem 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  flex: 1;
}

.dl-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1A1A1A;
  line-height: 1.35;
  margin: 0;
}

.dl-desc {
  font-size: 0.82rem;
  color: #5F5F5F;
  line-height: 1.55;
  margin: 0;
  flex: 1;
}

.dl-cta {
  font-size: 0.78rem;
  font-weight: 500;
  color: #CC785C;
  margin: 0.35rem 0 0;
  position: relative;
  z-index: 3;
  text-decoration: none;
  display: inline-block;
}

.dl-cta:hover {
  text-decoration: underline;
}

/* Dark mode — auto */
@media (prefers-color-scheme: dark) {
  html:not([data-user-color-scheme]) .dl-intro { color: #9B9288; }
  html:not([data-user-color-scheme]) .dl-card  { background: #242424; border-color: #363636; box-shadow: 0 1px 4px rgba(0,0,0,0.25); }
  html:not([data-user-color-scheme]) .dl-card:hover { transform: translateY(-5px); border-color: #E8917A; box-shadow: 0 8px 24px rgba(232,145,122,0.15); }
  html:not([data-user-color-scheme]) .dl-thumb { border-bottom-color: #363636; }
  html:not([data-user-color-scheme]) .dl-title { color: #E8E4DC; }
  html:not([data-user-color-scheme]) .dl-desc  { color: #9B9288; }
  html:not([data-user-color-scheme]) .dl-cta   { color: #E8917A; }
}

/* Dark mode — manual toggle */
html[data-user-color-scheme="dark"] .dl-intro { color: #9B9288; }
html[data-user-color-scheme="dark"] .dl-card  { background: #242424; border-color: #363636; box-shadow: 0 1px 4px rgba(0,0,0,0.25); }
html[data-user-color-scheme="dark"] .dl-card:hover { transform: translateY(-5px); border-color: #E8917A; box-shadow: 0 8px 24px rgba(232,145,122,0.15); }
html[data-user-color-scheme="dark"] .dl-thumb { border-bottom-color: #363636; }
html[data-user-color-scheme="dark"] .dl-title { color: #E8E4DC; }
html[data-user-color-scheme="dark"] .dl-desc  { color: #9B9288; }
html[data-user-color-scheme="dark"] .dl-cta   { color: #E8917A; }

/* Mobile: single column */
@media (max-width: 680px) {
  .dl-grid { grid-template-columns: 1fr; }
  .dl-card { max-width: 400px; margin: 0 auto; width: 100%; }
}
</style>

<p class="dl-intro">Click any card to open the note directly.</p>

<div class="dl-grid">

  <!-- 2026-04-15 -->
  <div class="dl-card">
    <div class="dl-thumb">
      <a class="dl-overlay" href="/deep-learning/backprop_explorer.html" aria-label="Open Backpropagation Explorer"></a>
      <iframe src="/deep-learning/backprop_explorer.html" title="Backpropagation Explorer preview" loading="lazy" tabindex="-1" aria-hidden="true"></iframe>
    </div>
    <div class="dl-body">
      <p class="dl-title">Backpropagation Explorer</p>
      <p class="dl-desc">8-tab deep dive into backprop — every formula, every dimension, every index. Covers notation, cheat sheet, linear/activation backward, L-model backward, and parameter update.</p>
      <a class="dl-cta" href="/deep-learning/backprop_explorer.html">Open &rarr;</a>
    </div>
  </div>

  <!-- 2026-04-03 -->
  <div class="dl-card">
    <div class="dl-thumb">
      <a class="dl-overlay" href="/deep-learning/activation_functions.html" aria-label="Open Activation Functions &amp; Gradients"></a>
      <iframe src="/deep-learning/activation_functions.html" title="Activation Functions preview" loading="lazy" tabindex="-1" aria-hidden="true"></iframe>
    </div>
    <div class="dl-body">
      <p class="dl-title">Activation Functions &amp; Gradients</p>
      <p class="dl-desc">Sigmoid, Tanh, ReLU, and Leaky ReLU with interactive gradient visualizations and saturation analysis.</p>
      <a class="dl-cta" href="/deep-learning/activation_functions.html">Open &rarr;</a>
    </div>
  </div>

  <!-- 2026-04-03 -->
  <div class="dl-card">
    <div class="dl-thumb">
      <a class="dl-overlay" href="/deep-learning/backprop_explainer.html" aria-label="Open Backpropagation — Interactive Deep Dive"></a>
      <iframe src="/deep-learning/backprop_explainer.html" title="Backpropagation preview" loading="lazy" tabindex="-1" aria-hidden="true"></iframe>
    </div>
    <div class="dl-body">
      <p class="dl-title">Backpropagation — Interactive Deep Dive</p>
      <p class="dl-desc">Chain rule, forward and backward pass, and all six gradient equations with step-by-step walkthrough.</p>
      <a class="dl-cta" href="/deep-learning/backprop_explainer.html">Open &rarr;</a>
    </div>
  </div>

  <!-- 2026-04-03 -->
  <div class="dl-card">
    <div class="dl-thumb">
      <a class="dl-overlay" href="/deep-learning/dimension_checker.html" aria-label="Open Neural Network Dimension Checker"></a>
      <iframe src="/deep-learning/dimension_checker.html" title="Dimension Checker preview" loading="lazy" tabindex="-1" aria-hidden="true"></iframe>
    </div>
    <div class="dl-body">
      <p class="dl-title">Neural Network Dimension Checker</p>
      <p class="dl-desc">Interactive tool for computing exact tensor shapes of weights, biases, and activations for any architecture.</p>
      <a class="dl-cta" href="/deep-learning/dimension_checker.html">Open &rarr;</a>
    </div>
  </div>

  <!-- 2026-04-03 -->
  <div class="dl-card">
    <div class="dl-thumb">
      <a class="dl-overlay" href="/deep-learning/neural_network_annotated.html" aria-label="Open Neural Network — Annotated"></a>
      <iframe src="/deep-learning/neural_network_annotated.html" title="Annotated Network preview" loading="lazy" tabindex="-1" aria-hidden="true"></iframe>
    </div>
    <div class="dl-body">
      <p class="dl-title">Neural Network — Annotated</p>
      <p class="dl-desc">Clickable multi-layer diagram showing weighted-sum and activation computation at every node.</p>
      <a class="dl-cta" href="/deep-learning/neural_network_annotated.html">Open &rarr;</a>
    </div>
  </div>

</div>
