---
tags: [genetics, class, article, en]
date: 2026-07-13
type: class
---

# Inference of Population Structure Using Multilocus Genotype Data

## Citation (NLM)
Pritchard JK, Stephens M, Donnelly P. Inference of population structure using multilocus genotype data. Genetics. 2000;155(2):945-959.

**DOI:** [https://doi.org/10.1093/genetics/155.2.945](https://doi.org/10.1093/genetics/155.2.945)

---

## Summary

One of the central challenges in population genetics is inferring population structure from multilocus genotype data collected from a sample of individuals. Pritchard, Stephens, and Donnelly (2000) introduced a Bayesian clustering methodology for this purpose, implemented in the software STRUCTURE, which became one of the most widely cited tools in population genetics.

The central idea is to assume that K populations exist, each characterized by allele frequencies at each locus. Sampled individuals are probabilistically assigned to these populations based on their genotypes. The methodology encompasses two main models. The no-admixture model assumes each individual derives entirely from a single population. The admixture model allows an individual's genome to originate from multiple populations, estimating the fractional contributions from each.

Statistically, the method uses Markov Chain Monte Carlo (MCMC), specifically Gibbs sampling, to draw samples from the posterior distribution Pr(Z, P|X), where X is the observed genotype data, Z is the population origin of each individual, and P represents allele frequencies in each population. The model assumes Hardy-Weinberg equilibrium within populations and linkage equilibrium between loci.

Estimating K, the number of populations, is a difficult statistical problem. The authors propose an approximate approach using an estimated log likelihood Pr(X|K) to compute a rough posterior distribution Pr(K|X). Although this estimator lacks a rigorous theoretical foundation, it performs well in practice.

The method was applied to both simulated and real datasets. In simulations, three scenarios were tested: K = 1 (single panmictic population), K = 2 (two discrete populations), and admixture between two populations. The method accurately detected population structure and correctly assigned individuals to their source populations.

For empirical validation, the authors used two datasets. First, microsatellite genotype data at seven loci from the Taita thrush (Turdus helleri), an endangered bird from Kenya. Second, data from 30 biallelic restriction site polymorphisms in African and European humans. For the Taita thrush, K = 3 was inferred as optimal, corresponding to three geographically distinct groups (Chawia, Mbololo, and Ngangao forests). Incorporating geographic prior information improved the detection of migrants between populations.

For the human dataset, K = 2 cleanly separated African and European individuals. The paper also demonstrated that STRUCTURE outperforms distance-based clustering methods (e.g., neighbor-joining trees) because it is grounded in an explicit probabilistic model that allows uncertainty quantification and integration of prior information.

This paper established the standard methodology for population structure analysis and had broad impact across human genetics, evolutionary biology, and molecular ecology. The admixture model is mathematically equivalent to Latent Dirichlet Allocation (LDA), a foundational topic machine learning model developed later, illustrating the cross-disciplinary power of the approach.

---

## Significance in Introduction Context

- Introduced the first model-based Bayesian approach for inferring population structure from multilocus data, underpinning subsequent GWAS, population admixture, and evolutionary analyses
- Shifted the paradigm from distance-based clustering to probabilistic modeling with uncertainty quantification
- Why read this paper in class: it exemplifies how fundamental concepts in population genetics (Hardy-Weinberg equilibrium, linkage equilibrium) are integrated with Bayesian statistics and MCMC to build a practically powerful tool

---

## Key References

1. **Rannala B, Mountain JL (1997)** — [https://doi.org/10.1073/pnas.94.17.9197](https://doi.org/10.1073/pnas.94.17.9197) — Detecting immigrant descent using multilocus genotypes; a precursor to STRUCTURE
2. **Falush D et al. (2003)** — [https://doi.org/10.1534/genetics.164.4.1567](https://doi.org/10.1534/genetics.164.4.1567) — Extended STRUCTURE to handle linked loci and correlated allele frequencies
3. **Novembre J (2016)** — [https://doi.org/10.1534/genetics.116.195164](https://doi.org/10.1534/genetics.116.195164) — Genetics Classic commentary summarizing the historical importance of this paper

---

## Future Research Directions

- Improve statistical rigor of K estimation, replacing the approximate likelihood method with information-theoretic criteria
- Scale to massive SNP datasets (millions of variants, thousands of individuals) via fast variational inference — as pursued by fastSTRUCTURE and ADMIXTURE
- Address limitations for continuously distributed populations (isolation by distance) where discrete cluster assumptions break down

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-13*
