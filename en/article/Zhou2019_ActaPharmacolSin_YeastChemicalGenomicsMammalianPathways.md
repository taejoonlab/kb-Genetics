---
tags: [genetics, class, article, en]
date: 2026-11-09
type: class
---

# Integrating Yeast Chemical Genomics and Mammalian Cell Pathway Analysis

## Citation (NLM)
Zhou FL, Li SC, Zhu Y, Guo WJ, Shao LJ, Nelson J, Simpkins S, Yang DH, Liu Q, Yashiroda Y, Xu JB, Fan YY, Yue JM, Yoshida M, Xia T, Myers CL, Boone C, Wang MW. Integrating yeast chemical genomics and mammalian cell pathway analysis. Acta Pharmacol Sin. 2019;40:1245-1255. doi:10.1038/s41401-019-0231-y

**DOI:** [https://doi.org/10.1038/s41401-019-0231-y](https://doi.org/10.1038/s41401-019-0231-y)

---

## Summary

The study asks whether yeast can serve as a general surrogate platform for predicting the bioactivity of compounds in mammalian cells. It uses the pooled, barcoded chemical-genomic pipeline of Piotrowski et al. (2017): a diagnostic set of 310 non-essential gene deletion strains, all in a drug-hypersensitive *pdr1* *pdr3* *snq2* background, is grown competitively with a compound; strain barcodes plus a compound-specific PCR tag allow multiplexed next-generation sequencing, and z-scores of strain depletion or enrichment relative to DMSO are computed with BEAN-counter (batches were processed separately and the first SVD component removed to correct batch effects). The chemical-genetic profile is compared with the global yeast genetic interaction network from synthetic genetic array (SGA) analysis, in which genes of the same pathway share similar interaction profiles. The reasoning is that a loss-of-function mutation models a compound that inhibits the gene product, so negative genetic interactions are analogous to negative chemical-genetic interactions. The CG-TARGET pipeline predicts perturbed GO biological processes (1309 terms) with a false discovery rate estimated from control and resampled profiles; FDR of 25% or less defines high-confidence predictions, and processes are mapped to 17 functional neighborhoods (SAFE) of the network.

Of 333,200 synthetic and natural compounds in the Chinese National Compound Library (CNCL), 5,360 (1.6%) inhibited growth of the hypersensitive strain (the Results state more than 20% inhibition at 20 uM; the Methods describe selecting compounds with 45-75% inhibition for profiling) and went through chemical-genetic profiling. Of these, 1,109 (21%) had high-confidence bioprocess predictions. A reference library of 1,898 approved drugs gave 77 high-confidence profiles from 160 initial hits (48%, over twice the CNCL rate). Placing compounds on the network at the gene with the most similar profile showed drugs landing in expected bioprocesses: idarubicin (topoisomerase II poison) in DNA replication and repair, delanzomib/CEP-18770 (proteasome) in protein degradation with *RPT6* as top target, and mocetinostat (HDAC inhibitor) in mRNA processing; triapine (ribonucleotide reductase) and 5-FU (thymidylate synthase) both mapped to *NOP2*, reflecting RNA-based cytotoxicity. CNCL predictions were over-represented in vesicle trafficking, glycosylation and metabolism and under-represented in mitosis, chromatin organization, mRNA processing and DNA repair, similar to other large libraries (RIKEN Natural Product Depository, NIH Structural Diversity Set). Comparing profiles directly by Pearson correlation (PCC > 0.2588, the top 5% of pairs), 861 (78%) of the 1,109 CNCL compounds resembled at least one of 66 (86%) of the 77 approved drugs, letting uncharacterized compounds inherit mammalian mode-of-action annotations.

Two pathways were used for validation. For autophagy (conserved from yeast to human), 38 CNCL compounds with profiles resembling trifluoperazine or wortmannin (11 of them in the top ~0.4%, PCC > 0.5) were tested in HEK293 cells stably expressing GFP-LC3: 14 of 38 (37%) increased GFP-LC3 puncta to levels like rapamycin (200 nM positive control), three representatives (CD0345-E003, CD0354-A010, WNN0090-F002) increased LC3-II in a time-dependent manner and the other 11 increased LC3-II at 24 h, and electron microscopy showed autophagic vacuoles (AVi and AVd) for the three representatives. None of 26 control compounds with unrelated predictions induced puncta, and validated compounds had a higher mean PCC (0.568) than all 38 (0.456), so higher profile similarity predicted validation. Validated hits split into two groups: two compounds passing all assays (including electron microscopy and the LC3-II time course) mapped to DNA replication/repair and mitosis (consistent with DNA damage-induced targeted autophagy through Mec1/Tel1/Rad53 in yeast), while most others mapped to vesicular trafficking with predictions such as vacuolar acidification and ATP-coupled proton transport, relating to the lysosomal H+-ATPase. The discussion notes that all autophagy-modulating compounds are cationic amphiphilic drugs, which can accumulate in autophagosomal compartments and may partly explain the effect. For tubulin cytoskeleton assembly, 16 predicted compounds were tested by cell-cycle analysis in HeLa cells and two disrupted tubulin function.

For Wnt/beta-catenin signaling, a pathway absent from yeast, 18 CNCL compounds correlated with the known inhibitor FH535 (PCC 0.28-0.42, top ~4%). In a TCF/LEF1 luciferase reporter in HepG2 cells at 20 uM, FH535 reduced signal by 72.08%, and three compounds did so too: CD0450-A007 (39.61%), 3215-1 A11 (61.64%) and 3305-2 G4 (53.08%). Only 3305-2 G4 (the alkaloid drupacine from *Cephalotaxus fortunei*) also reduced beta-catenin protein, in a dose-dependent way, and its reporter IC50 (7.44 uM) matched FH535 (7.43 uM). Of 24 random compounds, two (CD0203-G006, CD0251-G005) inhibited the reporter but none changed beta-catenin levels. FH535 and 3305-2 G4 mapped to different network regions (glycosylation/protein folding/cell wall versus mRNA processing) but shared the process prediction "response to acidic pH" (drivers *BCK1*, *SLT2*) and had PCC ~0.35 (P = 1.05 x 10^-8). A "pseudo-compound" profile built from the weighted consensus of the two predicted *CDC73* (5th of 4625 genes) and *MRK1* (6th), whose human homologs, parafibromin (PAF1 complex, binds beta-catenin) and GSK-3 (phosphorylates beta-catenin for degradation), are key Wnt components. Autophagy-linked compounds had higher correlations (~0.8) than Wnt-linked ones (~0.35), reflecting conservation. The authors conclude that target predictions from an unbiased yeast screen can be validated in mammalian cells, directly for conserved functions or by inference from profiles of drugs with known action, and whether drupacine's anticancer effect involves Wnt signaling remains to be tested.

---

## Significance in Introduction Context

- Shows how genetic interaction networks (synthetic lethality, SGA) become a reference map for interpreting drug action.
- Demonstrates barcoded pooled mutant fitness assays read by sequencing, a direct application of reverse genetics.
- Illustrates profile-similarity ("guilt by association") reasoning for assigning function to unknown compounds, and why validation needs negative control sets.

---

## Key References

1. **Piotrowski JS, et al. (2017)** — Functional annotation of chemical libraries across diverse biological processes, Nat Chem Biol 13:982-993 — the diagnostic-set chemical-genomic platform used here
2. **Simpkins SW, et al. (2018)** — Predicting bioprocess targets of chemical compounds through integration of chemical-genetic and genetic interactions, PLoS Comput Biol 14:e1006532 — the CG-TARGET method
3. **Costanzo M, et al. (2016)** — A global genetic interaction network maps a wiring diagram of cellular function, Science 353:1381 — the network used to interpret profiles
4. **Costanzo M, et al. (2010)** — The genetic landscape of a cell, Science 327:425-431 — SGA-based global genetic interaction map
5. **Parsons AB, et al. (2004)** — Integration of chemical-genetic and genetic interaction data links bioactive compounds to cellular target pathways, Nat Biotechnol 22:62-69 — chemical-genetic profiles
6. **Hoepfner D, et al. (2014)** — High-resolution chemical dissection of a model eukaryote reveals targets, pathways and gene functions, Microbiol Res 169:107-120 — profile similarity for drugs with direct yeast targets
7. **Simpkins SW, et al. (2019)** — Using BEAN-counter to quantify genetic interactions from multiplexed barcode sequencing experiments, Nat Protoc 14:415-440 — data processing
8. **Mosimann C, Hausmann G, Basler K (2006)** — Parafibromin/Hyrax activates Wnt/Wg target gene transcription by direct association with beta-catenin/Armadillo, Cell 125:327-341 — basis for the CDC73 prediction

---

## Future Research Directions

- Test whether drupacine (3305-2 G4) acts through Wnt/beta-catenin signaling and identify its direct target, and examine other validated hits for specific modes of action.
- Use yeast chemical-genetic similarity to approved drugs as a framework for pathways absent from yeast, by identifying orthologous yeast gene targets (such as *CDC73* and *MRK1*) for compounds acting on non-conserved human pathways.
- Apply the approach to pathway-specific drug leads for a wide variety of human diseases; it is most powerful for essential, highly conserved pathways, where correlations are high.
- Probe whether the segregation of autophagy hits into vesicular-trafficking versus DNA-replication/repair groups reflects distinct modes of action, and the role of cationic amphiphilic drug accumulation.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
