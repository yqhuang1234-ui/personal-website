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
  border: 1px solid #e0e4ea;
  border-radius: 8px;
  padding: 1.5rem 1.75rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease;
}

.project-card:hover {
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.10);
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
  color: #2c3e50;
  margin: 0;
  line-height: 1.4;
}

.project-date {
  font-size: 0.8rem;
  color: #8a9bac;
  white-space: nowrap;
  flex-shrink: 0;
}

.project-desc {
  font-size: 0.92rem;
  color: #5a6a7a;
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
  background: #eef2fa;
  color: #2a5298;
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
  background: #2c3e50;
  color: #ffffff;
  border: 1px solid #2c3e50;
}

.btn-primary:hover {
  background: #1e2d3d;
  border-color: #1e2d3d;
  color: #ffffff;
}

.btn-outline {
  background: transparent;
  color: #2a5298;
  border: 1px solid #2a5298;
}

.btn-outline:hover {
  background: #eef2fa;
  color: #1e3f80;
  border-color: #1e3f80;
}

/* Dark mode — auto (OS preference, no manual override) */
@media (prefers-color-scheme: dark) {
  html:not([data-user-color-scheme]) .project-card {
    background: #252d38;
    border-color: #435266;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  }

  html:not([data-user-color-scheme]) .project-card:hover {
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.35);
  }

  html:not([data-user-color-scheme]) .project-title {
    color: #c4c6c9;
  }

  html:not([data-user-color-scheme]) .project-date {
    color: #6b7f92;
  }

  html:not([data-user-color-scheme]) .project-desc {
    color: #a7a9ad;
  }

  html:not([data-user-color-scheme]) .tag {
    background: #364151;
    color: #5b8ef0;
  }

  html:not([data-user-color-scheme]) .btn-primary {
    background: #3d5166;
    border-color: #3d5166;
    color: #e8ecf0;
  }

  html:not([data-user-color-scheme]) .btn-primary:hover {
    background: #4a6278;
    border-color: #4a6278;
    color: #ffffff;
  }

  html:not([data-user-color-scheme]) .btn-outline {
    color: #5b8ef0;
    border-color: #5b8ef0;
  }

  html:not([data-user-color-scheme]) .btn-outline:hover {
    background: #364151;
    color: #7aaef5;
    border-color: #7aaef5;
  }
}

/* Dark mode — manual toggle */
html[data-user-color-scheme="dark"] .project-card {
  background: #252d38;
  border-color: #435266;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
}

html[data-user-color-scheme="dark"] .project-card:hover {
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.35);
}

html[data-user-color-scheme="dark"] .project-title {
  color: #c4c6c9;
}

html[data-user-color-scheme="dark"] .project-date {
  color: #6b7f92;
}

html[data-user-color-scheme="dark"] .project-desc {
  color: #a7a9ad;
}

html[data-user-color-scheme="dark"] .tag {
  background: #364151;
  color: #5b8ef0;
}

html[data-user-color-scheme="dark"] .btn-primary {
  background: #3d5166;
  border-color: #3d5166;
  color: #e8ecf0;
}

html[data-user-color-scheme="dark"] .btn-primary:hover {
  background: #4a6278;
  border-color: #4a6278;
  color: #ffffff;
}

html[data-user-color-scheme="dark"] .btn-outline {
  color: #5b8ef0;
  border-color: #5b8ef0;
}

html[data-user-color-scheme="dark"] .btn-outline:hover {
  background: #364151;
  color: #7aaef5;
  border-color: #7aaef5;
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
  background: #f4f5f7;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.82rem;
  color: #b0bac4;
  border: 1px dashed #d0d6de;
}

@media (prefers-color-scheme: dark) {
  html:not([data-user-color-scheme]) .project-img-placeholder {
    background: #2e3848;
    color: #687582;
    border-color: #435266;
  }
}

html[data-user-color-scheme="dark"] .project-img-placeholder {
  background: #2e3848;
  color: #687582;
  border-color: #435266;
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

<div class="projects-grid">

  <div class="project-card">
    <div class="project-header">
      <h3 class="project-title">Surgery Timing and 30-Day Mortality Outcomes</h3>
      <span class="project-date">Nov 2025</span>
    </div>
    <p class="project-desc">
      Investigates whether the hour of day a surgery is performed correlates with 30-day patient mortality.
      Applies logistic regression with restricted cubic splines to 32,001 surgical cases, capturing non-linear
      timing effects while adjusting for patient comorbidities and procedure classification. Produces a
      reproducible PDF report with baseline characteristic tables, odds ratio estimates, and risk visualizations.
    </p>
    <div class="project-img-wrap">
      <img src="/img/projects/surgery-timing.jpg" alt="Surgery Timing project">
    </div>
    <div class="project-tags">
      <span class="tag">statistics</span>
      <span class="tag">R</span>
      <span class="tag">logistic-regression</span>
    </div>
    <div class="project-links">
      <a class="btn btn-primary" href="https://github.com/yqhuang1234-ui/surgery_timing_outcome" target="_blank" rel="noopener">View Code</a>
      <a class="btn btn-outline" href="https://github.com/yqhuang1234-ui/surgery_timing_outcome/blob/c77953e5f38a14e208dad83299d162daeca90d78/2025-12-02_report-only_surgery-timing-outcome_yanqi-huang.pdf" target="_blank" rel="noopener">View Report</a>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <h3 class="project-title">OLS Under Heteroscedasticity: A Monte Carlo Simulation</h3>
      <span class="project-date">Oct 2025</span>
    </div>
    <p class="project-desc">
      A Monte Carlo simulation study (1,000 repetitions) examining how heteroscedasticity violations affect
      OLS regression inference. Evaluates estimator bias, standard error accuracy, and confidence interval
      coverage across four error-variance intensity levels, showing when and why classical OLS inference
      breaks down and robust standard errors are needed.
    </p>
    <div class="project-img-wrap">
      <img src="/img/projects/monte-carlo-sim.jpg" alt="Monte Carlo Simulation project">
    </div>
    <div class="project-tags">
      <span class="tag">statistics</span>
      <span class="tag">R</span>
      <span class="tag">simulation</span>
    </div>
    <div class="project-links">
      <a class="btn btn-primary" href="https://github.com/yqhuang1234-ui/simulation-study" target="_blank" rel="noopener">View Code</a>
      <a class="btn btn-outline" href="https://github.com/yqhuang1234-ui/simulation-study/blob/main/10-24-25_yanqi-huang_simulation-report_only.pdf" target="_blank" rel="noopener">View Report</a>
    </div>
  </div>

</div>
