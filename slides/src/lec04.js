const pptxgen = require("pptxgenjs");
const T = require("./theme");
const { C, M, W, H } = T;

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.author = "Taejoon Kwon";
pres.company = "UNIST";
pres.title = "BME333/BIO333 Lecture 04 - Extensions to Mendel's Laws";

const COURSE = "BME333 / BIO333 Genetics  ·  Lecture 04  ·  Extensions to Mendel's Laws";
let n = 0;
const cs = (t, k) => T.contentSlide(pres, t, k, COURSE, ++n);

// ---------------------------------------------------------------- 1 title
T.titleSlide(pres, {
  kicker: "LECTURE 04",
  title: "Extensions to Mendel's Laws",
  subtitle: "Dominance, allelic series, epistasis, penetrance - and why 3:1 is the special case",
  meta: "BME333 / BIO333 Genetics  ·  UNIST  ·  Week 2 Wednesday, 9 September 2026  ·  Textbook: Genetics: From Genes to Genomes (8e), Ch. 2",
  chips: ["A", "B"],
});
n = 1;

// ---------------------------------------------------------------- 2 bridge
{
  const s = cs("Monday's ratios were the clean case", "WHERE WE LEFT OFF");
  T.card(s, M, 1.6, 5.85, 1.5, { fill: C.pale, line: "CBDCC0" });
  s.addText("What we established", { x: M + 0.35, y: 1.78, w: 5.15, h: 0.32, isTextBox: true, margin: 0,
    fontFace: T.F.body, fontSize: 14, bold: true, color: C.forest, valign: "top" });
  s.addText("Two copies per individual, one per gamete; separate genes assort independently. 3:1 and 9:3:3:1 follow.",
    { x: M + 0.35, y: 2.15, w: 5.15, h: 0.8, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 13.5, color: C.ink, lineSpacing: 19 });

  T.card(s, M + 6.15, 1.6, 5.85, 1.5, { fill: C.paleAcc, line: "E0C4BE" });
  s.addText("What today adds", { x: M + 6.5, y: 1.78, w: 5.15, h: 0.32, isTextBox: true, margin: 0,
    fontFace: T.F.body, fontSize: 14, bold: true, color: "7A2E22", valign: "top" });
  s.addText("Those ratios assume a lot. Relax any assumption and the numbers change - in ways that are themselves informative.",
    { x: M + 6.5, y: 2.15, w: 5.15, h: 0.8, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 13.5, color: "7A2E22", lineSpacing: 19 });

  s.addText("The hidden assumptions behind a 3:1 ratio",
    { x: M, y: 3.4, w: 12.0, h: 0.4, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 16, bold: true, color: C.forest });
  const asm = [
    ["Two alleles only", "Populations carry many"],
    ["One is fully dominant", "Dominance comes in degrees"],
    ["One gene, one trait", "Genes are pleiotropic"],
    ["Genes act alone", "Genes act on each other"],
    ["Genotype gives phenotype", "Only with some probability"],
  ];
  const cw = 2.28;
  asm.forEach((a, i) => {
    const x = M + i * (cw + 0.15);
    T.card(s, x, 3.9, cw, 1.7, {});
    s.addText(a[0], { x: x + 0.22, y: 4.08, w: cw - 0.44, h: 0.6, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 13, bold: true, color: C.forest, lineSpacing: 17 });
    s.addText("->  " + a[1], { x: x + 0.22, y: 4.75, w: cw - 0.44, h: 0.75, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12.5, color: C.accent, lineSpacing: 17 });
  });
  T.callout(s, M, 5.85, 12.0, 0.72,
    "None of this overturns Mendel. Every case below still obeys segregation - what changes is the map from genotype to phenotype.",
    { size: 14 });
}

// ---------------------------------------------------------------- 3 objectives
{
  const s = cs("What you should be able to do after today", "LEARNING OBJECTIVES");
  const items = [
    ["Diagnose", "Given a non-Mendelian ratio, name the mechanism that produced it - incomplete dominance, a lethal allele, or a specific kind of epistasis."],
    ["Explain", "Say what dominance actually is at the molecular level, and why the same allele can be dominant for one phenotype and recessive for another."],
    ["Distinguish", "Use penetrance and expressivity correctly, and explain why a published penetrance figure depends on who was sampled."],
    ["Connect", "Trace the path from a single-gene trait to a modifier, to oligogenic inheritance, to the complex traits of Lecture 12."],
  ];
  items.forEach((it, i) => {
    const y = 1.75 + i * 1.25;
    T.chip(s, M, y - 0.02, 0.46, 0.46, String(i + 1), { fill: C.moss, color: C.deep, size: 16, lw: 0 });
    s.addText(it[0], { x: M + 0.8, y: y - 0.03, w: 3.0, h: 0.36, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 16, bold: true, color: C.forest });
    s.addText(it[1], { x: M + 0.8, y: y + 0.35, w: 11.15, h: 0.72, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 14, color: C.ink, lineSpacing: 19 });
  });
}

// ---------------------------------------------------------------- 4 section I
T.sectionSlide(pres, "I", "Within one gene",
  "Dominance, incomplete dominance, codominance, allelic series, lethal alleles", COURSE, ++n);

