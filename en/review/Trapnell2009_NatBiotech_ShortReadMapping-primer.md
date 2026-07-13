---
tags: [genetics, class, review, en]
date: 2026-07-13
type: class
---

# How to Map Billions of Short Reads onto Genomes

## Citation (NLM)
Trapnell C, Salzberg SL. How to map billions of short reads onto genomes. Nat Biotechnol. 2009;27(5):455–457.

**DOI:** No DOI for this primer (associated TopHat tool DOI: 10.1093/bioinformatics/btp120)

---

## Summary

The advent of next-generation sequencing (NGS) technology — producing billions of short reads of 25–100 bp — created an urgent need for computational tools capable of mapping these reads back to reference genomes rapidly and accurately. This primer describes the challenges of short-read mapping and the two dominant algorithmic strategies developed to address them.

Two principal challenges frame the problem. First, computational scale: mapping billions of reads to a mammalian genome using conventional tools such as BLAST or BLAT requires hundreds to thousands of CPU hours, whereas newer tools can process hundreds of millions of reads per hour on a single desktop computer. Second, repetitive sequences: when a read originates from a repetitive element, determining which genomic copy it came from may be impossible, requiring the program to either report multiple locations or make a heuristic choice.

Two major algorithmic approaches are described. (1) **Spaced seed indexing (exemplified by Maq)**: each read is divided into four equal-length seeds. With at most two mismatches, at least two of the four seeds will match perfectly; by indexing all six pairs of seeds, candidate mapping positions can be rapidly identified. The spaced seed index requires tens of gigabytes of memory. (2) **Burrows-Wheeler transform (exemplified by Bowtie)**: a lossless data compression technique adapted for genomic indexing. The entire human genome index fits into under 2 GB of memory, and reads are aligned one character at a time to the transformed string, progressively narrowing the interval of candidate positions. Bowtie achieves over 30-fold speedup compared to Maq.

The paper also addresses spliced-read mapping for RNA-Seq data. Reads spanning exon-exon junctions cannot be aligned by standard mappers. Annotation-based tools (ERANGE) construct junction sequences from known exon coordinates, while annotation-free tools (TopHat, described by one of the authors) first identify exon-supported reads using Bowtie, then align remaining reads to predicted junctions. Typical overall mapping success rates are 70–75%, with many reads mapping to multiple genome positions.

The authors emphasize that this is a rapidly evolving field, with ongoing challenges around longer reads, indel support, divergent genomes, and read quality variation.

---

## Significance in Introduction Context

This paper's significance at the introduction of the field:
- [Provides the algorithmic foundation for understanding how RNA-Seq, ChIP-Seq, and whole-genome resequencing data are processed — the preprocessing step underlying all downstream genomic analyses]
- [Contrasts two fundamentally different indexing strategies (spaced seeds vs. Burrows-Wheeler) to illuminate the speed-accuracy-memory tradeoffs inherent in large-scale sequence analysis]
- [Essential reading for a genetics course because every modern genomics pipeline begins with read mapping; understanding its principles and failure modes is prerequisite to critically evaluating published results]

---

## Key References

Key references cited in the text (with DOI URLs):

1. **Nagalakshmi et al. (2008)** — [https://doi.org/10.1126/science.1158441](https://doi.org/10.1126/science.1158441) — Transcriptome of budding yeast defined by RNA-Seq
2. **Mortazavi et al. (2008)** — [https://doi.org/10.1038/nmeth.1226](https://doi.org/10.1038/nmeth.1226) — Mapping and quantifying mammalian transcriptomes by RNA-Seq
3. **Johnson et al. (2007)** — [https://doi.org/10.1126/science.1141319](https://doi.org/10.1126/science.1141319) — ChIP-Seq: genome-wide mapping of transcription factor binding
4. **Ley et al. (2008)** — [https://doi.org/10.1038/nature07485](https://doi.org/10.1038/nature07485) — Whole-genome sequencing of an AML genome
5. **Li et al. (2008)** — [https://doi.org/10.1101/gr.078212.108](https://doi.org/10.1101/gr.078212.108) — Maq: mapping using spaced-seed indexing
6. **Langmead et al. (2009)** — [https://doi.org/10.1186/gb-2009-10-3-r25](https://doi.org/10.1186/gb-2009-10-3-r25) — Bowtie: ultrafast short-read alignment using Burrows-Wheeler transform

---

## Future Research Directions

Unresolved questions and future research ideas raised by this paper:

- [As read lengths extend to tens of kilobases (PacBio, Nanopore), how should short-read mapping algorithms be redesigned or replaced, and when does spliced alignment give way to assembly-based approaches?]
- [When sequencing organisms that diverge significantly from the reference genome, what automated parameter adjustment strategies can maintain mapping accuracy without manual tuning?]
- [How should mapping quality scores be propagated and used in downstream analyses (SNP calling, expression quantification) to minimize false positives from multi-mapping reads?]

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
