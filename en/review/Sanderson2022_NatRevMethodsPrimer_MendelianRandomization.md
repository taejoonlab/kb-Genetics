---
tags: [genetics, class, review, en]
date: 2026-07-13
type: class
---

# Mendelian randomization

## Citation (NLM)
Sanderson E, Glymour MM, Holmes MV, Kang H, Morrison J, Munafò MR, Palmer T, Schooling CM, Wallace C, Zhao Q, Davey Smith G. Mendelian randomization. Nat Rev Methods Primers. 2022;2:6. doi:10.1038/s43586-021-00092-5

**DOI:** [https://doi.org/10.1038/s43586-021-00092-5](https://doi.org/10.1038/s43586-021-00092-5)

---

## Summary

This comprehensive Nature Reviews Methods Primers article provides an in-depth treatment of Mendelian randomization (MR), covering its theoretical principles, data requirements, estimation methods, assumption testing, diverse applications, limitations, and future outlook. It serves as the definitive methodological reference for MR as of 2022.

**Foundational Principles:** MR uses genetic variation to address causal questions about how modifiable exposures influence outcomes. The statistical basis of MR is instrumental variable (IV) analysis, in which a variable (the genetic variant or instrument) is associated with the exposure but affects the outcome only through the exposure. MR draws on Mendel's laws of segregation and independent assortment: offspring randomly inherit one allele from each parent, providing a naturally occurring form of quasi-randomization.

**MR vs. RCT:** The parallel between MR and randomized controlled trials is fundamental:
- In an RCT, random treatment assignment ensures groups differ only in treatment received
- In MR, random allele segregation ensures genotypic groups differ in the associated exposure on average
- Key distinction: RCTs estimate treatment effects over a defined time period; MR estimates lifetime effects of genetic variants, which can produce substantially larger or differently directed estimates

**Three IV Conditions:**
1. **Relevance (IV Condition 1):** The IV is associated with the exposure — testable using the first-stage F statistic (rule of thumb: F > 10)
2. **Exchangeability (IV Condition 2):** No causes of the IV influence the outcome through mechanisms other than the exposure — cannot be proven; assessed via sensitivity analyses and covariate balance checks
3. **Exclusion restriction (IV Condition 3):** The IV does not affect the outcome except through the exposure — cannot be proven; assessed via pleiotropy tests

**Data Types for MR:**
- **Individual-level data:** Traditional single-sample MR using each person's genotype and phenotype measurements, analyzed with two-stage least-squares (2SLS) estimation
- **Summary-level data (two-sample MR):** Uses SNP effect sizes (β) and standard errors from GWAS for the exposure and outcome separately; allows leveraging large GWAS consortia with millions of participants, dramatically boosting power

**Estimation Methods:**

*Individual-level data:*
- **Two-stage least squares (2SLS):** First stage predicts exposure from genetic variants; second stage regresses outcome on predicted exposure
- **Wald ratio:** Divides the genetic variant-outcome association by the genetic variant-exposure association for a single instrument

*Summary-level data:*
- **Inverse-variance weighted (IVW) meta-analysis:** Meta-analyzes variant-specific Wald ratios weighted by their precision; assumes no pleiotropy
- **MR-Egger regression:** Tests for and adjusts for pleiotropy via a non-zero intercept; less precise than IVW but robust under the "InSIDE" assumption
- **Weighted median estimator:** Reliable when >50% of instrument weight comes from valid variants
- **Weighted mode estimator:** Consistent under the assumption that the largest cluster of variants shares the same true causal effect

**Types of Pleiotropy:**
- **Horizontal pleiotropy (causes bias):** A genetic variant influences the outcome through a pathway independent of the exposure — violates IV Condition 3
- **Vertical pleiotropy (no bias):** The variant's effect on the outcome is mediated through the exposure — does not violate MR assumptions
- **Confounding by LD:** Neighboring genetic variants in LD introduce additional associations, analogous to pleiotropy

**Gene-Environment Equivalence:** MR assumes that changes in the exposure caused by genetic variation have the same effect on the outcome as changes caused by environmental or pharmaceutical manipulation. This is plausible for many exposures (e.g., cholesterol levels) but questionable for socioeconomic or behavioral exposures where genetic proxies may not mimic environmental changes.

**Worked Example — CRP and Blood Pressure:** Directed acyclic graphs illustrate the parallel between an RCT (randomization to CRP-lowering medication vs. placebo to estimate effect on SBP) and an MR study (using a genetic variant associated with lower CRP levels). The Wald ratio estimator divides the genetic variant-SBP association by the genetic variant-CRP association to obtain the causal effect of CRP on SBP.

---

## Significance in Introduction Context

- **Definitive MR methodological reference:** This Primer provides the most comprehensive and mathematically rigorous treatment of MR methodology available, from IV theory through practical estimation and sensitivity analysis.
- **Systematic comparison of estimators:** By explaining IVW, MR-Egger, weighted median, and weighted mode estimators — each valid under different assumptions — the paper provides a framework for assessing the robustness of any MR finding.
- **Coverage of advanced methods:** Non-linear MR, multivariable MR (adjusting for multiple correlated exposures), and family-based within-sibling MR approaches are described, providing a roadmap for methodological development.
- **Why read this in class:** This primer bridges MR theory (IV conditions, 2SLS equations) with practical methodology (summary-data MR, pleiotropy sensitivity analyses), equipping readers to design, analyze, and critically appraise MR studies at a sophisticated level.

---

## Key References

Key references cited in the paper (with DOI URLs):

1. **Davey Smith & Ebrahim (2003)** — [https://doi.org/10.1093/ije/dyg070](https://doi.org/10.1093/ije/dyg070) — Foundational paper establishing the MR framework in epidemiology
2. **Bowden et al. (2015) — MR-Egger** — [https://doi.org/10.1093/ije/dyv080](https://doi.org/10.1093/ije/dyv080) — Development of MR-Egger regression for pleiotropy testing and robust estimation
3. **Bowden et al. (2016) — Weighted median** — [https://doi.org/10.1002/gepi.21965](https://doi.org/10.1002/gepi.21965) — Weighted median estimator for MR with some invalid instruments
4. **Hemani et al. (2018) — MR-Base** — [https://doi.org/10.7554/eLife.34408](https://doi.org/10.7554/eLife.34408) — MR-Base: platform for systematic two-sample MR using curated GWAS data

---

## Future Research Directions

- **Non-linear MR methods:** Most current MR methods assume linear exposure-outcome relationships; methods to estimate non-linear dose-response curves (e.g., fractional polynomial MR) need further development and validation.
- **Life-course MR:** Since genetic variants are fixed at conception, MR estimates reflect lifetime effects; developing methods to estimate effects at specific developmental windows (prenatal, childhood, adulthood) is an important methodological challenge.
- **Selection and survival bias correction:** Current MR methods cannot adequately account for selection bias (differential study participation) or survival bias (competing risk); methods to detect and correct these biases are needed.
- **Expansion of family-based designs:** Within-sibling MR designs avoid population stratification, dynastic effects, and assortative mating biases; generating sufficiently large family-based datasets to power such analyses is a priority.

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
