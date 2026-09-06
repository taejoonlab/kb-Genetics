const pptxgen = require("pptxgenjs");
const T = require("./theme");
const { C, M, W, H } = T;

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.author = "Taejoon Kwon";
pres.company = "UNIST";
pres.title = "BME333/BIO333 Lecture 03 - Mendel's Principles of Heredity";

const COURSE = "BME333 / BIO333 Genetics  ·  Lecture 03  ·  Mendel's Principles of Heredity";
let n = 0;
const cs = (t, k) => T.contentSlide(pres, t, k, COURSE, ++n);

// ---------------------------------------------------------------- 1 title
T.titleSlide(pres, {
  kicker: "LECTURE 03",
  title: "Mendel's Principles of Heredity",
  subtitle: "Segregation, independent assortment, and the particulate theory of inheritance",
  meta: "BME333 / BIO333 Genetics  ·  UNIST  ·  Week 2 Monday, 7 September 2026  ·  Textbook: Genetics: From Genes to Genomes (8e), Ch. 1",
  chips: ["A", "a"],
});
n = 1;

// ---------------------------------------------------------------- 2 objectives
{
  const s = cs("What you should be able to do after today", "LEARNING OBJECTIVES");
  const items = [
    ["Predict", "Work out the offspring of a monohybrid or dihybrid cross, and state the expected ratio before you count anything."],
    ["Explain", "Say why the 3:1 and 9:3:3:1 ratios follow from segregation and independent assortment - not the other way round."],
    ["Test", "Use the product and sum rules, and a chi-square test, to decide whether real counts match a genetic hypothesis."],
    ["Judge", "Explain what made Mendel's experimental design decisive, and what the seven genes turned out to be."],
  ];
  items.forEach((it, i) => {
    const y = 1.75 + i * 1.25;
    T.chip(s, M, y - 0.02, 0.46, 0.46, String(i + 1), { fill: C.moss, color: C.deep, size: 16, lw: 0 });
    s.addText(it[0], { x: M + 0.8, y: y - 0.03, w: 3.0, h: 0.36, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 16, bold: true, color: C.forest });
    s.addText(it[1], { x: M + 0.8, y: y + 0.35, w: 11.15, h: 0.7, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 14, color: C.ink, lineSpacing: 19 });
  });
}

// ---------------------------------------------------------------- 3 the problem
{
  const s = cs("The problem Mendel solved", "BEFORE 1865");
  s.addText("Nineteenth-century heredity assumed that parental contributions blend, like paints.",
    { x: M, y: 1.6, w: 12.0, h: 0.4, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 16, color: C.ink });

  // blending row
  const y0 = 2.25;
  T.chip(s, M + 0.2, y0, 1.5, 1.0, "tall", { fill: C.forest, color: C.white, size: 15, lw: 0 });
  s.addText("x", { x: M + 1.8, y: y0 + 0.3, w: 0.4, h: 0.4, isTextBox: true, margin: 0,
    fontFace: T.F.head, fontSize: 20, color: C.muted, align: "center" });
  T.chip(s, M + 2.25, y0, 1.5, 1.0, "dwarf", { fill: C.pale, color: C.forest, size: 15 });
  T.arrow(s, M + 3.95, y0 + 0.37, 0.9);
  T.chip(s, M + 5.05, y0, 1.6, 1.0, "medium", { fill: "7FA06E", color: C.white, size: 15, lw: 0 });
  s.addText("...and every generation after that is medium.",
    { x: M + 6.9, y: y0 + 0.3, w: 5.0, h: 0.5, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 14, italic: true, color: C.muted });

  T.callout(s, M, 3.65, 12.0, 0.95,
    "If inheritance blends, variation halves every generation. Darwin needed heritable variation for natural selection to act on - and blending destroys it. He never found a mechanism that did not.",
    { size: 15 });

  T.card(s, M, 4.9, 12.0, 1.35, {});
  s.addText("Mendel's move: stop measuring the average, start counting the classes.",
    { x: M + 0.35, y: 5.08, w: 11.3, h: 0.4, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 16, bold: true, color: C.forest });
  s.addText("Discrete, either-or characters in large numbers, over defined generations. Particles, not fluids - the hereditary units keep their identity even when they are not expressed.",
    { x: M + 0.35, y: 5.5, w: 11.3, h: 0.7, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 14, color: C.ink, lineSpacing: 19 });
}

// ---------------------------------------------------------------- 4 design
{
  const s = cs("Why the design worked", "EXPERIMENTAL LOGIC");
  const cards = [
    ["A tractable organism", "The pea flower self-pollinates inside a closed keel, so lines stay pure unless you deliberately cross them - and hybrids stay fully fertile, so you can score large F2 and F3 generations."],
    ["Two years of controls first", "34 varieties tested, 22 kept as true-breeding for seven pairs of contrasting characters. The controls came before the experiment."],
    ["Discrete characters", "Seven either-or traits with no intermediates. Nothing to average away, nothing to argue about at the margin."],
    ["A trained mathematician", "Physics and combinatorics at Vienna under Doppler and Unger. Earlier hybridisers had SEEN hidden traits reappear; only Mendel read the recurring 3:1 as a law demanding explanation."],
    ["Large numbers", "About 28,000 plants in total. Ratios only emerge from counts large enough to be stable."],
    ["Generations followed on", "F2 dominants selfed to give F3: two thirds segregated again, one third bred true. That is what turned 3:1 into 1:2:1."],
  ];
  const cw = 3.86, ch = 1.62;
  cards.forEach((c, i) => {
    const x = M + (i % 3) * (cw + 0.28), y = 1.65 + Math.floor(i / 3) * (ch + 0.3);
    T.card(s, x, y, cw, ch, {});
    T.cardText(s, x, y, cw, c[0], c[1], { bh: 1.02, bs: 12, ls: 16, hh: 0.4 });
  });
  T.callout(s, M, 5.45, 12.0, 0.95,
    "A useful corrective: the pea was not a neutral laboratory plant. Centuries of horticulture had already catalogued stable named varieties - Mendel's toolkit came pre-built - and he ran a practical vegetable-breeding programme alongside the science.",
    { size: 13.5 });
}

