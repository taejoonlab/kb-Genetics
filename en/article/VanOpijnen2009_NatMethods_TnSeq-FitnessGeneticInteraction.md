---
tags: [genetics, class, article, en]
date: 2026-11-09
type: class
---

# Tn-seq: High-Throughput Parallel Sequencing for Fitness and Genetic Interaction Studies in Microorganisms

## Citation (NLM)
van Opijnen T, Bodi KL, Camilli A. Tn-seq: high-throughput parallel sequencing for fitness and genetic interaction studies in microorganisms. Nat Methods. 2009;6(10):767-772. doi:10.1038/nmeth.1377

**DOI:** [https://doi.org/10.1038/nmeth.1377](https://doi.org/10.1038/nmeth.1377)

---

## Summary

This Nature Methods paper introduced Tn-seq, a method for determining quantitative fitness and genetic interactions genome-wide in microorganisms by combining a saturated transposon-insertion library with massively parallel sequencing. The motivation is that comprehensive genetic-interaction screens, done in *S. cerevisiae* with arrays of single-gene deletions and robotic mating (synthetic genetic array and related approaches), are rare in microbes. Conjugation-based analogues exist for *E. coli* (GIANT-coli, eSGA) but need an arrayed collection of single-gene knockouts, which exist for only a few species. The more general transposon-site-hybridization approach (TraSH) is less accurate because the exact insertion site and per-insertion fitness are not read directly (only a fluorescence ratio) and it needs a species-specific microarray. Tn-seq needs neither an array nor a microarray. A genetic interaction is defined as a deviation of double-mutant fitness from the multiplicative expectation.

The method uses the Himar1 mariner mini-transposon derivative *magellan6* (magellan5 with a single-nucleotide change in each inverted repeat that creates an MmeI site), which requires only a TA dinucleotide and inserts essentially randomly. Target DNA from an acapsular TIGR4 derivative of *Streptococcus pneumoniae* (AC2394) is transposed in vitro with MarC9 transposase, gap-repaired, and used to transform naturally competent cells, giving pools of about 25,000 transformants in which each cell carries one insertion (Fig. 1). DNA is isolated before selection (t1) and after about seven generations of outgrowth in THY broth (t2), digested with MmeI, adaptor-ligated (the adaptor can carry a barcode for multiplexing) and PCR-amplified (22 cycles, shown to stay linear to 25) to a 160-bp product with 20 nt of genomic sequence, then sequenced on an Illumina Genome Analyzer II (6-10 million reads per lane). Reads are mapped with Bowtie (about 5% discarded, 4.5% mapping to repeated elements such as transposon-related genes), insertions with fewer than 8 reads are excluded, and fitness W for each insertion is computed from the change in its frequency between t1 and t2 together with the measured population expansion factor d, W = ln[N(t2) x d / N(t1)] / ln[(1 - N(t2)) x d / (1 - N(t1))] (frequencies N), so that W represents growth rate per generation and is comparable across experiments. Data are normalized to inactive transposon-related genes with no fitness effect, and gene fitness is a weighted average over insertions (at least 10 insertions required). Genes were called advantageous or disadvantageous if they differed from 1 by at least 4% and passed a Bonferroni-corrected t-test (P < 0.00003), and "possibly essential" if no insertions (or fewer than three in a gene of at least 400 bp) were recorded.

For single-gene fitness, six libraries in wild-type TIGR4 were analyzed. There was no insertional bias between coding and non-coding regions, and 36 regions had at least 2-fold more or fewer insertions. Genes fell into four classes: neutral (76%, W 0.96-1.04), advantageous (6%), disadvantageous (2%) and possibly essential (16%; W = 0) (Fig. 2). Of genes previously suggested to be essential in serotype strain R6, 68% were confirmed (the rest possibly strain differences). Gene set enrichment analysis found eleven gene sets negatively enriched (advantageous for growth in broth) and two positively enriched (deleterious). Because mutants with W below about 0.53 but above 0 (doubling time at least twice wild type) are outcompeted during library construction, the "possibly essential" group includes both essential and highly deleterious genes; the authors suggest shortening the pre-selection growth to widen the dynamic range.

Validation was extensive (Fig. 3, Table 1). Technical replicates correlated at r = 0.97 and biological replicates at 0.70-0.90. For 30 randomly picked mutants, Tn-seq fitness matched classical 1 x 1 competition (all P >> 0.05), ruling out a major role for frequency-dependent selection. Removing insertions in the first or last 10% of genes changed fitness for only four genes (last 10%), so positional effects were rare. Polar effects, which should be minimized because magellan6 lacks transcriptional terminators, were tested by their absence: none of 37 operons with an essential downstream gene had a severely deleterious upstream insertion. Replacing the complete coding sequence of 16 genes with a drug marker (six neutral, five with W of 0.8 or less, five with W of at least 1.11) gave fitness equal to Tn-seq, and doubling times of 10 deletion strains tracked fitness, for example SP_1697 (W = 1.22) predicted about 31 min and measured 31 min, and SP_0841 (W = 0.71) predicted about 54 min and measured 57 min, against 38 min for wild type.

For the genetic-interaction screen, five query genes were deleted: three LacI/GalR-family regulators (*ccpA*, *regR*, *malR*) and two ABC carbohydrate transporters (SP_1683 and *malX*). Query-strain fitness was ccpA 0.84, regR 1.0, SP_1683 0.98, malX 1.04, malR 1.05. In *B. subtilis*, CcpA is a master regulator of carbohydrate metabolism binding catabolite-response (*cre*) elements, and in *S. pneumoniae* its loss reduces in vitro fitness and virulence. The authors predicted a hierarchy of interaction number (ccpA > regR > malR > transporters) and overlap between malR and malX (malR regulates malX). Three independent libraries of 10,000-25,000 insertions were made in each background, and interactions were scored as deviations from the multiplicative model (at least 10% difference between expected and observed, Bonferroni-corrected t-test) and classified into seven categories (synergistic, partial masking, masking, partial suppression, suppression, antagonistic, co-equal; Fig. 4). The screen produced 97 high-confidence interactions, supplemented by 41 STRING interactions for context: 64 for *ccpA*, 17 for *regR*, 8 for *malR*, 5 for SP_1683 and 3 for *malX*, matching the predicted hierarchy; malX shared 2 of 3 partners with malR, SP_1683 shared 2 of 3 with malX, 4 of 5 with malR and 3 of 5 with regR. For regR, expected links to the mannose phosphotransferase system (SP_0325) and to competence (*comF*, SP_2208) were recovered. ccpA was a hub: half (32/64) of its partners function in carbohydrate uptake and metabolism, 13 were uncharacterized and 6 were transcriptional regulators including three two-component systems (TCS07, TCS11, TCS05/CiaH). Using the *B. subtilis* *cre* consensus WTGNAANCGNWWNCA, 275 of 2,087 genes (13%) had a putative *cre*; of 90 network genes 27 had one, of which 24 interacted with ccpA, so 38% (24/64) of ccpA partners carried a *cre* site, about three times chance. Examples include an antagonistic ciaH-ccpA interaction (fitness 0.46) and suppressive interactions with the maltose genes malX (0.78) and malA (0.71); ciaR itself has a predicted *cre* site.

Seven genes were deleted in wild-type and ccpA backgrounds (14 strains) and fitness confirmed by 1 x 1 competition (Fig. 5): alleviating interactions for SP_2001 (TCS05), ABC transporters SP_1957 and SP_0720 and metabolism gene SP_1123, an antagonistic interaction for amino-acid-metabolism gene SP_1029, and two interactions with phosphotransferase-system genes *lacF-1* (SP_0476) and *lacE-2* (SP_1185), part of a subnetwork with two further PTS genes, the surface beta-galactosidase *bgaA* and the uncharacterized SP_0475, implicating bgaA in lactose metabolism and SP_0475 in PTS-regulated carbohydrate uptake. The Discussion proposes that alleviating ccpA interactions may mark deleterious genes normally repressed by CcpA, so that deleting ccpA derepresses them and deleting the derepressed gene restores fitness, and that expanding query genes and conditions will help annotate the roughly 30% of unknown genes. The key advantage is that each gene's fitness can be measured in a given environment or strain (S. pneumoniae has more than 90 serotypes) without building a knockout array, and since Himar1 works in *E. coli*, *S. aureus*, *H. influenzae* and *M. tuberculosis*, the method should extend to many environments, strains and species.

---

## Significance in Introduction Context

- Shows how a genetic interaction (epistasis) is defined quantitatively: compare double-mutant fitness with the multiplicative expectation from the two single mutants, giving alleviating (suppressive) versus aggravating (synergistic) classes.
- Illustrates forward-to-reverse genetics at genome scale: instead of one mutant screened at a time, a saturated insertion pool is phenotyped by sequencing, linking genotype to fitness for every gene at once.
- Connects to core concepts of gene essentiality, relative fitness (W), competition assays and regulatory hubs (CcpA as master carbohydrate regulator, with a *cre* operator-site enrichment among its interactors).

---

## Key References

1. **Tong AH, et al. (2001)** — Systematic genetic analysis with ordered arrays of yeast deletion mutants, Science 294:2364-2368 — array-based synthetic genetic array in yeast, the approach Tn-seq is contrasted with
2. **Typas A, et al. (2008)** — High-throughput, quantitative analyses of genetic interactions in E. coli, Nat Methods 5:781-787 — GIANT-coli
3. **Butland G, et al. (2008)** — eSGA: E. coli synthetic genetic array analysis, Nat Methods 5:789-795 — arrayed bacterial genetic-interaction alternative
4. **Joshi SM, et al. (2006)** — Characterization of mycobacterial virulence genes through genetic interaction mapping, Proc Natl Acad Sci USA 103:11760-11765 — TraSH, the microarray-based predecessor
5. **Subramanian A, et al. (2005)** — Gene set enrichment analysis: a knowledge-based approach for interpreting genome-wide expression profiles, Proc Natl Acad Sci USA 102:15545-15550 — GSEA, used to test shared-function gene sets
6. **St Onge RP, et al. (2007)** — Systematic pathway analysis using high-resolution fitness profiling of combinatorial gene deletions, Nat Genet 39:199-206 — interaction categories
7. **Cain AK et al. (2020)** — A decade of advances in transposon-insertion sequencing, Nat Rev Genet [doi:10.1038/s41576-020-0244-x](https://doi.org/10.1038/s41576-020-0244-x) — retrospective review of Tn-seq and its relatives (see [[en/review/Cain2020_NatRevGenet_TIS-DecadeOfAdvances]])
8. **Zik JJ et al. (2025)** — Dual transposon sequencing profiles the genetic interaction landscape in bacteria, Science [doi:10.1126/science.adt7685](https://doi.org/10.1126/science.adt7685) — extends Tn-seq to all-by-all double mutants (see [[en/article/Zik2025_Science_DualTnSeq-GeneticInteraction]])

---

## Future Research Directions

- Wider dynamic range: library construction limited detection to W above about 0.53 or W = 0; shortening growth before the t1 sample and other changes to library assembly should resolve severely deleterious genes.
- More query genes and more environmental conditions (media, chemical or physical stresses, infection models) to map the architecture of S. pneumoniae networks and annotate the roughly 30% of genes of unknown function; scaling to all-by-all double mutants was later realised in [[en/article/Zik2025_Science_DualTnSeq-GeneticInteraction]], and the decade of applications is surveyed in [[en/review/Cain2020_NatRevGenet_TIS-DecadeOfAdvances]].
- Applying Tn-seq across strains and species, since a gene's role may be strain dependent and Himar1 works in *E. coli*, *S. aureus*, *H. influenzae* and *M. tuberculosis*.
- Testing the hypothesis that alleviating *ccpA* interactions mark deleterious genes normally repressed by CcpA, and assigning function to SP_0475 and the surface beta-galactosidase BgaA.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