// ---------------------------------------------------------------- 5 what is dominance
{
  const s = cs("What is dominance, actually?", "MOLECULAR BASIS");
  T.callout(s, M, 1.55, 12.0, 0.85,
    "Dominance and recessiveness are not properties of alleles or of phenotypes. They describe the functional link between a heterozygous genotype and the resulting phenotype.   - Zschocke, Byers and Wilkie, 2022",
    { size: 14, italic: true, fill: C.pale, line: "CBDCC0", color: C.forest });

  const boxes = [
    ["Haplosufficiency", "One functional copy makes enough product. Pathway output is far from limiting, so halving one enzyme barely moves the phenotype.", "-> recessive loss of function", C.forest, C.pale, "CBDCC0"],
    ["Haploinsufficiency", "50 per cent of the product is below what the cell needs - typical where amount matters, as for structural proteins such as collagen.", "-> dominant loss of function", C.accent, C.paleAcc, "E0C4BE"],
    ["Gain of function", "The mutant product is new or overactive - the CAG polyglutamine expansion of Huntington's disease is the standard case.", "-> dominant, novel phenotype", C.accent, C.paleAcc, "E0C4BE"],
    ["Dominant negative", "A defective subunit poisons the normal ones it assembles with, so the mutant actively interferes.", "-> dominant, often severe", C.accent, C.paleAcc, "E0C4BE"],
  ];
  const cw = 2.87;
  boxes.forEach((b, i) => {
    const x = M + i * (cw + 0.19);
    T.card(s, x, 2.6, cw, 2.3, { fill: b[4], line: b[5] });
    s.addText(b[0], { x: x + 0.25, y: 2.78, w: cw - 0.5, h: 0.34, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 14.5, bold: true, color: b[3] });
    s.addText(b[1], { x: x + 0.25, y: 3.16, w: cw - 0.5, h: 1.2, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12, color: C.ink, lineSpacing: 16 });
    s.addText(b[2], { x: x + 0.25, y: 4.42, w: cw - 0.5, h: 0.35, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 11.5, bold: true, color: b[3] });
  });

  T.callout(s, M, 5.1, 12.0, 1.25,
    "Two consequences for the clinic. Most so-called dominant disorders are really SEMI-dominant - the heterozygote is intermediate once you measure carefully. And the same gene can be dominant or recessive depending on which variant you carry: in cancer-predisposition syndromes the risk is dominant at the level of the family, while the tumour needs a recessive second hit at the level of the cell.",
    { size: 14 });
}

// ---------------------------------------------------------------- 5b why null alleles are recessive
{
  const s = cs("Why is a null allele usually recessive?", "THE FLUX ARGUMENT");
  s.addText("Two answers were proposed, and only one of them survived.",
    { x: M, y: 1.55, w: 12.0, h: 0.35, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 15, color: C.ink });

  s.addChart("line",
    [{ name: "Pathway flux",
       labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
       values: [0, 0.46, 0.66, 0.77, 0.84, 0.88, 0.92, 0.95, 0.97, 0.99, 1.00] }],
    { x: M, y: 2.0, w: 6.5, h: 3.5,
      showTitle: true, title: "Pathway flux against activity of one enzyme",
      titleFontFace: T.F.body, titleFontSize: 12, titleColor: C.forest,
      chartColors: [C.forest], lineSize: 2, lineSmooth: true,
      showLegend: false, showValue: false,
      catAxisTitle: "activity of one enzyme (% of wild type)", showCatAxisTitle: true,
      catAxisTitleFontSize: 10, catAxisTitleColor: C.muted,
      catAxisLabelColor: C.muted, catAxisLabelFontSize: 10,
      valAxisLabelColor: C.muted, valAxisLabelFontSize: 10,
      valAxisMaxVal: 1.1, valAxisMinVal: 0,
      valGridLine: { color: "E6EBE3", size: 1 },
      catGridLine: { style: "none" },
      border: { pt: 0, color: "FFFFFF" },
    });

  // annotations sit in the empty area UNDER the curve so the line stays visible
  T.chip(s, 5.55, 3.06, 1.35, 0.32, "RR  100%", { fill: C.forest, color: C.white, size: 10, lw: 0 });
  T.chip(s, 3.30, 3.38, 1.25, 0.34, "Rr  50%", { fill: "4F7A45", color: C.white, size: 10, lw: 0 });
  T.chip(s, 1.55, 4.40, 1.05, 0.30, "rr  0%", { fill: C.accent, color: C.white, size: 10, lw: 0 });
  s.addText("halving one enzyme costs about 12% of flux", {
    x: 2.20, y: 3.98, w: 3.1, h: 0.3, isTextBox: true, margin: 0,
    fontFace: T.F.body, fontSize: 10.5, italic: true, color: C.muted });

  T.card(s, M + 7.0, 2.0, 5.0, 1.55, { fill: C.paleAcc, line: "E0C4BE" });
  s.addText("Fisher, 1928 - evolutionary", { x: M + 7.35, y: 2.18, w: 4.3, h: 0.3, isTextBox: true, margin: 0, valign: "top",
    fontFace: T.F.body, fontSize: 13.5, bold: true, color: "7A2E22" });
  s.addText("Selection at modifier loci gradually pushes the heterozygote toward wild type, MAKING wild-type alleles dominant over evolutionary time.",
    { x: M + 7.35, y: 2.52, w: 4.3, h: 0.9, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12, color: "7A2E22", lineSpacing: 16 });

  T.card(s, M + 7.0, 3.7, 5.0, 1.8, { fill: C.pale, line: "CBDCC0" });
  s.addText("Wright 1934, then Kacser and Burns 1981", { x: M + 7.35, y: 3.88, w: 4.3, h: 0.3, isTextBox: true, margin: 0, valign: "top",
    fontFace: T.F.body, fontSize: 13.5, bold: true, color: C.forest });
  s.addText("Flux saturates with any one enzyme's activity. Metabolic control analysis makes it exact: the control coefficients of all enzymes in a pathway SUM TO ONE, so in a pathway of many enzymes most coefficients are small. Recessivity falls out of kinetics - no selection needed.",
    { x: M + 7.35, y: 4.22, w: 4.3, h: 1.2, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12, color: C.ink, lineSpacing: 16 });

  T.callout(s, M, 5.75, 12.0, 0.95,
    "The evidence that settles it: Orr (1991) found mutations are just as often recessive in the mostly haploid alga Chlamydomonas - where selection on a rare diploid phase could never have shaped dominance - as they are in Drosophila. Kinetics, not selection.",
    { size: 14 });
}

