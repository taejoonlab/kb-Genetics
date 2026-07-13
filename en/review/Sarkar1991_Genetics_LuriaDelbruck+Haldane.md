---
tags: [genetics, class, review, en]
date: 2026-07-13
type: class
---

# Haldane's Solution of the Luria-Delbrück Distribution

## Citation (NLM)
Sarkar S. Haldane's solution of the Luria-Delbrück distribution. Genetics. 1991;127(2):257-261.

**DOI:** [https://genetics.org/content/127/2/257](https://genetics.org/content/127/2/257)

---

## Summary

This Genetics Perspectives article by Sahotra Sarkar (Boston University, Center for the Philosophy and History of Science) recovers and presents J.B.S. Haldane's unpublished 1946 solution to the Luria-Delbrück distribution — the first time anyone explicitly computed this distribution — and explains why Haldane never published it.

Background — the Luria-Delbrück fluctuation test: In the 1940s, a central debate in bacterial genetics concerned whether mutations arise spontaneously at random during growth, or arise in response to a specific environmental challenge (e.g., bacteriophage exposure). Luria and Delbrück (1943) designed the fluctuation test to resolve this. Several independent cultures are grown from identical initial cells, then plated onto phage-containing agar to count phage-resistant colonies. If mutations are spontaneous: some cultures acquire a mutation early and that clone expands exponentially, producing many resistant cells, while others have no mutations — resulting in enormous variance between cultures. If mutations are phage-induced: only last-generation mutations contribute to resistance after plating, so the distribution approaches Poisson with low variance. This key insight — that the two hypotheses predict dramatically different variances — is the foundation of the fluctuation test. Luria and Delbrück derived approximate mean and variance expressions but, citing "considerable mathematical difficulties," could not compute the distribution itself.

Haldane's combinatorial solution: Haldane (then Weldon Professor of Biometry at University College London), finding Luria and Delbrück's conclusions convincing but their statistical treatment in need of improvement, developed a combinatorial method for computing explicit (though approximate) expressions for P_x — the probability of exactly x mutants in a culture. The key insight is that the number of ways to generate x mutants corresponds to the number of ways to partition x into powers of 2. Each partition represents a unique history of when mutations occurred, and the associated probability can be computed and summed across all partitions to yield P_x. For example, x = 5 has four partitions (1×4 + 1×1; 2×2 + 1×1; 1×2 + 3×1; 5×1), each yielding a calculable term. Haldane also systematically analyzed four deviations from ideal conditions: (1) plating only a fraction of the culture; (2) asynchronous cell division; (3) bacterial death; (4) lower growth rate of mutants. A critical and prescient conclusion: all four deviations decrease the variance of the distribution — therefore, observed reduction in variance alone cannot serve as evidence for directed mutation.

Why did Haldane never publish? Sarkar traces the story: Haldane sent the manuscript to Delbrück in 1946, who had it typed and gave a talk based on it at the Cold Spring Harbor Phage Course. But Haldane's only intent was to add an appendix to a paper submitted in 1948 by Lea and Coulson (published in 1949 as the first recognized numerical solution). Haldane could not write the appendix in time, and given his breadth of other interests, apparently concluded that his approach had been superseded. Note: R.A. Fisher may also have solved the problem in 1946 — he reportedly wrote a generating function on a scrap of paper for Crow, but the paper was lost.

Historical significance: No closed analytic solution for the Luria-Delbrück distribution exists to this day, and Haldane's combinatorial method comes closest to providing explicit expressions for P_x. Moreover, Haldane's 1946 analysis of non-ideal conditions directly anticipates the controversy that erupted in 1988 when Cairns et al. proposed directed mutagenesis in bacteria — the key statistical challenge is precisely that variance reduction could result from any of the non-ideal factors Haldane analyzed, rather than directed mutation.

---

## Significance in Introduction Context

- Reveals the statistical logic underlying the Luria-Delbrück fluctuation test — that the variance of the mutant distribution distinguishes spontaneous from induced mutagenesis — placing this foundational experiment in historical and mathematical context
- Demonstrates how scientific contributions can shape a field even without publication, through personal communication (Haldane's manuscript was read by Luria, Hershey, Delbrück, and Lederberg and influenced their thinking)
- Why this paper must be read in class: to understand the fluctuation test as both a landmark experiment in bacterial genetics and a mathematical problem, and to learn how Haldane's combinatorial approach clarifies the statistical reasoning behind the test and its limits

---

## Key References

1. **Luria & Delbrück (1943)** — Genetics 28:491-511 — Original fluctuation test paper; first experimental proof that phage resistance mutations in bacteria arise spontaneously and are pre-existing
2. **Lea & Coulson (1949)** — J. Genet. 49:264-285 — The first published numerical solution of the Luria-Delbrück distribution, which superseded Haldane's unpublished work
3. **Cairns, Overbaugh & Miller (1988)** — Nature 335:142-145 — Proposed directed mutagenesis in bacteria; revived controversy about the fluctuation test and put Haldane's variance-reduction analysis back in the spotlight

---

## Future Research Directions

- Develop a closed analytic solution or highly efficient computational method for the Luria-Delbrück distribution under a broad range of non-ideal conditions
- Re-examine the directed mutagenesis hypothesis using modern molecular tools (deep sequencing, single-cell analysis) to determine whether mutation rates in specific genes genuinely increase in response to selection pressure, and if so, whether the mechanism is consistent with Haldane's non-ideal-condition explanation

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-13*
