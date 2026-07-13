---
tags: [genetics, class, review, en]
date: 2026-07-13
type: class
---

# Where Did the BLOSUM62 Alignment Score Matrix Come From?

## Citation (NLM)
Eddy SR. Where did the BLOSUM62 alignment score matrix come from? Nat Biotechnol. 2004;22(8):1035–1036.

**DOI:** No DOI available (Nature Biotechnology Primer series)

---

## Summary

This concise primer explains the mathematical origins of the BLOSUM62 amino acid substitution matrix. BLOSUM62 is the most widely used scoring matrix in protein sequence alignment programs, yet few researchers understand where its 400 numbers originate.

The core principle is the log-odds score. The score s(a,b) for aligning two amino acids a and b is defined as the logarithm of the ratio of two likelihoods: the hypothesis that these residues are correlated through homology (numerator, target frequency pab) versus the null hypothesis that they occur independently by chance (denominator, background frequencies fa × fb): s(a,b) = (1/λ) × log(pab / fa·fb). When pab exceeds fa·fb, the score is positive (conservative substitution); when it falls below, the score is negative (non-conservative substitution).

This statistical definition of "conservative substitution" has nothing to do with amino acid chemistry or biochemistry — it is purely based on observed co-occurrence frequencies. This explains seemingly counterintuitive scores: tryptophan/tryptophan (W/W) pairs score +11 while leucine/leucine (L/L) pairs score only +4, because tryptophan is much rarer (fW = 0.013 vs. fL = 0.099), making its coincidental alignment far more surprising. Similarly, Lys/Glu (K/E) scores +1 while Ala/Leu (A/L) scores –1, because the relative enrichment of K/E in homologous alignments (relative to background) exceeds that of A/L.

The target frequencies pab for BLOSUM matrices were estimated by Henikoff and Henikoff from their BLOCKS database of trusted protein alignments. Only sequence pairs related by less than a given identity threshold were counted: a 62% threshold yielded BLOSUM62, 80% gave BLOSUM80, and 45% gave BLOSUM45. More divergent comparisons require flatter target frequency distributions (lower thresholds).

The paper further shows that even arbitrary scoring systems imply target frequencies: given scores sab, one can solve for λ using the constraint that all pab values sum to one, then back-calculate the implied target alignment frequencies. This reveals that NCBI BLASTN's +1/–2 system is optimized for detecting 95%-identity alignments, while FASTA's +5/–4 system targets 65%-identity alignments — the "twilight zone" for gapped alignment.

---

## Significance in Introduction Context

This paper's significance at the introduction of the field:
- [Reveals that alignment scores are not arbitrary heuristics but probabilistically grounded log-odds scores, enabling principled interpretation of alignment statistics]
- [Demonstrates that "conservative substitution" is a purely statistical concept, not a biochemical one — a crucial conceptual clarification for genomics practitioners]
- [Essential reading because understanding what a scoring matrix implicitly assumes allows informed choice of matrix for different evolutionary distances and sequence types]

---

## Key References

Key references cited in the text (with DOI URLs):

1. **Henikoff & Henikoff (1992)** — [https://doi.org/10.1073/pnas.89.22.10915](https://doi.org/10.1073/pnas.89.22.10915) — Amino acid substitution matrices from protein blocks (original BLOSUM paper)
2. **Karlin & Altschul (1990)** — [https://doi.org/10.1073/pnas.87.6.2264](https://doi.org/10.1073/pnas.87.6.2264) — Methods for assessing statistical significance of molecular sequence features using general scoring schemes
3. **Altschul SF (1991)** — J Mol Biol 219:555–565 — Amino acid substitution matrices from an information theoretic perspective

---

## Future Research Directions

Unresolved questions and future research ideas raised by this paper:

- [Can structural or biophysical information be integrated into substitution matrices to improve detection of remote homologs beyond what frequency-based matrices achieve?]
- [Development of taxon-specific substitution matrices for viruses, archaea, or extremophiles where amino acid usage patterns deviate from universal averages]
- [With exponential growth in metagenomics and single-cell genomics data, can new general-purpose matrices be constructed from broader, less biased training datasets?]

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