// ---------------------------------------------------------------- 6 incomplete / codominance
{
  const s = cs("When the heterozygote is visible", "DEPARTURE 1");
  T.card(s, M, 1.6, 5.85, 3.55, {});
  s.addText("Incomplete dominance", { x: M + 0.35, y: 1.78, w: 5.15, h: 0.34, isTextBox: true, margin: 0,
    fontFace: T.F.body, fontSize: 15, bold: true, color: C.forest, valign: "top" });
  s.addText("One functional copy is not enough for a full-strength phenotype, so the heterozygote is genuinely intermediate - red x white snapdragon gives pink.",
    { x: M + 0.35, y: 2.15, w: 5.15, h: 0.6, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 13, color: C.ink, lineSpacing: 18 });
  T.chip(s, M + 0.3, 2.9, 1.2, 0.7, "C(R)C(R)", { fill: C.accent, color: C.white, size: 13, lw: 0 });
  s.addText("x", { x: M + 1.6, y: 3.05, w: 0.35, h: 0.4, isTextBox: true, margin: 0,
    fontFace: T.F.head, fontSize: 16, color: C.muted, align: "center" });
  T.chip(s, M + 1.98, 2.9, 1.2, 0.7, "C(W)C(W)", { fill: C.cream, color: C.ink, size: 13 });
  T.arrow(s, M + 3.32, 3.18, 0.5);
  T.chip(s, M + 3.97, 2.9, 1.3, 0.7, "C(R)C(W)", { fill: "E8A9A0", color: "7A2E22", size: 13, lw: 0 });
  s.addText("F2:  1 red : 2 pink : 1 white.  The genotype ratio was ALWAYS 1:2:1 - dominance was simply hiding two of the classes. No testcross needed here.",
    { x: M + 0.35, y: 3.8, w: 5.15, h: 1.2, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 13, color: C.ink, lineSpacing: 19 });

  T.card(s, M + 6.15, 1.6, 5.85, 3.55, {});
  s.addText("Codominance, and a multiple-allele series", { x: M + 6.5, y: 1.78, w: 5.15, h: 0.34, isTextBox: true, margin: 0,
    fontFace: T.F.body, fontSize: 15, bold: true, color: C.forest, valign: "top" });
  s.addText("Both alleles are fully and separately expressed - the heterozygote shows both, not a blend. One locus, three alleles, four phenotypes.",
    { x: M + 6.5, y: 2.15, w: 5.15, h: 0.6, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 13, color: C.ink, lineSpacing: 18 });
  T.table(s, M + 6.5, 2.85, 5.15,
    ["Genotype", "Antigen", "Type"],
    [["I(A)I(A)  or  I(A)i", "A", "A"],
     ["I(B)I(B)  or  I(B)i", "B", "B"],
     ["I(A)I(B)", "A and B", "AB"],
     ["i i", "none", "O"]],
    { colW: [2.3, 1.55, 1.3], rowH: 0.36, bs: 11.5, hs: 11 });

  T.callout(s, M, 5.35, 12.0, 1.15,
    "Same gene, three verdicts. I(A) and I(B) are codominant to each other; both are dominant over i, which is simply a nonfunctional enzyme - exactly the Kacser-Burns case from the previous slide. And at the level of DNA sequence every allele is codominant. The level of observation decides the answer.",
    { size: 14 });
}

// ---------------------------------------------------------------- 7 allelic series
{
  const s = cs("More than two alleles", "DEPARTURE 2");
  s.addText("A population carries many alleles of a gene, even though any one diploid individual carries at most two.",
    { x: M, y: 1.6, w: 12.0, h: 0.4, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 15, color: C.ink });

  s.addText("Dominance series - rabbit coat colour", { x: M, y: 2.15, w: 6.0, h: 0.34, isTextBox: true, margin: 0,
    fontFace: T.F.body, fontSize: 14, bold: true, color: C.forest });
  const series = [["C", "wild type, full colour"], ["c(ch)", "chinchilla"], ["c(h)", "Himalayan"], ["c", "albino"]];
  series.forEach((a, i) => {
    const x = M + i * 1.62;
    T.chip(s, x, 2.6, 1.3, 0.6, a[0], { fill: i === 0 ? C.forest : (i === 3 ? C.pale : C.moss),
      color: i === 0 ? C.white : (i === 3 ? C.forest : C.deep), size: 15, lw: 0 });
    s.addText(a[1], { x: x - 0.06, y: 3.25, w: 1.55, h: 0.55, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 10.5, color: C.muted, align: "center", lineSpacing: 14 });
    if (i < 3) s.addText(">", { x: x + 1.33, y: 2.7, w: 0.26, h: 0.4, isTextBox: true, margin: 0,
      fontFace: T.F.head, fontSize: 16, color: C.muted, align: "center" });
  });

  T.bullets(s, M + 6.9, 2.15, 5.1, 2.2, [
    "Each allele is dominant to every one to its right, recessive to every one to its left.",
    "n alleles give n(n+1)/2 genotypes: four alleles, ten genotypes.",
    "The series is a statement about phenotypes, not about the DNA - it reflects how much residual enzyme activity each allele leaves.",
  ], { size: 13, ls: 19 });

  T.callout(s, M, 4.25, 12.0, 1.15,
    "The Himalayan allele c(h) encodes a temperature-sensitive enzyme: active in cool extremities, inactive in the warm trunk. So the same genotype gives a dark-nosed white rabbit or a uniformly pale one, depending on ambient temperature. Hold that thought - we return to it under gene-environment interaction.",
    { size: 14 });

  T.card(s, M, 5.65, 12.0, 1.05, {});
  s.addText("Human example: the ABO series I(A), I(B), i, plus dozens of sequence variants of each - and the HLA loci, with thousands of alleles per gene, which is why tissue matching is hard.",
    { x: M + 0.35, y: 5.85, w: 11.3, h: 0.7, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 13.5, color: C.ink, lineSpacing: 19 });
}