// ---------------------------------------------------------------- 5 seven traits
{
  const s = cs("The seven characters", "MATERIAL");
  T.table(s, M, 1.65, 12.0,
    ["Character", "Dominant", "Recessive", "Symbol"],
    [
      ["Seed shape", "round", "wrinkled", "R / r"],
      ["Cotyledon colour", "yellow", "green", "Y / y"],
      ["Seed-coat colour", "grey-brown", "white", "A / a"],
      ["Pod form", "inflated", "constricted", "V / v"],
      ["Pod colour", "green", "yellow", "Gp / gp"],
      ["Flower position", "axial", "terminal", "Fa / fa"],
      ["Stem length", "tall", "dwarf", "Le / le"],
    ],
    { colW: [4.4, 2.6, 2.6, 2.4], rowH: 0.42, bs: 13, hs: 12.5 });

  T.callout(s, M, 5.35, 12.0, 1.15,
    "Note the third row. The A gene pigments the seed coat, the flower AND the leaf axil - one gene, three visible effects. Remember it: this same locus sits at the centre of the Fisher controversy later today, and it is our first case of pleiotropy, which is Wednesday's business.",
    { size: 14 });
}

// ---------------------------------------------------------------- 6 monohybrid
{
  const s = cs("The monohybrid cross", "RESULT 1");
  const y0 = 1.75, lh = 1.15;
  const rows = [
    ["P", [["RR", C.forest, C.white], ["x", null, null], ["rr", C.pale, C.forest]], "True-breeding parents"],
    ["F1", [["Rr", "5C8A4E", C.white]], "All round. The wrinkled form has not been diluted - it has been hidden."],
    ["F2", [["1 RR", C.forest, C.white], ["2 Rr", "5C8A4E", C.white], ["1 rr", C.pale, C.forest]], "Wrinkled reappears, unchanged, in one quarter of the plants."],
  ];
  rows.forEach((r, i) => {
    const y = y0 + i * lh;
    s.addText(r[0], { x: M, y: y + 0.15, w: 0.7, h: 0.5, isTextBox: true, margin: 0,
      fontFace: T.F.head, fontSize: 20, bold: true, color: C.moss });
    let x = M + 0.8;
    r[1].forEach((c) => {
      if (c[1] === null) {
        s.addText(c[0], { x, y: y + 0.2, w: 0.4, h: 0.4, isTextBox: true, margin: 0,
          fontFace: T.F.head, fontSize: 18, color: C.muted, align: "center" });
        x += 0.5;
      } else {
        T.chip(s, x, y, 1.25, 0.8, c[0], { fill: c[1], color: c[2], size: 17, lw: 0 });
        x += 1.42;
      }
    });
    s.addText(r[2], { x: M + 5.6, y: y, w: 7.0, h: 0.8, isTextBox: true, margin: 0, valign: "middle",
      fontFace: T.F.body, fontSize: 14, color: C.ink, lineSpacing: 18 });
  });
  T.callout(s, M, 5.35, 12.0, 1.0,
    "The whole of Mendelian genetics is in the F2. A character that vanished in the F1 comes back intact - so the F1 must have carried it all along, silently, as a separate particle.",
    { size: 15 });
}

// ---------------------------------------------------------------- 7 the counts
{
  const s = cs("Mendel's F2 counts", "THE DATA");
  const data = [
    ["Round : wrinkled seed", "5474 : 1850", "2.96 : 1"],
    ["Yellow : green cotyledon", "6022 : 2001", "3.01 : 1"],
    ["Grey-brown : white seed coat", "705 : 224", "3.15 : 1"],
    ["Inflated : constricted pod", "882 : 299", "2.95 : 1"],
    ["Green : yellow pod", "428 : 152", "2.82 : 1"],
    ["Axial : terminal flower", "651 : 207", "3.14 : 1"],
    ["Tall : dwarf stem", "787 : 277", "2.84 : 1"],
  ];
  T.table(s, M, 1.65, 7.7, ["Character", "F2 counts", "Ratio"], data,
    { colW: [4.1, 2.0, 1.6], rowH: 0.42, bs: 12.5, hs: 12 });

  T.card(s, M + 8.1, 1.65, 3.9, 3.35, { fill: C.pale, line: "CBDCC0" });
  T.stat(s, M + 8.1, 1.95, 3.9, "14 949 : 5010", "TOTAL F2, ALL SEVEN CHARACTERS", { size: 26 });
  T.stat(s, M + 8.1, 3.35, 3.9, "2.98 : 1", "OBSERVED OVERALL RATIO", { size: 34 });

  T.callout(s, M, 5.3, 12.0, 1.05,
    "Seven independent characters, seven times the same ratio. That reproducibility - not any single experiment - is the argument. A ratio that holds across unrelated traits is telling you about the mechanism of transmission, not about seeds.",
    { size: 14 });
}

