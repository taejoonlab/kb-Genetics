---
tags: [genetics, class, article, en, 2025-2026]
date: 2026-09-06
type: class
---

# Unexpectedly low recombination rates and presence of hotspots in termite genomes

## Citation (NLM)
Everitt T, Rönneburg T, Elsner D, Olsson A, Liu Y, Larva T, Korb J, Webster MT. Unexpectedly low recombination rates and presence of hotspots in termite genomes. Genome Res. 2025;35(5):1124-1137. doi:10.1101/gr.279180.124

**DOI:** [https://doi.org/10.1101/gr.279180.124](https://doi.org/10.1101/gr.279180.124)

**Conceptual framework:** [[en/review/Joseph2026_PLoSGenet_RecombinationHotspots]]

---

## Summary

Meiotic recombination ensures correct chromosome disjunction and creates new allele combinations, but it can also generate structural mutations and break up favourable combinations, so each species' rate reflects a trade-off. The **highest recombination rates recorded in animals belong to social Hymenoptera**: *Apis* honey bees reach 17–25 cM/Mb (*A. mellifera* 20.8, *A. cerana* 17.4, *A. florea* 20.8, *A. dorsata* 25.1), and other social species are also high (bumblebee *Bombus terrestris* 8.9, stingless bee *Frieseomelitta varia* 9.3–12.5, wasp *Vespula vulgaris* 9.7, ants *Pogonomyrmex rugosus* 11.1 and *Acromyrmex echinatior* 6.1 cM/Mb). Solitary relatives are unremarkable (*Megachile rotundata* 1.0, *Nasonia* 1.5 cM/Mb); 15 non-hymenopteran insects average 2.2 cM/Mb.

Adaptive hypotheses tie this to **eusociality**: more intra-colony diversity for worker task specialisation, diversified immune genes against parasites, reduced variance in relatedness (less kin conflict), or freer evolution of caste-specific genes. None is strongly supported, and all the data come from one order. **Termites** (Blattodea) are an **independent origin of eusociality**, ~400 My diverged from Hymenoptera, and they differ in key ways: hemimetabolous, **both sexes diploid** (no haplodiploidy), workers of both sexes, colonies headed by a king and a queen. The authors studied two species of contrasting social complexity: the fungus-growing *Macrotermes bellicosus* (colonies of millions, sterile workers) and the drywood *Cryptotermes secundus* (a few hundred individuals, totipotent workers). The aims were to (1) test whether sociality predicts high recombination, (2) look for hotspots and PRDM9, and (3) relate recombination to methylation and caste-biased expression.

**Data and approach.** Ten unrelated individuals per species (each from a different colony) were sequenced to ~31–34×; 5.6 M SNPs (*M. bellicosus*) and 15.1 M SNPs (*C. secundus*) were called (one *C. secundus* sample was excluded, leaving 19 individuals). Diversity (θW = 0.14% and 0.44%) is comparable to honey bees. Recombination was inferred from **linkage disequilibrium**: the population-scaled rate ρ = 4NEr was estimated with LDhat and LDhelmet (rjMCMC), and converted to r using NE = θW/4μ. Because there is no termite mutation rate, μ was taken from other insects (2.7×10⁻¹⁰ to 8.1×10⁻⁹; typical 4.5×10⁻⁹; orchid mantis 1.85×10⁻⁹) — so r estimates span more than an order of magnitude (**Table 1**).

**Result 1 — recombination is low.** LD decays far more slowly in both termites than in honey bees (**Fig 1**). With a typical insect μ, r = 0.55 and 0.49 cM/Mb (LDhat) or 1.39 and 1.67 cM/Mb (LDhelmet) for *M. bellicosus* and *C. secundus*; the two methods correlate at Spearman ρ ≈ 0.95. Every estimate is far below eusocial Hymenoptera (6–25 cM/Mb) and close to the insect/metazoan average — the more socially complex species is not higher. **Eusociality is therefore not a universal driver of high recombination.** A sanity check: one CO per chromosome with 2n = 42 and 40 implies a minimum of 0.92 and 1.01 cM/Mb. Estimates using the mantis μ (0.57 and 0.69 cM/Mb) fall slightly below this; the authors discuss sex-averaged rates (one sex might not recombine), unassembled sex chromosomes (X1X2/Y1Y2 and X/Y) and meiotic ring/chain chromosomes seen in some termites.

**Result 2 — hotspots.** Recombination is extremely **punctate**: **50% of recombination occurs in 0.4% (*M. bellicosus*) and 0.2% (*C. secundus*) of the genome**, versus 32% in *A. mellifera* and ~6% in humans (**Fig 3**; landscapes in **Fig 2**). 0.2% and 0.6% of 1-kb windows exceed the genome mean by ≥4 SD, whereas the honey bee has none. Hotspots were defined as 2-kb regions with ≥5× the local background (~40,000 per species). STREME found enriched 8–20-mers, but none was present in >5% of hotspots or enriched >2×, so no credible hotspot motif emerged.

**Result 3 — PRDM9.** Both genomes contain a **full-length PRDM9** with KRAB, SSXRD, PR/SET and zinc-finger domains in the correct order (**Fig 4**; annotated in *C. secundus*; located on scaffold 42 of *M. bellicosus* by homology and confirmed by GeneWise alignment of the *Zootermopsis* protein). Predicted zinc-finger binding motifs (Fig 4D, E) were **not** associated with elevated recombination. The authors' preferred interpretation is PRDM9-directed hotspots whose motifs turn over quickly, as in mammals; alternatives are mis-assembled zinc-finger arrays (minisatellites) or an unknown mechanism. The paper is therefore suggestive, not conclusive, about PRDM9.

**Result 4 — methylation and genomic correlates.** In 10-kb windows, recombination correlates weakly with CpG O/E (ρ = 0.24 and 0.10) and GC content (much weaker than the honey bee's R² = 0.51, consistent with little gBGC), and strongly with nucleotide diversity π (ρ = 0.48 and 0.31, the expected signature of linked selection). CpG O/E is bimodal and lowest in exons, so germline methylation is concentrated in gene bodies (**Fig 5**). Recombination is lower in genes than in flanks (significant in *C. secundus*) and, among genes, correlates with CpG O/E (ρ = 0.315 and 0.196). Caste-biased expression categories differ in ρ (**Fig 6**), but in linear models **CpG O/E is the strongest predictor and caste bias has no significant effect** — expression differences in recombination are explained by methylation, as in honey bees.

**Interpretation.** High recombination in social Hymenoptera is probably due to something specific to that order. The authors propose **intense selection among haploid males**: many social Hymenoptera produce strongly male-biased reproductive offspring, with thousands of drones competing for few queens — analogous to sperm competition, but with haploid adults that expose recessive deleterious alleles and express many more genes. Recombination makes this selection more effective. *Apis*, with the most male-biased sex ratios, has the highest rates, whereas termite reproductive sex ratios are roughly even.

---

## Significance in Introduction Context

- Uses real cM/Mb values across taxa to show that the **recombination rate itself is an evolving trait** (Lecture 07)
- Shows **LD-based inference** (Lecture 07 §5) in practice: ρ = 4NEr from unrelated individuals, no crosses or pedigrees — and how uncertainty in μ propagates into r
- A textbook **test by phylogenetic replication**: a hypothesis built on one order is tested on an independent origin of the trait
- Pairs with Joseph et al. 2026: an insect with **hotspots plus a full-length PRDM9**, consistent with PRDM9 in the animal ancestor, contrasted with hotspot-poor *Drosophila* and honey bees
- Connects recombination to **germline DNA methylation**, a theme that recurs in mammals (CpG islands) and in the Joseph review's repeat-avoidance hypothesis
- The cumulative plot (Fig 3) is an intuitive way to quantify "how concentrated" a landscape is

---

## Key References

1. **Wilfert, Gadau & Schmid-Hempel (2007)** — genome-wide recombination-rate variation across animals — source of the social-insect pattern and the 2.2 cM/Mb insect average
2. **Stapley et al. (2017)** — variation in recombination frequency and distribution across eukaryotes — framework for recombination rate as an evolving trait
3. **Beye et al. (2006); Wallberg et al. (2015)** — honey bee recombination (and its link to methylation) — the extreme values behind the eusociality hypothesis
4. **Kent & Zayed (2013); Kent et al. (2012)** — recombination and the evolution of eusociality; worker-biased genes — the adaptive hypotheses tested here
5. **Baudat et al. (2010); Myers et al. (2010); Parvanov et al. (2010)** — PRDM9 determines mammalian hotspots — the mechanism proposed for termites
6. **Baker et al. (2017)** — repeated losses of PRDM9 across vertebrates — context for PRDM9 presence/absence
7. **Auton & McVean (2007); Chan et al. (2012)** — LDhat and LDhelmet — the LD-based estimators used
8. **Hartfield & Keightley (2012)** — the evolution of recombination — costs and benefits

---

## Future Research Directions

- Test whether termite PRDM9 is functional: germline expression, DNA binding, and motif match to inferred hotspots (e.g. DSB or ChIP-seq maps)
- Validate LD-based rates with pedigree or gamete-sequencing maps, and obtain a termite mutation rate to pin down r
- Sample other independent origins of sociality (social aphids, thrips, other Blattodea) and more solitary Hymenoptera
- Test the haploid-male selection hypothesis directly: simulations of recombination-modifier evolution under different sex ratios, and haplodiploid vs. diploid taxa matched for sociality
- Determine whether methylation causally suppresses recombination in insects (perturbation of DNMT activity)
- Resolve the low-rate puzzle: sex-specific rates, sex-chromosome assembly and meiotic chain configurations

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-06; revised from the full PDF (text, Table 1, Figs 1–6, Methods) by **Claude Opus 5.5** (Claude Cowork) on 2026-09-23*
