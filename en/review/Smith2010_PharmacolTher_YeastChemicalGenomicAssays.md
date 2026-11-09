---
tags: [genetics, class, review, en]
date: 2026-11-09
type: class
---

# A Survey of Yeast Genomic Assays for Drug and Target Discovery

## Citation (NLM)
Smith AM, Ammar R, Nislow C, Giaever G. A survey of yeast genomic assays for drug and target discovery. Pharmacol Ther. 2010;127(2):156-164. doi:10.1016/j.pharmthera.2010.04.012

**DOI:** [https://doi.org/10.1016/j.pharmthera.2010.04.012](https://doi.org/10.1016/j.pharmthera.2010.04.012)

---

## Summary

This review surveys the chemical genomic assays developed in *Saccharomyces cerevisiae* over roughly the preceding decade for identifying the mechanism of action of known drugs and novel small molecules in vivo. The authors begin from the limits of target-based drug discovery: targets are chosen for prior knowledge, precedent ("me too" targets), essentiality and druggability, which biases discovery toward well-characterized proteins, and in vitro assays with purified components cannot predict off-target consequences in cells. Approval rates for new chemical entities have stayed flat despite rising R&D costs, so cell-based phenotypic screens have regained interest, because hits are cell-permeable; the cost is that the cellular target of a hit must then be determined. Yeast assays let the relative sensitivity of all potential targets be measured at once. About 45% of yeast genes have mammalian homologs (BLAST e < 10^-10), but the limits are real: high compound concentrations are often needed because of the cell wall and numerous efflux pumps and detoxification systems, and metazoan-specific processes are absent (although yeast models of neurodegeneration, diabetes and angiogenesis exist).

The core of the review describes assays built on the barcoded Yeast KnockOut (YKO) collection (haploid MATa and MATalpha, heterozygous and homozygous diploid deletions), in which each strain carries two unique 20-bp barcodes. The pooled strains are grown competitively with or without compound, genomic DNA is extracted, barcodes are PCR-amplified with common primers, and abundance is read out by hybridization to a TAG4 microarray or by next-generation sequencing (Fig. 1A). **Haploinsufficiency profiling (HIP)** screens heterozygous diploids: the strain heterozygous for the gene encoding the drug target is specifically sensitized, so the most depleted strain often identifies the target, with no prior knowledge of either compound or target. Its feasibility has been shown with well-characterized and novel compounds, and drugs whose direct target is absent from yeast (for example neuroleptics) still reveal off-target mechanisms. A plate-based alternative (pinning collections onto compound agar and scoring colony size) uses 1 to 2 orders of magnitude more compound, although recent work shows liquid and solid-media genetic interactions correlate well. Where halving gene dosage is not enough, the barcoded DAmP collection (a marker upstream of the 3' UTR; on average about 10% of wild-type protein) detects haploinsufficiency not seen in heterozygotes, and because heterozygote and DAmP barcodes do not overlap, both can be run on one array to widen dynamic range. The authors argue that if a known target appears only in DAmP or temperature-sensitive alleles, it may not be the primary mechanism: 5-FU is thought to inhibit Cdc21, but yeast lacks thymidine kinase and genome-wide assays show the main action is misincorporation of fluorinated nucleotides into RNA. Few drugs hit a single gene product (imatinib is cited), so an in vivo view of all targets is valuable. Limits are targets with no yeast homolog, targets whose inhibition does not affect growth, and non-essential or redundant targets. Across more than 2000 compounds, the authors report they have not yet failed to identify a target that is well characterized and whose inhibition impairs growth.

**Homozygous profiling (HOP)** uses complete deletions of non-essential genes (haploid or diploid). The target is absent, so HOP reveals genes that buffer the target pathway and are required for growth in the compound, which is informative even for compounds lacking a protein target. DNA-damage response genes are a case in point: Lee et al. (2005) defined the importance of different DNA-repair modules for 12 DNA-damaging agents, and each agent, even among alkylating agents, gave a unique genome-wide signature. Clustering profiles against well-characterized drugs infers mechanism. Correlating HOP profiles with synthetic genetic array (SGA) profiles of a conditionally essential query gene (Fig. 1B) allows the query gene to be inferred as the target; this identified Ero1 as the target of a novel small molecule (Costanzo et al. 2010). A yeast K28 killer-toxin mutant screen is another variant. HIP and HOP are complementary, but definitive proof of a drug-target interaction still needs independent in vitro binding or activity assays.

**Multi-copy suppression profiling (MSP)** tests whether target overexpression confers resistance. The idea dates to Rine et al. (1983), who identified *ALG7* as the tunicamycin target with a high-copy genomic library on solid medium. Hoon et al. (2008) miniaturized it into pooled liquid culture at doses inhibiting wild type by about 90%, hybridizing recovered inserts to a TAG4 array (Fig. 1C); it correctly identified Dfr1, Erg11 and Tor1 as the targets of methotrexate, fluconazole and rapamycin. Drug pumps can dominate the resistant set, which can be alleviated by using pump-deficient backgrounds. The authors compare libraries (Table 1): random genomic fragments, the Yeast Genome Tiling collection (about 10-kb inserts, 97.2% coverage, but several genes per insert), GAL1-inducible ORF libraries (about 80% of ORFs; Butcher et al. recovered TOR genes for rapamycin; induction may not reflect native levels and about 15% of genes are toxic when overexpressed), and the MoBY-ORF collection (single ORFs with native UTRs, low-copy CEN plasmids, 90% of ORFs, carrying the same two barcodes as the YKO strain). Toxic overexpressed genes can seed chemical-suppressor screens, as with *Pseudomonas aeruginosa* genes and a human p38-expressing yeast strain. MoBY-ORF also enables complementation of recessive resistant mutants (Fig. 1D): *fpr1* was recovered for rapamycin (Fpr1 binds rapamycin to form a toxic complex that inhibits Tor1), and an essential ergosterol-pathway enzyme was linked to theopalauamide, which binds ergosterol and defines a new class of sterol-binding compounds. MSP also works across genomes: a *Candida albicans* library in yeast identified the Glc7 ortholog as resistant to calyculin A.

**Comparative expression profiling** matches drug-induced transcript profiles with those of deletion mutants. Marton et al. (1998) showed 3-amino-triazole treatment resembles *his3*Delta, but FK506 correlated poorly (r = -0.23) with *fpr1*; Hughes et al. (2000) systematically built a compendium of about 300 mutant and several dozen drug profiles. Growth inhibition is not required, but the environmental stress response can swamp profiles, full coverage would need all deletions and many doses, and knockdown (drug) differs from knockout. The connectivity map (Lamb et al. 2006) transferred the concept to human cell lines. Table 2 compares the assays (genome-wide, target identification, buffering pathways, compound consumption, growth inhibition required), and Table 3 lists drug-target pairs confirmed in yeast (for example cerivastatin and lovastatin/Hmg1, tunicamycin/Alg7, methotrexate/Dfr1, fluconazole/Erg11, rapamycin/Tor1, calyculin A/Glc7, FK506 and cyclosporin A/Cnb1, and the novel compound erodoxin/Ero1).

The final section looks ahead. Whether yeast hits became approved drugs cannot be fully known, though key assay patents were licensed; rapamycin (Tor1/Tor2) and the antifungal AN260 (a tRNA synthetase inhibitor in phase 2) are cited examples. The authors expect integration of diverse yeast datasets (interactomics, the "diseaseome") to be a feature of the next decade. Yeast's main advantages are finding mechanism for compounds of unknown action, assessing all targets simultaneously in vivo (currently only possible in yeast), supporting drug repurposing, and unbiased discovery of targets presumed undruggable; its key contribution may be specific chemical probes (needing medicinal-chemistry optimization) that reveal druggable targets and scaffolds and motivate studies of conserved pathways in human cells. They note the shift from "magic bullets" to "magic shotguns", multi-target drugs and combination therapy, where yeast can test thousands of combinations in sensitized backgrounds. Yeast-derived methods are moving to other systems: MSP with the human ORFeome in yeast, MSP in *E. coli* with an essential-gene overexpression collection (Pathania et al. 2009), pooled RNAi screens in mammalian cells, use of yeast synthetic lethality to prioritize human interactions (RAD54B/FEN1), the K-Ras synthetic-lethal shRNA screen that pointed to PLK1, and PARP inhibition in BRCA1/2-mutant tumors. Yeast will remain a test-bed and a means of confirming results.

---

## Significance in Introduction Context

- Shows how a classical genetic idea, gene dosage and haploinsufficiency, becomes a genome-scale tool: the heterozygote for the target gene is the most drug-sensitive strain.
- Illustrates the difference between reverse genetics with a barcoded deletion collection and forward genetic screens, and shows pooled competitive growth with barcode readout as the key innovation.
- Links genetic interactions (synthetic lethality, SGA) with chemical-genetic interactions, so students can see drugs as "phenocopies" of mutations.
- Introduces concepts of buffering, essential versus non-essential genes, dosage suppression and complementation in a practical setting.

---

## Key References

1. **Giaever et al. (1999)** — Genomic profiling of drug sensitivities via induced haploinsufficiency, Nat Genet 21(3):278-283 — origin of HIP
2. **Hoon et al. (2008)** — An integrated platform of genomic assays reveals small-molecule bioactivities, Nat Chem Biol 4(8):498-506 — pooled MSP with HIP/HOP
3. **Ho et al. (2009)** — A molecular barcoded yeast ORF library enables mode-of-action analysis of bioactive compounds, Nat Biotechnol 27(4):369-377 — MoBY-ORF, MSP and recessive-resistance complementation
4. **Lee et al. (2005)** — Genome-wide requirements for resistance to functionally distinct DNA-damaging agents, PLoS Genet 1(2):e24 — HOP defines DNA-repair modules
5. **Parsons et al. (2006)** — Exploring the mode-of-action of bioactive compounds by chemical-genetic profiling in yeast, Cell 126(3):611-625 — clustering of chemical-genetic signatures
6. **Yan et al. (2008)** — Yeast barcoders: a chemogenomic application of a universal donor-strain collection carrying bar-code identifiers, Nat Methods 5(8):719-725 — barcoded DAmP hypomorphs
7. **Hughes et al. (2000)** — Functional discovery via a compendium of expression profiles, Cell 102(1):109-126 — comparative expression profiling
8. **Costanzo et al. (2010)** — The genetic landscape of a cell, Science 327(5964):425-431 — SGA map used to link compounds (Ero1) to targets

---

## Future Research Directions

- Moving the HIP/MSP logic to mammalian cells: pooled RNAi/shRNA loss-of-function screens, chemical synthetic-lethality screens in cancer lines (K-Ras and PLK1; BRCA and PARP), and prioritizing human genetic interactions from yeast synthetic lethality; the human ORFeome expressed in yeast for MSP.
- Integrating yeast chemogenomic data with interactome and disease-network ("diseaseome") data to predict system-level effects of perturbations, and using sequencing-based barcode readout.
- Using yeast to test large combinatorial drug sets in sensitized backgrounds, supporting multi-target drugs and combination therapy ("magic shotguns").
- Developing yeast-derived chemical probes (after medicinal-chemistry optimization) for targets presumed undruggable, and handling poor yeast uptake (efflux-deficient backgrounds), targets without yeast homologs, and drug-pump-dominated MSP hits.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