// ---------------------------------------------------------------- 8 segregation
{
  const s = cs("Law of Segregation", "PRINCIPLE 1");
  T.card(s, M, 1.55, 12.0, 0.92, { fill: C.pale, line: "CBDCC0" });
  s.addText("Each individual carries two copies of a hereditary factor. The two separate during gamete formation, so every gamete receives exactly one - each with equal probability.",
    { x: M + 0.35, y: 1.7, w: 11.3, h: 0.68, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 16, color: C.forest, bold: true, lineSpacing: 21 });

  // gamete diagram
  T.chip(s, M + 0.9, 3.0, 1.5, 0.85, "Rr", { fill: "5C8A4E", color: C.white, size: 20, lw: 0 });
  s.addText("F1 plant", { x: M + 0.9, y: 3.88, w: 1.5, h: 0.3, isTextBox: true, margin: 0,
    fontFace: T.F.body, fontSize: 11, color: C.muted, align: "center" });
  T.arrow(s, M + 2.6, 3.3, 0.85);
  T.chip(s, M + 3.75, 2.72, 1.1, 0.62, "R", { fill: C.forest, color: C.white, size: 20, lw: 0 });
  T.chip(s, M + 3.75, 3.62, 1.1, 0.62, "r", { fill: C.pale, color: C.forest, size: 20 });
  s.addText("50% each", { x: M + 5.2, y: 3.28, w: 1.6, h: 0.3, isTextBox: true, margin: 0,
    fontFace: T.F.body, fontSize: 13, color: C.muted });

  T.bullets(s, M + 7.0, 2.78, 5.0, 1.9, [
    "Segregation is about one gene at a time.",
    "It predicts the 1:2:1 genotype ratio underneath the 3:1 phenotype ratio.",
    "Mendel had no chromosomes and no meiosis - he inferred the rule from counts alone.",
  ], { size: 13.5, ls: 19 });

  T.callout(s, M, 4.75, 12.0, 1.45,
    "Watch the distinction: 3:1 is what you see, 1:2:1 is what is there. Mendel proved the hidden ratio by selfing F2 plants - one third of the round F2 bred true, two thirds segregated again. That F3 experiment, not the F2 count, is what makes the law an observation rather than a story.",
    { size: 14.5 });
}

// ---------------------------------------------------------------- 9 punnett
{
  const s = cs("The Punnett square: bookkeeping for gametes", "TOOL");
  T.punnett(s, M + 0.8, 1.78, 1.15, ["R", "r"], ["R", "r"], (i, j) => {
    const g = [["RR", "Rr"], ["Rr", "rr"]][i][j];
    if (g === "rr") return { t: g, fill: C.pale, color: C.forest };
    if (g === "RR") return { t: g, fill: C.forest, color: C.white };
    return { t: g, fill: "4F7A45", color: C.white };
  }, { hsize: 17, csize: 19 });
  s.addText("Pollen", { x: 2.16, y: 1.42, w: 2.3, h: 0.3, isTextBox: true, margin: 0, align: "center",
    fontFace: T.F.body, fontSize: 12, bold: true, color: C.muted });
  s.addText("Eggs", { x: 0.65, y: 3.5, w: 0.72, h: 0.3, isTextBox: true, margin: 0, align: "right",
    fontFace: T.F.body, fontSize: 12, bold: true, color: C.muted });

  T.bullets(s, M + 4.6, 1.85, 7.4, 2.3, [
    "Rows and columns are gamete types, not parents.",
    "Each cell is one fertilisation event, and all four are equally likely.",
    "Read genotypes down the cells, then collapse to phenotypes: 3 round : 1 wrinkled.",
  ], { size: 15, ls: 22 });

  T.card(s, M + 4.6, 4.35, 7.4, 1.15, {});
  s.addText("The square is a device, not a principle.",
    { x: M + 4.95, y: 4.52, w: 6.7, h: 0.32, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 14, bold: true, color: C.forest });
  s.addText("It is the product rule drawn as a grid. For three or more genes the grid becomes useless (64 cells for a trihybrid) and you should switch to probabilities.",
    { x: M + 4.95, y: 4.85, w: 6.7, h: 0.55, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 13, color: C.ink, lineSpacing: 18 });

  s.addText("3 round : 1 wrinkled", { x: M + 0.8, y: 4.9, w: 3.4, h: 0.45, isTextBox: true, margin: 0,
    fontFace: T.F.head, fontSize: 20, bold: true, color: C.forest, align: "center" });
  s.addText("1 RR : 2 Rr : 1 rr", { x: M + 0.8, y: 5.37, w: 3.4, h: 0.4, isTextBox: true, margin: 0,
    fontFace: T.F.body, fontSize: 14, color: C.muted, align: "center" });
}

