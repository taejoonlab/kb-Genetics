---
tags: [genetics, class, review, en, 2025-2026]
date: 2026-09-06
type: class
---

# Why recombination hotspots?

## Citation (NLM)
Joseph J, Brazier T, Raynaud M, Glémin S, Baudat F, de Massy B, Lartillot N, Duret L. Why recombination hotspots? PLoS Genet. 2026;22(5):e1012152. doi:10.1371/journal.pgen.1012152

**DOI:** [https://doi.org/10.1371/journal.pgen.1012152](https://doi.org/10.1371/journal.pgen.1012152)

**Companion case study:** [[en/article/Everitt2025_GenomeRes_Termite-RecombinationHotspots]]

---

## Summary

Meiotic recombination exchanges genetic information between homologous chromosomes during gamete production. It begins with **programmed double-strand breaks (DSBs)**, which locally erase sequence. A break can be repaired from the sister chromatid or from the homologue; in the latter case **gene conversion** occurs. If the chromosome arms on either side of the conversion tract are exchanged, the outcome is a **crossover (CO)**; if not, a **non-crossover (NCO)**. Recombination is near-universal in eukaryotes for two reasons: it increases the efficacy of selection by breaking linkage between alleles of different selective value (Hill–Robertson), and in most sexual species it is **required for proper chromosome segregation** at meiosis I.

Recombination also has costs. It is **mutagenic** (in humans a DSB can raise the local mutation rate up to ~400-fold, which translates into ~40% more mutations in the strongest PRDM9 hotspots), and it drives **GC-biased gene conversion (gBGC)**, a fixation bias toward GC alleles that can fix slightly deleterious variants. The review asks whether the **recombination landscape** — where recombination happens — has evolved to capture the benefits while limiting these costs. Variation exists at three scales: **chromosome** (at least one CO per chromosome, so short chromosomes have higher rates per bp), **regional** (higher toward telomeres and in early-replicating regions, suppressed around centromeres) and **kilobase** — the **hotspots**, typically defined for LD maps as ~1 kb with ≥10× the regional background. The authors stress that the definition is not universal: it depends on the method (cytology, LD, pedigree, ChIP-seq) and the intermediate measured (DSB, CO, NCO).

**Two kinds of hotspot (Fig 1).** Hotspots were first found as clusters of gene conversion at the *b2* locus of the fungus *Ascobolus*, then 5′ of yeast genes (*ARG4*, *HIS4*). In yeast, plants, dogs and birds, hotspots sit in **promoters / open chromatin** and are evolutionarily stable. In humans, mice, some snakes and salmonids, a second type is directed by **PRDM9**: its C2H2 zinc-finger array binds a DNA motif, its PR/SET domain deposits H3K4me3 and H3K36me3, and the site is brought to the chromosome axis where SPO11 can cut. These hotspots turn over rapidly. *Drosophila* and *C. elegans* have no hotspots at all.

**Hypothesis 1 — hotspots aid pairing (§1.1).** Restricting DSBs and homology search to a small, predefined part of the genome should make homologue finding more efficient. Suggestively, the only two species known to lack hotspots (*Drosophila*, *C. elegans*) are among the few whose homologues synapse *independently* of recombination. The authors note that this association still needs a formal comparative test.

**The hotspot paradox (§1.2).** When the *ARG4* or *HIS4* hotspot is deleted on one homologue in yeast, DSBs form on the intact copy, which is then repaired using the deleted homologue as template and so is converted to the deleted version. A hotspot-inactivating mutation therefore spreads by **DSB-driven biased gene conversion (dBGC)**; simulations (Boulton et al. 1997; Coop & Myers 2007) show that this drive is too strong to be offset by selection for pairing or for recombination itself. There are three ways out: (i) target an epigenetic mark rather than a sequence, decoupling the recruiting locus from the cut locus; (ii) target loci under strong purifying selection (costly); or (iii) the **PRDM9 Red Queen** — targets erode, but zinc-finger mutations constantly create new binding specificities, and alleles that have lost their targets reduce fertility, so new alleles are positively selected.

**Where PRDM9-independent hotspots come from (§2).** The DSB machinery has little sequence specificity and needs accessible DNA, so hotspots may simply be **opportunistic** in open chromatin (yeast DSB hotspots are DNase I-hypersensitive; maize hotspots map to open chromatin). Two selective explanations are also discussed. (a) **Hill–Robertson dissipation**: a flat landscape maximises overall shuffling, but because strongly selected sites are concentrated in genes, placing hotspots at promoters may shuffle the fitness-relevant regions more. (b) **Avoiding methylated repeats**: in dogs and passerines only CpG-island promoters (hypomethylated) are hotspots; newly hypomethylated regions in PRDM9-KO mice became hotspots; induced methylation silences hotspots in *Ascobolus* and *Arabidopsis*; methylated genes in honey bees have fewer COs. Because CpG methylation represses transposable elements (via KRAB-ZNFs in vertebrates), a recombination machinery that avoids methylation would avoid **ectopic recombination** between repeats. Supporting observations: DNA-methylation-deficient mice gain DSBs in TEs; birds have less-methylated genomes and weaker hotspots; oocytes are less methylated than spermatocytes, and female dog recombination is less concentrated in CpG islands. Prediction: in PRDM9-lacking species, recombination heterogeneity should correlate with methylation heterogeneity.

**What PRDM9 is for (§3).** Full-length PRDM9 is found in sponges and cnidarians, so it was present in the ancestor of all animals; its hotspot function is traced at least to the Euteleostomi ancestor (~420 Mya). PRDM9 knock-out male mice and rats have sharply reduced fertility. The review tests two candidate advantages with new analyses:

- *Keeping recombination out of genes?* The authors' mouse analysis (**Fig 2**) shows that across expression quintiles PRDM9 binding, SPO11 oligos, DMC1 and ZCWPW1 hotspot densities all **increase** with meiotic expression, whereas **CO density falls** (about 0.4× in the top quintile). The CO deficit therefore reflects how breaks are *repaired*, not where they are *made* — and those genes still pay the DSB mutation and NCO-conversion costs. A **CO deficit in highly expressed genes is also seen in dogs**, which lack PRDM9 (**Fig 3**; dogs also show the promoter CO peak absent in humans). PRDM9 therefore cannot be credited with the gene-body CO deficit.
- *The cost side is ambiguous.* The DSB mutagenic effect is modest in weaker, promoter-type hotspots, and gBGC is not clearly deleterious on balance (it also purges strongly deleterious, mostly AT-ward mutations).
- *PRDM9 targets repeats.* DMC1 ChIP-seq hotspots of six mouse PRDM9 alleles (**Fig 4**) are depleted at L1 and ERVK but enriched at MIR and, depending on the allele, at MaLR (13R: ~1,200 extra hotspots) or ERV1 (CAST: ~2×). PRDM9-KO (default) hotspots are depleted in almost every repeat family. Overall, PRDM9 alleles put **20–25% more** of their targets near repeats. Half of disease-associated non-allelic homologous rearrangements in humans fall in PRDM9-A hotspots, mostly in low-copy repeats. So diverting DSBs away from promoters is not obviously beneficial.
- *Preferred explanation — coupling DSB formation to repair (§3.2).* PRDM9 often binds **both homologues symmetrically** and brings both the site to be broken and its repair template to the axis (with MEI4, IHO1). High affinity makes symmetric binding likely, so repair is fast (**Fig 5** toy model: probability that the first DSB is repaired quickly = 0.5 for an ancestral Spp1-like system, 0.8 for a new PRDM9 allele, 0 for an old eroded allele). This also explains why the **default system has persisted** for 600 My: when an old PRDM9 allele fails, mutations that strengthen the default system are favoured. On this view, rapid hotspot turnover is a *by-product* of PRDM9, not a selected trait.

**Conclusions (§4, Fig 6).** Promoter hotspots may be merely opportunistic, or maintained by selection to avoid repeats; PRDM9's main advantage may be efficient DSB–repair coupling rather than load reduction. Open cases remain, such as hotspots at transcription end sites in aspen, and the field needs a harmonised hotspot definition. Key learning points listed by the authors: hotspots are widespread; two types are known; they may promote efficient pairing (especially PRDM9 hotspots); and the two types differ in their effects on mutation load and genome stability.

---

## Significance in Introduction Context

- Extends Lecture 07 §4 (hotspots, PRDM9, hotspot paradox) from *mechanism* to *why*: it asks what hotspots are for, not only how they are made
- Uses the **DSB → CO / NCO / gene conversion** pathway from §3 to show that the CO map and the DSB map can diverge (Fig 2) — a genetic map is a map of *repair outcomes*
- Presents the **hotspot paradox** as a population-genetic drive (dBGC) and **PRDM9's Red Queen** dynamic as one of three possible escapes
- A model of how to argue in evolutionary genetics: list the adaptive and non-adaptive hypotheses (Fig 6), state predictions, and use comparative data (dog vs. human, PRDM9-KO vs. wild-type mice) to test them
- Links recombination to **DNA methylation and transposable elements**, bridging to later lectures on mutation, genome structure and epigenetics

---

## Key References

1. **Boulton, Myers & Redfield (1997)** — the hotspot conversion paradox — first formal statement of the self-destruction problem (one of the authors' "Top 5")
2. **Coop & Myers (2007)** — "Live hot, die young" — transmission distortion at hotspots and its population-genetic consequences
3. **Baudat et al. (2010); Myers et al. (2010); Parvanov et al. (2010)** — PRDM9 as the determinant of mammalian hotspots
4. **Brick et al. (2012)** — recombination is directed away from functional genomic elements in mice — the "load reduction" idea that the review re-examines ("Top 5")
5. **Auton et al. (2013)** — in dogs, which lack PRDM9, recombination targets promoter regions — the key PRDM9-free contrast
6. **Lam & Keeney (2015)** — non-paradoxical evolutionary stability of the yeast recombination initiation landscape
7. **Tock & Henderson (2018); He et al. (2017)** — hotspots for initiation of meiotic recombination; genomic features of maize DSB hotspots ("Top 5")
8. **Baker, Przeworski & Sella (2023)** — "Down the Penrose stairs" — how selection for fewer hotspots maintains them ("Top 5")
9. **Pratto et al. (2014)** — individual human DSB maps; disease-associated NAHR events in PRDM9-A hotspots

---

## Future Research Directions

- Test the pairing hypothesis comparatively: is the absence of hotspots associated with recombination-independent synapsis beyond *Drosophila* and *C. elegans*?
- In PRDM9-lacking species, does recombination heterogeneity correlate with germline methylation heterogeneity, as the repeat-avoidance hypothesis predicts?
- Compare the fitness cost of recombination-induced mutation in functional sequences with the cost of ectopic recombination in repeats, in formal population-genetic models
- Measure DSB–repair coupling in PRDM9-independent systems (e.g. does yeast Spp1 bind both homologues symmetrically? how many DSBs are needed per CO?)
- Model whether PRDM9's Red Queen dynamic actively maintains the default system (Fig 5 verbal model), and explain outlier landscapes such as TES hotspots in aspen
- Develop harmonised hotspot definitions and descriptors of fine-scale heterogeneity that work across LD, pedigree and ChIP-seq maps

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-06; revised from the full PDF (text and Figs 1–6) by **Claude Opus 5.5** (Claude Cowork) on 2026-09-23*
