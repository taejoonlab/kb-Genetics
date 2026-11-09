---
tags: [genetics, class, article, en]
date: 2026-11-09
type: class
---

# Phenotypic Landscape of a Bacterial Cell

## Citation (NLM)
Nichols RJ, Sen S, Choo YJ, Beltrao P, Zietek M, Chaba R, Lee S, Kazmierczak KM, Lee KJ, Wong A, Shales M, Lovett S, Winkler ME, Krogan NJ, Typas A, Gross CA. Phenotypic landscape of a bacterial cell. Cell. 2011;144(1):143-156. doi:10.1016/j.cell.2010.11.052

**DOI:** [https://doi.org/10.1016/j.cell.2010.11.052](https://doi.org/10.1016/j.cell.2010.11.052)

---

## Summary

With sequence information for bacteria growing explosively and many genes of unknown function, the authors ask how to match genes to phenotypes at scale. They use *E. coli* K-12 as a proof of principle for "phenomic profiling": quantitative fitness measurement of a whole mutant library under hundreds of conditions. They scored the Keio single-gene deletion library, essential-gene hypomorphs (C-terminal TAP-tagged or specific alleles) and a small RNA/small protein knockout library, arrayed at 1536 colonies per plate on agar. Strains were grown in 324 conditions covering 114 unique stresses (more than half antibiotics or antimicrobials), at subinhibitory concentrations that inhibited wild-type growth by at most about 50%, which allows specific drug-gene interactions to be seen and limits suppressor takeover. Colony sizes were converted to scores using a method developed for genetic interaction analysis. Two independent clones of each mutant were used and screens were run at least twice (four to six measurements per score). Replicate colony sizes correlated at r = 0.77, and the final matrix has 3979 mutants by 324 conditions, publicly available at ecoliwiki.net/tools/chemgen.

Hierarchical clustering showed that similar conditions and functionally related mutants cluster: for example the *rfa* LPS-core genes with *rfaD/rfaE/lpcA* (envelope-integrity stresses), *dsbA* with *dsbB*, and *nuo* electron-transport genes, which are sensitive to membrane stress and more resistant to aminoglycosides. Gene pairs whose "phenotypic signatures" correlate at r between 0.6 and 0.8 are more than 100-fold enriched for common operon membership and 150-fold enriched for known protein interactions, which benchmarks the dataset. Using a 5% FDR, 49% of strains (1957/3979) have at least one phenotype (the "responsive genome"), with 13,497 phenotypes in total (about 1% of gene-condition pairs); about 80% are negative (more sensitive) and 20% positive. The authors identify 197 conditionally essential genes, including 116 conditionally essential in rich media, which raises the number of known essential genes by about 30% and is enriched for outer-envelope functions that are under-represented among standard essential genes.

Phenotypic signatures were also used to assign functions. Correlated and anticorrelated signatures showed that the uncharacterized *marB* in the *marRAB* operon behaves like the repressor *marR* and is anticorrelated with the efflux pump gene *acrB*. Follow-up showed that deleting *marB* derepresses *marA* transcript (about 2-fold, additive with *marR*), so MarB represses MarA independently of MarR, probably post-transcriptionally; stringent controls (PCR validation, retransduction, sequencing the *mar* locus) were applied. Another application was antifolate drugs: sulfonamides (target FolP) and trimethoprim (target FolA) are strongly synergistic, yet their phenotypic profiles are only weakly correlated with each other (r = 0.15, versus 0.57 within sulfa and 0.67 within TMP). Mutants in the glycine-cleavage (*gcv*) and *glyA* branches of one-carbon metabolism respond differently to the two drugs, which suggests differential accumulation of folate species as a basis for synergy.

Orphan genes and conservation. Orphan (unannotated) gene mutants have phenotypes at a rate close to annotated genes, though with fewer phenotypes each, and more than 25% of orphans have signatures correlated with an annotated gene at r >= 0.5, providing high-confidence leads across many cellular processes. The most responsive orphans tend to be narrowly distributed (restricted to gamma-proteobacteria), unlike responsive annotated genes, so conservation is a poor indicator of an orphan's importance and homology-only annotation is limited; the multiresponsive orphan *lpoB* is enterobacteria-restricted yet regulates conserved peptidoglycan synthesis (Typas et al. 2010). The paper also notes that MarB's mechanism is unresolved: it has no DNA-binding signature, acts additively with the Lon protease, and could act post-transcriptionally, by disrupting MarA-RNA polymerase, or in the periplasm, and *mar* is a hot spot for resistance mutations.

Antifolate synergy, in more detail. Within the one-carbon network, *glyA* mutants were sensitive only to trimethoprim and *gcvP/gcvT/gcvH* mutants only to sulfa drugs, reproduced in liquid culture; *glyA* and *gcv* are a synthetic lethal pair, the two routes to 5,10-methylene-THF. The model is that each drug mainly depletes 5,10-mTHF through a different branch, so the combination blocks both branches; consistent with this, *glyA* and *gcvP* strains grew no worse than wild type under the combination, and genetic removal of either branch reduced but did not abolish synergy. *Streptococcus pneumoniae*, which lacks the GCV system, showed significantly less synergy at equivalently inhibitory drug doses. *ygfA* (5-formyl-THF cycloligase) clusters with *gcv* and is sulfa-specific, and *yggS* (a predicted alanine racemase; D-alanine inactivates GlyA) is sulfa-sensitive, suggesting metabolite-based enzyme regulation also contributes.

Genome organization. Essential, responsive and conditionally essential genes are biased to the leading (+) strand (transcription co-directional with replication), whereas non-responsive genes are biased to the minus strand; responsive and conditionally essential genes cluster near *oriC* (where gene dosage is highest) in regional peaks above the operon level, while the terminus region is poor in responsive and broadly conserved genes and enriched for gamma-proteobacteria-restricted genes, possibly recently acquired genes not yet integrated into the cellular network.

Drug action. Because drug signatures are large (3979 values versus 324 for genes), the authors computed drug-GO scores; of 719 significant drug-GO interactions (64 drugs, 218 GO groups), 657 were negative and 62 positive. Drugs with the same target cluster: DNA-targeting drugs, THF-biosynthesis drugs, and peptidoglycan drugs (beta-lactams central, with profiles related to their penicillin-binding protein targets); known synergistic pairs (trimethoprim/sulfonamide, mecillinam/cefsulodin) fall in positions distinct from either drug. All four quinolones interacted negatively with *xseAB* (exonuclease VII, p = 10^-6), suggesting XseAB removes quinolone-trapped gyrase; nitrofurantoin behaves as a DNA-damaging agent requiring nucleotide-excision repair and activating SOS; indolicidin resembles the proton-motive-force uncoupler CCCP; phleomycin and bleomycin do not cluster with DNA-response drugs. The authors conclude it is the most comprehensive prokaryotic chemical genomic study to date (3979 strains x 324 conditions), a base for gene- and drug-function discovery; more than 20 further orphan genes are under investigation, and additional readouts (colorimetric, high-throughput microscopy) and ordered libraries in other organisms are needed.

---

## Significance in Introduction Context

- A modern, quantitative version of the classical idea that phenotype reveals gene function: genotype-to-phenotype mapping done for a whole genome in hundreds of environments.
- Illustrates guilt-by-association (correlated phenotypes imply shared pathway), conditional essentiality, and the dependence of phenotype on environment.
- Connects reverse genetics, genetic interaction methods from yeast, and antibiotic mechanisms and synergy, showing how data can generate hypotheses (*marB*).

---

## Key References

1. **Baba T, et al. (2006)** — Construction of *E. coli* K-12 in-frame, single-gene knockout mutants: the Keio collection. Mol Syst Biol 2:2006.0008 — the mutant library used
2. **Typas A, et al. (2008)** — High-throughput, quantitative analyses of genetic interactions in *E. coli*. Nat Methods 5:781-787 — scoring methodology
3. **Tong AH, et al. (2001)** — Systematic genetic analysis with ordered arrays of yeast deletion mutants. Science 294:2364-2368 — SGA precedent
4. **Hillenmeyer ME, et al. (2008)** — The chemical genomic portrait of yeast: uncovering a phenotype for all genes. Science 320:362-365 — yeast analogue
5. **Giaever G, et al. (2004)** — Chemogenomic profiling: identifying the functional interactions of small molecules in yeast. PNAS 101:793-798 — fitness profiling for drug action
6. **Typas A, et al. (2010)** — Regulation of peptidoglycan synthesis by outer-membrane proteins. Cell 143:1097-1109 — companion discovery (*lpoA/lpoB*) from this data
7. **Martin RG, Rosner JL (2002)** — Genomics of the marA/soxS/rob regulon of *E. coli*. Mol Microbiol 44 — *mar* regulation and *acrAB* efflux
8. **Kwon YK, et al. (2008)** — A domino effect in antifolate drug action in *E. coli*. Nat Chem Biol 4:602-608 — metabolic effects of antifolates

---

## Future Research Directions

- Screening more diverse stresses and adding cellular readouts (colorimetric transcription or biofilm readouts on agar, high-throughput microscopy).
- Using phenotypic signatures to annotate orphan genes (more than 20 under investigation) and as a second tier for function when conservation-based methods fail, as microbiome studies suggest.
- Testing the proposed mechanisms: XseAB removal of quinolone-trapped gyrase, MarB action on MarA, and metabolite-based regulation underlying antifolate synergy; extending to other drug interactions.
- Low-cost ordered deletion libraries (via transposon mutagenesis) in other bacteria, including pathogens, to test whether the oriC-proximal organization of important genes is general.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