// ---------------------------------------------------------------- 10 testcross
{
  const s = cs("The testcross: reading a genotype off a phenotype", "TOOL");
  s.addText("A round seed is either RR or Rr. Cross it to the recessive homozygote and let the offspring tell you which.",
    { x: M, y: 1.6, w: 12.0, h: 0.4, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 15, color: C.ink });

  const boxes = [
    ["If the parent is RR", "RR  x  rr", "All offspring Rr - every one round.", C.forest],
    ["If the parent is Rr", "Rr  x  rr", "Half Rr, half rr - a 1:1 split, wrinkled seeds appear.", C.accent],
  ];
  boxes.forEach((b, i) => {
    const x = M + i * 6.15;
    T.card(s, x, 2.2, 5.85, 2.15, { fill: i ? C.paleAcc : C.pale, line: i ? "E0C4BE" : "CBDCC0" });
    s.addText(b[0], { x: x + 0.35, y: 2.4, w: 5.15, h: 0.34, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 14, bold: true, color: b[3] });
    s.addText(b[1], { x: x + 0.35, y: 2.78, w: 5.15, h: 0.55, isTextBox: true, margin: 0,
      fontFace: T.F.head, fontSize: 26, bold: true, color: b[3] });
    s.addText(b[2], { x: x + 0.35, y: 3.42, w: 5.15, h: 0.7, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 13.5, color: C.ink, lineSpacing: 18 });
  });

  T.callout(s, M, 4.65, 12.0, 1.45,
    "Why the recessive parent? Because it contributes only r, it cannot mask anything. The offspring phenotypes are a direct readout of the gametes made by the unknown parent. This is the general trick - choose a tester that adds no information of its own - and you will meet it again in complementation tests (Lecture 14) and in the cis/trans test in bacteria (Lecture 17).",
    { size: 14.5 });
}

// ---------------------------------------------------------------- 11 dihybrid
{
  const s = cs("Two genes at once: the dihybrid cross", "RESULT 2");
  s.addText("RRYY  x  rryy   ->   F1 all RrYy   ->   F1 selfed",
    { x: M, y: 1.55, w: 12.0, h: 0.38, isTextBox: true, margin: 0,
      fontFace: T.F.head, fontSize: 17, bold: true, color: C.forest });

  const g = ["RY", "Ry", "rY", "ry"];
  const geno = [
    ["RRYY", "RRYy", "RrYY", "RrYy"],
    ["RRYy", "RRyy", "RrYy", "Rryy"],
    ["RrYY", "RrYy", "rrYY", "rrYy"],
    ["RrYy", "Rryy", "rrYy", "rryy"],
  ];
  const cls = (gt) => {
    const R = gt[0] === "R" || gt[1] === "R";
    const Y = gt[2] === "Y" || gt[3] === "Y";
    if (R && Y) return [C.forest, C.white];
    if (R && !Y) return ["4F7A45", C.white];
    if (!R && Y) return [C.moss, C.deep];
    return [C.pale, C.forest];
  };
  T.punnett(s, M + 0.15, 2.0, 0.80, g, g, (i, j) => {
    const gt = geno[i][j], c = cls(gt);
    return { t: gt, fill: c[0], color: c[1] };
  }, { hsize: 12, csize: 11.5, lab: 0.44, gutter: 0.1, gap: 0.06 });

  const legend = [
    ["round, yellow", "9/16", C.forest, C.white],
    ["round, green", "3/16", "4F7A45", C.white],
    ["wrinkled, yellow", "3/16", C.moss, C.deep],
    ["wrinkled, green", "1/16", C.pale, C.forest],
  ];
  legend.forEach((l, i) => {
    const y = 2.15 + i * 0.62;
    T.chip(s, M + 4.3, y, 0.85, 0.45, l[1], { fill: l[2], color: l[3], size: 13, lw: 0 });
    s.addText(l[0], { x: M + 5.3, y: y + 0.06, w: 2.8, h: 0.32, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 13, color: C.ink });
  });

  T.card(s, M + 8.3, 2.0, 3.7, 2.75, {});
  s.addText("Mendel's counts", { x: M + 8.6, y: 2.18, w: 3.1, h: 0.3, isTextBox: true, margin: 0,
    fontFace: T.F.body, fontSize: 13, bold: true, color: C.forest });
  [["round yellow", 315], ["round green", 108], ["wrinkled yellow", 101], ["wrinkled green", 32]]
    .forEach((r, i) => {
      s.addText(r[0], { x: M + 8.6, y: 2.58 + i * 0.42, w: 2.2, h: 0.32, isTextBox: true, margin: 0,
        fontFace: T.F.body, fontSize: 12.5, color: C.ink });
      s.addText(String(r[1]), { x: M + 10.85, y: 2.58 + i * 0.42, w: 1.0, h: 0.32, isTextBox: true, margin: 0,
        fontFace: T.F.body, fontSize: 12.5, bold: true, color: C.forest, align: "right" });
    });
  s.addText("n = 556      9.8 : 3.4 : 3.2 : 1",
    { x: M + 8.6, y: 4.32, w: 3.1, h: 0.4, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 12, color: C.muted });

  T.callout(s, M, 6.0, 12.0, 0.72,
    "The two RECOMBINANT classes - round-green and wrinkled-yellow - are the whole point. Under linkage they would be rare; here they appear in force, at 3/16 each.",
    { size: 15 });
}

// ---------------------------------------------------------------- 12 independent assortment
{
  const s = cs("Law of Independent Assortment", "PRINCIPLE 2");
  T.card(s, M, 1.55, 12.0, 0.9, { fill: C.pale, line: "CBDCC0" });
  s.addText("During gamete formation, the segregation of one gene pair is independent of the segregation of any other pair.",
    { x: M + 0.35, y: 1.72, w: 11.3, h: 0.6, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 16, bold: true, color: C.forest, lineSpacing: 21 });

  T.bullets(s, M, 2.7, 5.9, 2.5, [
    "An RrYy plant makes four gamete types - RY, Ry, rY, ry - in equal numbers.",
    "Mendel generalised it: for n differing character pairs, 3^n genotype classes, 2^n true-breeding combinations, 4^n equally likely gamete unions.",
    "He verified the three-character case directly - all 27 classes.",
  ], { size: 13.5, ls: 19 });

  T.card(s, M + 6.25, 2.7, 5.75, 2.5, { fill: C.paleAcc, line: "E0C4BE" });
  s.addText("The limit of the law", { x: M + 6.6, y: 2.9, w: 5.05, h: 0.34, isTextBox: true, margin: 0, valign: "top",
    fontFace: T.F.body, fontSize: 15, bold: true, color: "7A2E22" });
  s.addText("Independent assortment holds for genes on different chromosomes, or far apart on the same one. Genes that sit close together are inherited together - linkage - and give ratios that are not 9:3:3:1.\n\nMendel's seven characters behaved independently. Pea has seven chromosome pairs, so the tidy story would be one gene each - but the genome says otherwise. Why it still worked is a question for Lecture 07.",
    { x: M + 6.6, y: 3.3, w: 5.05, h: 1.8, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12.5, color: "7A2E22", lineSpacing: 17 });

  T.callout(s, M, 5.45, 12.0, 0.9,
    "Nasmyth's reading of what this law really says: different aspects of an organism are specified by separate elements, transmitted independently by one common mechanism. That is the direct ancestor of one gene - one enzyme.",
    { size: 14 });
}

