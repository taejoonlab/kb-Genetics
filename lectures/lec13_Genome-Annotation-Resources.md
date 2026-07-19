---
tags: [genetics, lecture, BME333-BIO333, 2026Fall]
date: 2026-07-20
type: lecture
---
# Real World Genetics — Genome Annotation & Resources

**Course:** BME333 / BIO333 Genetics (UNIST, 2026 Fall) · Lecture 13 · ~60 min
**Syllabus:** [← Course schedule](2026.BME333-BIO333-Syllabus.md) — Week 09, 2026-10-26 (Mon)

## Learning Objectives
By the end of this lecture, students should be able to:
- Define what a "genome" is and distinguish sequence, assembly, and annotation.
- Explain how short reads are generated and mapped to a reference genome.
- Describe how genes and functional elements are annotated (ab initio, homology, and evidence-based approaches).
- Use sequence-similarity search (BLAST) and understand its scoring machinery (dynamic programming, substitution matrices such as BLOSUM62).
- Navigate the major public genome resources (NCBI, Ensembl, UCSC) and recognize the limits of current annotations.

## Lecture Outline (~60 min)
1. **What is a genome, really?** (~8 min) — Define genome vs. gene content; coding vs. non-coding fraction; why "the genome" is a model/assembly, not a physical object. Motivate why annotation is a continuing process.
2. **From reads to a reference: sequencing & assembly** (~10 min) — Sanger vs. massively parallel (short-read) sequencing; coverage/depth; contigs, scaffolds, and gaps; reference vs. de novo assembly.
3. **Read mapping** (~8 min) — Why alignment to a reference is a computational bottleneck; seed-and-extend, indexing (Burrows-Wheeler), and how spliced mappers handle RNA-seq reads.
4. **Sequence alignment fundamentals** (~10 min) — Pairwise alignment by dynamic programming (global/local); gap penalties; substitution scoring with BLOSUM62; the difference between edit distance and biologically weighted scores.
5. **BLAST and homology search** (~8 min) — Heuristic word-based search, E-values and bit scores, and how BLAST turns database search into a tractable problem for annotation.
6. **Annotation pipelines & public resources** (~10 min) — Gene prediction (ab initio, homology, RNA-seq evidence); functional annotation (domains, GO); browsing at NCBI/Ensembl/UCSC; version control of assemblies and coordinates.
7. **Limits & open problems** (~6 min) — Incomplete/erroneous annotation, hard-to-map regions, structural variation, and why "finished" genomes still change.

## Textbook Reading
- **Genetics: From Genes to Genomes (8e)** — Ch. 10 Digital Analysis of DNA; Ch. 11 Genome Annotation. → [textbook ref](ref.Genetics-FromGenesToGenomes.md)

## Notes in this vault
Reviews & articles to introduce in class (each has a bilingual en/ko pair):
- [Goldman2016_PLoSgenet_WhatIsGenome](../en/review/Goldman2016_PLoSgenet_WhatIsGenome.md) — Framing piece: what we actually mean by "genome"; use to open the lecture.
- [Hobert2010_Genetics_WholeGenomeSequencing](../en/review/Hobert2010_Genetics_WholeGenomeSequencing.md) — Whole-genome sequencing as a routine tool; connects sequencing to gene identification.
- [Shendure2016_Genetics_MassiveParallelGenetics](../en/review/Shendure2016_Genetics_MassiveParallelGenetics.md) — Massively parallel sequencing/assays; the technology behind modern annotation.
- [Trapnell2009_NatBiotech_ShortReadMapping-primer](../en/review/Trapnell2009_NatBiotech_ShortReadMapping-primer.md) — Primer on short-read mapping (incl. spliced alignment); illustrates the reads-to-reference step.
- [Eddy2004_NatureBiotechPrimer_DynamicProgramming](../en/review/Eddy2004_NatureBiotechPrimer_DynamicProgramming.md) — Accessible primer on dynamic-programming alignment; core algorithm for the alignment segment.
- [Eddy2004_NatureBiotechPrimer_BLOSUM62](../en/review/Eddy2004_NatureBiotechPrimer_BLOSUM62.md) — Where substitution scores come from; pair with the dynamic-programming primer.
- [Kerfeld2011_PLoSBiol_BLAST](../en/review/Kerfeld2011_PLoSBiol_BLAST.md) — Practical guide to running and interpreting BLAST; hands-on companion for the homology-search segment.
- [Huddleston2016_Genetics_IncompleteHumanQTL](../en/review/Huddleston2016_Genetics_IncompleteHumanQTL.md) — Reminder that reference genomes and annotations remain incomplete; use in the "limits" segment.
