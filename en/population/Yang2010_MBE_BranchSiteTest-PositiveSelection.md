---
tags: [genetics, class, population, en]
date: 2026-07-12
type: class
---

# Statistical Properties of the Branch-Site Test of Positive Selection

## Citation (NLM)
Yang Z, dos Reis M. Statistical properties of the branch-site test of positive selection. Mol Biol Evol. 2011;28(3):1217-1228. doi:10.1093/molbev/msq303

**DOI:** [https://doi.org/10.1093/molbev/msq303](https://doi.org/10.1093/molbev/msq303)

---

## Summary

The branch-site test is a likelihood ratio test (LRT) designed to detect episodic positive Darwinian selection along pre-specified lineages (foreground branches) of a phylogeny, where selection is restricted to a subset of codons in a protein-coding gene. Selection is measured by the nonsynonymous-to-synonymous substitution rate ratio (ω = dN/dS), with ω > 1 indicating positive selection. Because it jointly conditions on both the branch and the site dimensions, the branch-site test is expected to be more powerful than earlier branch-based tests (which average ω over all codons) or site-based tests (which average over all branches), particularly when positive selection is episodic and affects only a small fraction of residues.

The paper was motivated by controversy sparked by Nozawa et al. (2009), who claimed the branch-site test produced excessive false positives. Yang and dos Reis demonstrate that this claim rested on two misinterpretations. First, the correct null distribution for the LRT statistic (2ΔL) is not a standard χ²₁ distribution but a 1:1 mixture of a point mass at zero and χ²₁ — because the null hypothesis fixes ω₂ = 1, a value at the boundary of the alternative parameter space. This well-established property (Chernoff 1954) produces the U-shaped P-value histogram observed by Nozawa et al., which is expected rather than "abnormal." Second, Nozawa et al. confused the number of inferred substitutions with the sample size: the relevant quantity for asymptotic reliability is the number of codons in the alignment, not the number of inferred changes.

Using EVOLVER/CODEML (PAML package), the authors performed extensive computer simulations on trees of 8 and 16 species, varying sequence length (20–10,000 codons), selection strength (ω₂), and the proportion of sites under positive selection (p₂). Under the null model, false-positive rates ranged from 4.0% to 6.4% across all conditions — statistically indistinguishable from the nominal 5% level — demonstrating reliable behavior with as few as 20–50 codons. The mixture distribution was used throughout; the earlier practice of using χ²₁ (as in Nozawa et al.) inflates P-values for datasets where 2ΔL = 0 but has no practical consequence because large P-values all lead to acceptance of the null.

Power comparisons revealed a striking advantage for the branch-site test over branch-based alternatives. When 10% of codons (p₂ ≈ 0.1) are under positive selection with ω₂ = 4 and sequences of 500 codons, the branch-site test rejected the null in 62–81% of replicates. In contrast, the branch test (Yang 1998), Pair Heuristic, and Pair M0 all showed approximately 0% power in the same conditions. The site-model pair (M1a–M2a) applied to just the two foreground sequences reached only 27–40% power. Power increases monotonically with sequence length, selection intensity, and the fraction of sites under selection. These results confirm that averaging ω over the entire gene — as all branch-based tests do — renders them unable to detect episodic selection when most codons are under purifying constraint.

The authors also review practical limitations and cautions. Sequence and alignment errors are the primary practical concern: misaligned codons create spurious runs of nonsynonymous differences at a single site, mimicking the signature of positive selection. The study of Mallick et al. (2010) showed that many positive selection signals on the chimpanzee lineage reported by Bakewell et al. (2007) disappeared after improving data quality, illustrating how alignment artifacts — not test pathology — produced inflated false-positive rates in real genomic analyses. Yang and dos Reis conclude that the branch-site test is statistically sound, conservative when the correct mixture distribution is used, and valuable for hypothesis generation, but should be applied with care when data quality is uncertain.

---

## Significance in Introduction Context

- The branch-site test addresses a fundamental challenge in molecular evolution: detecting positive selection that is both lineage-specific and site-specific, a pattern invisible to tests that average over either dimension.
- The paper directly refutes claims of statistical invalidity by clarifying the correct null distribution (mixture of 0 and χ²₁) and demonstrating that observed P-value patterns are mathematically expected, not pathological.
- The power comparison demonstrates that widely used branch-based counting methods (Zhang et al. 1997; Messier and Stewart 1997) are effectively worse than a random classifier when selection is heterogeneous across sites, a sobering result for genomic-scale positive selection studies.
- Real biological case studies — bat flight energetics (Shen et al. 2010), AGPase enzyme diversification (Georgelis et al. 2009), and Heliconius UV rhodopsins (Briscoe et al. 2010) — illustrate how branch-site inferences can be validated experimentally and generate mechanistic hypotheses.
- The discussion of alignment sensitivity provides an important methodological warning: the branch-site test is a magnifying glass that amplifies both true signal and systematic data errors, making preprocessing pipelines as important as the test itself.

---

## Key References

1. **Yang Z, Nielsen R (2002)** — https://doi.org/10.1093/oxfordjournals.molbev.a004148 — Original formulation of the branch-site test; later found to generate excess false positives under assumption violations
2. **Zhang J, Nielsen R, Yang Z (2005)** — https://doi.org/10.1093/molbev/msi237 — Modified branch-site model (Model A) that substantially reduced false-positive rates and is now the standard implementation
3. **Nozawa M, Suzuki Y, Nei M (2009)** — https://doi.org/10.1093/molbev/msp098 — Simulation study that claimed the branch-site test had excessive false positives; this paper's primary target for rebuttal
4. **Chernoff H (1954)** — https://doi.org/10.1214/aoms/1177728725 — Statistical foundation for the 1:1 mixture null distribution when the null hypothesis lies on the boundary of the parameter space
5. **Bakewell MA, Shi P, Zhang J (2007)** — https://doi.org/10.1073/pnas.0701705104 — Large-scale branch-site analysis of human, chimpanzee, and macaque; detected more positive selection on the chimpanzee lineage, later attributed to alignment artifacts
6. **Fletcher W, Yang Z (2010)** — https://doi.org/10.1093/molbev/msp231 — Demonstrated that alignment errors cause excessive false positives in codon models, explaining many genomic-scale artifacts
7. **Mallick S et al. (2010)** — https://doi.org/10.1371/journal.pgen.1000824 — Reanalysis of chimpanzee positive-selection candidates showing most signals disappear with improved sequence quality

---

## Future Research Directions

- Development of more alignment-robust codon models or preprocessing filters that reduce the sensitivity of the branch-site test to indel misalignment without sacrificing power against true positive selection.
- Extension of the branch-site framework to allow multiple foreground branches to be tested simultaneously without requiring strong a priori branch specification, potentially integrating with phylogenetic uncertainty.
- Incorporating population-genetic data (e.g., within-species polymorphism from population genomics) into branch-site-style tests to better distinguish recent from ancient positive selection and reduce false positives from demographic confounders.
- Systematic benchmarking of branch-site power under more realistic site-frequency spectrum models, including long-range epistasis and compensatory evolution at serine-encoding codon pairs, which the current model cannot distinguish from positive selection.
- Application of branch-site testing to ancient DNA datasets where branch lengths are short and sequence damage introduces systematic errors, requiring modified statistical frameworks adapted for degraded sequence data.

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-12*
