---
tags: [genetics, class, population, en]
date: 2026-07-12
type: class
---

# Confidence limits on phylogenies: an approach using the bootstrap

## Citation (NLM)
Felsenstein J. Confidence limits on phylogenies: an approach using the bootstrap. Evolution. 1985;39(4):783-791. doi:10.2307/2408678

**DOI:** [https://doi.org/10.2307/2408678](https://doi.org/10.2307/2408678)

---

## Summary

This landmark paper introduces the bootstrap as a practical statistical method for placing confidence limits on estimated phylogenies. Prior to this work, phylogenetic inference rarely attempted formal confidence quantification: methods yielded one or a few trees, and uncertainty was assessed informally by comparing among near-equally parsimonious alternatives. Felsenstein notes that this approach underestimates true uncertainty and argues for a rigorous resampling framework. The bootstrap, introduced by Efron (1979) as a computer-based technique for assessing the accuracy of statistical estimates, had not previously been applied to phylogenetic trees. The key challenge is that a phylogeny is not a scalar statistic: it is a complex topological entity whose space does not admit simple Euclidean extrapolation, making jackknife-based variance estimation impractical.

Felsenstein's central methodological contribution is identifying the appropriate unit of resampling for phylogenetic data. Rather than resampling species (rows in the data matrix), the bootstrap resamples characters — sites or morphological features (columns) — with replacement. The justification is that characters can be modeled as independently and identically distributed (i.i.d.) samples from the same multinomial distribution over character-state configurations, given the underlying phylogeny. Each bootstrap replicate thus consists of the same set of species but a new set of n characters, some original characters duplicated and others absent. A phylogenetic analysis is performed on each replicate, yielding a collection of bootstrap trees. The majority-rule consensus tree of these bootstrap trees is then taken as the bootstrap estimate of the phylogeny, with each clade annotated by the proportion of bootstrap trees in which it appeared.

The statistical interpretation of bootstrap proportions is directly addressed. A clade is considered to have significant support if it appears in 95% or more of bootstrap trees, by analogy to the standard rejection of alternatives at the 5% significance level in hypothesis testing. Felsenstein explicitly acknowledges the "multiple tests" problem — that many clades are simultaneously assessed, inflating the experiment-wise false discovery rate — but adopts a practical stance of treating each clade independently as if selected a priori. The paper also demonstrates that these bootstrap support values do not just measure consistency among parsimonious trees: an applied example using fossil horse data (Camin and Sokal 1965) shows that the set of most parsimonious trees defines a much narrower confidence interval than the bootstrap, confirming that examining only tied-best trees dramatically underestimates phylogenetic uncertainty.

A useful special case is analyzed for perfectly Hennigian data — datasets in which all characters are mutually compatible and thus define a unique most parsimonious tree with no homoplasy. Felsenstein derives that when data are perfectly compatible, a clade is included in the 95% bootstrap confidence interval if and only if it is defined by three or more characters. This "rule of three" follows from the probability of omitting all c supporting characters in n bootstrap draws, (1 − c/n)^n, falling below 0.05. The derivation provides an intuitive benchmark: even in ideal data, a single character or two characters are statistically insufficient for significant confidence in a grouping.

The paper includes a practical section on implementation, noting that existing phylogeny programs accepting differential character weights can generate bootstrap replicates without rewriting the data matrix — each replicate is simply a weight vector (how many times each character was sampled) fed to the program. Felsenstein makes his PHYLIP software package available to the community, enabling immediate adoption. The bootstrap approach is presented as an imperfect but practical advance that acknowledges uncertainty systematically, in contrast to the prevailing non-statistical hypothetico-deductive tradition in systematics.

---

## Significance in Introduction Context

- Introduced the first widely adopted method for quantifying uncertainty in phylogenetic inference: the character-resampling bootstrap became the de facto standard for assessing clade support in molecular phylogenetics and remains ubiquitous in published phylogenetic studies forty years later.
- Established the conceptual framework for distinguishing confidence in a phylogenetic estimate from the estimate itself: the distinction between the estimated tree and the confidence one has in each of its clades is now fundamental to how phylogenies are presented and interpreted in evolutionary genetics.
- Provided the key insight that the appropriate bootstrap resampling unit in phylogenetics is the character (column), not the taxon (row): this choice, grounded in the i.i.d. assumption for character evolution, is the foundation on which all subsequent bootstrap-based phylogenetic methods are built.
- Demonstrated through the fossil horse example that examining the set of most parsimonious trees severely underestimates phylogenetic uncertainty: this finding motivated a fundamental shift away from relying solely on parsimony optimality as a confidence criterion.
- Connected phylogenetic inference to mainstream statistical theory by showing that the bootstrap gives valid confidence assessments whenever the phylogenetic inference method is statistically consistent — and that bootstrap values cannot correct for inconsistency in the inference method itself, setting a clear boundary for the method's scope.

---

## Key References

1. **Efron B (1979)** — https://doi.org/10.1214/aos/1176344552 — original bootstrap paper introducing the resampling technique for statistical estimation; the method adapted to phylogenetics in this paper
2. **Efron B & Gong G (1983)** — "A leisurely look at the bootstrap, the jackknife, and cross-validation." Amer. Statist. 37:36-48 — accessible overview of bootstrap theory providing statistical foundation for the phylogenetic application
3. **Camin JH & Sokal RR (1965)** — https://doi.org/10.2307/2406441 — fossil horse morphological character data used as the worked example demonstrating the bootstrap method on a real dataset
4. **Cavender JA (1978)** — "Taxonomy with confidence." Math. Biosci. 40:271-280 — pioneering attempt to place confidence limits on phylogenies for the four-species case; provides the statistical motivation for seeking more general methods
5. **Margush T & McMorris FR (1981)** — "Consensus n-trees." Bull. Mathemat. Biol. 43:239-244 — introduces majority-rule consensus trees; the summarization method used to display the collection of bootstrap trees
6. **Templeton AR (1983)** — https://doi.org/10.2307/2408399 — test of whether one tree is significantly better supported than another; complementary approach to confidence limits on phylogenies
7. **Felsenstein J (1983)** — "Statistical inference of phylogenies." J. Roy. Statist. Soc. A 146:246-272 — Felsenstein's own earlier review of statistical approaches to phylogeny inference; establishes the statistical framing extended in this bootstrap paper

---

## Future Research Directions

- Determine the minimum number of bootstrap replicates needed for stable clade support estimates across phylogenomic datasets with thousands of loci, where each locus may have conflicting signal due to incomplete lineage sorting or horizontal gene transfer.
- Develop bootstrap methods that correctly account for character non-independence arising from linkage disequilibrium, gene co-evolution, or shared insertion/deletion events — a limitation explicitly flagged by Felsenstein as the most serious challenge to the i.i.d. assumption.
- Compare bootstrap support values directly with Bayesian posterior probabilities across empirical datasets to determine whether Bayesian approaches consistently overestimate clade support relative to the bootstrap, as suggested by subsequent theoretical and simulation studies.
- Investigate the relationship between the 95% bootstrap threshold and actual clade accuracy in genome-scale datasets where abundant data can drive bootstrap values to 100% even for phylogenetically contentious regions, such as the human-chimp-gorilla trichotomy.
- Extend the majority-rule consensus tree framework to networks — recombination graphs, reticulate phylogenies — where clades are replaced by splits and the appropriate bootstrap analogue must account for non-tree-like signal in the data.

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-12*
