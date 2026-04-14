---
title: "Coursera Course 1 - Neural Networks and Deep Learning"
date: 2026-04-14 12:00:00
tags:
  - deep-learning
  - learning-notes
  - blog
  - coursera deep learning specialization
categories:
  - Learning Notes
index_img: /img/posts/coursera-deep-learning-1.svg
excerpt: >
  Notes from Course 1 of Andrew Ng's Deep Learning Specialization on Coursera — covering neural network programming basics, shallow networks, and deep network architecture across weeks 2–4.
---

I've been working through Andrew Ng's [Deep Learning Specialization on Coursera](https://www.coursera.org/learn/neural-networks-deep-learning?specialization=deep-learning), and this first course does a surprisingly good job of building intuition before throwing equations at you. These are my notes for weeks 2 through 4 — the parts that actually get into building and training networks. I wrote them up in Notion as I went, so they're more of a living reference than a polished summary. Hopefully useful if you're going through the same material.

---

## Week 2 — Basics of Neural Network Programming

Week 2 is where things start clicking. It introduces logistic regression as a single neuron, then builds up the full computation graph with a forward pass and backpropagation. The key insight here is learning to think in vectorized operations instead of explicit loops — something that pays off immediately once you start writing real code.

📖 **[Full notes on Notion →](https://yanqihuang.notion.site/Week-2-Basics-of-Neural-Network-Programming-Complete-Guide-32853115b8b8812cb7e3fe9e2f0136ed)**

---

## Week 3 — Shallow Neural Networks

Week 3 extends the single-neuron picture into a two-layer network. You work through how activation functions like tanh and ReLU change the gradient flow, why a hidden layer actually matters, and how to derive and implement the backprop equations by hand. It's one of those weeks where doing the math yourself — rather than just reading it — makes a real difference.

📖 **[Full notes on Notion →](https://www.notion.so/yanqihuang/Week-3-Shallow-Neural-Networks-Complete-Guide-32d53115b8b880dea091df09e8db5ebb)**

---

## Week 4 — Deep Neural Networks

Week 4 generalizes everything to an L-layer network. The notation gets a bit heavy, but the underlying ideas follow the same pattern — forward pass, compute cost, backward pass, update weights. There's also a good section on why depth matters in practice and how to think about what each layer is learning.

📖 **[Full notes on Notion →](https://www.notion.so/yanqihuang/Week-4-deep-neural-networks-33d53115b8b880ad9434ffee80234d4c)**

---

If you want a more visual take on the fundamentals, I also put together an [Interactive Playground — Neural Networks and Deep Learning](https://yqhuang1234-ui.github.io/2026/04/03/neural-networks-deep-learning-notes/) with annotated diagrams and activation function visualizations.

These are personal study notes — written to help me remember, not as a textbook replacement. The Notion pages get updated as I revisit the material, so they should stay reasonably current. If something looks off or unclear, it probably means I'm still figuring it out too.
