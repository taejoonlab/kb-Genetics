---
tags: [genetics, class, population, en]
date: 2026-07-12
type: class
---

# Statistical methods for detecting molecular adaptation

## Citation (NLM)
Yang Z, Bielawski JP. Statistical methods for detecting molecular adaptation. Trends Ecol Evol. 2000;15(12):496-503. doi:10.1016/S0169-5347(00)01994-7

**DOI:** [https://doi.org/10.1016/S0169-5347(00)01994-7](https://doi.org/10.1016/S0169-5347(00)01994-7)

---

## Summary

This review by Ziheng Yang and Joseph Bielawski summarizes the statistical framework for detecting adaptive molecular evolution using the ratio of nonsynonymous (dN) to synonymous (dS) substitution rates in protein-coding DNA sequences. The central premise is that the dN/dS ratio (also denoted omega, v) reflects the selective pressure acting on amino acid changes: v < 1 indicates purifying selection removing deleterious changes, v = 1 indicates neutral evolution, and v > 1 is the signature of positive (Darwinian) selection fixing advantageous amino acid substitutions. The review addresses both the estimation of dN and dS and the statistical tests used to detect adaptive evolution.

Two classes of methods estimate dN and dS between a pair of sequences. Approximate methods, developed since the early 1980s, involve counting synonymous and nonsynonymous sites and differences, then correcting for multiple substitutions. These methods differ in how they handle the transition/transversion rate bias (kappa) and codon-usage bias. Ignoring transition/transversion bias leads to underestimation of S and overestimation of dS, while ignoring codon-usage bias has the opposite effect on S and can produce errors of threefold or more in the estimated v ratio — as demonstrated by comparing human and orangutan alpha-2 globin gene sequences under eight different model assumptions. Maximum likelihood (ML) methods based on explicit codon substitution models provide the most principled estimation, simultaneously handling multiple hits, transition bias, and codon-usage bias within a single probabilistic framework.

To detect positive selection along specific lineages, branch models assign different v ratios to different branches of a phylogeny. A likelihood-ratio test compares a null model (single v across all branches) with an alternative allowing a separate v for a predefined lineage. Messier and Stewart's 1997 analysis of primate lysozyme, which identified two lineages with elevated dN, exemplifies this approach. However, positive dN/dS averaged over many sites is a conservative test because a few sites under strong positive selection can be masked by the majority of sites under purifying selection.

Site-specific models address this limitation by treating v as heterogeneous across sites within a protein. Yang et al. (2000) implemented several codon-substitution models: M1 (neutral) assumes sites are either conserved (v = 0) or neutral (v = 1); M2 (selection) adds a class with v estimated freely; M7 (beta distribution) serves as a flexible null model with 0 < v < 1; and M8 (beta + additional class) allows a class with v > 1. Likelihood-ratio tests comparing nested model pairs (M1 vs. M2; M7 vs. M8) test whether any sites are under positive selection. Bayesian posterior probabilities then identify which specific sites are most likely positively selected. Application to abalone sperm lysin identified 27% of sites in a class with v = 3.065, distributed around the protein surface — sites functionally implicated in gamete recognition and rapid evolution in a coevolutionary arms race with egg coat proteins.

The review concludes by acknowledging important limitations. All methods detect selection only if dN exceeds dS averaged over the relevant dimension (sites, branches, or time). Balancing selection, which maintains diversity without driving dN above dS overall, will not be detected. Very short episodes of positive selection affecting only a few sites may also be missed. The assumption of no intragenic recombination may inflate false positives if different gene regions have different true phylogenies. Future improvements would include models that allow v to vary simultaneously over both sites and lineages (branch-site models), and simulation studies to characterize statistical power as a function of gene length, number of sequences, and sequence divergence.

---

## Significance in Introduction Context

- Establishes the dN/dS ratio as the primary framework for distinguishing purifying selection, neutral evolution, and positive selection in protein-coding sequences — foundational vocabulary for molecular evolution and population genomics
- Demonstrates through the alpha-2 globin example that methodological assumptions (transition bias, codon-usage bias) critically affect dN/dS estimates, emphasizing the need for maximum likelihood codon models over approximate methods
- Introduces site-specific models that permit detection of positive selection at individual amino acid positions even when the majority of sites are under strong purifying selection — a major methodological advance enabling molecular adaptation studies in real proteins
- Provides the Bayesian posterior probability framework for identifying specific positively selected sites, enabling functional follow-up (structural mapping, ancestral protein resurrection) at residue-level resolution
- Situates dN/dS analysis within the broader debate between the neutral theory and molecular adaptation, directly connecting statistical methods to population genetics theory

---

## Key References

1. **Goldman N & Yang Z (1994)** — https://doi.org/10.1093/oxfordjournals.molbev.a040153 — Original codon substitution model (GY94) providing the ML framework for dN/dS estimation
2. **Nielsen R & Yang Z (1998)** — https://doi.org/10.1093/genetics/148.3.929 — First likelihood models for detecting positively selected amino acid sites; introduced M1 and M2 models applied to HIV-1 envelope gene
3. **Yang Z et al. (2000)** — https://doi.org/10.1093/genetics/155.1.431 — Introduced site models M3, M7, M8 with improved power; demonstrated positive selection in abalone sperm lysin and other genes
4. **Kimura M (1983)** — Neutral Theory of Molecular Evolution, Cambridge University Press — foundational text establishing the null model against which adaptive evolution must be tested
5. **Messier W & Stewart CB (1997)** — https://doi.org/10.1038/385151a0 — Pioneering application of ancestral sequence reconstruction and branch-specific dN/dS to detect episodic adaptive evolution in primate lysozymes
6. **Yang Z & Nielsen R (2000)** — https://doi.org/10.1093/oxfordjournals.molbev.a026236 — Improved method for estimating synonymous and nonsynonymous rates under realistic evolutionary models accounting for both biases
7. **Nei M & Gojobori T (1986)** — https://doi.org/10.1093/oxfordjournals.molbev.a040410 — Classic approximate method for estimating synonymous and nonsynonymous substitution rates; standard reference for comparison

---

## Future Research Directions

- Development of branch-site models that allow v to vary simultaneously across both lineages and amino acid sites, enabling detection of episodic positive selection affecting a subset of sites on a specific lineage
- Simulation studies to characterize statistical power of site models as a function of gene length, number of sequences, and sequence divergence, and to assess false-positive rates under model misspecification (e.g., intragenic recombination)
- Extension of codon models to incorporate chemical properties of amino acid substitutions, so that "radical" vs. "conservative" changes are distinguished when defining positive selection
- Development of methods capable of detecting balancing selection, which maintains variation at loci without requiring dN > dS, such as incorporating population frequency data alongside divergence data
- Integration of structural information (protein crystal structures, functional domain annotations) directly into likelihood models to construct hypothesis-driven tests of positive selection at a priori functional sites

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-12*