// ---------------------------------------------------------------- 13 probability
{
  const s = cs("Probability beats drawing squares", "TOOL");
  const cards = [
    ["Product rule", "P(A and B) = P(A) x P(B)\nfor independent events", "From RrYy x RrYy: P(round and yellow) = 3/4 x 3/4 = 9/16 - the 9 of 9:3:3:1, with nothing drawn."],
    ["Sum rule", "P(A or B) = P(A) + P(B)\nfor mutually exclusive events", "P(round-green OR wrinkled-yellow) = 3/16 + 3/16 = 6/16."],
  ];
  cards.forEach((c, i) => {
    const x = M + i * 6.15;
    T.card(s, x, 1.6, 5.85, 2.05, {});
    s.addText(c[0], { x: x + 0.35, y: 1.8, w: 5.15, h: 0.34, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 15, bold: true, color: C.forest });
    s.addText(c[1], { x: x + 0.35, y: 2.18, w: 5.15, h: 0.7, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.head, fontSize: 15, color: C.accent, lineSpacing: 20 });
    s.addText(c[2], { x: x + 0.35, y: 2.92, w: 5.15, h: 0.65, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12.5, color: C.ink, lineSpacing: 17 });
  });

  T.card(s, M, 3.85, 7.4, 1.95, { fill: C.pale, line: "CBDCC0" });
  s.addText("Trihybrid, without the 64-cell grid", { x: M + 0.35, y: 4.02, w: 6.7, h: 0.34, isTextBox: true, margin: 0, valign: "top",
    fontFace: T.F.body, fontSize: 15, bold: true, color: C.forest });
  s.addText("Triple recessive:      1/4 x 1/4 x 1/4  =  1/64\nAll three dominant:   3/4 x 3/4 x 3/4  =  27/64",
    { x: M + 0.35, y: 4.42, w: 6.7, h: 0.75, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.head, fontSize: 17, bold: true, color: C.forest, lineSpacing: 24 });
  s.addText("One gene at a time, then multiply. This scales; the grid does not.",
    { x: M + 0.35, y: 5.2, w: 6.7, h: 0.4, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12.5, color: C.ink });

  T.card(s, M + 7.7, 3.85, 4.3, 1.95, {});
  s.addText("Mendel ran it backwards", { x: M + 8.05, y: 4.02, w: 3.6, h: 0.34, isTextBox: true, margin: 0, valign: "top",
    fontFace: T.F.body, fontSize: 14, bold: true, color: C.forest });
  s.addText("If a hybrid really makes each gamete type equally often, a backcross to the recessive parent must give equal classes - 1:1, or 1:1:1:1 for two genes. His backcrosses did. That is evidence about the GAMETES, not just the offspring.",
    { x: M + 8.05, y: 4.42, w: 3.6, h: 1.25, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 11.5, color: C.ink, lineSpacing: 16 });

  T.callout(s, M, 6.0, 12.0, 0.6,
    "Work the trihybrid on paper now. Then look at the 64-cell square you did not have to draw.",
    { size: 14, italic: true });
}

// ---------------------------------------------------------------- 14 chi square
{
  const s = cs("Does the data fit the hypothesis? Chi-square", "TOOL");
  s.addText("A ratio is a prediction. Chi-square asks whether the deviation between observed and expected counts is small enough to be chance.",
    { x: M, y: 1.6, w: 12.0, h: 0.4, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 15, color: C.ink });

  T.table(s, M, 2.15, 7.5,
    ["Class", "Obs", "Exp (9:3:3:1)", "(O-E)^2 / E"],
    [
      ["Round yellow", "315", "312.75", "0.016"],
      ["Round green", "108", "104.25", "0.135"],
      ["Wrinkled yellow", "101", "104.25", "0.101"],
      ["Wrinkled green", "32", "34.75", "0.218"],
      ["Total", "556", "556", "0.470"],
    ],
    { colW: [2.7, 1.3, 1.9, 1.6], rowH: 0.42, bs: 12.5, hs: 11.5 });

  T.card(s, M + 7.9, 2.15, 4.1, 2.5, { fill: C.pale, line: "CBDCC0" });
  T.stat(s, M + 7.9, 2.32, 4.1, "0.47", "CHI-SQUARE, 3 DEGREES OF FREEDOM", { size: 40 });
  s.addText("P ~ 0.93  -  the fit is not rejected", {
    x: M + 8.1, y: 3.9, w: 3.7, h: 0.5, isTextBox: true, margin: 0, valign: "middle",
    fontFace: T.F.body, fontSize: 15, bold: true, color: C.forest, align: "center" });

  T.bullets(s, M, 5.0, 12.0, 1.6, [
    "Degrees of freedom = number of classes - 1 (here 4 - 1 = 3), because the total is fixed.",
    "Reject the hypothesis when P < 0.05. A large P does not prove the hypothesis - it fails to disprove it.",
    "Chi-square tests counts, never proportions. Feed it 315 and 108, never 57% and 19%.",
  ], { size: 14, ls: 20 });
}

