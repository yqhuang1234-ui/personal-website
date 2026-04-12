---
title: "Neural Networks and Deep Learning – Course Notes"
date: 2026-04-03 12:00:00
tags:
  - machine-learning
  - deep-learning
  - neural-networks
  - learning-notes
categories:
  - Learning Notes
index_img: /img/posts/neural-networks.jpg
excerpt: >
  Interactive notes on neural network fundamentals: activation functions, backpropagation, tensor dimensions, and annotated network diagrams.
---

Personal notes on neural network fundamentals, written as interactive HTML references.

Topics covered:

- **Activation Functions & Gradients** — Sigmoid, Tanh, ReLU, Leaky ReLU with gradient visualizations
- **Backpropagation** — Chain rule, forward/backward pass, and all six gradient equations
- **Dimension Checker** — Interactive tool for tensor shapes across any network architecture
- **Annotated Network Diagram** — Clickable multi-layer network with step-by-step computations

<style>
/* ── Deep-learning notes gallery ─────────────────────────────────────── */
/* Namespace: dl-  (no collision with Fluid theme or projects page styles) */

.dl-intro {
  font-size: 0.95rem;
  color: #5a6a7a;
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
  border: 1px solid #e0e4ea;
  border-radius: 6px;
  overflow: hidden;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
}

.dl-card:hover {
  border-color: #2a5298;
  box-shadow: 0 4px 16px rgba(42,82,152,0.14);
}

/* iframe thumbnail wrapper */
.dl-thumb {
  position: relative;
  width: 320px;
  height: 191px;
  overflow: hidden;
  flex-shrink: 0;
  background: #1a1a1a;
  border-bottom: 1px solid #e0e4ea;
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
  color: #2c3e50;
  line-height: 1.35;
  margin: 0;
}

.dl-desc {
  font-size: 0.82rem;
  color: #5a6a7a;
  line-height: 1.55;
  margin: 0;
  flex: 1;
}

.dl-cta {
  font-size: 0.78rem;
  font-weight: 500;
  color: #2a5298;
  margin: 0.35rem 0 0;
  position: relative;
  z-index: 3;
  text-decoration: none;
  display: inline-block;
}

.dl-cta:hover {
  text-decoration: underline;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .dl-intro { color: #a7a9ad; }

  .dl-card {
    background: #252d38;
    border-color: #435266;
    box-shadow: 0 1px 4px rgba(0,0,0,0.25);
  }

  .dl-card:hover {
    border-color: #5b8ef0;
    box-shadow: 0 4px 16px rgba(91,142,240,0.18);
  }

  .dl-thumb { border-bottom-color: #435266; }
  .dl-title { color: #c4c6c9; }
  .dl-desc  { color: #a7a9ad; }
  .dl-cta   { color: #5b8ef0; }
}

/* Mobile: single column */
@media (max-width: 680px) {
  .dl-grid { grid-template-columns: 1fr; }
  .dl-card { max-width: 400px; margin: 0 auto; width: 100%; }
}
</style>

<p class="dl-intro">Click any card to open the note directly.</p>

<div class="dl-grid">

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
