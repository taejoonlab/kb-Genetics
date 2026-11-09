---
tags: [genetics, class, review, en]
date: 2026-11-09
type: class
---

# A Decade of Advances in Transposon-Insertion Sequencing

## Citation (NLM)
Cain AK, Barquist L, Goodman AL, Paulsen IT, Parkhill J, van Opijnen T. A decade of advances in transposon-insertion sequencing. Nat Rev Genet. 2020;21(9):526-540. doi:10.1038/s41576-020-0244-x

**DOI:** [https://doi.org/10.1038/s41576-020-0244-x](https://doi.org/10.1038/s41576-020-0244-x)

---

## Summary

This Nature Reviews Genetics review marks ten years since transposon-insertion sequencing (TIS) was introduced. Four variants appeared in 2009: Tn-Seq, TraDIS, INSeq and HITS (see [[en/article/VanOpijnen2009_NatMethods_TnSeq-FitnessGeneticInteraction]] for Tn-Seq). All combine genome-wide transposon mutagenesis with next-generation sequencing to estimate the essentiality or fitness contribution of every genomic feature in a bacterial genome, from a single pooled library, so phenotype is linked directly to genotype. The basic workflow (Fig. 1) is: build a saturated library with a randomly inserting transposon (commonly Tn5 or mariner), pool the mutants, optionally challenge the pool (for example with colistin), fragment the DNA, add adaptors, amplify and sequence the transposon-genome junctions, and map reads. Features that tolerate no insertions are candidate essential genes; features whose insertion frequency drops under selection are required for fitness there, and those whose frequency rises are disadvantageous. The variants differ in fragmentation (MmeI digestion in Tn-Seq/INSeq gives uniform short reads; sonication in TraDIS/HITS gives longer reads) and in transposon (mariner, TA-site specific, versus Tn5 for the others).

The review then covers advances since the 2013 and 2016 reviews. First, selection beyond growth: motility "races" on agar (applied to *E. coli* ST131 and *P. aeruginosa* PA14), density-TraDISort (78 capsule genes found across two *Klebsiella pneumoniae* strains), TraDISort with ethidium bromide and FACS to find efflux mutants (*amvA*, *amvR*), and FAST-INSeq and Tn-FACSeq. Droplet Tn-Seq (dTn-Seq) grows single mutants in isolated droplets and showed that 1-3% of *S. pneumoniae* mutants have altered fitness when freed from the population context (common goods, density dependence). Second, because standard TIS cannot assay essential genes, transposons with outward-facing inducible promoters (TnAraOut, TraDIS-Xpress with PBAD, Dub-Seq) give gain-of-function and overexpression screens. Third, scaling: RB-Tn-Seq uses a random barcode per transposon so that later experiments need only barcode amplicon sequencing (applied to 32 bacteria in 129 conditions), and a "magic pool" of vectors speeds transposon optimisation in non-model organisms.

On analysis, the review compares tools (Table 1: ESSENTIALS, ARTIST/conARTIST, TRANSIT, TraDIS Toolkit, MAGenTA, Aerobio, AlbaTraDIS) and highlights new statistics: PCA on log fold changes across replicate infections, zero-inflated negative binomial models that correct for library saturation and bottlenecks, and multi-condition sliding-window analysis. Bottlenecks (transient population-size reductions) are a central problem for infection models; the Salmonella Typhimurium example contrasts oral infection (severe bottleneck, tens to hundreds of mutants), intraperitoneal infection (~10,000 mutants) and macrophage culture (~10^6 mutants), illustrating the realism versus library-complexity trade-off (Fig. 5).

Applications include: antibiotic resistance (intrinsic resistance profiles across ESKAPE pathogens show responses are genome-wide, e.g. *recN* and *xseA* under fluoroquinolones, and TIS profiles can reveal mechanisms of action and helper-drug targets); virulence, host adaptation and vaccine development (e.g. *S. pneumoniae* ferret transmission screens identified CppA, PiaA and ComD, and maternal vaccination with PiaA and CppA blocked transmission); mobile genetic elements (plasmid maintenance, phage host factors such as *sspA* and the *sap* operon); essential genomes and the pan-genome (e.g. nine *P. aeruginosa* strains; only ~50% of antibiotic-responsive genes shared between two *S. pneumoniae* isolates; clinical *M. tuberculosis* strains with altered *katG* requirement); and metabolism, environmental response and microbe-microbe interactions, where TIS helps annotate genes of unknown function. Here RB-Tn-Seq applied to 32 diverse bacteria in ~200 conditions assigned phenotypes to more than 11,000 uncharacterised proteins (about 2,000 annotations conserved across organisms); a 492-condition screen of *Bacteroides thetaiotaomicron* found metabolism and bile-tolerance genes, and an arrayed ~1,300-mutant *B. thetaiotaomicron* library incubated with the antiviral brivudine identified genes needed to produce a hepatotoxic metabolite, confirmed in gnotobiotic mice. Co-infection screens show that fitness effects depend on community members: about 25% of *S. aureus* genes essential during co-infection with *P. aeruginosa* in mouse wounds are dispensable in single-species infection (e.g. the uridine kinase gene *udk*); predator-prey (*Bdellovibrio*-*Vibrio*) and type VI secretion toxin-immunity (Tse-Tsi) screens extend the approach to community interactions. Plant-pathogen and environmental-stress screens (ionising radiation, desiccation, survival in water) round out the section.

The review closes the applications with the integration of TIS with other data to predict complex traits. Combining saturated TIS with RNA-seq identifies functional non-coding RNAs (89 ncRNAs in *S. pneumoniae*, more than half new, several tied to virulence in vivo; 288 genes and small ncRNAs for epithelial/endothelial colonisation in *Neisseria meningitidis*). Genetic interactions are mapped by building a TIS library in a query-gene deletion background (or under a drug inhibiting a query pathway) and finding genes whose fitness deviates from the multiplicative expectation (Fig. 7); synthetic lethality is the clearest case. Examples include catabolite control protein A, potassium uptake and ClpP/competence regulation in *S. pneumoniae*, CozE directing Pbp1A to midcell (found with *pbp1A* as query), and wall teichoic acid synthesis connected to D-alanylation, peptidoglycan and lipoteichoic acid synthesis in *S. aureus*. Pairing TIS with RNA-seq in *P. aeruginosa* predicted an antagonistic antibiotic pair: polymyxin B induces *mexXY*, which TIS shows confer intrinsic resistance to gentamicin and tobramycin. Directly compared, expression and fitness changes often correlate poorly (a discordance known in yeast, suggesting that most transcriptional regulation is not optimised by selection). Overlaid on the metabolic network, however, 80% of fitness-changing genes lie within two reactions of an expression-changing gene (93% within three) when the bacterium responds to an environment it is adapted to (such as nutrient depletion), and this relationship breaks down for unadapted stresses such as antibiotics; the degree of network disruption has predicted fitness, antibiotic sensitivity and mechanism of action.

In the conclusions the authors note that TIS now reaches single-cell phenotypes (cell sorting, microfluidics), has yielded vaccine candidates and antibiotic or helper-drug targets, and could be extended by combining two transposons in one genome, by combining TIS with CRISPRi, or by mutagenising interacting organisms together. TIS-like methods already exist outside bacteria: yeast (*S. cerevisiae*, *S. pombe*), archaea (*Sulfolobus islandicus*, *Methanococcus maripaludis*), haploid human cells (PhITSeq), mice (QISeq with piggyBac and Sleeping Beauty) and *Plasmodium falciparum*. The review compares TIS with pooled CRISPRi: CRISPRi is targetable, can knock down essential genes and needs fewer reads, but requires sgRNA library design and cloning and is affected by off-target effects and variable sgRNA efficiency, whereas TIS needs no prior genome knowledge, can reveal unexpected genes, assay transcriptionally silent regions and probe essential protein domains. Both struggle with automated mechanistic interpretation, motivating data-sharing platforms (TraDIS-vault, the D23580 genome browser, ShinyOmics). The main limitation is that TIS works only in culturable, genetically tractable species (a minority of bacteria and archaea); the authors call for tools for recalcitrant microbes, massive scale-up in conditions and strains, more ecologically realistic assays, and machine learning, modelling and network analysis to move from describing the cell's genetic architecture to predicting its behaviour.

---

## Significance in Introduction Context

- Shows how random mutagenesis (a classical forward-genetics idea) is scaled by sequencing into a genome-wide genotype-to-phenotype map for bacteria.
- Illustrates gene essentiality, conditional fitness, intrinsic antibiotic resistance and genetic background (pan-genome, strain-specific essentiality) with concrete pathogen examples.
- Teaches experimental-design reasoning: selection conditions, population bottlenecks, library saturation and statistical modelling all shape what a screen can conclude.

---

## Key References

1. **van Opijnen T, Bodi KL, Camilli A (2009)** — Tn-seq, Nat Methods [doi:10.1038/nmeth.1377](https://doi.org/10.1038/nmeth.1377) — one of the four founding TIS methods ([[en/article/VanOpijnen2009_NatMethods_TnSeq-FitnessGeneticInteraction]])
2. **Langridge GC et al. (2009)**, Genome Res (TraDIS); **Goodman AL et al. (2009)**, Cell Host Microbe (INSeq); **Gawronski JD et al. (2009)**, Proc Natl Acad Sci USA (HITS) — the other three founding 2009 methods (refs 2-4 of the review)
3. **Chao MC, Abel S, Davis BM, Waldor MK (2016)** — design and analysis of transposon insertion sequencing experiments, Nat Rev Microbiol — the earlier review the paper defers to for experimental design and statistics (ref. 7)
4. **Wetmore KM et al. (2015)** — sequencing randomly bar-coded transposons (RB-Tn-Seq), mBio — barcoded TIS that enables scaling to hundreds of conditions (ref. 23)
5. **Price MN et al. (2018)** — mutant phenotypes for thousands of bacterial genes of unknown function, Nature — RB-Tn-Seq across multiple species and conditions (ref. 25)
6. **Thibault D et al. (2019)** — droplet Tn-Seq, Nat Commun — single-mutant, population-independent fitness (ref. 15)
7. **Yasir M et al. (2020)** — TraDIS-Xpress, Genome Res — inducible-promoter transposon screen covering essential genes, triclosan (ref. 20)
8. **van Opijnen T, Dedrick S, Bento J (2016)** — strain-dependent genetic networks for antibiotic sensitivity in *S. pneumoniae*, PLoS Pathog — pan-genome and genetic-interaction example (ref. 54)

---

## Future Research Directions

- Extending TIS beyond easily culturable, genetically tractable species, using TIS-inspired tools such as the "magic pool" transposon-vector optimisation, and screening many more conditions and strains at once (RB-Tn-Seq) to understand how pan-genome diversity is shaped.
- Moving from simple laboratory assays to ecologically realistic ones (infection models, communities, co-infection, host and microbiota contexts).
- Combining two transposons in one genome (e.g. [[en/article/Zik2025_Science_DualTnSeq-GeneticInteraction]]), pairing TIS with CRISPRi, or mutagenising interacting organisms simultaneously to build genetic-interaction networks.
- Single-cell phenotyping through cell sorting and microfluidics, and better handling of infection bottlenecks.
- Integrating TIS with RNA-seq and other post-genomic data, using machine learning, modelling and network analysis, to predict cell behaviour rather than only describe it; shared platforms (TraDIS-vault, ShinyOmics) to pool data and expertise.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