// ---------------------------------------------------------------- 15 section: history
T.sectionSlide(pres, "II", "How the ratios were received",
  "Fisher's objection, thirty-four years of silence, and what the seven genes turned out to be", COURSE, ++n);

// ---------------------------------------------------------------- 16 fisher
{
  const s = cs("The data-too-good problem", "HISTORIOGRAPHY");
  s.addText("Fisher (1936) defended Mendel's authenticity in most respects, then concluded - in a finding he privately called 'abominable' - that the data fit expectation too closely. The charge has stuck for ninety years. Here is what it actually rests on.",
    { x: M, y: 1.58, w: 12.0, h: 0.62, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 14.5, color: C.ink, lineSpacing: 19 });

  T.card(s, M, 2.32, 5.85, 2.5, { fill: C.paleAcc, line: "E0C4BE" });
  s.addText("The charge", { x: M + 0.35, y: 2.5, w: 5.15, h: 0.32, isTextBox: true, margin: 0, valign: "top",
    fontFace: T.F.body, fontSize: 15, bold: true, color: "7A2E22" });
  s.addText("Mendel scored an F2 dominant as heterozygous if any of 10 grown offspring showed the recessive trait. But a true heterozygote has a (3/4) to the tenth = 6 per cent chance of producing no recessive offspring, and being misfiled as homozygous.\n\nSo the expected ratio is not 2:1 but 1.7:1. Mendel's pooled 720 : 353 fits 2:1 almost perfectly (P = 0.76) and fits 1.7:1 badly (P = 0.0045).",
    { x: M + 0.35, y: 2.87, w: 5.15, h: 1.8, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12, color: "7A2E22", lineSpacing: 16 });

  T.card(s, M + 6.15, 2.32, 5.85, 2.5, { fill: C.pale, line: "CBDCC0" });
  s.addText("The rebuttal - no fraud required", { x: M + 6.5, y: 2.5, w: 5.15, h: 0.32, isTextBox: true, margin: 0, valign: "top",
    fontFace: T.F.body, fontSize: 15, bold: true, color: C.forest });
  s.addText("Hartl and Fairbanks argue Fisher misidentified the character scored. It was almost certainly leaf-AXIL pigmentation - a pleiotropic effect of that same A gene - which is visible in seedlings two to three weeks after germination. A gardener can raise far more than ten seedlings, so the effective sample was larger and the bias disappears.\n\nWright added that a 2 per cent leakage of the recessive phenotype in heterozygotes would erase the discrepancy too.",
    { x: M + 6.5, y: 2.87, w: 5.15, h: 1.8, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12, color: C.ink, lineSpacing: 16 });

  T.callout(s, M, 5.02, 12.0, 1.35,
    "One detail is worth more than the whole argument: Mendel's Experiment 5 - the one he himself distrusted and repeated - fits Fisher's corrected expectation almost exactly (P = 0.90). Reporting an experiment you doubt, and saying so, is not the behaviour of someone massaging data. Treat this as a live case in research integrity, not a settled verdict.",
    { size: 14 });
}

// ---------------------------------------------------------------- 17 rediscovery
{
  const s = cs("1866 to 1900, and the Hieracium detour", "HISTORIOGRAPHY");
  const tl = [
    ["1865-66", "Two lectures in Brunn, then publication in the society's Proceedings. Mendel had read Darwin - he owned and annotated the 1863 German Origin, and framed his closing sections in evolutionary terms."],
    ["1866-73", "Hieracium gives the opposite result: variable F1, uniform non-segregating progeny. The cause is apomixis - asexual seed from unreduced eggs - not established until the 1900s. He may also have been deliberately studying 'constant hybrids' as a complement rather than failing to replicate."],
    ["1868-84", "Elected abbot. Thousands of hand-emasculations cost him his eyesight; administration costs him the rest of his time. The experiments stop."],
    ["1900-06", "de Vries, Correns and Tschermak reach the same ratios - and both de Vries and Correns had already read Mendel. Genetics then survives in England through HORTICULTURE, not academia: the Royal Horticultural Society arranges the 1901 English translation and hosts the 1906 conference where Bateson coins the word 'genetics'."],
  ];
  tl.forEach((t2, i) => {
    const y = 1.55 + i * 1.13;
    T.chip(s, M, y - 0.03, 1.42, 0.42, t2[0], { fill: i === 3 ? C.accent : C.forest, color: C.white, size: 13, lw: 0 });
    s.addText(t2[1], { x: M + 1.75, y: y - 0.05, w: 10.3, h: 1.0, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12, color: C.ink, lineSpacing: 16 });
  });
  T.callout(s, M, 6.2, 12.0, 0.5,
    "Nasmyth's subtraction test: nobody rediscovered these ideas for three decades - so Mendel was 30 to 40 years ahead of anyone else.",
    { size: 13 });
}

