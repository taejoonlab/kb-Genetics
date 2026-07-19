---
tags: [genetics, lecture, BME333-BIO333, 2026Fall, en]
date: 2026-07-20
type: lecture
---
# Extensions to Mendel's Laws

**Course:** BME333 / BIO333 Genetics (UNIST, 2026 Fall) · Lecture 04 · ~60 min
**Syllabus:** [← Course schedule](../../lectures/2026.BME333-BIO333-Syllabus.md) — Week 02 Wed, 2026-09-09
**Languages:** English · [한국어](../../ko/lectures/lec04_Extensions-to-Mendel.md)

## Learning Objectives
By the end of this lecture, students should be able to:
- Explain dominance and recessivity at the molecular/biochemical level rather than as intrinsic allele properties.
- Describe incomplete dominance, codominance, multiple alleles, lethal alleles, and how they modify classic Mendelian ratios.
- Define pleiotropy, penetrance, expressivity, and epistasis and give examples of each.
- Explain how gene–gene and gene–environment interactions produce departures from simple Mendelian expectations.
- Connect single-gene "Mendelian" logic to more complex (oligogenic) inheritance as a bridge to human genetics.

## Lecture

### 1. Why dominance is not intrinsic (~12 min)

Mendel gave us the *words* dominant and recessive, but he treated them as bare descriptions: the character that shows in the F1 is "dominant," the one that hides is "recessive." A century and a half later we can ask the deeper question — **why** is one allele usually dominant over the other? The key idea of this lecture is that **dominance is not a property that lives inside an allele.** It is a *relationship* — a description of how a heterozygote's phenotype relates to the two homozygotes — and that relationship emerges from biochemistry, gene dosage, and the trait you happen to be measuring. As Zschocke, Byers, and Wilkie put it in their bicentennial comment, dominance and recessiveness "are not properties of alleles themselves or of specific phenotypes, but represent the functional link between heterozygous genetic variants and the resulting phenotype" (see [en](../../en/review/Zschocke2022_NatRevGenet_Mendel+Dominance.md) · [ko](../../ko/review/Zschocke2022_NatRevGenet_Mendel+Dominance.md)).

Start with the most common case: **most loss-of-function mutations are recessive.** Why should losing one of your two working copies of a gene so often leave you looking normal? Two competing explanations were proposed early (see [en](../../en/review/Keightley1996_Genetics_Dominance-Recessivity.md) · [ko](../../ko/review/Keightley1996_Genetics_Dominance-Recessivity.md)):

- **R. A. Fisher's evolutionary theory (1928):** because heterozygotes are far more common than mutant homozygotes, natural selection at *modifier* loci would gradually push the heterozygote's phenotype toward wild type, *making* wild-type alleles dominant over time.
- **Sewall Wright's physiological theory (1934):** dominance is simply a by-product of enzyme kinetics. Wright noted that the **flux** (throughput) of a metabolic pathway is a *saturating, hyperbolic* function of any single enzyme's activity. On the flat plateau of that curve, halving one enzyme's activity — exactly what a heterozygote for a null allele does — barely changes flux.

**Figure — Why a null allele is usually recessive (flux vs. enzyme activity).**
```
pathway
flux   1.0 |            ___________________  <- wild type RR (100% activity)
       0.9 |        ___/    ^ heterozygote Rr (50% activity): flux still ~0.9
           |      _/        |
       0.5 |    _/          |
           |  _/            |
       0.0 |_/______________|__________________ enzyme activity
           0%     50%      100%
        rr (0%): flux collapses -> mutant phenotype
```
Because RR and Rr both sit on the plateau, they look alike (R is "dominant"); only the *rr* homozygote, which falls off the curve to near-zero flux, shows the mutant phenotype.

The decisive advance came from **Henrik Kacser and Jim Burns (1981)**, who made Wright's picture rigorous and — crucially — showed that Fisher's evolutionary "safety factor" argument is *unnecessary*. Using **metabolic control analysis** (their 1973 framework), they defined a **control coefficient**: the fractional change in pathway flux produced by a fractional change in one enzyme's activity. They proved the **summation theorem** — the control coefficients of all enzymes in a pathway *sum to one*. Since a real pathway has many enzymes, most individual control coefficients must be small; combined with the hyperbolic flux curve, **recessivity of null mutations falls out automatically from the kinetic structure of metabolism.** No selection for dominance is required. Supporting this, H. A. Orr (1991) found that mutations are just as often recessive in the mostly-haploid alga *Chlamydomonas* — where selection on a rare diploid phase could never have shaped dominance — as they are in *Drosophila*.

