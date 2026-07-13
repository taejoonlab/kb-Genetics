---
tags: [genetics, class, review, en]
date: 2026-07-13
type: class
---

# Pick Your Poisson: An Educational Primer for Luria and Delbrück's Classic Paper

## Citation (NLM)
Meneely PM. Pick your Poisson: an educational primer for Luria and Delbrück's classic paper. Genetics. 2016;202(2):371–375. doi:10.1534/genetics.115.184564

**DOI:** [https://doi.org/10.1534/genetics.115.184564](https://doi.org/10.1534/genetics.115.184564)

---

## Summary

This paper is an educational "Primer" in Genetics, written by Philip Meneely (Haverford College), providing a pedagogical guide to help modern students understand Luria & Delbrück (1943). It unpacks the statistical logic, experimental design, and conceptual significance of the fluctuation test.

**Historical context:** Luria's key insight came while watching slot machines at a faculty mixer in 1942 at Indiana University. Like a slot machine that rarely pays out but produces a jackpot when it does, early mutations in a bacterial culture produce large clones — a "jackpot." In January 1943, Luria outlined the experiment in a letter to Delbrück, who immediately worked out the theoretical framework. Their collaboration produced the November 1943 paper in Genetics.

**Experimental background for modern students:** The Primer explains that phage infections occur by a burst (binary lysis), not gradually — making mutations to resistance a binary event suited to binomial/Poisson statistics. Luria used a pure phage culture (phage α, later T1), an important technical advantage over prior investigators who used mixed cultures.

**Unpacking the Poisson distribution:** The key property of a Poisson distribution is that mean = variance. In the control experiment (Table 1), multiple samples from the same culture yield results consistent with Poisson expectations. In the experimental case (Table 2), separate independent cultures show variance >> mean. In Experiment 16, while the mean was 11.35 resistant colonies per culture, 11 of 20 cultures had zero and 3 had 35–107 — a striking violation of Poisson statistics.

**The jackpot phenomenon:** Cultures with many resistant colonies had an early mutation that expanded into a large clone before plating. Under acquired immunity, all cultures would have been challenged at the same time, predicting similar numbers. The "jackpots" are the clearest signature of pre-existing, random mutation.

**Mutation rate calculation:** Using the Poisson formula P₀ = e⁻ʰ, the mutation rate is derived from cultures with no resistant bacteria: h = -ln(P₀). In Experiment 16, P₀ = 11/20 = 0.55, giving h = 0.60 mutations/culture. Dividing by cell count (5.6 × 10⁸) yields the per-cell mutation rate. The resistance mutation likely occurs in the fhuA gene (T1 phage receptor).

**Connections to genetics concepts:** The most important lesson: mutations arise at random, not because they are beneficial. Discussion questions in the Primer include: why cell divisions were used as time units; significance of resistance persisting without phage; calculating probability of resistance to three antibiotics simultaneously (relevant to tuberculosis therapy); and whether CRISPR adaptive immunity resembles the "acquired immunity" hypothesis.

**Educational value:** While the differential equations in the original paper are challenging, the central conclusion — comparing Tables 1 and 2 — is accessible without advanced mathematics. The Primer bridges physics-level statistics with undergraduate biology.

---

## Significance in Introduction Context

- Makes the Luria-Delbrück classic accessible to modern students, connecting a 1943 experiment to contemporary antibiotic resistance and CRISPR
- Explains how Poisson statistics (from physics) apply to biological random events — an important cross-disciplinary insight
- Demonstrates the power of quantitative experimental design: the genius was recognizing that high variance is the signal, not the problem
- Used in class alongside the original paper to teach statistical reasoning, experimental design, and the concept of random mutation

---

## Key References

1. **Luria & Delbrück (1943)** — Genetics 28:491–511 — The original classic paper being explained
2. **Luria SE (1966)** — Phage and the Origins of Molecular Biology — Luria's personal account of the experiment's origins

---

## Future Research Directions

- Extend this Primer approach to other classic genetics papers to build a pedagogical series
- Develop computational simulations of the fluctuation test for interactive classroom use
- Connect the fluctuation test logic to modern mutation accumulation experiments using whole-genome sequencing

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-13*
