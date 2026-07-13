---
tags: [genetics, class, review, en]
date: 2026-07-13
type: class
---

# What Is Dynamic Programming?

## Citation (NLM)
Eddy SR. What is dynamic programming? Nat Biotechnol. 2004;22(7):909–910.

**DOI:** No DOI available (Nature Biotechnology Primer series)

---

## Summary

This primer explains the dynamic programming algorithm that sits at the heart of computational biology software, using pairwise sequence alignment as the illustrative example. Programs including BLAST, FASTA, CLUSTALW, HMMER, GENSCAN, MFOLD, and PHYLIP are all based on dynamic programming or fast approximations thereof.

Dynamic programming was formalized in the early 1950s by mathematician Richard Bellman, who named it to shield his work from a mathematics-hostile U.S. Secretary of Defense. The core insight is to decompose a large optimization problem into smaller sub-problems that can be solved independently, storing each solution exactly once in a tabular form to avoid redundant computation — reducing exponential complexity to polynomial time.

For pairwise sequence alignment of sequences x (length M) and y (length N), the optimal alignment score S(i,j) is defined recursively as the maximum of three cases: (i) align xi to yj [S(i–1,j–1) + σ(xi,yj)], (ii) align xi to a gap [S(i–1,j) + γ], or (iii) align yj to a gap [S(i,j–1) + γ]. This recursion works because the scoring system is strictly local — the score contributed by any one aligned column is independent of all others, so the optimal alignment of a prefix is unaffected by extending it.

The algorithm has four components: (1) recursive definition of the optimal score, (2) a two-dimensional dynamic programming matrix storing optimal sub-problem scores, (3) bottom-up matrix filling from boundary conditions (S(0,0) = 0; S(i,0) = γi; S(0,j) = γj), and (4) traceback from cell (M,N) to (0,0) to recover the optimal alignment. Total computation time is proportional to MN, meaning aligning two 200-mers takes four times as long as two 100-mers.

The paper clearly states important limitations: dynamic programming is guaranteed to find the mathematically optimal solution, but whether this corresponds to the biologically correct alignment depends entirely on the scoring system; statistical significance of the score requires separate analysis; and the MN computational cost has driven the development of fast approximations like BLAST and FASTA.

---

## Significance in Introduction Context

This paper's significance at the introduction of the field:
- [Reveals the algorithmic skeleton shared across diverse bioinformatics tools, allowing informed understanding of what these programs can and cannot do]
- [Shows that the choice of scoring system (substitution matrix, gap penalty) is the biological assumption baked into the algorithm — separate from the algorithm's mathematical guarantee of optimality]
- [Essential reading for a genetics course because sequence alignment is the computational foundation of gene finding, phylogenetics, functional annotation, and structural prediction]

---

## Key References

Key references cited in the text (with DOI URLs):

1. **Bellman RE (1984)** — Eye of the Hurricane: An Autobiography. World Scientific — Historical origin and naming of dynamic programming

---

## Future Research Directions

Unresolved questions and future research ideas raised by this paper:

- [How can more biologically realistic scoring systems — affine gap penalties, position-specific score matrices, structural constraints — be integrated into dynamic programming frameworks without sacrificing computational efficiency?]
- [For genome-scale comparisons involving sequences of millions of base pairs, what approximation algorithms and parallel computing strategies can overcome the MN complexity bottleneck?]
- [Extension of dynamic programming to protein structure alignment or RNA secondary structure comparison: which problem classes remain tractable and which are NP-complete?]

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