// ---------------------------------------------------------------- 8 lethal alleles
{
  const s = cs("Lethal alleles: a class that never appears", "DEPARTURE 3");
  s.addText("Yellow coat in mice (Cuenot). Yellow x yellow never breeds true, and the surviving offspring are 2:1, not 3:1.",
    { x: M, y: 1.6, w: 12.0, h: 0.4, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 15, color: C.ink });

  T.punnett(s, M + 0.3, 2.1, 1.25, ["A(Y)", "A"], ["A(Y)", "A"], (i, j) => {
    if (i === 0 && j === 0) return { t: "dies", fill: "D8CFCB", color: "7A2E22" };
    if (i === 1 && j === 1) return { t: "agouti", fill: C.pale, color: C.forest };
    return { t: "yellow", fill: "D9A441", color: "3A2A08" };
  }, { hsize: 14, csize: 14 });

  T.bullets(s, M + 4.4, 2.15, 7.6, 2.3, [
    "A(Y) is DOMINANT for coat colour - one copy gives a yellow mouse.",
    "A(Y) is RECESSIVE for lethality - two copies kill the embryo in utero.",
    "The A(Y)A(Y) class is missing from the litter, so 1:2:1 is observed as 2 yellow : 1 agouti.",
    "And A(Y) is PLEIOTROPIC: the same mutation gives yellow fur, obesity, and embryonic lethality.",
  ], { size: 13.5, ls: 20 });

  T.callout(s, M + 4.4, 4.72, 7.6, 1.25,
    "This one allele defines four terms at once - dominance, recessiveness, lethality and pleiotropy - and shows that the first two are answers to the question 'which phenotype are you scoring?', not facts about the DNA.",
    { size: 13.5 });

  s.addText("2 yellow : 1 agouti", { x: M + 0.3, y: 5.55, w: 3.6, h: 0.45, isTextBox: true, margin: 0,
    fontFace: T.F.head, fontSize: 19, bold: true, color: C.forest, align: "center" });
}

// ---------------------------------------------------------------- 9 section II
T.sectionSlide(pres, "II", "Between genes, and beyond the genotype",
  "Pleiotropy, epistasis, penetrance, expressivity, and the environment", COURSE, ++n);

// ---------------------------------------------------------------- 10 pleiotropy
{
  const s = cs("One gene, many phenotypes", "PLEIOTROPY");
  s.addText("Plate coined Pleiotropie in 1910. A single mutation in HBB changes one amino acid in beta-globin - follow the consequences outward:",
    { x: M, y: 1.55, w: 12.0, h: 0.42, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 14.5, color: C.ink });

  const chain = ["Glu6Val in HBB", "haemoglobin polymerises when deoxygenated", "red cells sickle",
                 "anaemia, pain crises, spleen damage, stroke risk", "heterozygotes resist severe malaria"];
  chain.forEach((c, i) => {
    const y = 2.15 + i * 0.66;
    T.chip(s, M, y, 0.38, 0.38, String(i + 1), { fill: i === 4 ? C.accent : C.forest, color: C.white, size: 13, lw: 0 });
    s.addText(c, { x: M + 0.7, y: y - 0.03, w: 6.4, h: 0.45, isTextBox: true, margin: 0, valign: "middle",
      fontFace: T.F.body, fontSize: 13.5, color: i === 4 ? C.accent : C.ink, bold: i === 4 });
  });

  T.card(s, M + 7.4, 2.05, 4.6, 3.1, { fill: C.pale, line: "CBDCC0" });
  s.addText("Three things to know", { x: M + 7.75, y: 2.22, w: 3.9, h: 0.32, isTextBox: true, margin: 0, valign: "top",
    fontFace: T.F.body, fontSize: 14, bold: true, color: C.forest });
  s.addText("Pleiotropy is MODULAR, not universal: network and QTL analyses put a typical gene at about 4 to 8 traits, not all of them.\n\nRoutes to it: alternative splicing, overlapping reading frames, mRNA editing, multifunctional proteins reused across tissues.\n\nANTAGONISTIC pleiotropy (Williams, 1957): an allele good early in life and bad late can still be favoured - the foundation of evolutionary theories of ageing.",
    { x: M + 7.75, y: 2.6, w: 3.9, h: 2.4, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12, color: C.ink, lineSpacing: 16 });

  T.callout(s, M, 5.55, 12.0, 0.95,
    "Score anaemia and HbS looks recessive; run a protein gel and it looks codominant; score malaria survival in an endemic region and it looks dominant, and under positive selection. The pedigree never changed - the trait definition did.",
    { size: 14 });
}

// ---------------------------------------------------------------- 11 epistasis intro
{
  const s = cs("Epistasis: one gene masks another", "GENE INTERACTION");
  s.addText("Most phenotypes are the endpoint of a multi-step pathway, so epistasis is pathway logic: block an early step and it does not matter what the later gene is doing. The tell-tale sign is an F2 built from the same 16 boxes, with classes collapsed together.",
    { x: M, y: 1.55, w: 12.0, h: 0.55, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 14, color: C.ink, lineSpacing: 19 });

  T.table(s, M, 2.2, 12.0,
    ["F2 ratio", "Interaction", "Biological reading", "Classic example"],
    [
      ["9 : 3 : 3 : 1", "none", "two independent genes - the baseline", "Mendel's seed shape x colour"],
      ["9 : 7", "complementary (duplicate recessive)", "both genes needed for one product", "sweet pea flower colour"],
      ["9 : 3 : 4", "recessive epistasis", "homozygous recessive at one locus masks the other", "Labrador coat colour"],
      ["12 : 3 : 1", "dominant epistasis", "a dominant allele at one locus masks the other", "squash fruit colour"],
      ["15 : 1", "duplicate dominant", "either gene alone suffices - redundancy", "wheat grain colour"],
      ["13 : 3", "dominant suppression", "one dominant allele suppresses expression", "poultry plumage"],
      ["9 : 6 : 1", "duplicate genes, additive", "having both doubles up into an enhanced class", "squash fruit shape"],
    ],
    { colW: [1.7, 3.2, 4.6, 2.5], rowH: 0.45, bs: 11, hs: 11, align: "left" });

  T.callout(s, M, 6.05, 12.0, 0.55,
    "Memorise these as pathway signatures, not as a list. Each one is a different way two genes are wired together.",
    { size: 14 });
}

