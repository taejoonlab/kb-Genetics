---
tags: [genetics, class, article, en, 2025-2026]
date: 2026-09-06
type: class
---

# Phenotype to genotype: A new and rapid approach using whole-genome sequencing

## Citation (NLM)
Feltes M, Zimin AV, Angel S, Pansari N, Hensley MR, Anderson JL, et al. Phenotype to genotype: A new and rapid approach using whole-genome sequencing. PLoS Genet. 2025;21(7):e1011702. doi:10.1371/journal.pgen.1011702

**DOI:** [https://doi.org/10.1371/journal.pgen.1011702](https://doi.org/10.1371/journal.pgen.1011702)

---

## Summary

Forward genetic screening — mutagenize, screen for a phenotype, then find the responsible gene — remains the best unbiased way to assign function to the roughly 20% of human genes whose function is unknown. Chemical mutagens such as ENU and EMS induce **point mutations**, which are ideal for dissecting gene function but far harder to locate than an insertion or an engineered deletion. In the foundational screens of the 1980s–90s, finding the mutation meant **positional cloning**: outcross the mutant into a polymorphic background, genotype successive polymorphic markers to find the minimal region in perfect linkage with the phenotype (recombinant mapping), then amplify and sequence it. The process could take **years**.

Sequencing made **mapping-by-sequencing** possible, but the standard implementation has a persistent weakness. These methods compute **allele frequency differences** between pooled mutant and wild-type siblings and report the interval where mutant-linked alleles are enriched. In practice they often return **large genomic regions containing an intractable number of candidate genes**, at which point the investigator is back to testing dozens of candidates by hand.

The authors present **WheresWalker**, a mapping-by-sequencing algorithm designed to fix exactly this. It first identifies a mutation-containing interval from whole-genome sequencing data, and then — crucially — **retrieves genetic markers from within that interval and uses them to support positional cloning**, shrinking the region until only a small number of candidates remain. It is a hybrid: the speed of sequencing-based interval detection, followed by the resolution of classical recombinant mapping, with the marker-discovery step automated. Remaining candidates are then tested by **high-efficiency CRISPR/Cas9 editing** — phenocopy the mutant by targeting the candidate, and you have your gene.

Validation came from a zebrafish forward genetic screen for **modifiers of ApoB-lipoprotein metabolism**, a pathway central to metabolic and cardiovascular disease. WheresWalker correctly mapped and identified novel zebrafish mutations in ***mttp***, ***apobb.1***, and ***mia2*** — all genes with established roles in ApoB-lipoprotein biology, which is exactly the right positive control set. To demonstrate cross-species generality, the authors also recovered a **previously published mutation in maize**. Finally, and most importantly for a method paper, WheresWalker produced a genuinely new biological result: identification of ***slc3a2a*** as a **previously unappreciated locus modifying ApoB-lipoprotein biogenesis**.

---

## Significance in Introduction Context

- Ties directly to the forward-genetics lecture and shows how the classical logic survives in modern form: mapping is still recombination-based, but sequencing supplies the markers
- Makes explicit the historical arc — years of positional cloning → mapping-by-sequencing → hybrid approaches — and why each step was needed
- Explains why **point mutations from ENU/EMS** are simultaneously the most informative and the hardest mutations to find, motivating the whole methodological problem
- Demonstrates the modern completion of a forward screen: candidate identification followed by **CRISPR phenocopy** as the validation step, uniting forward and reverse genetics in one workflow
- Shows the value of a positive-control set (*mttp*, *apobb.1*) before claiming a novel finding (*slc3a2a*) — good methodological practice worth pointing out to students

---

## Key References

1. **Driever et al. (1996); Haffter et al. (1996)** — The large-scale zebrafish ENU mutagenesis screens — The foundational screens whose mapping burden this method addresses
2. **Schneeberger (2014)** — Using next-generation sequencing to isolate mutant genes from forward genetic screens — Review of mapping-by-sequencing and its limitations
3. **Bowen et al. / Obholzer et al. (RNA-seq based mapping)** — Transcriptome- and exome-based mapping approaches — The predecessors WheresWalker improves on
4. **Zebrafish ApoB-lipoprotein literature (Farber lab)** — *mttp*, *apoB* and lipoprotein biogenesis in zebrafish — The biological system used for validation
5. **CRISPR/Cas9 high-efficiency zebrafish editing (F0 crispant) methods** — Enables rapid candidate testing — The validation step in the pipeline

---

## Future Research Directions

- Characterize *slc3a2a*'s mechanism in ApoB-lipoprotein biogenesis, and test whether the human ortholog *SLC3A2* modifies lipoprotein traits in human cohorts
- Benchmark WheresWalker against other mapping-by-sequencing tools on a common set of mutants to quantify the interval-size improvement
- Extend the approach to species with poorer reference genomes or lower polymorphism, where marker discovery is the limiting step
- Apply the method to screens for phenotypes with incomplete penetrance or variable expressivity, where allele-frequency methods degrade most
- Use the newly efficient pipeline to revisit archived unmapped mutants from historical screens, which represent a large body of unrealized biology

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-06*