// ---------------------------------------------------------------- 18 molecular identity
{
  const s = cs("What are Mendel's genes?", "MODERN ANSWER");
  T.table(s, M, 1.5, 12.0,
    ["Character", "Gene", "Molecular lesion in the recessive allele", "Year"],
    [
      ["Seed shape  R / r", "SBE1", "0.8 kb transposon insertion kills starch-branching enzyme; the drying seed collapses", "1990"],
      ["Stem length  Le / le", "GA3ox1", "single G to A (Ala to Thr) near the active site; tall plants make about 10x more bioactive GA1", "1997"],
      ["Cotyledon colour  Y / y", "SGR", "stay-green: chlorophyll breakdown fails, so the cotyledon stays visibly green", "2007"],
      ["Seed-coat colour  A / a", "bHLH TF", "splice-donor mutation; one gene pigments flower, seed coat AND leaf axil - pleiotropy", "2010"],
      ["Pod colour  Gp / gp", "ChlG region", "about 100 kb deletion NEXT TO chlorophyll synthase; fusion transcripts cut functional ChlG to 6 per cent", "2025"],
      ["Pod form  P and V", "PsCLE41 / PsMYB26", "premature stop in a CLE signalling peptide; reduced expression of a lignification regulator", "2025"],
      ["Flower position  Fa / fa", "PsCIK2/3", "5 bp frameshift in a CLAVATA co-receptor, plus a modifier locus Mfa", "2025"],
    ],
    { colW: [3.0, 1.9, 5.9, 1.2], rowH: 0.5, bs: 10, hs: 10.5, align: "left" });

  T.callout(s, M, 5.68, 12.0, 1.05,
    "Two things to take away. First, the lesions are wildly different - transposon, point mutation, splice site, 100 kb deletion, frameshift - yet every one behaves as a clean recessive, because dominant means functional and recessive means loss of function. Second, Gp is a deletion BESIDE the gene it disables. In what sense is that still 'a gene' in Mendel's sense?",
    { size: 13.5 });
}

// ---------------------------------------------------------------- 19 recent papers
{
  const s = cs("How the last three were found", "RECENT LITERATURE");
  const papers = [
    ["Kreplak et al. 2019", "Nature Genetics - first pea reference genome",
     "Pea is 2n = 14 but about 4.45 Gb and 76 to 83 per cent repetitive, dominated by Ogre LTR retrotransposons - which is why the assembly took so long. Predicts about 44,756 genes, with an unusually high fraction of singletons.", "vault: article"],
    ["Yang et al. 2022", "Nature Genetics - the ZW6 assembly",
     "Far more contiguous (contig N50 improved 243-fold) plus a 116-accession pan-genome. Re-identifies R and Le by QTL mapping with very high LOD scores.", "vault: article"],
    ["Feng et al. 2025", "Nature - Mendel's missing traits",
     "Completes the set 160 years after the paper: about 697 accessions, roughly 155 million SNPs, GWAS plus linkage mapping. Pod colour, pod form and flower position, at last.", "vault: article + News & Views"],
  ];
  papers.forEach((p, i) => {
    const y = 1.58 + i * 1.45;
    T.card(s, M, y, 12.0, 1.35, {});
    s.addText(p[0], { x: M + 0.35, y: y + 0.16, w: 3.0, h: 0.32, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 14.5, bold: true, color: C.forest });
    s.addText(p[1], { x: M + 3.3, y: y + 0.17, w: 5.4, h: 0.3, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12.5, italic: true, color: C.muted });
    s.addText(p[3], { x: M + 8.9, y: y + 0.17, w: 2.8, h: 0.3, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 11, color: C.muted, align: "right" });
    s.addText(p[2], { x: M + 0.35, y: y + 0.58, w: 11.3, h: 0.7, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 12.5, color: C.ink, lineSpacing: 17 });
  });
  T.callout(s, M, 6.1, 12.0, 0.55,
    "The modern coda validates his judgement: all seven are major-effect loci with clean functional-versus-null dominance.",
    { size: 13.5, italic: true });
}

// ---------------------------------------------------------------- 20 reading
{
  const s = cs("Reading for this lecture", "PREPARATION");
  const cols = [
    ["Textbook", ["Genetics: From Genes to Genomes (8e)", "Chapter 1 - Mendel's Principles of Heredity", "Work the end-of-chapter problems on probability before Wednesday."]],
    ["Vault notes - the experiments", ["Abbott 2016 - Mendel's hybrid paper", "Feng 2025 - Mendel's missing traits (+ News & Views)", "Kreplak 2019 / Yang 2022 - pea genomes", "Reid & Ross 2011 - Mendel's genes"]],
    ["Vault notes - the argument", ["Hartl 1992 - how Mendel thought", "Hartl & Fairbanks 2007 - the falsification charge", "Nasmyth 2022 / Charlesworth 2022 - Mendel at 200", "Kottler 1979 - the rediscovery"]],
  ];
  cols.forEach((c, i) => {
    const x = M + i * 4.05;
    T.card(s, x, 1.65, 3.85, 3.75, { fill: i === 0 ? C.pale : C.cream, line: i === 0 ? "CBDCC0" : "E2E8DE" });
    s.addText(c[0], { x: x + 0.3, y: 1.85, w: 3.25, h: 0.34, isTextBox: true, margin: 0,
      fontFace: T.F.body, fontSize: 14, bold: true, color: C.forest });
    T.bullets(s, x + 0.3, 2.28, 3.25, 3.0, c[1], { size: 12.5, ls: 17, gap: 8 });
  });
  T.callout(s, M, 5.65, 12.0, 0.62,
    "Everything listed here is in the course vault under en/review and en/article, with a Korean mirror under ko/.",
    { size: 13, italic: true, fill: C.cream, line: "E2E8DE", color: C.ink });
}