// ---------------------------------------------------------------- 12 worked epistasis
{
  const s = cs("Worked example: coat colour in Labradors", "9 : 3 : 4");
  s.addText("Gene B decides which pigment is made; gene E decides whether any pigment is deposited in the hair at all.",
    { x: M, y: 1.6, w: 12.0, h: 0.4, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 15, color: C.ink });

  const rows = [
    ["B_  E_", "black", "9/16", "1B1B1B", C.white],
    ["bb  E_", "chocolate", "3/16", "6B4423", C.white],
    ["B_  ee", "yellow", "3/16", "E3C88A", "3A2A08"],
    ["bb  ee", "yellow", "1/16", "E3C88A", "3A2A08"],
  ];
  rows.forEach((r, i) => {
    const y = 2.2 + i * 0.78;
    T.chip(s, M, y, 1.5, 0.58, r[0], { fill: C.pale, color: C.forest, size: 14 });
    T.arrow(s, M + 1.7, y + 0.16, 0.55);
    T.chip(s, M + 2.45, y, 1.9, 0.58, r[1], { fill: r[3], color: r[4], size: 14, lw: 0 });
    s.addText(r[2], { x: M + 4.5, y: y + 0.1, w: 0.9, h: 0.4, isTextBox: true, margin: 0, valign: "middle",
      fontFace: T.F.body, fontSize: 13.5, bold: true, color: C.muted });
  });
  s.addShape("line", { x: M + 2.45, y: 4.5, w: 1.9, h: 0, line: { color: C.accent, width: 1.5, dashType: "dash" } });
  s.addText("these two classes are indistinguishable", { x: M + 4.5, y: 4.32, w: 2.9, h: 0.35, isTextBox: true, margin: 0,
    fontFace: T.F.body, fontSize: 11.5, italic: true, color: C.accent });

  T.card(s, M + 7.5, 2.15, 4.5, 3.0, { fill: C.pale, line: "CBDCC0" });
  s.addText("Reading the pathway off the ratio", { x: M + 7.85, y: 2.35, w: 3.8, h: 0.34, isTextBox: true, margin: 0, valign: "top",
    fontFace: T.F.body, fontSize: 14, bold: true, color: C.forest });
  s.addText("tyrosine -> (gene B) eumelanin made -> (gene E) pigment deposited in hair.\n\nAn ee dog is yellow whatever its B genotype, so ee is epistatic to B and 3 + 1 fuse into 4.\n\nGeneral rule: the gene acting LATER in the pathway is the one that masks. A 9:3:4 is therefore evidence about pathway order, obtained with no biochemistry at all.",
    { x: M + 7.85, y: 2.75, w: 3.8, h: 2.25, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12, color: C.ink, lineSpacing: 16 });

  T.callout(s, M, 5.55, 12.0, 0.72,
    "Now the mirror image: two pure-breeding WHITE sweet pea lines crossed give a PURPLE F1 and a 9:7 F2, because each line is broken at a different step and the cross restores the pathway.",
    { size: 14 });
}

// ---------------------------------------------------------------- 12b complementation
{
  const s = cs("The complementation test", "THE SAME LOGIC, USED AS A TOOL");
  s.addText("You have two recessive mutants with the same phenotype. Are they broken in the same gene, or in two different genes? Cross them and look at the F1 - no sequencing required.",
    { x: M, y: 1.55, w: 12.0, h: 0.5, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 15, color: C.ink, lineSpacing: 20 });

  const cases = [
    ["F1 is MUTANT", "The mutations FAIL to complement.", "Both lesions are in the SAME gene. Neither parent supplies a working copy, so the F1 has none either.", C.accent, C.paleAcc, "E0C4BE"],
    ["F1 is WILD TYPE", "The mutations COMPLEMENT.", "The lesions are in DIFFERENT genes. Each parent supplies the function the other lacks - which is exactly the 9:7 sweet pea pathway.", C.forest, C.pale, "CBDCC0"],
  ];
  cases.forEach((c, i) => {
    const x = M + i * 6.15;
    T.card(s, x, 2.2, 5.85, 2.35, { fill: c[4], line: c[5] });
    s.addText(c[0], { x: x + 0.35, y: 2.4, w: 5.15, h: 0.36, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 16, bold: true, color: c[3] });
    s.addText(c[1], { x: x + 0.35, y: 2.82, w: 5.15, h: 0.36, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 14, bold: true, color: c[3] });
    s.addText(c[2], { x: x + 0.35, y: 3.25, w: 5.15, h: 1.1, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 13, color: C.ink, lineSpacing: 18 });
  });

  T.callout(s, M, 4.85, 12.0, 1.85,
    "This is how geneticists counted genes for most of the twentieth century: take a pile of mutants with the same phenotype, cross them pairwise, and sort them into complementation groups. Each group is one gene. You will meet the test again in forward-genetic screens (Lecture 14) and in its bacterial form, the cis/trans test, in Lecture 17 - which is where the word cistron comes from.\n\nTwo cases where it does not give a clean answer: dominant-negative alleles, and intragenic complementation between different domains of one protein.",
    { size: 13.5, ls: 19 });
}

