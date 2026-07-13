---
tags: [genetics, class, article, en]
date: 2026-07-12
type: class
---

# Bootstrap confidence levels for phylogenetic trees

## Citation (NLM)
Efron B, Halloran E, Holmes S. Bootstrap confidence levels for phylogenetic trees. Proc Natl Acad Sci USA. 1996;93(23):13429-13434. doi:10.1073/pnas.93.23.13429

**DOI:** [https://doi.org/10.1073/pnas.93.23.13429](https://doi.org/10.1073/pnas.93.23.13429)

---

## Summary

This paper addresses a long-standing question in phylogenetics: are the confidence values produced by Felsenstein's 1985 bootstrap method for phylogenetic trees statistically biased? Hillis and Bull (1993) had argued that bootstrap confidence values are systematically biased downward — that is, too conservative as assessments of tree accuracy. Efron, Halloran, and Holmes demonstrate that Felsenstein's method is not biased in the fundamental statistical sense, but that it answers a subtly different question than the standard hypothesis-testing confidence level. The bootstrap confidence value (denoted ã) is shown to be equivalent, in a Bayesian framework, to the posterior probability that the estimated clade is correct under a flat prior. By contrast, the hypothesis-testing confidence level (denoted â) is the one-sided p-value complement computed by bootstrapping from the boundary of the parameter space. The two quantities agree to first order but diverge at second order depending on the curvature of the boundary separating different tree regions in the probability parameter space.

The authors develop their argument using a multinomial probability model for DNA sequence data. Each column of aligned sequences is treated as an independent draw from the same multinomial distribution over possible site patterns. The tree-building algorithm converts the observed column proportions into a distance matrix and then a tree topology. Bootstrap resampling replaces observed columns with replacement, generating bootstrap trees whose agreement with the original tree is counted as the confidence value ã. Using a simplified two-dimensional normal model to build intuition, Efron et al. show that ã measures the probabilistic distance from the observed estimate to the decision boundary between tree topologies, while â measures the same distance from the boundary itself — analogous to a likelihood ratio test statistic.

To quantify the discrepancy between ã and â, the authors introduce a correction formula: zˆ ≈ z̃ − 2z₀, where z₀ is a "boundary curvature correction" computed by a second level of bootstrap resampling from points on the boundary itself, and a is the "acceleration constant" capturing asymmetry in the curvature. They apply this BCa (bias-corrected and accelerated) correction to real data from the malaria parasite Plasmodium, using aligned small-subunit RNA sequences from 11 species. For the well-supported 9-10 species clade, Felsenstein's method gave ã = 0.965, while the corrected hypothesis-testing level was â = 0.942. For a weaker clade (7-8 pair), Felsenstein's value ã = 0.609 was actually conservative relative to â = 0.662, illustrating that the direction of the discrepancy depends on boundary curvature and can go in either direction.

A key practical conclusion is that computing â by the two-level bootstrap requires roughly 20 times more computation than computing ã, because the correction term z₀ requires locating boundary points by binary search and generating a second round of bootstrap replicates from each. The authors estimate that at least 1000 bootstrap replicates are needed at each level for the correction to be worthwhile. For routine use, Felsenstein's simple ã remains a reasonable first approximation because it can be thought of as a Bayesian posterior probability under an uninformative prior — and the discrepancy between ã and â is typically small. The paper thus rehabilitates Felsenstein's method while providing a theoretically grounded, more precise alternative for demanding applications.

---

## Significance in Introduction Context

- Resolves a controversy in phylogenetic methodology: definitively answers whether Felsenstein's bootstrap is biased and demonstrates that the original criticism conflated two distinct statistical concepts — the bootstrap confidence value (Bayesian posterior-like) versus the hypothesis-testing confidence level (frequentist p-value complement).
- Introduces the BCa correction framework to phylogenetics: the bias-corrected and accelerated bootstrap, developed earlier for scalar statistics, is extended here to the complex non-Euclidean space of tree topologies, providing a general template for applying second-order bootstrap corrections to structured data.
- Provides a formal probabilistic model for sequence evolution in phylogenetic inference: the multinomial column model makes explicit the statistical assumptions underlying Felsenstein's bootstrap, enabling rigorous evaluation of when the method is and is not appropriate.
- Demonstrates with a real biological example (Plasmodium malaria phylogeny) that corrected and uncorrected confidence values can differ by several percent — a non-trivial difference when assessing confidence in specific clades in published phylogenies.
- Clarifies the computational trade-off between accuracy and effort in bootstrap phylogenetics, providing practical guidance (minimum replicate numbers, binary search for boundary points) that influenced subsequent bioinformatics tool development.

---

## Key References

1. **Efron B & Tibshirani R (1993)** — An Introduction to the Bootstrap (Chapman & Hall) — foundational textbook on bootstrap methodology; provides theoretical basis for all bootstrap confidence intervals discussed in this paper
2. **Felsenstein J (1985)** — https://doi.org/10.2307/2408678 — original proposal of the bootstrap for phylogenetic trees; the method being evaluated and corrected in this paper
3. **Hillis DM & Bull JJ (1993)** — https://doi.org/10.1093/sysbio/42.2.182 — the criticism that bootstrap values are biased downward; provides simulation evidence that motivates the present analysis
4. **Felsenstein J & Kishino H (1993)** — https://doi.org/10.1093/sysbio/42.2.193 — response to Hillis & Bull; develops normal model framework also used in this paper
5. **Zharkikh A & Li WH (1992)** — https://doi.org/10.1093/oxfordjournals.molbev.a040683 — earlier analysis of bootstrap bias in phylogenetics; provides related theoretical context
6. **Escalante AA & Ayala FJ (1995)** — https://doi.org/10.1073/pnas.92.12.5793 — provides the Plasmodium small-subunit RNA data set used as the empirical example; biologically motivates the tree estimation problem
7. **Kimura M (1980)** — https://doi.org/10.1007/BF01731581 — two-parameter distance model used in the neighbor-joining tree construction in the malaria example

---

## Future Research Directions

- Extend the BCa correction framework to Bayesian phylogenetic inference (MCMC posterior distributions) to determine whether posterior probabilities on clades suffer from analogous boundary-curvature biases compared to frequentist confidence levels.
- Develop computationally efficient approximations to the two-level bootstrap correction — possibly using neural network surrogates for the tree-building algorithm — to make second-order corrected confidence values accessible for genome-scale phylogenomics datasets.
- Investigate the impact of character non-independence (linkage disequilibrium, correlated morphological measurements) on bootstrap confidence values, addressing the most serious acknowledged limitation of the multinomial column model.
- Apply the BCa methodology to other tree-like structures in population genetics, such as haplotype networks and ancestral recombination graphs, where confidence quantification faces analogous non-Euclidean topology challenges.
- Compare bootstrap confidence values, hypothesis-testing confidence levels, and Bayesian clade posterior probabilities empirically across diverse empirical datasets to establish practical guidelines for interpreting phylogenetic support in evolutionary biology.

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-12*