// ---------------------------------------------------------------- 21 takeaways
T.closingSlide(pres, "Key takeaways", [
  "Inheritance is particulate. Hereditary units keep their identity across generations even when they are not expressed - which is why a trait can skip a generation and return unchanged.",
  "Segregation: two copies per individual, one per gamete, equal probability. The 3:1 phenotype ratio sits on top of a 1:2:1 genotype ratio.",
  "Independent assortment: separate gene pairs segregate independently, so 9:3:3:1 is just 3:1 multiplied by 3:1. It fails for linked genes.",
  "Genotype is not phenotype. The testcross exists because you cannot see the difference between RR and Rr without one.",
  "The design is the discovery: true-breeding lines, discrete characters, large counts, generations followed on. Take that apart, not just the ratios.",
], COURSE, ++n);

// ---------------------------------------------------------------- 22 discussion
{
  const s = cs("Discussion", "BEFORE YOU GO");
  const qs = [
    "Fisher said the data were too good. Lay out the statistical basis - 2:1 versus the corrected 1.7:1 from ten-offspring progeny tests - and the Hartl-Fairbanks rebuttal. Does misidentifying the scored character fully dissolve the charge, or does some suspicion remain? What would count as decisive evidence either way?",
    "Hieracium gave Mendel the opposite of his pea results. Was that a failure? Contrast the traditional narrative with the 'constant hybrids' reinterpretation and the role of apomixis. What does the episode teach about data that seem to violate an established law?",
    "The Gp locus turned out to be a 100 kb deletion that disrupts a NEIGHBOURING gene's transcription rather than a mutation in a coding sequence. In what sense is Gp still 'a gene' in Mendel's sense - and what does that do to the definition?",
  ];
  qs.forEach((q, i) => {
    const y = 1.68 + i * 1.45;
    T.chip(s, M, y - 0.02, 0.46, 0.46, String(i + 1), { fill: C.moss, color: C.deep, size: 16, lw: 0 });
    s.addText(q, { x: M + 0.8, y: y - 0.05, w: 11.15, h: 1.3, isTextBox: true, margin: 0, valign: "top",
      fontFace: T.F.body, fontSize: 13.5, color: C.ink, lineSpacing: 20 });
  });
  T.callout(s, M, 6.15, 12.0, 0.55,
    "Next: Lecture 04 - Extensions to Mendel's Laws.  Wednesday 9 September, textbook Chapter 2.",
    { size: 14 });
}

// ---------------------------------------------------------------- speaker notes
const NOTES = [
 "Title. 60 minutes. Say up front: today is the one lecture whose whole argument is made from counting. Everything later - linkage, QTL, GWAS - is a variation on comparing observed counts with expected counts.",
 "2 min. Read the four verbs. The exam asks them to DO these, not recite laws.",
 "5 min. Draw the blending problem on the board: two parents, one offspring, variance halves. Ask what happens after ten generations before showing the callout.",
 "6 min. Spend the time here. Ask which of the six choices they would drop if they had one semester instead of eight years. Most drop the two years of controls - which is exactly the one that makes everything else interpretable.",
 "3 min. Point at row three. The A gene is the plant for BOTH the Fisher slide and Wednesday's pleiotropy.",
 "5 min. Build P, F1, F2 on the board. The key beat is F1 - ask where wrinkled went and let them answer.",
 "5 min. Emphasise reproducibility across seven characters. Pod colour at 2.82 is the worst fit; remember it for the Fisher slide.",
 "6 min. The F3 experiment is what students skip. Ask: you see 3:1, how would you prove the 1:2:1 underneath? Let them design the selfing.",
 "4 min. Stress the square is the product rule in disguise. Say you will take it away from them two slides later.",
 "5 min. Ask why the tester must be homozygous recessive BEFORE showing the callout. Flag forward to complementation and the cis/trans test.",
 "6 min. Work two or three cells live. Then show the counts. The recombinant classes are the point - underline that.",
 "4 min. The limit box matters more than the law. Pea has seven chromosome pairs and seven characters; that tidy story is wrong, and Lecture 07 says why.",
 "6 min. Have them do the trihybrid on paper. Time it. The backcross card is the subtle part: it is evidence about gametes, not offspring.",
 "6 min. Walk one row on the board. Two warnings to repeat: df = classes minus one, and never feed it percentages.",
 "Section break. 30 seconds.",
 "8 min. The most demanding slide. Do the (3/4)^10 = 6 per cent calculation on the board, then the 2:1 versus 1.7:1 numbers, then the rebuttal. End on Experiment 5 - it is the detail that changes minds.",
 "6 min. Four beats: Mendel read Darwin; Hieracium and apomixis; blindness and the abbacy; rediscovery through horticulture. The Bateson 1906 coinage is a good place to pause.",
 "5 min. The payoff slide. Read down the lesion column - all different, all clean recessives. Then ask the Gp question and do not answer it; it is discussion question 3.",
 "3 min. Keep it short. The pea genome numbers exist to show why this took 160 years.",
 "1 min. Say which vault notes are required and which are optional.",
 "3 min. Read the first and last takeaway aloud; let them read the rest.",
 "3 min. Question 1 is the exam-style one. Leave question 3 hanging - it is Wednesday's opening.",
];
pres.slides.forEach((s, i) => { if (NOTES[i]) s.addNotes(NOTES[i]); });

pres.writeFile({ fileName: "/home/claude/deck/BME333_Lec03_Mendel-Principles.pptx" })
  .then(f => console.log("wrote", f));
