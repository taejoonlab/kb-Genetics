---
tags: [genetics, class, review, en, GeneticsClassic]
date: 2026-07-13
type: class
---

# Pritchard et al. 2000 and Structure: A 15-Year Retrospective (Genetics Classic Commentary)

## Citation (NLM)
Novembre J. Pritchard et al. 2000 and structure: a 15-year retrospective. Genetics. 2016;204(2):391-393. doi:10.1534/genetics.116.195164

**DOI:** [https://doi.org/10.1534/genetics.116.195164](https://doi.org/10.1534/genetics.116.195164)

---

## Summary

This short Genetics Classics commentary by Novembre (2016) was written as part of a *GENETICS* series marking the 15th anniversary of the STRUCTURE paper by Pritchard, Stephens, and Donnelly (2000). The three-page piece evaluates the paper's impact on population genetics in historical context, explains the core of its methodological innovation, and surveys subsequent developments.

Novembre first sketches the intellectual backdrop of 2000. At the time, population-structure analysis relied mainly on AMOVA, Fst, and distance-based trees. Because these methods explored structure without an explicit probabilistic model, it was hard to quantify the uncertainty of results or to integrate multiple sources of information. STRUCTURE fundamentally overcame this.

Novembre singles out two innovations as STRUCTURE's most important contributions. First, an explicit probabilistic model (Bayesian clustering): it defines the probability that each individual belongs to one (or several) of K populations and infers allele frequencies and individual assignments simultaneously. Second, the admixture model: the idea that an individual's genome can be a mixture of several populations opened, for its time, a new window onto the admixture history of humans and other organisms.

Novembre also notes that STRUCTURE's success owed not only to methodological excellence but to its software implementation and accessibility. As usable software, STRUCTURE arrived exactly when researchers needed such a tool, amid the surge of microsatellite and SNP data.

The commentary briefly surveys post-STRUCTURE methodological developments. As data grew to millions of SNPs and tens of thousands of individuals, MCMC-based STRUCTURE became too computationally expensive. To address this, fastSTRUCTURE (using variational inference), PCA-based methods, and matrix-factorization-based ADMIXTURE were developed. These retain the same basic model structure as STRUCTURE while improving computational efficiency many-fold.

Novembre points out that the STRUCTURE model has essentially the same structure as the Latent Dirichlet Allocation (LDA) model in machine learning, presenting this as a case of interdisciplinary convergence in which population genetics and machine learning independently arrived at the same model structure — attesting to the generality and utility of this structure in both fields.

In conclusion, Novembre attributes STRUCTURE's exceptionally high citation count, unusual for a methods paper, to its provision of a universal tool answering the basic questions of population genetics: where did individuals come from, and how are populations connected?

---

## Significance in Introduction Context

- Compresses the 15-year historical significance of the original STRUCTURE paper into three pages, providing an accessible entry point for digesting a methods paper pedagogically.
- Clearly explains the paradigm shift in population-genetic methodology (distance-based → probabilistic-model-based).
- Why students should read it: read together with the original STRUCTURE paper, it trains one to evaluate the core of a methods paper and to understand the context of subsequent developments.

---

## Key References

1. **Pritchard JK et al. (2000)** — [https://doi.org/10.1093/genetics/155.2.945](https://doi.org/10.1093/genetics/155.2.945) — the original STRUCTURE paper (subject of this classic commentary)
2. **Falush D et al. (2003)** — [https://doi.org/10.1534/genetics.164.4.1567](https://doi.org/10.1534/genetics.164.4.1567) — STRUCTURE extension: handling of linked loci
3. **Alexander DH et al. (2009)** — [https://doi.org/10.1101/gr.094052.109](https://doi.org/10.1101/gr.094052.109) — ADMIXTURE: fast clustering suited to large SNP data

---

## Future Research Directions

- Beyond the simple discrete-K clustering model — models reflecting geographic continuity, and methods integrating phylogenetic trees with clustering models
- Limitations and improvements when applying STRUCTURE-family methods to ancient-DNA data (low coverage, contamination, time depth of ancient DNA)
- Method-comparison benchmarks: systematic comparison of STRUCTURE vs. PCA vs. ADMIXTURE across diverse population-structure scenarios (bottleneck, migration, selection)

---

*Processed by **Claude Fable 5** (Claude Code) on 2026-07-19*
