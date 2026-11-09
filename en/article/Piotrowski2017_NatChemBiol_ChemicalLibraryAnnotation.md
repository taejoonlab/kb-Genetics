---
tags: [genetics, class, article, en]
date: 2026-11-09
type: class
---

# Functional Annotation of Chemical Libraries across Diverse Biological Processes

## Citation (NLM)
Piotrowski JS, Li SC, Deshpande R, Simpkins SW, Nelson J, Yashiroda Y, Barber JM, Safizadeh H, Wilson E, Okada H, Gebre AA, Kubo K, Torres NP, LeBlanc MA, Andrusiak K, Okamoto R, Yoshimura M, DeRango-Adem E, van Leeuwen J, Shirahige K, Baryshnikova A, Brown GW, Hirano H, Costanzo M, Andrews B, Ohya Y, Osada H, Yoshida M, Myers CL, Boone C. Functional annotation of chemical libraries across diverse biological processes. Nat Chem Biol. 2017;13(9):982-993. doi:10.1038/nchembio.2436

**DOI:** [https://doi.org/10.1038/nchembio.2436](https://doi.org/10.1038/nchembio.2436)

---

## Summary

The authors build a high-throughput yeast chemical-genetic platform to annotate compound libraries by the biological process they perturb, then apply it to 13,524 compounds from seven libraries. The platform has three components. (1) A drug-sensitized background (pdr1 pdr3 snq2 triple deletion, "3 delta"; PDR1 and PDR3 encode transcription factors of the pleiotropic drug response and SNQ2 a multidrug transporter) that raised the number of growth-inhibiting compounds about 5-fold in halo assays (440 control compounds) and gave an average hit rate (at least 20% growth inhibition in liquid) of about 35% across all compounds, roughly 5x that of wild-type backgrounds in earlier studies. Specific interactions such as benomyl-TUB3 (34.4 uM) and micafungin-BCK1 (25 nM) were detected only in this background. (2) A diagnostic pool of 310 viable deletion mutants (about 6% of nonessential genes), built from 157 strains chosen by the COMPRESS-GI algorithm (which maximizes agreement of compressed profile similarities with GO co-annotation) plus 236 chosen manually from the 17 clusters of the global genetic-interaction similarity network (83 overlapping), after removing strains with abnormal barcode counts in pilot version 1. As few as 157 strains predicted gene function as well as the entire ~5,000-strain nonessential collection, and about 20% of pool strains could not be scored by standard SGA colony analysis but had appropriate fitness in pooled liquid growth. (3) A 768-plex barcode-sequencing protocol with 1,000 designed 10-bp multiplex tags (Levenshtein distance above 3, balanced composition; the 768 most uniform were kept), giving 768 samples per HiSeq lane and 6,144 per flow cell, with profile quality equal to 96-plex. Signal-to-noise was most sensitive to incubation time; the chosen conditions were 200-uL microcultures, 48 h, 250 cells per strain and 30 PCR cycles, with read-through sequencing of the whole amplicon giving more uniform counts than separated reads. Replicate correlations were r = 0.92-0.97 for control compounds (benomyl, micafungin, MMS, bortezomib).

Chemical-genetic (CG) scores are z-scores versus DMSO controls (negative = hypersensitivity, positive = resistance). At a threshold of +/-2.5, 0.5% of compound-mutant pairs were positive and 1.1% negative; for compounds inhibiting growth by more than 20% (about 4,700) the rates were 1.3% and 2.3%. On average each mutant had about 64 positive and 125 negative interactions, and profiles correlated with earlier whole-collection screens despite different backgrounds and readouts. Hierarchical clustering of 177 responsive mutants and 1,377 compounds produced clusters for DNA replication/repair, mitosis, glycosylation/protein folding/cell wall, transcription/chromatin, vesicle traffic and polarity; benomyl, nocodazole and the uncharacterized NPD2784 clustered with TUB3/CIN1, and NPD2784 strongly inhibited mammalian tubulin polymerization in vitro. To predict targets, each CG profile was compared with the genome-wide genetic-interaction compendium (the CG-TARGET method): if a compound inhibits a target, mutants in that gene (or process) should mimic it, and the gene's genetic-interaction profile should resemble the compound's CG profile (as ERG11 does for fluconazole). Biological-process predictions from GO annotations of the top-scoring genes were filtered at FDR 25% (NPDepo) or 27% (NCI/NIH/GSK) to a high-confidence set (HCS) of 1,522 compound profiles. Negative interactions were the main driver of prediction (85% and 81% of HCS compounds were recovered from negative-only profiles versus 41% and 22% from positive-only; positive-only predictions were biased toward RNA processing and mitosis and missed benomyl, MMS and tunicamycin), and strains with many interactions (high degree) mattered most. About 82% of HCS compounds inhibited growth by more than 20%, but the remaining ~18% (270 of 1,518) were weaker, so pre-screening for bioactivity would lose informative profiles. Of 296 compounds with more than 90% inhibition, 122 were excluded for low strain representation, and the profiles of the rest were dominated by resistant gtr1 and avt5 (amino-acid transport) mutants, suggesting general transport-related resistance (gtr1 confirmed with 23 compounds).

Mapping each HCS compound onto the 17-cluster global network showed that every major process was hit by at least one compound, with glycosylation/protein folding, mitosis, cell polarity and vesicle traffic most frequently targeted (about 4-fold enrichment for glycosylation/protein folding across most libraries, including the deliberately unbiased NCI mechanistic-diversity set). DNA replication/repair, chromatin and transcription were depleted, except in the NCI oncology and RIKEN anticancer sets (P < 0.001), and cytosolic or cell-surface processes were enriched relative to nuclear ones (P < 0.0001), consistent with only 8.4% of known drug targets being nuclear. Corrected for size, RIKEN NPDepo was the most functionally diverse library and NCI-NP the least. The NIH Clinical Collection was enriched for sterol metabolism, driven by compounds that interact with human cytochrome P450s, whose yeast homologs are ERG11, ERG5 and NCP1, so yeast may flag likely drug-drug interactions. GSK kinase inhibitors known to bind human MSK mapped to yeast SLT2 (MAPK cascade), and five human PLK inhibitors mapped to nuclear-envelope protein targeting, consistent with yeast CDC5. Scaffold analysis grouped artemisinin derivatives (mitosis, with NP266 also linked to mitochondrial cristae) and psoralens (vesicle traffic and membrane processes).

Validation was done at scale. Of 67 NPDepo HCS compounds predicted to cause cell-cycle arrest, 27 (40%) perturbed the cell cycle by flow cytometry and 19 of those 27 (70%) matched the predicted phenotype (enrichments over permuted labels: G1 about 12x, G2 about 3x, S 4x). Of 25 compounds predicted to hit cell-wall processes, 8 (32%) altered beta-1,3-glucan or chitin staining, 11 (44%) widened the bud neck, 7 caused zymolyase hypersensitivity and 3 caused rapid leakage like echinocandin B; 48% showed at least one cell-wall phenotype versus 4% (1 of 24) of controls (P < 0.05). A pseudojervine cluster led to the correct prediction that jervine also mislocalizes glucan. Dual-target mining found NP214 (a bleomycin A2 derivative) predicted for DNA replication and proton transport, consistent with bleomycin's secondary membrane effects, and NPD5925, predicted for DNA catabolism and cell-wall biogenesis: it caused echinocandin-like leakage, localized to the nucleus like DAPI, and arrested cells in G1/early S like hydroxyurea; no single pleiotropic gene explained its dual profile, and dose curves would help separate primary from secondary mechanisms. Resources released include the MOSAIC database (mosaic.cs.umn.edu), the BEAN-counter and CG-TARGET software, and a "bioprocess diversity set" plus per-process sets of compounds for follow-up.

In the Discussion the authors argue the approach suits systematic annotation of natural-extract collections, that other sensitized backgrounds (for example, PDR5 is steroid-specific) or process-biased diagnostic pools could be built, that the pool can shrink further for more multiplexing, and that the yeast network is a roadmap for S. pombe, E. coli and human cells, where genetic-interaction maps and CRISPR chemical-genetic screens are feasible.

---

## Significance in Introduction Context

- Shows how the yeast genetic interaction network (double-mutant epistasis: negative and positive interactions) provides a "key" for decoding drug mode of action, a modern use of epistasis and gene function similarity.
- Illustrates pooled barcode-sequencing, drug-sensitized genetic backgrounds, diagnostic subsets and systems-level genetics.
- Connects model-organism genetics to chemical biology and drug discovery, including validation by flow cytometry and cell-wall phenotypes.

---

## Key References

1. **Costanzo M et al. (2016)** — A global genetic interaction network maps a wiring diagram of cellular function (Science 353:aaf1420) — the genetic interaction compendium used for interpretation.
2. **Costanzo M et al. (2010)** — The genetic landscape of a cell (Science 327:425-431) — the earlier genetic-interaction map used for diagnostic strain selection.
3. **Parsons AB et al. (2004)** — Integration of chemical-genetic and genetic interaction data links bioactive compounds to cellular target pathways (Nat Biotechnol 22:62-69) — the principle behind the method.
4. **Parsons AB et al. (2006)** — Exploring the mode-of-action of bioactive compounds by chemical-genetic profiling in yeast (Cell 126:611-625).
5. **Giaever G et al. (2004)** — Chemogenomic profiling (PNAS 101:793-798) — HIP-based chemical genomics. [https://doi.org/10.1073/pnas.0307490100](https://doi.org/10.1073/pnas.0307490100)
6. **Lee AY et al. (2014)** — Mapping the cellular response to small molecules using chemogenomic fitness signatures (Science 344:208-211).
7. **Smith AM et al. (2010)** — Highly-multiplexed barcode sequencing (Nucleic Acids Res 38:e142) — the multiplexing basis.
8. **Yu L et al. (2006)** — A survey of essential gene function in the yeast cell division cycle (Mol Biol Cell 17:4736-4747) — used to map cell-cycle phenotypes for validation.

---

## Future Research Directions

- Extend annotation to natural-extract collections, other fungi, bacteria (S. pombe, E. coli) and human cells using genetic-interaction maps and CRISPR-based chemical-genetic profiles.
- Build sensitized backgrounds tailored to drug classes and process-specific or smaller diagnostic pools for higher multiplexing.
- Use dose series to separate primary from secondary modes of action of dual-target compounds (NP214, NPD5925), and the bioprocess diversity/specific sets to prioritize probes.
- Understand the biased chemical target space (enriched glycosylation/folding, depleted nuclear targets) and transporter-driven general resistance (gtr1, avt5).

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
