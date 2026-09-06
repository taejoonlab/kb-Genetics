---
tags: [genetics, class, review, en]
date: 2026-09-06
type: class
---

# Genome assembly in the telomere-to-telomere era

## Citation (NLM)
Li H, Durbin R. Genome assembly in the telomere-to-telomere era. Nat Rev Genet. 2024;25(9):658-670. doi:10.1038/s41576-024-00718-w

**DOI:** [https://doi.org/10.1038/s41576-024-00718-w](https://doi.org/10.1038/s41576-024-00718-w)

---

## Summary

*De novo* assembly — reconstructing a genome from sequencing reads — has been a central problem in computational biology for four decades, and until very recently it was unsolved. Even the human reference genome contained hundreds of gaps totalling hundreds of megabases of highly repetitive and recently duplicated sequence. This review, by the authors of some of the field's most widely used tools, explains how the field arrived at **telomere-to-telomere (T2T)** assemblies and what still stands in the way.

The core difficulty is a mismatch of scale. Sequencing reads span a hundred bases to a few tens of kilobases; chromosomes are tens of megabases to gigabases. Assembly means finding overlaps among reads that cover the genome many times over and stitching them together. **Repeats longer than the read length are fundamentally unresolvable** — if a repeat exceeds the read, no read spans it uniquely, and the assembly must break or collapse.

The review traces this through the history of sequencing. Model organism references were built ~20 years ago from **Sanger reads** of a few hundred to a thousand bases: accurate but low-throughput and expensive. **Short-read platforms** cut costs by orders of magnitude but produced more fragmented assemblies, because ~150 bp reads cannot span most repeats. **Single-molecule long reads** from 2010 were a turning point: thousands of bases long, though with ~10% error versus <1% for short reads. They made complete bacterial genomes routine and human contigs longer than 10 Mb. Short-read-only assemblies are no longer competitive on completeness or continuity. But low-accuracy long reads still could not resolve repeats longer than the reads, so as late as the end of 2019 most multicellular genomes could not be assembled completely.

The authors emphasize a second problem that is easy to overlook: **ploidy**. Almost all eukaryotes are diploid or polyploid, and unless the organism is inbred or experimentally manipulated, the haploid copies are similar but not identical. Assemblers built before 2020 could not reliably separate homologous haplotypes and instead produced fragmented, lower-quality mosaics. Getting a **haplotype-resolved** assembly — two complete, separate parental genomes — is a distinct and harder goal than getting one consensus sequence.

The breakthrough was **accurate long reads** (HiFi) in 2019: long enough to span most repeats and accurate enough to distinguish haplotypes and near-identical repeat copies. Combined with **long-range information** (Hi-C, trio binning from parental short reads, ultra-long nanopore reads), modern assemblers routinely produce near-T2T, haplotype-resolved assemblies. The review covers the three critical read properties assembly strategy must trade off — **length, accuracy, and evenness of representation** — surveys assembly algorithms and evaluation methods (contiguity, completeness, correctness), and closes with what remains: the last gaps in the largest satellite arrays and rDNA, and assembly of **non-diploid** genomes such as polyploid plants and heterogeneous cancer or metagenomic samples.

---

## Significance in Introduction Context

- Essential background for the genome annotation and resources lecture: every reference genome students use is an assembly, with a history and known limitations
- Explains **why repeats are the fundamental problem** in genomics, connecting directly to the lectures on repetitive DNA, CNV, and structural variation
- Introduces **haplotype resolution** and makes clear why a "reference genome" of a diploid organism is a simplification
- Provides the technical background needed to read the T2T sheep and pea genome papers also in this vault
- Written by the developers of BWA/minimap2/hifiasm and of the Sanger assembly tradition — a rare case of tool authors explaining their own field's logic

---

## Key References

1. **International Human Genome Sequencing Consortium (2001)** — The initial human reference — The gap-ridden starting point
2. **Nurk et al. (2022)** — The complete sequence of a human genome (T2T-CHM13) — The demonstration that T2T is achievable
3. **Wenger et al. (2019)** — Accurate circular consensus long-read sequencing (HiFi) — The technological turning point the review identifies
4. **Cheng et al. (2021)** — Haplotype-resolved de novo assembly with phased assembly graphs (hifiasm) — Representative modern assembler
5. **Koren et al. (2018)** — Trio binning for complete haplotype-resolved assembly — Parental-read approach to phasing
6. **Rhie et al. (2021)** — Towards complete and error-free genome assemblies of all vertebrate species (VGP) — Community-scale application
7. **Simão et al. (2015)** — BUSCO — Standard completeness evaluation metric

---

## Future Research Directions

- Close the remaining gaps: the largest satellite arrays, centromeric higher-order repeats, and rDNA clusters that even ultra-long reads struggle to traverse
- Develop assemblers for **polyploid** genomes, where the number of haplotypes is unknown and copies may recombine
- Assemble heterogeneous samples — tumours with subclonal structure, metagenomes — where "the genome" is not a single entity
- Standardize assembly quality assessment so that completeness, correctness, and phasing accuracy are reported comparably across projects
- Move from a single reference to **pangenome graph representations**, and develop the tooling and coordinate systems that this requires

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-06*