// ---------------------------------------------------------------- 13 penetrance
{
  const s = cs("Penetrance and expressivity", "GENOTYPE TO PHENOTYPE");
  const defs = [
    ["Penetrance", "The proportion of individuals with a genotype who show the phenotype at all. A population-level, yes/no measure.", "60% penetrance = 6 of 10 carriers affected."],
    ["Expressivity", "How strongly the phenotype is expressed in those who show it. An individual-level, how-much measure.", "Variable expressivity = same variant, mild in one patient, severe in another."],
  ];
  defs.forEach((d, i) => {
    const x = M + i * 6.15;
    T.card(s, x, 1.6, 5.85, 2.05, { fill: i ? C.cream : C.pale, line: i ? "E2E8DE" : "CBDCC0" });
    s.addText(d[0], { x: x + 0.35, y: 1.8, w: 5.15, h: 0.34, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 16, bold: true, color: C.forest });
    s.addText(d[1], { x: x + 0.35, y: 2.2, w: 5.15, h: 0.8, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 13, color: C.ink, lineSpacing: 18 });
    s.addText(d[2], { x: x + 0.35, y: 3.02, w: 5.15, h: 0.5, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12.5, italic: true, color: C.accent, lineSpacing: 17 });
  });

  s.addText("Ten carriers of the same variant", { x: M, y: 3.9, w: 6.0, h: 0.32, isTextBox: true, margin: 0,
    fontFace: T.F.body, fontSize: 13, bold: true, color: C.muted });
  const sev = [0, 3, 1, 0, 2, 3, 0, 1, 2, 0];
  const fillFor = [C.pale, "C6DCB4", C.moss, C.forest];
  const colFor  = [C.muted, C.deep, C.deep, C.white];
  sev.forEach((v, i) => {
    T.chip(s, M + i * 0.72, 4.3, 0.6, 0.6, v === 0 ? "-" : String(v),
      { fill: fillFor[v], color: colFor[v], size: 14, line: "D8E2D2" });
  });
  s.addText("4 of 10 unaffected  ->  60% penetrance          among the 6 affected, severity runs 1 to 3  ->  variable expressivity",
    { x: M, y: 5.05, w: 12.0, h: 0.4, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 13.5, color: C.ink });

  T.callout(s, M, 5.6, 12.0, 0.95,
    "Both are descriptions, not explanations. Saying a variant is 60% penetrant tells you nothing about why - modifier genes, environment, chance in development, or the fact that the wrong people were counted.",
    { size: 14 });
}

// ---------------------------------------------------------------- 14 penetrance is an estimate
{
  const s = cs("Penetrance is an estimate, not a property", "MODERN TWIST");
  s.addText("The same variant, in the same laboratory, gives very different penetrance depending on how the carriers were found.",
    { x: M, y: 1.6, w: 12.0, h: 0.4, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 15, color: C.ink });

  const two = [
    ["Phenotype-first", "Start from affected patients in a clinic, then find the variant in their families.", "Carriers who were never ill are systematically missed.", "Penetrance looks HIGH", C.accent],
    ["Genotype-first", "Start from a population biobank, find everyone carrying the variant, then ask who is affected.", "Includes the carriers who never came to attention.", "Penetrance looks LOW", C.forest],
  ];
  two.forEach((b, i) => {
    const x = M + i * 6.15;
    T.card(s, x, 2.1, 5.85, 2.7, { fill: i ? C.pale : C.paleAcc, line: i ? "CBDCC0" : "E0C4BE" });
    s.addText(b[0], { x: x + 0.35, y: 2.3, w: 5.15, h: 0.34, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 15, bold: true, color: b[4] });
    s.addText(b[1], { x: x + 0.35, y: 2.7, w: 5.15, h: 0.75, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 13, color: C.ink, lineSpacing: 18 });
    s.addText(b[2], { x: x + 0.35, y: 3.5, w: 5.15, h: 0.6, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12.5, italic: true, color: C.muted, lineSpacing: 17 });
    s.addText(b[3], { x: x + 0.35, y: 4.15, w: 5.15, h: 0.4, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 14, bold: true, color: b[4] });
  });

  T.callout(s, M, 5.0, 12.0, 1.35,
    "Wright et al. 2024 (Nature Genetics 56:1772-1779, PMID 39075210) set out how penetrance should be estimated in population cohorts, and why clinic-derived figures for many well-known disease variants turn out to be substantially too high. Genetic counselling depends on getting this number right - so does deciding whether a variant is pathogenic at all.",
    { size: 14 });
}

// ---------------------------------------------------------------- 15 GxE
{
  const s = cs("Gene x environment, and a trait that is not as simple as it looks", "PTC TASTING");
  T.card(s, M, 1.55, 5.85, 1.7, {});
  s.addText("Temperature-sensitive alleles", { x: M + 0.35, y: 1.72, w: 5.15, h: 0.32, isTextBox: true, margin: 0, valign: "top",
    fontFace: T.F.body, fontSize: 14, bold: true, color: C.forest });
  s.addText("Himalayan rabbits and Siamese cats make pigment only in the cool extremities. Shave a patch, cool it, and the fur grows back dark - same genotype, different phenotype.",
    { x: M + 0.35, y: 2.08, w: 5.15, h: 1.0, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12.5, color: C.ink, lineSpacing: 17 });

  T.card(s, M + 6.15, 1.55, 5.85, 1.7, {});
  s.addText("Diet", { x: M + 6.5, y: 1.72, w: 5.15, h: 0.32, isTextBox: true, margin: 0, valign: "top",
    fontFace: T.F.body, fontSize: 14, bold: true, color: C.forest });
  s.addText("Phenylketonuria causes severe intellectual disability on a normal diet and largely does not on a restricted one, begun at birth. The genotype is unchanged; the phenotype is not a fate.",
    { x: M + 6.5, y: 2.08, w: 5.15, h: 1.0, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12.5, color: C.ink, lineSpacing: 17 });

  s.addText("PTC tasting - discovered when Fox spilled the dust in his lab in 1930, and taught ever since as a simple dominant trait",
    { x: M, y: 3.4, w: 12.0, h: 0.35, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 14, bold: true, color: C.forest });

  T.table(s, M, 3.85, 5.6,
    ["TAS2R38 position", "Taster (PAV)", "Non-taster (AVI)"],
    [["49", "Proline", "Alanine"], ["262", "Alanine", "Valine"], ["296", "Valine", "Isoleucine"]],
    { colW: [2.2, 1.7, 1.7], rowH: 0.38, bs: 12, hs: 11.5 });

  T.bullets(s, M + 6.0, 3.85, 6.0, 2.0, [
    "Three amino-acid positions in one receptor gene explain most of the difference - but sensitivity is CONTINUOUSLY distributed, and some non-tasters respond at high concentration.",
    "The taster and non-taster lineages trace back roughly 3 million years, and the polymorphism is shared with chimpanzees - the observation Fisher, Ford and Huxley read as balancing selection in 1939.",
  ], { size: 12.5, ls: 17 });

  T.callout(s, M, 6.05, 12.0, 0.7,
    "So even the textbook's simplest human Mendelian trait opens onto gene-environment interaction, balancing selection, and a continuous distribution. Be suspicious of the word 'simple'.",
    { size: 13.5 });
}

