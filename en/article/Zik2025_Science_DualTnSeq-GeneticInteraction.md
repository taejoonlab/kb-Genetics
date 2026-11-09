---
tags: [genetics, class, article, en]
date: 2026-11-09
type: class
---

# Dual Transposon Sequencing Profiles the Genetic Interaction Landscape in Bacteria

## Citation (NLM)
Zik JJ, Price MN, Mayra KHA, Santoso AA, Arkin AP, Deutschbauer AM, Sham LT. Dual transposon sequencing profiles the genetic interaction landscape in bacteria. Science. 2025;389(6767):eadt7685. doi:10.1126/science.adt7685

**DOI:** [https://doi.org/10.1126/science.adt7685](https://doi.org/10.1126/science.adt7685)

---

## Summary

Gene redundancy and the huge fraction of genes of unknown function (about one-third in *E. coli*; annotation error rates of 30-50% for enzymes and transporters) limit what single-gene deletions can reveal. Genetic interactions, where a double mutant deviates from expectation (classically synthetic lethality), point to functionally related genes, but existing screens (SGA in yeast, GIANT-coli, cell-envelope interaction maps, CRISPRi) need a pre-built array of single mutants plus robotics, and conventional Tn-seq ([[en/article/VanOpijnen2009_NatMethods_TnSeq-FitnessGeneticInteraction]]) is "one-to-all": a query gene must be mutated first, because two random insertions in one cell are far beyond the reach of a single sequencing read. This Science paper introduces dual Tn-seq, an "all-to-all" platform for mining genetic interactions in the naturally competent pathogen *Streptococcus pneumoniae* D39W.

Design: two mariner (HIMAR1) transposons, RBloxSpec (spectinomycin) and RBloxErm (erythromycin), each carry a 20-nt random barcode, sequencing primer sites and a lox site (lox66 or lox71), arranged so that Cre recombination fuses the two barcodes into one readable dual barcode whatever the insertion orientation (the intervening chromosome is excised or inverted); the fusion is irreversible because lox66 + lox71 yields a non-functional lox72. The transposons lack terminators to avoid polar effects (and so can also reveal overexpression of downstream genes). Fusion worked for *pbp1a* and *pbp1b* insertions 493 kb apart in either orientation, and the zinc-inducible cre cassette did not alter growth of the Delta-pbp1a Delta-pbp1b mutant. Barcoded plasmid libraries (15.2 million and 8.8 million barcodes) were used for in vitro transposition into genomic DNA and transformation, giving ~620,000 (Spec) and ~230,000 (Erm) mutant libraries covering insertions in ~1,600 of 1,914 protein-coding genes. As a proof of concept, BarSeq reproduced the known synthetic lethal pairs *pbp1a*/*pbp2a* and *pbp1a*/*macP*. Genomic DNA from one library transformed the other (after optimizing transformation), producing ~1.4 billion double mutants plated on both antibiotics; colonies were pooled, recovered for ~1 doubling, cre was induced for 2 h (qPCR showed recombination saturated), and >10 billion fused barcodes were sequenced, 3.1 billion of which had both barcodes in ORFs. This covered 958,696 non-essential gene pairs (73% of ~1.3 million possible).

Analysis: a probabilistic model gives expected reads from single-gene barcode abundances; "readRatio" (observed/expected reads) and "zStrains" (Poisson z-score for number of double-mutant strains) identify negative (synthetic lethal and synthetic sick) and positive interactions, after mathematically correcting for chromosomal position and distance and filtering low-read or adjacent pairs. The positive controls *pbp1a/pbp2a* and *pbp1a/pbp1b* were recovered; *pbp1a/macP* was missed because the small *macP* gene had too little coverage. Of 107 gene pairs tested by direct reconstruction, 15 were synthetic lethal (at least 100-fold lower transformation efficiency) and 6 formed small colonies; of 31 viable double mutants, 15 had liquid-culture growth defects, judged against the minimum model (double mutant as fit as the less-fit single mutant). Medium (zStrains <= -3, readRatio <= 0.2) and strong (plus zStrains <= -4 or readRatio <= 0.05) thresholds have false discovery rates of 7% and 4% (shuffle test and functional relatedness); the medium threshold captured 28 of 36 validated defects (77.8% hit rate), and 244 interactions passed it (after excluding an origin-proximal enrichment). Compared with RB Tn-seq performed in 71 knockout backgrounds (104,961 interactions; 57 hits, ~0.04%), dual Tn-seq (0.025%) had ~65% of the sensitivity, in line with its 73% coverage, with correlated fitness values (Spearman rho ~0.56-0.63); moderate defects found by dual Tn-seq were often weak in RB Tn-seq, possibly owing to different outgrowth. COG analysis showed that interactions were enriched in amino acid, inorganic ion and nucleotide transport/metabolism (21% of genes but 33% of partners), reflecting redundant transporters and salvage versus de novo pathways, and that the largest group involved unknown-function genes (79 interactions, 67 with an annotated partner); 67 uncharacterized proteins received putative cellular roles.

Discoveries: (1) Spd_0310 (DUF1846) interacts strongly with *pyrG*; depleting it in a Delta-pyrG background caused a growth defect rescued by cytidine only; Tn-seq suppressors were insertions upregulating the nucleoside transporters *pnrABCD* and spd_1425 (the main cytidine transporter, by 5-fluorocytidine sensitivity), and loss of *purR* or *relA* (derepressing PurR via reduced (p)ppGpp); because the transporter mutations did not change the phenotype of pyrG or spd_0310 strains in the 5FC assay, Spd_0310 acts in CTP synthesis, not salvage, and purified protein converts UTP to CTP using ammonia only (PyrG uses glutamine or ammonia), so it was renamed PyrJ. In the Discussion: pyrJ occurs mostly in Firmicutes and Actinobacteria, ~31% of genomes with pyrJ lack pyrG (for example *Clostridioides difficile*), pyrJ interacts with the glutamine transporter gene *glnP* (a glutamine-poor advantage), and PyrJ is proposed to have arisen by fusing a P-loop ATPase with a cytidine deaminase-like domain. (2) YjbK (spd_0981, CYTH family) interacts with *murZ* (the predominant MurA/MurZ enolpyruvyl transferase in this species) but not *murA*; MurZ depletion in a Delta-yjbK background causes deformation and lysis, suppressors overexpress *murA* or *murC* or inactivate *ppc* (raising PEP for MurA), and ectopic murA, murC, yjbK or deletion of ppc rescues; YjbK is thus a putative activator of MurA, whether directly or via substrate availability, and YjbK homologs are found only in Firmicutes. (3) spd_0751-0753 (DUF969, DUF979 and a pyrrolidone-carboxylate peptidase) interact with the GlnPQ and Ami transporters, suggesting an alternative peptide or alpha-ketoglutarate import system, since pneumococcus lacks a Krebs cycle and is auxotrophic for glutamate/glutamine. Transporters with vague annotations (spd_1422, spd_0411-0412) were also assigned substrates.

Limitations noted: uneven insertion distributions (hotspots) amplify bias on crossing; small genes and intergenic regions are under-covered; mutants with strong defects are lost during library construction, so few positive interactions are detectable and the method is best for synthetic lethality; ~6 kb blind spots with reduced transformability affect 0.7% of interactions; high-density plating may cause reconstruction discrepancies. Compared with CRISPRi-based approaches (which can knock down essential genes but need guide libraries), dual Tn-seq needs only an inducible promoter, transposon mutagenesis and a working cre cassette, so it should extend to other bacteria (larger genomes need more depth) and to condition-specific double-mutant screens.

---

## Significance in Introduction Context

- Gives a modern, scalable version of epistasis and synthetic lethality: genes in redundant or parallel pathways reveal themselves only as double mutants.
- Shows how genetic interaction data assign function to unknown genes ("guilt by genetic association"), then how follow-up genetics (suppressor screens, depletion strains, rescue by metabolite) and biochemistry confirm it (PyrJ as a CTP synthase).
- Illustrates statistical genetics reasoning: expected versus observed double-mutant frequency under a null model (minimum model), false discovery rates, coverage and sensitivity trade-offs.

---

## Key References

1. **van Opijnen T, Bodi KL, Camilli A (2009)** — Tn-seq, Nat Methods 6:767-772 [doi:10.1038/nmeth.1377](https://doi.org/10.1038/nmeth.1377) — founding method that dual Tn-seq extends ([[en/article/VanOpijnen2009_NatMethods_TnSeq-FitnessGeneticInteraction]])
2. **Wetmore KM et al. (2015)** — Rapid quantification of mutant fitness in diverse bacteria by sequencing randomly bar-coded transposons, mBio 6:e00306-15 [doi:10.1128/mBio.00306-15](https://doi.org/10.1128/mBio.00306-15) — RB Tn-seq/BarSeq, the barcode readout used here.
3. **Costanzo M et al. (2016)** — A global genetic interaction network maps a wiring diagram of cellular function, Science 353:aaf1420 [doi:10.1126/science.aaf1420](https://doi.org/10.1126/science.aaf1420) — the complete yeast genetic interaction array.
4. **Typas A et al. (2008)** — High-throughput, quantitative analyses of genetic interactions in E. coli, Nat Methods 5:781-787 [doi:10.1038/nmeth.1240](https://doi.org/10.1038/nmeth.1240) — GIANT-coli, the arrayed bacterial approach dual Tn-seq avoids.
5. **Mani R et al. (2008)** — Defining genetic interaction, PNAS 105:3461-3466 [doi:10.1073/pnas.0712255105](https://doi.org/10.1073/pnas.0712255105) — the minimum model used to classify double mutants.
6. **Hoskins J et al. (1999)** — Gene disruption studies of penicillin-binding proteins 1a, 1b, and 2a in Streptococcus pneumoniae, J Bacteriol 181:6552-6555 [doi:10.1128/JB.181.20.6552-6555.1999](https://doi.org/10.1128/JB.181.20.6552-6555.1999) — known pbp interactions used as positive controls.
7. **Tsui HT et al. (2023)** — Negative regulation of MurZ and MurA underlies the essentiality of GpsB- and StkP-mediated protein phosphorylation in S. pneumoniae D39, Mol Microbiol 120:351-383 [doi:10.1111/mmi.15122](https://doi.org/10.1111/mmi.15122) — MurZ/MurA context for YjbK.
8. **Cain AK et al. (2020)** — TIS review, Nat Rev Genet [doi:10.1038/s41576-020-0244-x](https://doi.org/10.1038/s41576-020-0244-x) — context for TIS and RB-Tn-Seq ([[en/review/Cain2020_NatRevGenet_TIS-DecadeOfAdvances]]; not cited by this paper)

---

## Future Research Directions

- Run the double-mutant library under antibiotics or different nutritional conditions to map condition-specific genetic interactions.
- Adapt dual Tn-seq to other naturally competent or genetically tractable bacteria (larger genomes need more double mutants and sequencing depth) to illuminate "genetic dark matter" and find new drug targets against antimicrobial resistance; combine with CRISPRi to reach essential genes.
- Biochemical and structural follow-up of newly assigned functions (PyrJ, how YjbK modulates MurA directly or indirectly, spd_0751-0753 transport substrates) and of the 67 uncharacterised proteins given putative roles; improve coverage of small genes (such as *macP*), insertion hotspots and regions near the origin.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
