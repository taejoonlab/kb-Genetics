---
tags: [genetics, class, article, en, 2025-2026]
date: 2026-09-07
type: class
---

# Inferring chromosome segregation error stage and crossover in trisomic disorders with application to Down syndrome

## Citation (NLM)
Li Z, Yang W, Wu G, Chang TC, Cheng Z, Devidas M, et al. Inferring chromosome segregation error stage and crossover in trisomic disorders with application to Down syndrome. Nat Commun. 2025;16:6033. doi:10.1038/s41467-025-61413-w

**DOI:** [https://doi.org/10.1038/s41467-025-61413-w](https://doi.org/10.1038/s41467-025-61413-w)

---

## Summary

Errors in chromosome segregation during gametogenesis — **non-disjunction (NDJ)** — are the leading cause of pregnancy loss and of trisomic conditions including Down syndrome. Not all NDJ errors are equivalent, and distinguishing them matters. An error in **meiosis I** means the two homologues failed to separate, so the trisomic individual inherits two *different* homologues from that parent; an error in **meiosis II** means sister chromatids failed to separate, giving two copies of the *same* homologue; a **mitotic (post-zygotic)** error occurs after fertilization. These stages have different relationships to maternal age and to crossover recombination — reduced or abnormally positioned crossovers are a well-established risk factor for meiosis I errors, because chiasmata physically hold homologues together until anaphase I.

The obstacle has been methodological. Assigning an NDJ error to a stage conventionally requires **genotyping the proband together with both parents**, so that the parental origin of each chromosome can be traced. Parent samples are frequently unavailable — in retrospective cohorts, in clinical archives, in cancer studies — which has restricted this analysis to a minority of cases.

The authors developed **MeiHMM (Mis-segregation Error Identification through Hidden Markov Models)**, which infers both the **NDJ error stage** and the **crossover events** from the proband's genotype data. A hidden Markov model is well suited here: along a trisomic chromosome, the underlying state (which two of the three chromatids are identical by descent) changes only at crossover positions, and the observed genotypes are noisy emissions from that state. Recovering the hidden state sequence therefore recovers both the crossover positions and, from the pattern near the centromere, the stage at which segregation failed.

They applied the method to Down syndrome, including in the context of the associated leukaemia predisposition. Removing the parental-sample requirement makes it possible to analyse large existing cohorts retrospectively and to study the relationship between recombination and non-disjunction at a scale that was previously inaccessible.

---

## Significance in Introduction Context

- Directly supports the meiosis, non-disjunction, and aneuploidy material with a modern computational treatment
- Makes the **meiosis I versus meiosis II versus mitotic** distinction concrete and explains why the distinction is detectable at all — it depends on which chromatids are identical by descent
- Reinforces the mechanistic link between **crossover recombination and correct segregation**: chiasmata are not incidental to meiosis, they are load-bearing
- A good example of a **methodological advance that unlocks existing data** rather than requiring new sample collection
- Connects to the Carioscia meiosis-gene study in this vault, which addresses the same recombination–aneuploidy relationship from the population-genetic side

---

## Key References

1. **Hassold and Hunt (2001)** — To err (meiotically) is human: the genesis of human aneuploidy — The foundational review of non-disjunction
2. **Lamb et al. (1996, 2005)** — Susceptible chiasmate configurations of chromosome 21 — Established the link between crossover position and NDJ in Down syndrome
3. **Sherman et al. (2007)** — Epidemiology of Down syndrome — Maternal age and recurrence context (Sherman is an author here)
4. **Oliver et al. (2008)** — New insights into human nondisjunction of chromosome 21 in oocytes — Stage-specific analysis using parental genotypes
5. **Nagaoka et al. (2012)** — Human aneuploidy: mechanisms and new insights — Mechanistic framework
6. **Hidden Markov model literature for haplotype inference** — Methodological basis for MeiHMM

---

## Future Research Directions

- Apply MeiHMM retrospectively to large archived trisomy cohorts where parental samples were never collected
- Test whether crossover patterns inferred without parental data reproduce those from trio-based analyses, to validate the method independently
- Extend the approach to other trisomies (13, 18) and to sex chromosome aneuploidies, where mechanisms may differ
- Investigate whether specific crossover configurations predict clinical outcome in Down syndrome, including leukaemia risk
- Combine with the common meiosis-gene variation now being mapped in large cohorts, to ask whether inherited variation shifts the stage at which errors occur

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-07*
