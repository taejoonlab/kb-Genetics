---
tags: [genetics, class, review, en]
date: 2026-07-13
type: class
---

# Reading Mendelian randomisation studies: a guide, glossary, and checklist for clinicians

## Citation (NLM)
Davies NM, Holmes MV, Davey Smith G. Reading Mendelian randomisation studies: a guide, glossary, and checklist for clinicians. BMJ. 2018;362:k601. doi:10.1136/bmj.k601

**DOI:** [https://doi.org/10.1136/bmj.k601](https://doi.org/10.1136/bmj.k601)

---

## Summary

This BMJ guide provides clinicians with a practical framework for reading, understanding, and critically appraising Mendelian randomization (MR) studies. MR is an analytical method that uses genetic variants as instrumental variables to investigate causal relationships between modifiable risk factors and health outcomes, overcoming a major limitation of observational studies: unmeasured confounding.

**The Problem of Confounding:** Observational associations between modifiable risk factors and disease outcomes are frequently confounded by factors that influence both the risk factor and the outcome. For example, alcohol consumption may be confounded by smoking in studies of alcohol and blood pressure. Reverse causality — where subclinical disease affects the risk factor — adds further complexity. Standard epidemiological adjustment methods cannot fully eliminate these biases because confounders are often unmeasured or imperfectly measured.

**The Three Core MR Assumptions:** For a genetic variant to serve as a valid instrumental variable:
1. **Relevance:** The genetic variant must be associated with the risk factor of interest (testable using F statistics; rule of thumb: F > 10)
2. **Independence:** There are no unmeasured confounders of the genetic variant-outcome association (not directly testable but assessable)
3. **Exclusion restriction:** The genetic variant affects the outcome only through the risk factor — no horizontal pleiotropy (not directly testable but assessable)

**Key Example — ALDH2 and Alcohol-Blood Pressure:** The minor A allele of rs671 in ALDH2 (found in East Asian populations) slows acetaldehyde metabolism, causing an aversive flush response and greatly reducing alcohol consumption. In a study of 4,057 individuals, men carrying two A alleles drank an average of 1.1 g/day versus 23.7 g/day for noncarriers. If carriers also have lower blood pressure, this provides causal evidence that lower alcohol consumption reduces blood pressure.

**Data Sources:**
- **Single-sample MR:** Genotype, risk factor, and outcome all measured in the same sample
- **Two-sample MR:** Genetic variant-risk factor association estimated in one sample (e.g., a GWAS consortium); genetic variant-outcome association in a second, non-overlapping sample. This allows use of very large GWAS data (e.g., GIANT N=693,529, CARDIoGRAMplusC4D N=184,305), substantially boosting statistical power.

**Pleiotropy and Sensitivity Analyses:** Genetic variants often affect multiple traits (pleiotropy), potentially violating the exclusion restriction. Methods to address this:
- **MR-Egger regression:** Allows pleiotropic effects as long as their magnitude is independent of the variant's effect on the risk factor; provides a test for pleiotropy via the intercept
- **Weighted median estimator:** Reliable as long as more than 50% of genetic variants (by weight) are valid instruments
- **Weighted mode estimator:** Consistent under the assumption that the largest cluster of variants share the same true effect

**Illustrative Example — HDL Cholesterol and Heart Disease:** Despite strong observational associations suggesting HDL cholesterol is cardioprotective, MR studies using variants associated with HDL found no reduction in coronary heart disease risk. This challenged the causal role of HDL, predicted the failure of clinical trials of HDL-raising drugs, and illustrates how MR estimates can overturn misleading observational associations driven by confounding. In contrast, MR evidence for LDL cholesterol causally increasing heart disease was confirmed by PCSK9 inhibitor trials.

**Clinical Interpretation Caveat:** MR estimates reflect lifetime differences in risk factors (genetic variants are fixed at conception), not the effects of acute interventions. This means MR results may overestimate or differ in direction from short-term clinical trial effects, and clinical guidelines should not be rewritten solely on MR evidence.

---

## Significance in Introduction Context

- **Causal inference in observational data:** MR fills a critical gap between observational epidemiology and interventional trials, providing causal evidence for research questions where RCTs are infeasible or unethical (e.g., alcohol, obesity, early-life exposures).
- **Application of GWAS findings:** By using GWAS-identified variants as instruments, MR demonstrates how GWAS results can directly translate into causal epidemiology and guide drug development priorities.
- **Drug target validation:** The PCSK9/LDL-HDL cholesterol example illustrates how MR can predict clinical trial success or failure before trials are conducted, potentially reducing the costly attrition of drug development.
- **Why read this in class:** This paper provides the most clinically accessible introduction to MR — covering the three core assumptions, instrumental variable logic, pleiotropy testing, and practical appraisal — making it essential reading for anyone encountering MR literature.

---

## Key References

Key references cited in the paper (with DOI URLs):

1. **Davey Smith & Ebrahim (2003)** — [https://doi.org/10.1093/ije/dyg070](https://doi.org/10.1093/ije/dyg070) — Foundational paper establishing the Mendelian randomization framework
2. **Bowden et al. (2016) — MR-Egger** — [https://doi.org/10.1093/ije/dyv080](https://doi.org/10.1093/ije/dyv080) — Development of MR Egger regression for pleiotropy-robust estimation
3. **Voight et al. (2012) — HDL MR** — [https://doi.org/10.1016/S0140-6736(12)60312-2](https://doi.org/10.1016/S0140-6736(12)60312-2) — Key MR study showing HDL cholesterol is not causally protective against myocardial infarction
4. **Davey Smith et al. (2017) — MR-Base** — [https://doi.org/10.7554/eLife.34408](https://doi.org/10.7554/eLife.34408) — MR-Base: curated GWAS database with integrated R package for two-sample MR

---

## Future Research Directions

- **Time-varying exposures in MR:** Since genetic variants are fixed at conception, MR estimates reflect lifetime effects. Methods to estimate effects at specific life stages (multivariable MR with age-stratified analyses) are needed for time-sensitive exposures.
- **Non-linear MR:** Most MR methods assume linear dose-response relationships, but many exposure-outcome relationships may be non-linear (e.g., U-shaped). Methods for non-linear MR are an active area of development.
- **Multivariable MR:** Simultaneously estimating the independent causal effects of correlated risk factors (e.g., LDL, HDL, and triglycerides jointly) is needed to disentangle interrelated pathways.
- **Standardizing MR reporting:** Broad adoption of STROBE-MR reporting guidelines is needed to ensure MR studies provide sufficient information for readers to evaluate the plausibility of the core assumptions.

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
