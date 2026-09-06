---
tags: [genetics, class, article, en]
date: 2026-09-06
type: class
---

# Targeted seed EMS mutagenesis reveals a basic helix–loop–helix transcription factor underlying male sterility in sorghum

## Citation (NLM)
Xiao Y, Khangura RS, Wang Z, Dilkes BP, Eveland AL. Targeted seed EMS mutagenesis reveals a basic helix-loop-helix transcription factor underlying male sterility in sorghum. Genetics. 2025;230(3):iyaf017. doi:10.1093/genetics/iyaf017

**DOI:** [https://doi.org/10.1093/genetics/iyaf017](https://doi.org/10.1093/genetics/iyaf017)

---

## Summary

Forward genetic screens usually yield **one** mutant allele for a phenotype of interest. That is a problem, because mutagenized genomes carry many background mutations, so a single allele cannot distinguish the true causative mutation from linked passenger mutations sitting in the same interval. The classical solution is to obtain independent alleles that **fail to complement** each other. Reverse-genetics routes to independent alleles — TILLING, CRISPR/Cas9 editing — require transformation facilities, take at least two generations, are genotype-dependent, face regulatory hurdles in many countries, and, most importantly, **require you to already know the candidate gene**. This paper demonstrates a workaround for species like sorghum where transformation is difficult.

The strategy is **targeted seed EMS mutagenesis**. "Targeted" here does not refer to sequence targeting; it refers to a crossing design that biases recovery toward new loss-of-function alleles at one particular locus. For a recessive mutant, you mutagenize **heterozygous** material and screen for failure to complement — a new mutation on the wild-type chromosome produces the mutant phenotype immediately. In maize this is usually done by mutagenizing wild-type pollen and crossing to a mutant tester, but that approach suffers from false positives due to occasional selfing of the tester. Sorghum's perfect (bisexual) florets make pollen mutagenesis awkward, so the authors instead mutagenized **seed** from heterozygous *MS8/ms8-1* plants and screened the resulting chimeric inflorescences for **sectors** with white, sterile anthers resembling the *ms8-1* homozygous phenotype.

They started from the sorghum *MALE STERILE 8* (*ms8*) mutant. **Bulked segregant analysis** mapped *ms8-1* to a region of chromosome 4 containing *Sobic.004G270900*. Then came the decisive experiment: from a **single chimeric inflorescence**, they sequenced DNA from a sterile sector and a fertile sector separately. Two new mutations in *Sobic.004G270900* were present in the sterile sector and absent from the fertile sector of the same plant. This internal control is elegant — the two sectors share essentially all background mutations, so the difference isolates the causal locus. Recovery of this new loss-of-function allele (*ms8-2*), failing to complement *ms8-1*, established *Sobic.004G270900* as the *ms8* gene. It encodes the sorghum ortholog of maize *bhlh122*, a **basic helix–loop–helix transcription factor** required for male fertility in maize — an independently satisfying result, since the same gene family governs anther development in a related grass. As a final confirmation, CRISPR/Cas9 deletions of *Sobic.004G270900* in a *different* genetic background also produced male sterility.

---

## Significance in Introduction Context

- A textbook demonstration of **complementation testing** — the logic that lets you decide whether two mutations are alleles of the same gene, and why one allele is never enough
- Shows the practical face of **forward genetics**: phenotype first, then mapping (bulked segregant analysis), then causal gene, with no prior hypothesis about the gene product
- Contrasts forward and reverse genetics explicitly: CRISPR is powerful but requires knowing the candidate; EMS mutagenesis does not
- The **germinal sector** analysis is a beautiful use of mosaicism as a built-in control, worth discussing alongside classical mosaic analysis
- Direct crop-genetics relevance: male sterility is the basis of hybrid seed production, so a characterized *ms8* allele is a breeding tool as well as a scientific result

---

## Key References

1. **McCallum et al. (2000)** — TILLING — The reverse-genetics alternative the authors contrast their method against
2. **Candela and Hake (2008)** — Pollen mutagenesis for new alleles in maize — The classical "targeted mutagenesis" design being adapted
3. **Marla et al. (2018); Best et al. (2021); Sauer et al. (2023)** — Prior successful allele recovery by this group — Demonstrates the approach was already validated before this study
4. **van der Oost and Patinios (2023)** — Cas9-gRNA approaches — The gene-editing comparison point
5. **Casas et al. (1993); Sharma et al. (2020)** — Sorghum transformation — Documents why transformation-based validation is a bottleneck in this species
6. **Maize *bhlh122* literature** — Male fertility in maize — Provides the orthologous function that corroborates the sorghum assignment

---

## Future Research Directions

- Apply the sector-sequencing design to other single-allele mutants in sorghum and in other transformation-recalcitrant crops
- Determine what *MS8*/bHLH122 actually regulates during anther development — target genes, timing, and the cell types in which it is required
- Use the new *ms8* alleles in hybrid breeding programs; test whether the allele behaves consistently across elite backgrounds
- Quantify the efficiency of seed versus pollen mutagenesis for allele recovery to give other labs a design rule
- Ask whether the bHLH male-fertility module is conserved across the grasses broadly, and whether its regulatory targets have diverged with reproductive morphology

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-06*