This framework tells us exactly when to expect the *opposite* — a **dominant** mutation. Dominance appears when one working copy is *not enough*, or when the mutant product actively causes trouble:
- **Haploinsufficiency** — 50% of the product is below the threshold the cell needs (e.g. structural proteins such as collagen, where amount matters).
- **Gain of function** — the mutant makes a new or overactive product (e.g. the CAG/polyglutamine expansion of Huntington's disease).
- **Dominant-negative / toxic product** — a defective subunit poisons the normal ones it assembles with.

The practical upshot for modern medical genetics is Zschocke's point: most so-called "dominant" disorders are really **semi-dominant** (the heterozygote is intermediate), and the *same* gene can be dominant or recessive depending on which variant you carry and which phenotype you score. In cancer predisposition syndromes, risk is inherited as a *dominant* trait at the level of the family but the tumor requires a *recessive* "second hit" (loss of the remaining good copy) at the level of the cell (see [en](../../en/review/Zschocke2022_NatRevGenet_Mendel+Dominance.md) · [ko](../../ko/review/Zschocke2022_NatRevGenet_Mendel+Dominance.md)).

### 2. Allelic relationships (~12 min)

Once we stop treating dominance as absolute, several "extensions" become natural. Each one modifies the ratios you learned in Lecture 03 in a predictable way.

**Incomplete dominance.** When one functional copy is *not* enough to make a full-strength phenotype, the heterozygote looks genuinely **intermediate** — think a red × white snapdragon giving pink F1. Now genotype and phenotype line up one-to-one, so the F2 phenotype ratio is **1:2:1** (red : pink : white), not 3:1. This is the clearest classroom illustration that the F2 genotype ratio was *always* 1:2:1; dominance was just hiding two of the classes.

**Figure — Incomplete dominance: F2 phenotype ratio collapses to the 1:2:1 genotype ratio.**

|         | **C^R** (½) | **C^W** (½) |
|---------|-------------|-------------|
| **C^R** (½) | C^R C^R (red) | C^R C^W (pink) |
| **C^W** (½) | C^R C^W (pink) | C^W C^W (white) |

**Codominance.** Here *both* alleles are fully and separately expressed in the heterozygote — neither is masked. The human **ABO blood group** is the standard example and also introduces a **multiple-allele series** (more than two alleles exist in the population, though any individual carries only two):

**Figure — ABO: codominance plus a multiple-allele series (3 alleles, 4 phenotypes).**

| Genotype | Blood type (phenotype) | Antigen on red cells |
|---|---|---|
| I^A I^A, I^A i | A | A |
| I^B I^B, I^B i | B | B |
| I^A I^B | AB | A and B |
| i i | O | none |

I^A and I^B are **codominant** to each other (an AB person makes both antigens), while both are **dominant over i** (which is a nonfunctional enzyme, hence recessive — a loss-of-function allele, exactly the Kacser–Burns case). One locus, three alleles, four phenotypes.

**Lethal alleles.** An allele can be dominant for one trait and recessive for another. The classic case is the mouse **yellow coat (A^Y) allele** studied by Cuénot. A^Y is *dominant* for coat color (one copy makes a yellow mouse) but *recessive lethal*: A^Y/A^Y embryos die in utero. So a yellow × yellow cross never breeds true and gives a **2:1** ratio (2 yellow : 1 non-yellow) instead of 3:1, because the missing 1/4 class is dead:

**Figure — A recessive-lethal allele turns 3:1 into 2:1 (yellow-mouse A^Y × A^Y).**

|        | **A^Y** | **A** |
|--------|---------|-------|
| **A^Y** | A^Y A^Y (dies) | A^Y A (yellow) |
| **A**  | A^Y A (yellow) | A A (agouti) |

Of the *surviving* mice, 2/3 are yellow and 1/3 agouti — a 2:1 ratio that immediately signals a recessive-lethal allele. (A^Y is also **pleiotropic**: the same mutation causes yellow fur *and* obesity *and* embryonic lethality — our bridge to Segment 3.)

### 3. One gene, many effects: pleiotropy (~10 min)

**Pleiotropy** is a single gene affecting **multiple, seemingly unrelated traits.** The term was coined by Ludwig Plate as *"Pleiotropie"* in **1910**; Frank Stearns' centennial retrospective traces how it grew from a descriptive label into a mechanistic and evolutionary concept (see [en](../../en/review/Stearns2010_Genetics_Perspective-Pleiotropy.md) · [ko](../../ko/review/Stearns2010_Genetics_Perspective-Pleiotropy.md)). Landmarks along the way: Grüneberg's distinction between *genuine* and *spurious* pleiotropy; the Beadle–Tatum one-gene–one-enzyme idea (which explains pleiotropy neatly — one enzyme sits at a branch point feeding several downstream products); Hadorn's *mosaic* vs. *relational* pleiotropy; and George Williams' **antagonistic pleiotropy (1957)**, in which an allele that is beneficial early in life but harmful late can be favored by selection — a foundational idea for the evolution of **senescence (aging)**.

Molecular routes to pleiotropy are now familiar: overlapping reading frames, **alternative splicing**, mRNA editing, and **multifunctional proteins** used in several tissues. Importantly, pleiotropy is usually *modular*, not universal: network and QTL analyses suggest a typical gene affects on the order of **4–8 traits**, not all of them. Human examples abound — the single amino-acid change in sickle-cell β-globin affects red-cell shape, anemia, pain crises, spleen function, *and* malaria resistance; phenylketonuria (PKU) affects pigmentation and neurological development at once.

Two more concepts explain why *the same genotype* can look different in different individuals:

- **Penetrance** — the *fraction* of individuals with a given genotype who show *any* of the expected phenotype. (Recall from Lecture 03 that the Fisher "too-good data" debate hinged on the incomplete penetrance of axil pigmentation.)
- **Expressivity** — the *degree* or *severity* of the phenotype among those who do show it.

Incomplete penetrance and variable expressivity are why a "dominant" disease allele can seem to skip a generation or vary wildly within one family — and they set up the modifier-gene story in Segment 5.

### 4. Gene interactions: epistasis (~12 min)

So far one gene at a time. **Epistasis** is the interaction between *different* genes, where the genotype at one locus **masks or modifies** the phenotype produced by another. Because most phenotypes are the endpoint of a multi-step **biochemical pathway**, epistasis is best read as **pathway logic**: block an early step and it doesn't matter what the later gene is doing. The tell-tale sign is a dihybrid F2 that departs from 9:3:3:1 but is still built from those same 16 boxes — the classes just *collapse together*.

**Figure — Complementary gene action (a 9:7 ratio) as a two-step pathway.**
```mermaid
flowchart LR
  P["colorless precursor"] -->|"gene C  (enzyme 1: C_ active, cc blocked)"| I["colorless intermediate"]
  I -->|"gene P  (enzyme 2: P_ active, pp blocked)"| Pig["purple pigment"]
```
Pigment appears **only** when *both* enzymes work — i.e. genotype C_ P_. That is the 9/16 double-dominant class. All other classes (3/16 C_ pp, 3/16 cc P_, 1/16 cc pp) are colorless because *some* step is broken, giving **9 purple : 7 white**. This is exactly the sweet-pea result Bateson and Punnett found: two pure-breeding white lines crossed to give purple F1 (each line supplies the enzyme the other lacks).

**Figure — Recessive epistasis (a 9:3:4 ratio) in Labrador coat color.**
```mermaid
flowchart LR
  Tyr["tyrosine"] -->|"gene B  (B_ = black eumelanin, bb = brown)"| Mel["eumelanin made"]
  Mel -->|"gene E  (E_ = pigment deposited in hair, ee = not deposited)"| Coat["coat color"]
```
Gene *E* controls whether pigment is *deposited* at all. An **ee** dog is yellow **no matter what its B genotype is** — *ee* is **epistatic** to *B*. So the F2 collapses: 9 B_E_ black : 3 bbE_ brown : (3 B_ee + 1 bbee) yellow = **9 : 3 : 4**. The "4" is two boxes fused because *ee* hides the black/brown distinction.

The full family of modified dihybrid ratios is worth memorizing as *pathway signatures*:

**Figure — Modified dihybrid F2 ratios and the epistatic logic each reveals.**

| F2 ratio | Interaction | Biological reading |
|---|---|---|
| 9:3:3:1 | none | two independent genes (baseline) |
| 9:7 | complementary (duplicate recessive) | both genes needed for one product |
| 9:3:4 | recessive epistasis | homozygous recessive at one locus masks the other |
| 12:3:1 | dominant epistasis | a dominant allele at one locus masks the other |
| 15:1 | duplicate dominant | either gene alone suffices |
| 13:3 | dominant suppression | one dominant allele suppresses expression |
| 9:6:1 | duplicate genes, additive | doubling gives an enhanced class |

**The complementation test.** Epistasis logic also gives us a purely genetic way to ask *"are these two recessive mutants defective in the same gene or different genes?"* Cross two recessive mutants with the same phenotype. If the F1 is **mutant**, the two mutations *fail to complement* — they lie in the **same gene** (neither parent supplies a working copy). If the F1 is **wild type**, they *complement* — they are in **different genes**, and each parent supplies the function the other lacks (the molecular picture is exactly the 9:7 pathway above). Complementation is the workhorse that tells geneticists how many genes a set of mutants represents, long before any sequencing.

### 5. Environment & real-world traits (~10 min)

Genotype does not act in a vacuum. **Gene–environment interaction** means the phenotype a genotype produces depends on the conditions. Temperature-sensitive coat-color alleles (Siamese cats, Himalayan rabbits) make pigment only in cooler body extremities; the PKU genotype is damaging on a normal diet but nearly harmless on a phenylalanine-restricted one. The environment is, in effect, part of the "genotype-to-phenotype" function.

A clean single-locus case is **PTC (phenylthiocarbamide) tasting**, discovered by accident when Arthur Fox released PTC dust in his lab in **1930** and some colleagues tasted bitterness while others tasted nothing (see [en](../../en/article/Wooding2006_Genetics_PhenylThioCarbamide.md) · [ko](../../ko/article/Wooding2006_Genetics_PhenylThioCarbamide.md)). For decades this was taught as a simple dominant "taster vs. non-taster" trait. The molecular reality is richer:

**Figure — TAS2R38 haplotypes underlying PTC taster vs. non-taster status.**

| Position | Taster haplotype (**PAV**) | Non-taster haplotype (**AVI**) |
|---|---|---|
| 49 | Proline (P) | Alanine (A) |
| 262 | Alanine (A) | Valine (V) |
| 296 | Valine (V) | Isoleucine (I) |

Variation at three amino-acid positions (49, 262, 296) in the bitter-taste receptor gene **TAS2R38** explains most of the difference between the **PAV** (taster) and **AVI** (non-taster) haplotypes. But sensitivity is actually **continuously distributed** — some "non-tasters" respond at high concentrations — so even this textbook-simple trait is not strictly one-gene, one-phenotype. Population-genetic analysis (Tajima's *D*, phylogenetics) shows the taster and non-taster lineages trace to a very ancient common ancestor (~3 million years) and that the polymorphism is *shared between humans and chimpanzees* — the observation Fisher, Ford, and Huxley reported in **1939** and interpreted as **balancing selection** maintaining both alleles. What selective pressure does the maintaining (toxin/glucosinolate detection? thyroid links?) remains debated. PTC is thus a single locus that opens onto selection, gene–environment interaction, and the limits of the "simple Mendelian" label.

Finally, PTC's continuous distribution points toward the frontier of this lecture: **oligogenic inheritance** — traits governed by *a few* interacting genes, the territory between single-gene Mendelian traits and highly polygenic complex traits (see [en](../../en/review/Badano2002_NatRevGenet_BeyondMendel.md) · [ko](../../ko/review/Badano2002_NatRevGenet_BeyondMendel.md)). Clinical genetics supplies vivid cases:

- **Digenic inheritance** — retinitis pigmentosa can require *double heterozygosity* at both **ROM1** and **RDS/peripherin**; neither mutation alone causes disease.
- **Triallelic inheritance** — in Bardet–Biedl syndrome, two mutations at **BBS6** plus a *third* heterozygous mutation at **BBS2** or **BBS4** raise penetrance (a "2 + 1" allele model).
- **Modifier genes** — in Hirschsprung disease, the primary **RET** mutation's severity (expressivity) is tuned by **EDNRB** and other loci.

These are explained by a **dosage model** (total functional product falls below a threshold) or a **poison model** (a mutant product actively suppresses others) — the same molecular logic as dominance and epistasis, now spread across several genes. This is precisely why the same causal mutation can give different clinical outcomes in different people: modifiers and environment fill in the rest.

### 6. Wrap-up & bridge (~4 min)

Every "extension" in this lecture still obeys Mendel's *mechanics* — alleles segregate, genes assort — but the *mapping from genotype to phenotype* is richer than a single dominant/recessive rule. Dominance is a biochemical relationship, not an intrinsic label; ratios bend (1:2:1, 2:1, 9:7, 9:3:4, 12:3:1…) in ways that reveal the underlying pathway; one gene can touch many traits, and many genes plus the environment shape one trait. Holding onto Mendel's particulate factors while layering on this molecular reality is exactly the mindset needed for human and complex-trait genetics later in the course. Next we descend one level deeper — to the **chromosomes** that physically carry these factors, and to how their behavior in meiosis *is* the machinery of Mendel's laws.

## Key Takeaways
- **Dominance is a relationship, not an allele property.** Most loss-of-function alleles are recessive because pathway **flux** saturates with enzyme activity (Wright; Kacser–Burns metabolic control analysis, summation theorem) — no selection for dominance needed.
- **Dominant** mutations arise from **haploinsufficiency**, **gain of function** (e.g. Huntington polyQ), or **dominant-negative/toxic** products.
- **Incomplete dominance** gives a **1:2:1** F2; **codominance** (ABO) expresses both alleles; **multiple-allele series** and **lethal alleles** (yellow-mouse A^Y, **2:1**) further bend ratios.
- **Pleiotropy** = one gene, many traits (avg ~4–8, modular); **antagonistic pleiotropy** links genes to aging. **Penetrance** (how many show it) and **expressivity** (how strongly) explain within-genotype variation.
- **Epistasis** is pathway logic: modified dihybrid ratios (9:7, 9:3:4, 12:3:1, 15:1…) come from collapsing the 9:3:3:1 classes. The **complementation test** tells whether two recessive mutants hit the same gene.
- **Gene–environment interaction** (PTC/TAS2R38, temperature-sensitive coat color, PKU diet) and **oligogenic inheritance** (digenic RP, triallelic BBS, RET modifiers) bridge single-gene logic to complex traits.

## Textbook Reading
- **Genetics: From Genes to Genomes (8e)** — Ch. 2 Extensions to Mendel. → [textbook ref](../../lectures/ref.Genetics-FromGenesToGenomes.md)

## Notes in this vault
Reviews & articles to introduce in class (each has a bilingual en/ko pair):
- `Keightley1996_Genetics_Dominance-Recessivity` — the metabolic/dosage basis of dominance and recessivity; anchor the opening segment. · [en](../../en/review/Keightley1996_Genetics_Dominance-Recessivity.md) · [ko](../../ko/review/Keightley1996_Genetics_Dominance-Recessivity.md)
- `Zschocke2022_NatRevGenet_Mendel+Dominance` — a modern reappraisal of dominance in human genetics. · [en](../../en/review/Zschocke2022_NatRevGenet_Mendel+Dominance.md) · [ko](../../ko/review/Zschocke2022_NatRevGenet_Mendel+Dominance.md)
- `Badano2002_NatRevGenet_BeyondMendel` — oligogenic inheritance; the bridge from single-gene to complex traits. · [en](../../en/review/Badano2002_NatRevGenet_BeyondMendel.md) · [ko](../../ko/review/Badano2002_NatRevGenet_BeyondMendel.md)
- `Stearns2010_Genetics_Perspective-Pleiotropy` — the concept and consequences of pleiotropy. · [en](../../en/review/Stearns2010_Genetics_Perspective-Pleiotropy.md) · [ko](../../ko/review/Stearns2010_Genetics_Perspective-Pleiotropy.md)
- `Wooding2006_Genetics_PhenylThioCarbamide` — PTC tasting as a concrete allele/phenotype and gene–environment example. · [en](../../en/article/Wooding2006_Genetics_PhenylThioCarbamide.md) · [ko](../../ko/article/Wooding2006_Genetics_PhenylThioCarbamide.md)

## Discussion Questions
1. Kacser and Burns argued that recessivity of null mutations is an *automatic* consequence of metabolic kinetics, needing no natural selection. Explain the flux-vs-activity curve and the summation theorem, then state what evidence (e.g. Orr's *Chlamydomonas* result) distinguishes their view from Fisher's evolutionary theory of dominance.
2. A "dominant" disease allele in one family behaves like a "semi-dominant" one in another, and the same gene harbors both dominant and recessive pathogenic variants. Using haploinsufficiency, gain-of-function, and dominant-negative mechanisms, explain how this is possible and why Zschocke et al. say dominance is not a property of the allele.
3. You cross two pure-breeding white-flowered lines and the F1 is purple; the F2 is 9 purple : 7 white. Draw the pathway, explain the epistasis, and describe how a complementation test on the two parental lines would confirm your model.
4. The yellow-mouse A^Y allele is dominant for coat color, recessive for lethality, and pleiotropic for obesity. Show how each property is read off the 2:1 cross ratio and the phenotypes, and use this single allele to define dominance, recessivity, lethality, and pleiotropy.
5. PTC tasting is taught as a simple dominant trait yet shows a continuous distribution, three-site TAS2R38 haplotypes, and a human–chimp shared polymorphism. In what senses is it "Mendelian," and in what senses does it require the extensions (gene–environment interaction, balancing selection, oligogenic contributions) covered in this lecture?
