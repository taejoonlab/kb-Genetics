---
tags: [genetics, class, population, en, 2026-07-12]
date: 2026-07-12
type: class
---

# Runs of homozygosity: windows into population history and trait architecture

## Citation (NLM)
Ceballos FC, Joshi PK, Clark DW, Ramsay M, Wilson JF. Runs of homozygosity: windows into population history and trait architecture. Nat Rev Genet. 2018;19(4):220-234. doi:10.1038/nrg.2017.109

**DOI:** [https://doi.org/10.1038/nrg.2017.109](https://doi.org/10.1038/nrg.2017.109)

---

## Summary

Runs of homozygosity (ROH) are extended genomic segments that are homozygous because an individual has inherited identical haplotypes from each parent. ROH have long been recognized as indicators of autozygosity arising from consanguineous mating or inbreeding, but this review comprehensively examines how ROH are in fact ubiquitous not only in inbred individuals but also in outbred populations, and how their distributional patterns precisely reflect the demographic history of both individuals and populations. The length and number of ROH mirror the depth of recent common ancestry and population history: long ROH indicate recent inbreeding or bottleneck events, while short ROH reflect ancient reductions in population size.

Two principal classes of ROH detection methods are in common use: observation-based sliding-window algorithms (e.g., PLINK) and model-based hidden Markov models (HMMs; e.g., Beagle, Garlic, BCFtools/ROH). Microarray SNP data are regarded as the standard for ROH detection owing to their low error rates, while whole-genome sequencing (WGS) complements this by capturing shorter ROH. ROH are broadly classified into three size categories: very short ROH (tens to hundreds of kb) reflecting linkage disequilibrium (LD); intermediate ROH (hundreds of kb to 2 Mb) representing background relatedness due to genetic drift; and long ROH (above 1–2 Mb) indicative of recent parental relatedness.

Global analyses of ROH distributions reveal that African populations harbour the fewest ROH, consistent with their large effective population size (Ne), whereas indigenous American populations (such as the Karitiana) exhibit the greatest ROH burden, reflecting a combination of bottleneck effects and inbreeding. West Asian and Pakistani populations show elevated frequencies of long ROH attributable to the high prevalence of consanguineous marriage. Within European populations, isolated communities such as the Amish, Hutterites, and rural Sardinians display elevated ROH levels. A secular trend is also apparent: over the past century, the number and total length of ROH in European Americans are estimated to have declined by 14% and 24%, respectively, tracking urbanisation and the breakdown of geographic isolation.

Studies linking ROH to complex disease provide evidence that genome-wide homozygosity burden influences a broad range of traits, including cardiovascular health, mental health, and cognitive function. This is interpreted through the concept of directional dominance, whereby dominance effects are systematically biased in one direction for fitness-related traits, such that increasing homozygosity tends to reduce trait values. ROH are enriched for recessive deleterious variants, raising the probability that such variants will be expressed in the homozygous state in inbred individuals. This is central not only to homozygosity mapping of recessive diseases but also to understanding the genetic basis of inbreeding depression.

Studies using ancient DNA have further extended the temporal reach of ROH analysis. High ROH levels comparable to those seen in modern isolated populations have been observed in Mesolithic European hunter-gatherers and the Altai Neanderthal; the latter is estimated to have an inbreeding coefficient of approximately F ≈ 0.125, consistent with an avuncular or half-sibling relationship. Among great apes, mountain gorillas show ROH proportions far exceeding those of even the most homozygous living human populations, a consequence of population size reduction driven by habitat fragmentation.

---

## Significance in Introduction Context

- **Universality of ROH and reflection of demographic history:** ROH are not confined to inbred individuals but occur universally across all human populations, and their patterns precisely reflect demographic events including effective population size, bottlenecks, admixture, and inbreeding.
- **Genetic interpretation of inbreeding depression:** ROH analysis provides empirical evidence that the primary cause of inbreeding depression is the unmasking of partially recessive deleterious variants in the homozygous state, while the contribution of overdominance is comparatively minor.
- **Application of ROH in complex disease research:** Incorporating ROH-based homozygosity burden as a predictor alongside individual SNPs in genome-wide association studies (GWAS) enables a more complete understanding of the genetic architecture of complex diseases.
- **Need for methodological standardisation:** Different ROH detection algorithms have distinct properties, and the choice of data type, minimum ROH length threshold, and population-specific parameter settings substantially affects results — the review systematically documents these differences and underscores the need for analytical standardisation.
- **Extension to ancient DNA and non-human primates:** Applying ROH analysis to ancient human genomes and great apes provides a comparative genomic framework for characterising inbreeding patterns and population size changes across the full span of human evolutionary history.

---

## Key References

1. **Broman KW, Weber JL (1999)** — [https://doi.org/10.1086/302057](https://doi.org/10.1086/302057) — The pioneering study that first identified and described long ROH in families used to construct human genetic maps; the starting point for ROH research
2. **Purcell S et al. (2007)** — [https://doi.org/10.1086/519795](https://doi.org/10.1086/519795) — Methods paper introducing the observation-based algorithm for ROH detection implemented in the PLINK software
3. **McQuillan R et al. (2008)** — [https://doi.org/10.1371/journal.pgen.1000234](https://doi.org/10.1371/journal.pgen.1000234) — First systematic genome-wide analysis of megabase-scale ROH distributions across HapMap populations using 700,000-SNP microarrays
4. **Pemberton TJ et al. (2012)** — [https://doi.org/10.1016/j.ajhg.2012.08.014](https://doi.org/10.1016/j.ajhg.2012.08.014) — Analysis of ROH distributions in 160 worldwide populations, reporting a correlation between serial bottlenecks following out-of-Africa migration and geographic distance
5. **Prüfer K et al. (2014)** — [https://doi.org/10.1038/nature12886](https://doi.org/10.1038/nature12886) — Use of the high-quality Altai Neanderthal genome to estimate inbreeding coefficients from elevated ROH burden
6. **Szpiech ZA et al. (2013)** — [https://doi.org/10.1093/genetics/gst144](https://doi.org/10.1093/genetics/gst144) — Demonstration that ROH are more enriched for deleterious variants than for neutral variants, establishing the role of ROH as reservoirs of evolutionary genetic burden
7. **Nakatsuka N et al. (2017)** — [https://doi.org/10.1038/ng.3872](https://doi.org/10.1038/ng.3872) — Estimation of inbreeding depression effects on a broad range of complex traits in large biobank datasets using the simple FROH metric

---

## Future Research Directions

- **Analysis of short ROH using high-depth whole-genome sequencing:** Current microarray-based studies are limited in their ability to detect ROH shorter than 1 Mb. As high-depth WGS data accumulate at scale, it will become possible to precisely quantify the contribution of short ROH (tens to hundreds of kb) to inbreeding depression and complex disease risk.
- **Large-scale meta-analysis of ROH and complex disease:** Combining phenotypic data from large biobanks (UK Biobank, All of Us, etc.) with ROH analysis will provide sufficient sample sizes to reliably estimate the effect sizes of genome-wide homozygosity burden across diverse traits including cancer, diabetes, and psychiatric disorders.
- **Functional characterisation of rare deleterious variants within ROH:** WGS-based identification of rare recessive deleterious variants enriched within ROH, followed by systematic cataloguing of their contributions to inbreeding depression and recessive disease risk at the level of gene function and molecular pathways, is needed.
- **Expansion of ancient DNA ROH analysis:** Applying ROH analysis to ancient human genomes spanning a wider range of regions and time periods will enable high-resolution temporal tracking of how the agricultural revolution, migration events, and cultural changes shaped inbreeding patterns within populations.
- **Application to conservation genetics of non-human animals:** ROH analysis in endangered species can quantify the loss of genetic diversity and the extent of inbreeding depression, and the use of ROH metrics to guide individual selection in conservation breeding programmes to minimise inbreeding warrants further development.

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-12*
