---
tags: [genetics, class, review, en, 2025-2026]
date: 2026-09-06
type: class
---

# Pleiotropy, epistasis and the genetic architecture of quantitative traits

## Citation (NLM)
Mackay TFC, Anholt RRH. Pleiotropy, epistasis and the genetic architecture of quantitative traits. Nat Rev Genet. 2024;25(9):639-657. doi:10.1038/s41576-024-00711-3

**DOI:** [https://doi.org/10.1038/s41576-024-00711-3](https://doi.org/10.1038/s41576-024-00711-3)

---

## Summary

Most QTL and GWAS analyses fit a simple model: test each marker against one trait, assume additive effects, report significant loci. Real genetic architecture violates both simplifications. **Pleiotropy** means one polymorphism affects multiple traits; **epistasis** means the effect of an allele depends non-linearly on alleles at other loci. This review, by two leaders of *Drosophila* quantitative genetics, examines both and — most usefully for a course — explains why the empirical picture differs so sharply between model organisms and humans.

**Pleiotropy.** The classical definition is one gene affecting two or more traits; the rigorous version is that a variant's additive and/or dominance effects are non-zero for two or more traits. The authors distinguish **horizontal pleiotropy** (a polymorphism independently affects two traits — for example, mammalian coat-colour mutations that also affect vision and hearing) from **mediating pleiotropy** (a variant affects trait A, which causally affects trait B — for example, a variant raising LDL cholesterol and thereby raising coronary artery disease risk). The distinction matters because only mediating pleiotropy licenses causal inference from one trait to another; this is the logic underlying Mendelian randomization. They also stress the difference between a **pleiotropic gene** and a **pleiotropic polymorphism**: at the *Drosophila* *Catsup* locus, different molecular polymorphisms are independently associated with longevity, locomotion, and sensory bristle number, so the gene is pleiotropic while individual variants are not. And they separate true pleiotropy from **apparent pleiotropy** caused by linkage — two distinct causal variants near each other look like one pleiotropic variant. Pleiotropy has practical consequences: it improves mapping precision, constrains responses to natural and artificial selection, and lets molecular networks be inferred from high-dimensional phenotypes such as expression and metabolite traits.

**Epistasis.** When alleles have different effects in different genetic backgrounds, allelic effect sizes vary among individuals and populations, and the amount of quantitative genetic variance actually expressed depends on the background. Genetic networks inferred from epistatic interactions can improve genomic prediction.

**The central puzzle.** Epistasis is **common** among QTLs in model organisms but **rarely detected** for human quantitative traits and common diseases. The review's most valuable contribution is to explain why this need not mean humans lack epistasis. Model organisms allow controlled backgrounds, replicated genotypes, defined environments, and factorial designs — conditions built to detect interaction. Human studies use outbred populations with unique genotypes, uncontrolled environments, and multiple-testing burdens that scale quadratically with the number of pairwise tests. Differences in genome size and organization, demographic history, allele frequency spectra, and biology further limit how far specific QTLs transfer between systems. The apparent discrepancy is at least partly a difference in statistical power and study design, not necessarily in underlying biology.

---

## Significance in Introduction Context

- The definitive current treatment of the two concepts that make complex traits genuinely complex — essential background for the complex-traits/QTL and GWAS lectures
- Distinguishes **horizontal from mediating pleiotropy**, which is the conceptual basis of Mendelian randomization and of causal inference from GWAS
- Separates **pleiotropic genes from pleiotropic variants** and true pleiotropy from **linkage artifacts** — precision students rarely encounter
- Explains why **model organisms and humans give different answers** about epistasis, and why the difference is largely methodological — an excellent lesson in reading the literature critically
- Written by the group behind the DGRP, connecting directly to other *Drosophila* studies in this vault

---

## Key References

1. **Fisher (1918)** — Correlation between relatives on the supposition of Mendelian inheritance — Origin of the additive model that pleiotropy and epistasis depart from
2. **Falconer and Mackay (1996)** — *Introduction to Quantitative Genetics* — The standard framework for additive, dominance, and interaction variance
3. **Mackay et al. (2012)** — The *Drosophila melanogaster* Genetic Reference Panel — The resource behind much of the model-organism epistasis evidence
4. **Solovieff et al. (2013)** — Pleiotropy in complex traits: challenges and strategies — Methodological review of pleiotropy detection
5. **Davey Smith and Hemani (2014)** — Mendelian randomization — The causal-inference application of mediating pleiotropy
6. **Phillips (2008)** — Epistasis: the essential role of gene interactions — Conceptual framework for the epistasis section
7. **Huang et al. (*Drosophila* epistasis studies)** — Epistasis dominating the genetic architecture of *Drosophila* quantitative traits — Key empirical demonstration in a model system

---

## Future Research Directions

- Develop statistical approaches with adequate power to detect epistasis in human biobank-scale data, or establish convincingly that it is genuinely rare there
- Use high-dimensional molecular phenotypes (expression, proteomic, metabolomic) systematically to distinguish horizontal from mediating pleiotropy at scale
- Test whether epistatic interactions detected in one model-organism population replicate in another, which would establish whether interactions are stable properties of networks or population-specific
- Incorporate epistatic terms into polygenic prediction and measure whether prediction accuracy and cross-population transferability actually improve
- Quantify how much apparent pleiotropy in GWAS is linkage rather than true shared causal variants, using fine-mapping and functional validation

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-06*
