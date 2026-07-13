---
tags: [genetics, class, review, en]
date: 2026-07-13
type: class
---

# Using BLAST to Teach "E-value-tionary" Concepts

## Citation (NLM)
Kerfeld CA, Scott KM. Using BLAST to Teach "E-value-tionary" Concepts. PLoS Biol. 2011;9(2):e1001014. doi:10.1371/journal.pbio.1001014

**DOI:** [https://doi.org/10.1371/journal.pbio.1001014](https://doi.org/10.1371/journal.pbio.1001014)

---

## Summary

BLAST (Basic Local Alignment Search Tool) is the central bioinformatics tool for sequence comparison and database retrieval. This educational paper explains the mechanistic underpinnings of the BLAST algorithm and proposes a pedagogical approach to teaching E-value and molecular evolution concepts simultaneously.

The BLAST workflow proceeds as follows. A user submits a query sequence (nucleotide or amino acid), which is fragmented into short "words." From each word, a set of synonyms — sequences scoring above a threshold using a substitution matrix such as BLOSUM62 — is generated. These words are used to scan the database for matching positions. When two word hits appear within a preset distance in the same subject sequence, the alignment is extended without gaps (ungapped alignment), and if the score is sufficiently high, a gapped alignment is performed to optimize the match.

Alignment quality is quantified as a raw score (S), computed by summing substitution matrix scores across aligned residue pairs and subtracting gap penalties. The gap-open penalty exceeds the gap-extension penalty because insertion/deletion events are biologically rare and should be penalized regardless of their length. The raw score is normalized to a bit score (S'), then converted to an E-value.

The E-value represents the expected number of subject sequences that would achieve the same bit score or higher purely by chance in the given database: E = (n × m) / 2^S', where n is the total residues in the database and m is the query length. A low E-value indicates high confidence of shared evolutionary ancestry. Because E-values depend on database size, the same pair of sequences will yield different E-values as databases grow.

Substitution matrices (BLOSUM) are log-odds score matrices derived from frequencies of amino acid substitutions observed in trusted alignments. BLOSUM62 was built from alignments sharing at least 62% identity. Rare amino acids (e.g., tryptophan) score higher for exact matches than common ones (e.g., leucine) because their coincidental alignment is statistically more surprising. Substitutions between chemically similar residues incur lower penalties than between dissimilar ones.

The authors argue that deconstructing the BLAST algorithm offers an outstanding opportunity to teach foundational concepts in molecular evolution, protein biochemistry, and statistical reasoning — turning a routine tool into a gateway to deeper biological literacy.

---

## Significance in Introduction Context

This paper's significance at the introduction of the field:
- [Provides a mechanistic understanding of the most widely used sequence analysis tool, enabling critical interpretation of results rather than passive acceptance of default outputs]
- [Bridges mathematics and biology by showing how E-values quantify evolutionary relationships — a paradigm applicable across all comparative genomics]
- [Essential reading for a genetics course because sequence homology analysis is the first step in identifying gene function, reconstructing evolutionary history, and contextualizing experimental results]

---

## Key References

Key references cited in the text (with DOI URLs):

1. **Altschul et al. (1997)** — [https://doi.org/10.1093/nar/25.17.3389](https://doi.org/10.1093/nar/25.17.3389) — Gapped BLAST and PSI-BLAST: next-generation protein database search programs
2. **Altschul et al. (1990)** — J Mol Biol 215:403–410 — Original BLAST paper: basic local alignment search tool
3. **Henikoff & Henikoff (1992)** — [https://doi.org/10.1073/pnas.89.22.10915](https://doi.org/10.1073/pnas.89.22.10915) — Amino acid substitution matrices from protein blocks (original BLOSUM paper)
4. **Eddy SR (2004)** — Nat Biotechnol 22:1035–1036 — Where did the BLOSUM62 alignment score matrix come from?

---

## Future Research Directions

Unresolved questions and future research ideas raised by this paper:

- [How can context-specific substitution matrices (for membrane proteins, extremophile organisms, etc.) improve BLAST sensitivity and specificity beyond general-purpose BLOSUM matrices?]
- [As databases grow exponentially, how should E-value thresholds be dynamically adjusted to better distinguish paralogs from orthologs at varying evolutionary depths?]
- [What integration of structural information with sequence similarity would enable detection of remote homologs beyond the "twilight zone" of sequence identity?]

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