// ---------------------------------------------------------------- 16 to complex traits
{
  const s = cs("From one gene to many: the bridge out of Mendel", "WHERE THIS GOES");
  const steps = [
    ["Single gene", "One locus, clean ratios. Lectures 03 and 04."],
    ["+ modifiers", "One main gene tuned by others - in Hirschsprung disease the severity of a RET mutation is modified by EDNRB and other loci."],
    ["Oligogenic", "Digenic retinitis pigmentosa needs double heterozygosity at ROM1 AND RDS. Bardet-Biedl can need two mutations at BBS6 plus a third at BBS2 or BBS4."],
    ["Polygenic", "Hundreds to thousands of loci of small effect, plus environment. Lectures 12 and 25."],
  ];
  steps.forEach((st, i) => {
    const x = M + i * 3.05;
    T.card(s, x, 1.65, 2.75, 2.6, { fill: i === 3 ? C.pale : C.cream, line: i === 3 ? "CBDCC0" : "E2E8DE" });
    T.chip(s, x + 0.28, 1.85, 0.42, 0.42, String(i + 1), { fill: C.moss, color: C.deep, size: 14, lw: 0 });
    s.addText(st[0], { x: x + 0.28, y: 2.4, w: 2.2, h: 0.36, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 14.5, bold: true, color: C.forest });
    s.addText(st[1], { x: x + 0.28, y: 2.8, w: 2.2, h: 1.3, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 11.5, color: C.ink, lineSpacing: 15 });
    if (i < 3) T.arrow(s, x + 2.83, 2.85, 0.18, { h: 0.2 });
  });

  T.callout(s, M, 4.45, 12.0, 1.0,
    "Two mechanisms cover all of these, and they are the same two from the dominance slide: a DOSAGE model (total functional product falls below a threshold) and a POISON model (a mutant product actively suppresses the others). Modifiers and environment then fill in the rest - which is why one causal mutation gives different clinical outcomes in different people.",
    { size: 13.5 });

  T.card(s, M, 5.62, 12.0, 1.15, {});
  s.addText("Zebell et al. 2025 (Nature 644:984-992) show the mechanism directly in plants: variants with almost no effect on their own combine through hierarchical epistasis - paralogue pairs plus an upstream regulator - into large phenotypic change. Cryptic variation is not noise; it is epistasis waiting for a partner. Tautz 2026 (Genetics 232:iyag024) argues the one-gene, one-trait framing is the exception we should stop treating as the default.",
    { x: M + 0.35, y: 5.78, w: 11.3, h: 0.85, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12.5, color: C.ink, lineSpacing: 17 });
}

// ---------------------------------------------------------------- 17 practice
{
  const s = cs("Practice", "WORK THESE NOW");
  const probs = [
    ["1", "A dihybrid cross gives 200 offspring in the ratio 113 : 87 with only two phenotypic classes. Which epistatic interaction is this, and what genotypes make up each class?"],
    ["2", "In a family, 12 of 20 carriers of a dominant variant are affected. State the penetrance. Now the study is repeated in a biobank and 9 of 60 carriers are affected. Give both penetrance estimates and explain, in one sentence, which one you would quote to a patient and why."],
    ["3", "A pure-breeding yellow-seeded line is crossed to a pure-breeding green-seeded line. All F1 are yellow. The F2 gives 89 yellow : 71 green. Is this consistent with a single gene? Test it with chi-square and say what mechanism you would propose instead."],
  ];
  probs.forEach((p, i) => {
    const y = 1.65 + i * 1.45;
    T.card(s, M, y, 12.0, 1.3, {});
    T.chip(s, M + 0.28, y + 0.22, 0.44, 0.44, p[0], { fill: C.forest, color: C.white, size: 15, lw: 0 });
    s.addText(p[1], { x: M + 0.95, y: y + 0.2, w: 10.8, h: 1.0, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 14, color: C.ink, lineSpacing: 20 });
  });
  T.callout(s, M, 6.15, 12.0, 0.6,
    "Answers are worked at the start of Lecture 05. Bring your attempt, not just the answer.",
    { size: 14, italic: true });
}

// ---------------------------------------------------------------- 18 reading
{
  const s = cs("Reading for this lecture", "PREPARATION");
  const cols = [
    ["Textbook", ["Genetics: From Genes to Genomes (8e)", "Chapter 2 - Extensions to Mendel's Laws", "Do the modified-ratio problems; they are the fastest way to learn to diagnose epistasis."]],
    ["Vault notes - the concepts", ["Badano & Katsanis 2002 - Beyond Mendel", "Keightley 1996 - dominance and recessivity", "Stearns 2010 - pleiotropy", "Zschocke 2022 - Mendel and dominance"]],
    ["Vault notes - the clinic", ["Makani 2022 - Mendelian disorders today", "Allison 2004 - two lessons from genetics in medicine", "Wooding 2006 - PTC tasting, a human allelic series"]],
  ];
  cols.forEach((c, i) => {
    const x = M + i * 4.05;
    T.card(s, x, 1.65, 3.85, 3.75, { fill: i === 0 ? C.pale : C.cream, line: i === 0 ? "CBDCC0" : "E2E8DE" });
    s.addText(c[0], { x: x + 0.3, y: 1.85, w: 3.25, h: 0.34, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 14, bold: true, color: C.forest });
    T.bullets(s, x + 0.3, 2.28, 3.25, 3.0, c[1], { size: 12.5, ls: 17, gap: 8 });
  });
  T.callout(s, M, 5.65, 12.0, 0.62,
    "Recent papers for this lecture: Wright 2024 (penetrance estimation) and Tautz 2026 (Beyond Mendel) - both in the course reading list.",
    { size: 13, italic: true, fill: C.cream, line: "E2E8DE", color: C.ink });
}

