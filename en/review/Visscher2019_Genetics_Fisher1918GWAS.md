---
tags: [genetics, class, review, en]
date: 2026-07-13
type: class
---

# From R.A. Fisher's 1918 Paper to GWAS a Century Later

## Citation (NLM)
Visscher PM, Goddard ME. From R.A. Fisher's 1918 paper to GWAS a century later. Genetics. 2019;211(4):1125-1130. doi:10.1534/genetics.118.301594

**DOI:** [https://doi.org/10.1534/genetics.118.301594](https://doi.org/10.1534/genetics.118.301594)

---

## Summary

This perspective paper, written to mark the 100th anniversary of R.A. Fisher's landmark 1918 paper "The Correlation between Relatives on the Supposition of Mendelian Inheritance," examines how Fisher's theoretical framework has survived and been empirically validated in the modern genomics era.

**Historical Context:** After Mendel's laws were rediscovered in 1900, a fierce debate erupted between the "Biometricians" led by Karl Pearson and the "Mendelians" led by William Bateson. Biometricians argued that continuous traits like human height could not be explained by Mendelian principles. Fisher's 1918 paper resolved this controversy by demonstrating mathematically that if many genes each follow Mendelian rules and contribute to trait variation, continuous quantitative traits can be fully explained within a Mendelian framework.

**Core Contributions of Fisher's 1918 Paper:**
1. **Variance decomposition:** Fisher showed that total phenotypic variance can be partitioned into genetic and environmental components, and genetic variance can be further partitioned into additive genetic variance (V_A) and dominance variance (V_D). Critically, the terms "variance" and the method of ANOVA were first introduced in this paper.
2. **Prediction of resemblance between relatives:** Without knowing the details of individual loci, knowledge of variance components alone is sufficient to predict phenotypic correlations among relatives (parent-offspring, full siblings, etc.).
3. **Effects of assortative mating:** Fisher analyzed how positive assortative mating (like-with-like) increases genetic variance by creating correlations between trait alleles at different loci (a form of linkage disequilibrium), modifying the resemblance between relatives.

**Validation in the GWAS Era:**
- **Polygenicity confirmed:** GWAS has empirically demonstrated that virtually every heritable trait is influenced by many loci. Human height, for example, has more than 3,000 statistically significant associated loci, yet these still explain only ~one-third of additive genetic variance.
- **Additive genetic variance predominates:** Across many species and traits, the overwhelming majority of genetic variance is additive, consistent with Fisher's models. Dominance and epistasis occur but contribute relatively little to total variance.
- **GWAS linear regression = Fisher's model:** The standard GWAS approach of regressing trait values on SNP dosage (0, 1, 2 alleles) is exactly the regression model underlying Fisher's derivation of additive genetic variance. Effect sizes from GWAS should be interpreted as "average effects of allele substitution" in Fisher's terminology.
- **Assortative mating confirmed:** Using GWAS data, estimated breeding values of mating pairs have been shown to be correlated for height and educational attainment, confirming that phenotypic assortative mating generates genetic correlations between mates.

**Persistent Misunderstandings:** The paper identifies common misconceptions about Fisher's theory:
- "High heritability means environmental interventions cannot work" — FALSE; even heritability of 0.8 allows substantial environmental influences (SD of environmental component for height ≈ 3.1 cm)
- "Additive genetic variance assumes no dominance" — FALSE; dominance effects are subsumed within the average effect of allele substitution
- "Individual disease cases are due to either genetic OR environmental causes" — FALSE; both always contribute to every individual case

---

## Significance in Introduction Context

- **Historical foundation of quantitative genetics:** Understanding that Fisher's 1918 paper provided the mathematical basis for quantitative genetics — and that this framework preceded and now explains GWAS results — is essential for grasping why GWAS works the way it does.
- **Resolution of a historical paradigm conflict:** The Biometrician-Mendelian debate and its mathematical resolution exemplifies how theoretical synthesis can unify apparently contradictory empirical observations, a recurring theme in the history of genetics.
- **Theoretical justification for GWAS design:** The paper explains why linear regression on SNP dosage is the theoretically correct approach for GWAS, and what the effect sizes measured in GWAS biologically represent.
- **Why read this in class:** This paper provides the intellectual bridge between classical quantitative genetics (heritability, variance components, assortative mating) and modern GWAS methodology, making it essential reading for understanding both the history and practice of complex trait genetics.

---

## Key References

Key references cited in the paper (with DOI URLs):

1. **Fisher RA (1918)** — Original paper (no DOI; Trans. R. Soc. Edinb. 53:399-433) — The foundational paper connecting Mendelian inheritance to quantitative trait variation
2. **Visscher et al. (2017)** — [https://doi.org/10.1016/j.ajhg.2017.06.005](https://doi.org/10.1016/j.ajhg.2017.06.005) — 10 years of GWAS discovery review, cited to document the pace of discovery
3. **Hill et al. (2008)** — [https://doi.org/10.1371/journal.pgen.1000008](https://doi.org/10.1371/journal.pgen.1000008) — Empirical and theoretical evidence that genetic variance for complex traits is mainly additive
4. **Yengo et al. (2018)** — [https://doi.org/10.1093/hmg/ddy271](https://doi.org/10.1093/hmg/ddy271) — Meta-GWAS of height and BMI in 700,000 individuals, discovering 3,000+ loci
5. **Gazal et al. (2017)** — [https://doi.org/10.1038/ng.3954](https://doi.org/10.1038/ng.3954) — LD-dependent genetic architecture showing evidence of negative selection acting on complex traits

---

## Future Research Directions

- **Sources of missing heritability:** Despite thousands of GWAS loci, a substantial fraction of additive genetic variance for highly heritable traits remains unexplained. Rare variants, lower-MAF common variants, and measurement error all likely contribute; larger sequencing-based studies are needed.
- **Precise estimation of dominance and epistasis:** Fisher's theory includes dominance and epistasis, but their true contributions to human complex traits remain debated. Very large WGS-based studies with careful statistical methods are required for accurate estimation.
- **Consequences of assortative mating for disease:** Evidence for assortative mating on psychiatric disorder liability suggests this process could increase disease prevalence and alter genetic architecture; quantifying these effects at the genomic level is an active area.
- **Polygenic adaptation and natural selection:** GWAS provides evidence that complex-trait-associated variants are under selection, but the mechanisms, targets, and intensity of selection on polygenic traits require deeper investigation using population genetics approaches combined with GWAS data.

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
