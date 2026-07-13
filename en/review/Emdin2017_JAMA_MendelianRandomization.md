---
tags: [genetics, class, review, en]
date: 2026-07-13
type: class
---

# Mendelian Randomization

## Citation (NLM)
Emdin CA, Khera AV, Kathiresan S. Mendelian randomization. JAMA. 2017;318(19):1925-1926. doi:10.1001/jama.2017.17219

**DOI:** [https://doi.org/10.1001/jama.2017.17219](https://doi.org/10.1001/jama.2017.17219)

---

## Summary

This paper is part of JAMA's "Guide to Statistics and Methods" series and provides a concise, clinically oriented introduction to Mendelian randomization (MR). It uses the relationship between HDL cholesterol, LDL cholesterol, triglycerides, and coronary heart disease as a central worked example to illustrate MR principles and applications.

**Basic Principle:** MR uses genetic variants to determine whether an observational association between a risk factor and an outcome is consistent with a causal effect. It relies on the random assortment of genetic variants during meiosis. Individuals are naturally assigned at birth to inherit (or not) a genetic variant that affects a risk factor — for example, a variant that raises LDL cholesterol. Differences in outcomes between those who carry and those who do not carry the variant can be attributed to the difference in the risk factor, because genetic variants are typically not associated with confounders.

**Comparison with Randomized Trials:** MR parallels a randomized clinical trial:
- In an RCT, investigators randomly assign patients to receive an HDL-raising drug or placebo
- In MR, individuals are "naturally randomized" at birth to carry or not carry a genetic variant that affects HDL; differences in coronary heart disease between groups estimate the causal effect
- RCTs provide definitive causal evidence but are costly, time-consuming, and sometimes infeasible
- MR offers a rapid and affordable alternative using existing data, applicable to questions where RCTs are impractical or unethical

**Three Core Assumptions:**
1. The genetic variant is associated with the risk factor (directly testable by examining statistical strength of association)
2. The genetic variant is not associated with confounders (cannot be empirically proven; requires judgment and sensitivity analyses)
3. The genetic variant influences the outcome only through the risk factor (cannot be empirically proven; pleiotropy sensitivity analyses required)
Assumptions 2 and 3 are collectively described as "independence from pleiotropy."

**Key Worked Example — HDL, LDL, and Triglycerides:**
- Loss-of-function variants in ABCA1 cause 17 mg/dL lower HDL cholesterol but show no increased coronary heart disease risk (OR: 0.93; 95% CI: 0.53–1.62), despite the study having >80% power to detect the expected 70% increase. This was among the first evidence casting doubt on a causal role for HDL cholesterol.
- An analysis of 185 lipid-associated polymorphisms by Do et al. found that a genetically instrumented 1-SD increase in HDL (~14 mg/dL) was not associated with coronary heart disease (OR: 0.96; 95% CI: 0.89–1.03), while a 1-SD increase in triglycerides (~89 mg/dL) was associated with elevated risk (OR: 1.43; 95% CI: 1.28–1.60).
- Observational and MR estimates were concordant for LDL cholesterol (heterogeneity P=0.60), but significantly discordant for HDL and triglycerides (P<0.01), suggesting confounding drives the observational HDL-heart disease association.
- These data indicate LDL cholesterol and triglyceride-rich lipoproteins, but not HDL, are causal drivers of coronary heart disease risk.

**Pleiotropy Caveats:** Key limitations include: (1) pleiotropic effects — if genetic variants affect the outcome through pathways independent of the risk factor, MR estimates are biased; and (2) statistical power — single variants explain only small fractions of risk factor variance, so multiple variants are combined into polygenic risk scores to increase power.

---

## Significance in Introduction Context

- **Concise MR primer:** As part of JAMA's statistics guide series, this paper distills MR into its essential elements for a clinical audience, enabling clinicians to make basic judgments about MR studies they encounter.
- **Clinical decision relevance:** The HDL cholesterol case study powerfully illustrates how observational associations can mislead clinical reasoning, and how MR can correct these misinterpretations — with direct consequences for drug development.
- **Drug development guidance:** By showing that HDL-raising strategies were unlikely to reduce cardiovascular risk before the corresponding clinical trial failures occurred, this paper exemplifies MR's value as a drug target validation tool.
- **Why read this in class:** This paper is the ideal first introduction to MR — brief, concrete, clinically grounded, and illustrating the core concepts through a high-impact real example in lipid biology and cardiovascular disease.

---

## Key References

Key references cited in the paper (with DOI URLs):

1. **Frikke-Schmidt et al. (2008)** — [https://doi.org/10.1001/jama.299.21.2524](https://doi.org/10.1001/jama.299.21.2524) — First MR evidence using ABCA1 loss-of-function variants suggesting HDL is not causally protective
2. **Voight et al. (2012)** — [https://doi.org/10.1016/S0140-6736(12)60312-2](https://doi.org/10.1016/S0140-6736(12)60312-2) — Key MR study showing HDL cholesterol variants do not reduce myocardial infarction risk
3. **Do et al. (2013)** — [https://doi.org/10.1038/ng.2795](https://doi.org/10.1038/ng.2795) — Multivariable MR using 185 polymorphisms confirming LDL and triglycerides as causal drivers of coronary heart disease
4. **Davey Smith & Ebrahim (2003)** — [https://doi.org/10.1093/ije/dyg070](https://doi.org/10.1093/ije/dyg070) — Foundational paper establishing the Mendelian randomization framework

---

## Future Research Directions

- **Larger GWAS for stronger instruments:** Since individual variants explain only a small fraction of risk factor variance, larger GWAS samples yielding more genome-wide significant variants are needed to construct more powerful polygenic MR instruments.
- **Functional variant discovery in non-coding regions:** Many GWAS signals lie in non-coding regions with unclear functional roles; identifying the functional variants improves the interpretability of MR instruments.
- **Multivariable MR refinement:** Methods to handle correlated risk factors (LDL, HDL, triglycerides simultaneously) continue to develop; more sophisticated approaches are needed for complex confounding patterns.
- **Triangulation with clinical trials:** Systematic comparison of MR predictions with RCT outcomes would validate MR's predictive accuracy and clarify when and why discrepancies arise between MR and trial results.

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
