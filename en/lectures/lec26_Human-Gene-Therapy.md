---
tags: [genetics, lecture, BME333-BIO333, 2026Fall, en]
date: 2026-07-20
type: lecture
---
# Human Genetics — Gene Therapy

**Course:** BME333 / BIO333 Genetics (UNIST, 2026 Fall) · Lecture 26 · ~60 min
**Syllabus:** [← Course schedule](../../lectures/2026.BME333-BIO333-Syllabus.md) — Week 15 Wed, 2026-12-09

## Learning Objectives
By the end of this lecture, students should be able to:
- Define gene therapy and distinguish its major modalities: gene addition vs. gene editing, in vivo vs. ex vivo delivery, and somatic vs. germline (and why germline editing is off-limits clinically).
- Compare the main delivery vehicles (AAV, lentivirus, electroporation of CRISPR-Cas9 into ex-vivo HSCs) and match each to disease context (tissue, cell type, transient vs. permanent).
- Trace two contrasting landmark trials — in vivo AAV gene transfer (hemophilia B, RPE65 retinal dystrophy) and ex-vivo CRISPR editing (sickle cell/β-thalassemia) — and explain why each design fits its target.
- Articulate the key risks and open problems: immune responses to vector/capsid, insertional mutagenesis, off-target editing, durability, and cost/access.
- Connect gene therapy to the genome-manipulation toolkit (CRISPR/Cas9, dCas9) covered earlier in the course.

## Lecture Outline (~60 min)
1. **What is gene therapy?** (~8 min) — Correcting disease at the DNA/RNA level: gene addition (supply a working copy) vs. gene editing (repair/disrupt in place); ex vivo (edit cells outside body, reinfuse) vs. in vivo (deliver vector into the patient); the somatic/germline ethical line.
2. **Delivery toolbox** (~12 min) — AAV (non-integrating, tissue-tropic, episomal, immunogenic capsid) vs. lentivirus (integrating, good for dividing HSCs) vs. non-viral electroporation of Cas9 ribonucleoprotein. Trade-offs: payload size, integration risk, immune response, durability.
3. **In vivo AAV gene addition — landmark trials** (~12 min) — Hemophilia B: a single IV AAV8-FIX infusion restores clotting factor to therapeutic levels (Nathwani 2011). RPE65 retinal dystrophy: subretinal AAV2 (voretigene neparvovec) — the first FDA-approved in vivo gene therapy (Russell 2017). Discuss capsid immunity and the transaminase/steroid issue.
4. **Ex vivo gene editing — CRISPR for hemoglobinopathies** (~14 min) — Editing the BCL11A erythroid enhancer in autologous CD34+ HSCs re-activates fetal hemoglobin, giving transfusion independence and freedom from vaso-occlusive crises (Frangoul 2021, exa-cel/Casgevy — first approved CRISPR therapy). Link to the reverse-genetics/dCas9 tooling from Lecture 15.
5. **Risks, durability & access** (~8 min) — Insertional mutagenesis (historical SCID-X1 leukemias), off-target editing, immune clearance, loss of expression over time, and the extreme cost of one-time cures.
6. **The field, and where it's going** (~6 min) — Synthesis via Anguela & High 2019: why gene therapy finally works now, and near-term directions (base/prime editing, in vivo editing, broader indications). Discussion.

## Textbook Reading
- **Genetics: From Genes to Genomes (8e)** — Ch. 21 Manipulating the Genomes of Eukaryotes. → [textbook ref](../../lectures/ref.Genetics-FromGenesToGenomes.md)

## Notes in this vault
Reviews & articles to introduce in class (each has a bilingual en/ko pair):
- [Makani2022_NatRevGenet_MendelianDisorder](../review/Makani2022_NatRevGenet_MendelianDisorder.md) — sickle cell disease from Mendelian disorder toward cure; sets up the CRISPR hemoglobinopathy case.
- [Kuhl2020_Genetics_dCas9+Ctf19+Recombination](../article/Kuhl2020_Genetics_dCas9+Ctf19+Recombination.md) — dCas9 as a programmable targeting tool; connects the editing chemistry to therapeutic editing.

## Additional reading (PubMed)
*The following are drawn from PubMed; DOI links included per attribution requirements.*
- Nathwani AC, et al. Adenovirus-associated virus vector-mediated gene transfer in hemophilia B. N Engl J Med 2011. [DOI](https://doi.org/10.1056/NEJMoa1108046) · PMID 22149959 — landmark in vivo AAV gene-addition trial (single IV dose restores factor IX).
- Russell S, et al. Efficacy and safety of voretigene neparvovec (AAV2-hRPE65v2) in patients with RPE65-mediated inherited retinal dystrophy: a randomised, controlled, open-label, phase 3 trial. Lancet 2017. [DOI](https://doi.org/10.1016/S0140-6736(17)31868-8) · PMID 28712537 — pivotal trial behind the first FDA-approved in vivo gene therapy (Luxturna).
- Frangoul H, et al. CRISPR-Cas9 gene editing for sickle cell disease and β-thalassemia. N Engl J Med 2021. [DOI](https://doi.org/10.1056/NEJMoa2031054) · PMID 33283989 — landmark ex-vivo CRISPR editing (BCL11A enhancer) underlying exa-cel/Casgevy, the first approved CRISPR therapy.
- Anguela XM, High KA. Entering the modern era of gene therapy. Annu Rev Med 2019. [DOI](https://doi.org/10.1146/annurev-med-012017-043332) · PMID 30477394 — authoritative field review of vectors, successes, and challenges.
