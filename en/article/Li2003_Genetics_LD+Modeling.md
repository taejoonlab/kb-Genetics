---
tags: [genetics, class, article, en]
date: 2026-07-13
type: class
---

# Modeling Linkage Disequilibrium and Identifying Recombination Hotspots Using Single-Nucleotide Polymorphism Data

## Citation (NLM)
Li N, Stephens M. Modeling linkage disequilibrium and identifying recombination hotspots using single-nucleotide polymorphism data. Genetics. 2003;165(4):2213–2233.

**DOI:** DOI not identified in extracted text (Genetics, December 2003)

---

## Summary

Linkage disequilibrium (LD) — the non-independence of alleles at different genomic positions in a population sample — arises from a complex interplay of recombination, mutation, genetic drift, and demographic history. Li and Stephens introduce a new statistical model for LD patterns that directly relates observed haplotype structure to underlying recombination rates while remaining computationally tractable for whole chromosomes.

**Limitations of existing methods**: Most LD analyses at the time suffered from at least one of three shortcomings: (1) they computed pairwise LD statistics rather than modeling all loci simultaneously; (2) they assumed block-like LD structure, which may not hold everywhere; (3) they did not directly link LD patterns to recombination or other biological mechanisms.

**The PAC model**: Li and Stephens propose a "Product of Approximate Conditionals" (PAC) model. The key insight is that a new haplotype can be viewed as an imperfect mosaic of previously observed haplotypes. Formally, the new haplotype is "copied" from existing haplotypes according to a Markov process along the chromosome, with jumps (switches in copying template) occurring at rate ρ/k per physical distance, where ρ = 4Nc is the population-scaled recombination rate and k is the current number of haplotypes. More frequent jumps indicate higher local recombination rates. This is computed efficiently using standard hidden Markov model (HMM) algorithms. Two approximations are described: A (a simplified version of Fearnhead and Donnelly's approach) and B (empirically calibrated to reduce systematic bias in A).

**Estimation performance**: Simulation studies under the standard coalescent model show that PAC-B is competitive with or superior to Hudson's pairwise composite-likelihood estimator (ˆCL) for SNP datasets with ≥12 markers. For larger datasets, PAC-B shows less variability than ˆCL. Full-data coalescent MCMC methods (infs, Recombine) require orders of magnitude more computation time (30 hours vs. 30 seconds per dataset for PAC-B) and were sometimes less accurate. A systematic linear relationship between bias and log(average marker spacing) was identified in PAC-A, motivating the modified PAC-B.

**Variable recombination rate and hotspot detection**: The PAC model extends naturally to spatially varying recombination rates. A simple single-hotspot model (background rate c, hotspot region [a,b], magnitude η) allows log-likelihood ratio testing for hotspot presence. A more general model assigns an independent recombination rate multiplier γ_j to each inter-marker interval, using a prior distribution (log₁₀(γ_j) ~ N(0, 0.5²)) to regularize inference. Under various demographic models — island structure, population expansion, removal of low-frequency sites — hotspot detection power reached approximately 90% for hotspots of magnitude η = 10, with type I error rates near 0.05.

**Broader scope**: The authors outline how the PAC likelihood could support haplotype-based LD mapping for disease genes, haplotype phasing, and imputation of ungenotyped markers — applications that were subsequently developed extensively by the field.

**Limitations**: The PAC model approximates conditional distributions under a simplified neutral, constant-sized, panmictic population. It does not capture population expansion, structure, gene conversion, or selection. PAC likelihoods depend on haplotype ordering; averaging over 20 random orders is proposed as a pragmatic solution.

---

## Significance in Introduction Context

- Represents a conceptual shift from descriptive LD statistics to mechanistic modeling: LD patterns are directly linked to recombination history and population demography, not just summarized as pairwise correlations
- The "copying model" framework introduced here became the foundational paradigm for a generation of population genetics tools — haplotype phasing (PHASE), genotype imputation (MaCH, IMPUTE), local ancestry inference, and fine-scale recombination rate estimation (LDhat)
- Serves as an exemplary methods paper showing how biological intuition (genealogical copying with recombination) can produce computationally efficient yet interpretable probabilistic models

---

## Key References

Key references cited in the text (with DOI where identifiable):

1. **Fearnhead P, Donnelly P (2001)** — [https://doi.org/10.1093/genetics/159.3.1299](https://doi.org/10.1093/genetics/159.3.1299) — Estimating recombination rates from population genetic data; the FD approximation that Li & Stephens simplified and extended
2. **Stephens M, Donnelly P (2000)** — [https://doi.org/10.1111/1467-9868.00254](https://doi.org/10.1111/1467-9868.00254) — Inference in molecular population genetics; proposed the initial copying-based approximation for linked loci
3. **Hudson RR (2001)** — [https://doi.org/10.1093/genetics/159.4.1805](https://doi.org/10.1093/genetics/159.4.1805) — Pairwise composite-likelihood method for estimating ρ; primary comparison baseline for Li & Stephens
4. **Jeffreys AJ et al. (2001)** — [https://doi.org/10.1038/35073100](https://doi.org/10.1038/35073100) — Sperm typing evidence for recombination hotspots in the MHC class II region; experimental ground truth motivating the hotspot detection component

---

## Future Research Directions

- Developing improved conditional sampling distributions (CSPs) that account for realistic demographic histories (population expansion, bottlenecks, migration) to reduce bias in recombination rate estimates from non-equilibrium populations
- Incorporating gene conversion and crossover interference into the PAC framework to obtain more accurate fine-scale recombination maps from population SNP data
- Using genome-wide PAC-based recombination rate estimates to characterize sequence features associated with recombination hotspots and comparing with experimental data on PRDM9 binding sites

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
