---
tags: [genetics, class, article, en]
date: 2026-07-13
type: class
---

# Whole Genome Sequencing of Canids Reveals Genomic Regions under Selection and Variants Influencing Morphology

## Citation (NLM)
Plassais J, Kim J, Davis BW, Karyadi DM, Hogan AN, Harris AC, Decker B, Parker HG, Ostrander EA. Whole genome sequencing of canids reveals genomic regions under selection and variants influencing morphology. Nat Commun. 2019;10(1):1489. doi:10.1038/s41467-019-09373-w

**DOI:** [https://doi.org/10.1038/s41467-019-09373-w](https://doi.org/10.1038/s41467-019-09373-w)

---

## Summary

This paper presents a large-scale whole-genome sequencing (WGS) study of 722 canids — spanning 144 domestic dog breeds, 54 wild canid species, and 104 village dogs — to systematically identify genetic variants underlying morphological traits. Domestic dog breeds, shaped by intense artificial selection over the past 200 years, display an approximately 40-fold range in body size, making them a uniquely powerful model system for dissecting the genetics of complex traits.

**Dataset construction:** A variant catalog of over 91 million single nucleotide variants (SNVs) and small indels was generated from 722 genomes. Sequencing depth ranged from 2x to 93.8x (median 18x), yielding 76.5 million biallelic SNVs after quality filtering. The inclusion of wild canids enables ancestral allele inference, and village dogs serve as an outgroup to detect artificial selection signatures in modern breeds.

**GWAS methodology:** Sixteen morphological traits (weight, height, coat length, ear shape, tail shape, lifespan, etc.) defined by American Kennel Club (AKC) breed standards were analyzed using GEMMA, a genome-wide mixed model association algorithm with a linear mixed model correcting for sex and population stratification. Bonferroni-corrected significance threshold was applied (-log10 P ≈ 8.46).

**Key findings:**
- 28 significant associations identified; 12 previously unknown candidate genes discovered
- **Body size:** 14 genes (IGF1, LCORL, HMGA2, ACSL4, ZNF608, ADAMTS9, R3HDM1, GHR, SMAD2, STC2, IGF1R, IGSF1, HNF4G, IRS4) collectively explain ~95% of standard breed weight (SBW) variance
- **LCORL mutation:** A 1-bp insertion in the last exon of the long LCORL isoform found exclusively in large breeds (>41 kg); creates a premature stop codon (p.S1221*) causing loss of 611 C-terminal amino acids including the DUF4553 DNA-binding domain; derived allele frequency of 0.67 in large breeds vs. 0 in small breeds (<10 kg)
- **Lifespan:** LCORL, HMGA2, IGF1, and the CFA26 locus significantly associated with longevity; negative correlation between body weight and lifespan (r = 0.72)
- **Long legs:** ESR1 (estrogen receptor 1) intronic variant identified; Irish Wolfhounds and Whippets show 20–70-fold higher ESR1 expression than other breeds
- **Ear shape:** Drop ear phenotype explained by a single lncRNA (TCONS_00016758/16759) exonic variant on CFA10; large round ears associated with RIMS1-KCNQ5 interval on CFA12
- **Selective sweep analysis:** XP-CLR and XP-EHH tests confirm positive selection signatures at 13 of 18 GWAS candidate genes

**Significance:** In striking contrast to human height, where hundreds of loci collectively explain only ~10% of variance, just 14 genes explain 95% of body size variation across dog breeds. This demonstrates how artificial selection can dramatically simplify the genetic architecture of complex traits.

---

## Significance in Introduction Context

The significance of this paper in the context of course introduction:
- **Methodological leap in canine GWAS:** Shifts from 172,115-SNP chip arrays to a 91-million-variant WGS-based approach, enabling direct identification of causal variants without the multi-megabase LD ambiguity inherent in chip-based studies
- **Paradigm for artificial vs. natural selection:** Demonstrates concretely that intense artificial selection for breed phenotypes creates a radically simplified genetic architecture — a small number of large-effect loci — in contrast to natural selection which maintains many small-effect loci
- **Why read this in class:** Provides a working example of GWAS methodology, selective sweep statistics (XP-CLR, XP-EHH), linkage disequilibrium (LD) structure exploitation, ancestral allele inference using wild relatives, and the strength of using companion animals as genetic models for mammalian biology

---

## Key References

Key references cited in the text (with DOI URLs):

1. **Sutter et al. (2007)** — [https://doi.org/10.1126/science.1137045](https://doi.org/10.1126/science.1137045) — First identification of a single IGF1 haplotype as the major determinant of small body size in dogs
2. **Parker et al. (2017)** — [https://doi.org/10.1016/j.celrep.2017.03.079](https://doi.org/10.1016/j.celrep.2017.03.079) — Genomic analyses revealing geographic origin, migration, and hybridization in modern dog breed development
3. **Boyko et al. (2010)** — [https://doi.org/10.1371/journal.pbio.1000451](https://doi.org/10.1371/journal.pbio.1000451) — CanMap project: morphological QTL discovery in 915 dogs using 60,968 SNPs
4. **Zhou & Stephens (2012)** — [https://doi.org/10.1038/ng.2310](https://doi.org/10.1038/ng.2310) — GEMMA: genome-wide efficient mixed-model analysis for association studies
5. **Plassais et al. (2017)** — [https://doi.org/10.1371/journal.pgen.1006661](https://doi.org/10.1371/journal.pgen.1006661) — Three X-chromosome genes associated with body weight, muscling, and back fat in large vs. small dogs
6. **Vaysse et al. (2011)** — [https://doi.org/10.1371/journal.pgen.1002316](https://doi.org/10.1371/journal.pgen.1002316) — Multi-breed phenotype association analysis using 170K SNP array

---

## Future Research Directions

Unresolved questions and future research ideas raised by this paper:

- Identifying the remaining ~5% of body weight variance in large and giant breeds (>41 kg), where X-chromosome loci spanning megabases remain difficult to fine-map
- Functional characterization of newly discovered genes (LCORL, ADAMTS9, R3HDM1, HNF4G): expression studies in appropriate tissues (growth plate cartilage) and knockout/knock-in functional experiments are needed
- Elucidating the molecular mechanism by which ESR1 overexpression contributes to long-limbed phenotypes and predisposition to osteosarcoma in sighthound breeds
- Expanding village dog phenotype data collection to enable systematic comparison of wild-type vs. artificially selected genomic landscapes
- Mechanistic dissection of the IGF1/GH signaling pathway's role in the inverse relationship between body size and longevity

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
