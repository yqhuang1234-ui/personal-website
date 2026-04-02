---
title: Getting Started with Survival Analysis in R
date: 2026-04-02 05:49:32
tags:
  - learning-notes
  - R
  - survival-analysis
categories:
  - Learning Notes
index_img: /img/posts/survival-analysis.jpg
math: false
excerpt: >
  Survival analysis is one of the first methods a biostatistics student
  encounters that feels genuinely different from the classical linear model
  toolkit. Here's what you need to know to get started in R.
---

Survival analysis is one of the first methods a biostatistics student encounters that feels genuinely different from the classical linear model toolkit. The data structure is unusual, the estimand requires careful thought, and the word "survival" can be misleading — we use these methods to study time to *any* well-defined event, not just death. Understanding the basics well pays dividends for years of applied work to come.

## Why Survival Analysis?

In epidemiology and clinical research, we are often interested in *when* something happens, not just *whether* it does. A randomized trial comparing two cancer treatments wants to know which arm keeps patients alive longer. A registry study of hospital-acquired infections wants to know which patients get infected soonest. A cohort study of employment follows workers until they develop an occupational disease.

The naive approach — treating event occurrence as a binary outcome and running logistic regression — throws away the timing information entirely. Worse, it cannot handle the central complication of these datasets: **not everyone experiences the event during the study window**. Standard regression has no principled way to incorporate a patient who was event-free at last contact but then dropped out. Survival analysis does.

## The Key Concept: Censoring

**Censoring** is what makes survival data special. A subject is *censored* if we lose information about their event time before the study ends. The most common form is **right censoring**: we know the event had not occurred by a certain time $C$, but we do not know what happens after that. Three typical causes:

1. **Administrative censoring** — the study ends before the event occurs. A trial that closes on December 31st censors everyone still event-free.
2. **Loss to follow-up** — the subject withdraws, moves, or simply stops responding.
3. **Competing events** — a subject dies of an unrelated cause before the event of interest occurs.

The critical assumption underlying most survival methods is **non-informative censoring** (also called independent censoring): the fact that a subject is censored tells us nothing about their underlying risk. When this fails — say, sicker patients drop out because they are too ill to attend visits — estimates become biased in ways that are difficult to detect from the data alone. It is worth thinking hard about this assumption before reaching for any estimator.

## A First Look in R: Kaplan–Meier Curves

The **Kaplan–Meier estimator** is the natural starting point. It is a nonparametric maximum likelihood estimate of the survival function $S(t) = P(T > t)$ and requires no model assumptions beyond independent censoring.

```r
# Install once if needed:
# install.packages(c("survival", "survminer"))

library(survival)
library(survminer)

# lung dataset: time = days, status = 1 (censored) / 2 (dead)
data(lung, package = "survival")

# Fit the KM estimator
km_fit <- survfit(Surv(time, status) ~ sex, data = lung)

# Plot with survminer (cleaner than base R)
ggsurvplot(
  km_fit,
  data          = lung,
  pval          = TRUE,
  conf.int      = TRUE,
  risk.table    = TRUE,
  legend.labs   = c("Male", "Female"),
  xlab          = "Days",
  ylab          = "Survival probability",
  title         = "Overall survival by sex — NCCTG Lung Cancer Data",
  palette       = c("#2c3e50", "#e74c3c"),
  ggtheme       = theme_minimal()
)
```

A few things to notice: the `Surv()` object bundles time and event status together — this is what most survival functions in R expect. The `status` coding matters; by default `survival` treats the *largest* value as the event. Always check your coding before fitting anything.

## Cox PH and When to Look Elsewhere

Once you want to adjust for covariates, the **Cox proportional hazards model** is the workhorse of survival analysis:

$$h(t \mid \mathbf{x}) = h_0(t) \exp(\boldsymbol{\beta}^\top \mathbf{x})$$

Its appeal is semiparametric elegance: you estimate covariate effects $\boldsymbol{\beta}$ without ever specifying the baseline hazard $h_0(t)$. For most epidemiological questions — estimating an adjusted hazard ratio for a treatment or exposure — this is exactly what you want.

But Cox PH rests on the **proportional hazards assumption**: the hazard ratio between any two covariate patterns is constant over time. This is worth testing (Schoenfeld residuals, `cox.zph()` in R) rather than assuming. When it fails, consider:

- **Stratified Cox model** — allows a separate baseline hazard per stratum, at the cost of not estimating a stratum effect.
- **Time-varying coefficients** — interact covariates with time; useful when effects decay or grow.
- **Accelerated failure time (AFT) models** — model $\log T$ directly; more interpretable when the PH assumption is implausible and the effect is really one of time acceleration.
- **Fine–Gray model for competing risks** — when you have competing events and the scientific question is about the cumulative incidence in the presence of those events, not a cause-specific hazard.

The choice should be driven by the scientific question and the data structure, not habit.

## Further Reading

1. **Kleinbaum & Klein, *Survival Analysis: A Self-Learning Text* (3rd ed.)** — the most accessible book-length treatment for applied biostatisticians; minimal measure theory, lots of worked examples.

2. **Therneau & Grambsch, *Modeling Survival Data: Extending the Cox Model*** — the authoritative reference for the `survival` package in R, written by the package authors. Dense but invaluable when you hit edge cases.

3. **Hernan (2010), "The hazards of hazard ratios"**, *Epidemiology* 21(1):13–15 — a short, important paper on why the hazard ratio is a more difficult estimand than it looks, and how selection bias can creep in even under the null. Essential reading before you report your first Cox model.

---

*These are learning notes from my own study — corrections and questions welcome at [yqhuang1234@gmail.com](mailto:yqhuang1234@gmail.com).*