// ---------------------------------------------------------------- 19 takeaways
T.closingSlide(pres, "Key takeaways", [
  "Dominance is a relationship between phenotypes, not a property of an allele. Change what you measure and the same allele can be dominant, codominant or recessive.",
  "Molecularly, recessive usually means haplosufficient loss of function; dominant means haploinsufficiency, a dominant negative, or a gain of function.",
  "Modified ratios are data, not exceptions. 9:7, 9:3:4, 12:3:1 and 15:1 each identify a specific way two genes are wired together - and the later-acting gene is the one that masks.",
  "Penetrance and expressivity describe a gap between genotype and phenotype; they do not explain it. And a penetrance figure depends on how the carriers were ascertained.",
  "There is no sharp line between Mendelian and complex inheritance - only a continuum in the number of loci and the size of their effects.",
], COURSE, ++n);

// ---------------------------------------------------------------- 20 discussion
{
  const s = cs("Discussion", "BEFORE YOU GO");
  const qs = [
    "Kacser and Burns argued that recessivity of null mutations is an automatic consequence of metabolic kinetics, needing no natural selection. Explain the flux-versus-activity curve and the summation theorem, then say what evidence distinguishes their view from Fisher's evolutionary theory of dominance.",
    "You cross two pure-breeding white-flowered lines and the F1 is purple; the F2 is 9 purple : 7 white. Draw the pathway, explain the epistasis, and describe how a complementation test on the two parental lines would confirm your model.",
    "PTC tasting is taught as a simple dominant trait, yet it shows a continuous distribution, three-site TAS2R38 haplotypes, and a polymorphism shared with chimpanzees. In what senses is it Mendelian, and in what senses does it need the extensions covered today?",
  ];
  qs.forEach((q, i) => {
    const y = 1.68 + i * 1.45;
    T.chip(s, M, y - 0.02, 0.46, 0.46, String(i + 1), { fill: C.moss, color: C.deep, size: 16, lw: 0 });
    s.addText(q, { x: M + 0.8, y: y - 0.05, w: 11.15, h: 1.3, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 13.5, color: C.ink, lineSpacing: 20 });
  });
  T.callout(s, M, 6.2, 12.0, 0.5,
    "Next: Lecture 05 - Chromosomes and Sex Determination.  Monday 14 September, textbook Ch. 3-4.",
    { size: 13 });
}

// ---------------------------------------------------------------- speaker notes
const NOTES = [
 "Title. 60 minutes. Opening line: Monday we learned the rules, today we learn what the rules assume. Nothing here contradicts Mendel.",
 "5 min. Walk the five assumption cards left to right. Ask them to guess the departure before you reveal the red text.",
 "2 min. Read the four verbs.",
 "Section break. 30 seconds.",
 "6 min. Lead with the Zschocke quote and keep coming back to it. The four mechanisms are the vocabulary for the rest of the lecture; the semi-dominance and cancer points are what medical students remember.",
 "10 min. The intellectual centre of the lecture. Draw the saturating curve on the board first, then show the chart. Ask why 50 per cent activity gives 88 per cent flux. Fisher versus Wright is a real historical dispute - present it as unsettled, then let Orr's Chlamydomonas result settle it.",
 "6 min. Do the 1:2:1 point explicitly: with incomplete dominance you read genotypes straight off phenotypes. For ABO ask which level of observation gives which verdict, and connect i back to the previous slide.",
 "5 min. Count the genotypes with them: four alleles, ten genotypes. The Himalayan temperature detail is a deliberate plant for the PTC slide.",
 "6 min. Best single illustration in the lecture. Ask whether A(Y) is dominant or recessive and refuse any answer that does not name a phenotype. Four terms defined by one allele.",
 "Section break. 30 seconds.",
 "6 min. Walk the chain downward; pause at the malaria step where the verdict flips. The 4-to-8-traits number is worth writing down - pleiotropy is modular, not universal.",
 "6 min. Do not just show the table. Give them 9:3:4 and ask what pathway would produce it before revealing the Labrador row.",
 "8 min. Work this fully on the board. Write down the rule that the later-acting gene masks. Finish with the sweet pea 9:7 as the mirror image - it sets up the next slide.",
 "7 min. This is the tool, not just a concept. Draw two mutants and the F1 for both outcomes. Say the word cistron and where it comes from. The caveat line matters for anyone going on to do a screen.",
 "6 min. The ten-carrier figure is the anchor - count the unaffected with them. Insist on the population versus individual distinction.",
 "6 min. The modern content. Ask which sampling scheme a clinical genetics textbook is likely built on. Wright 2024 is on the reading list.",
 "8 min. The shaved-rabbit experiment always lands. Then slow down for PTC: it is the one place students see a textbook Mendelian trait dissolve under scrutiny. The chimp-shared polymorphism usually gets an audible reaction.",
 "6 min. Draw the continuum as a line on the board, Lectures 03 and 04 at one end, 12 and 25 at the other. The dosage versus poison pair is the take-home.",
 "6 min. Five minutes on problem 1 in pairs. Problems 2 and 3 are homework; the chi-square in 3 rehearses Monday.",
 "1 min.",
 "3 min. Takeaway 1 is the one to repeat.",
 "3 min. Question 1 is the exam-style one. Question 2 is the one they can actually do on paper right now.",
];
pres.slides.forEach((s, i) => { if (NOTES[i]) s.addNotes(NOTES[i]); });

pres.writeFile({ fileName: "/home/claude/deck/BME333_Lec04_Extensions-to-Mendel.pptx" })
  .then(f => console.log("wrote", f));
