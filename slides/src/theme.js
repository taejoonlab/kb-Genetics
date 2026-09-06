// Shared theme + layout helpers for BME333/BIO333 lecture decks
const C = {
  forest: "2C5F2D",
  deep:   "1B3A1C",
  moss:   "97BC62",
  pale:   "E8F0E0",
  cream:  "F5F5F5",
  ink:    "1F2D1E",
  muted:  "6B7A66",
  white:  "FFFFFF",
  accent: "B85042",   // terracotta - exceptions, caution, key numbers
  paleAcc:"F3E3E0",
};

const F = { head: "Cambria", body: "Calibri" };
const M = 0.65;                 // page margin
const W = 13.333, H = 7.5;

function footer(slide, course, n, dark) {
  const col = dark ? "B8CFA8" : C.muted;
  slide.addText(course, {
    x: M, y: H - 0.5, w: 9.5, h: 0.3, isTextBox: true, margin: 0, valign: "middle",
    fontFace: F.body, fontSize: 10, color: col, align: "left",
  });
  if (n !== undefined) {
    slide.addText(String(n), {
      x: W - M - 1.0, y: H - 0.5, w: 1.0, h: 0.3, isTextBox: true, margin: 0, valign: "middle",
      fontFace: F.body, fontSize: 10, color: col, align: "right",
    });
  }
}

// ---- slide kinds ----------------------------------------------------------
function titleSlide(pres, o) {
  const s = pres.addSlide();
  s.background = { color: C.deep };
  s.addText(o.kicker, {
    x: M, y: 1.9, w: 11, h: 0.4, isTextBox: true, margin: 0,
    fontFace: F.body, fontSize: 15, color: C.moss, charSpacing: 2, bold: true,
  });
  s.addText(o.title, {
    x: M, y: 2.4, w: 9.15, h: 1.5, isTextBox: true, margin: 0,
    fontFace: F.head, fontSize: 44, bold: true, color: C.white, lineSpacing: 50,
  });
  s.addText(o.subtitle, {
    x: M, y: 4.0, w: 11.0, h: 0.6, isTextBox: true, margin: 0,
    fontFace: F.body, fontSize: 18, color: C.pale,
  });
  s.addText(o.meta, {
    x: M, y: 6.3, w: 11.6, h: 0.4, isTextBox: true, margin: 0,
    fontFace: F.body, fontSize: 12, color: C.moss,
  });
  // motif: allele chips
  const letters = o.chips || ["A", "a"];
  letters.forEach((L, i) => chip(s, W - M - 2.6 + i * 1.25, 2.5, 1.05, 1.05, L,
    { fill: i === 0 ? C.moss : "244024", color: i === 0 ? C.deep : C.moss, size: 34, line: C.moss }));
  return s;
}

function sectionSlide(pres, num, title, sub, course, n) {
  const s = pres.addSlide();
  s.background = { color: C.forest };
  s.addText(num, {
    x: M, y: 2.5, w: 2, h: 1.2, isTextBox: true, margin: 0,
    fontFace: F.head, fontSize: 72, bold: true, color: "4E8A4F",
  });
  s.addText(title, {
    x: M + 1.9, y: 2.6, w: 10.2, h: 0.9, isTextBox: true, margin: 0,
    fontFace: F.head, fontSize: 36, bold: true, color: C.white,
  });
  if (sub) s.addText(sub, {
    x: M + 1.9, y: 3.55, w: 10.2, h: 0.7, isTextBox: true, margin: 0,
    fontFace: F.body, fontSize: 16, color: C.pale,
  });
  footer(s, course, n, true);
  return s;
}

function contentSlide(pres, title, kicker, course, n) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  if (kicker) s.addText(kicker, {
    x: M, y: 0.42, w: 11.6, h: 0.28, isTextBox: true, margin: 0,
    fontFace: F.body, fontSize: 11, bold: true, color: C.moss, charSpacing: 1.5,
  });
  s.addText(title, {
    x: M, y: kicker ? 0.72 : 0.5, w: 12.05, h: 0.75, isTextBox: true, margin: 0,
    fontFace: F.head, fontSize: 30, bold: true, color: C.forest,
  });
  footer(s, course, n);
  return s;
}

function closingSlide(pres, title, lines, course, n) {
  const s = pres.addSlide();
  s.background = { color: C.deep };
  s.addText(title, {
    x: M, y: 0.7, w: 11.6, h: 0.8, isTextBox: true, margin: 0,
    fontFace: F.head, fontSize: 32, bold: true, color: C.white,
  });
  s.addText(lines.map((t, i) => ({
    text: t, options: { bullet: true, breakLine: i !== lines.length - 1 },
  })), {
    x: M, y: 1.75, w: 11.6, h: 4.6, isTextBox: true, margin: 0,
    fontFace: F.body, fontSize: 17, color: C.pale, paraSpaceAfter: 12, lineSpacing: 26,
    valign: "top",
  });
  footer(s, course, n, true);
  return s;
}

// ---- building blocks ------------------------------------------------------
function chip(slide, x, y, w, h, text, o) {
  o = o || {};
  slide.addShape("roundRect", {
    x, y, w, h, rectRadius: 0.12,
    fill: { color: o.fill || C.pale },
    line: { color: o.line || (o.fill || C.moss), width: o.lw === undefined ? 1 : o.lw },
  });
  slide.addText(text, {
    x, y, w, h, isTextBox: true, margin: 0,
    fontFace: o.face || F.head, fontSize: o.size || 18, bold: o.bold !== false,
    color: o.color || C.forest, align: "center", valign: "middle",
  });
}

function card(slide, x, y, w, h, o) {
  slide.addShape("roundRect", {
    x, y, w, h, rectRadius: 0.06,
    fill: { color: o.fill || C.cream },
    line: { color: o.line || "E2E8DE", width: 1 },
  });
}

function cardText(slide, x, y, w, head, body, o) {
  o = o || {};
  const hh = o.hh || 0.34;
  slide.addText(head, {
    x: x + 0.28, y: y + 0.22, w: w - 0.56, h: hh, isTextBox: true, margin: 0,
    fontFace: F.body, fontSize: o.hs || 15, bold: true, color: o.hc || C.forest, valign: "top",
  });
  slide.addText(body, {
    x: x + 0.28, y: y + 0.26 + hh, w: w - 0.56, h: o.bh || 0.9, isTextBox: true, margin: 0,
    fontFace: F.body, fontSize: o.bs || 13, color: o.bc || C.ink, lineSpacing: o.ls || 18,
    valign: "top",
  });
}

function bullets(slide, x, y, w, h, items, o) {
  o = o || {};
  slide.addText(items.map((t, i) => ({
    text: t,
    options: { bullet: true, breakLine: i !== items.length - 1,
               bold: !!o.boldAll, color: o.color || C.ink },
  })), {
    x, y, w, h, isTextBox: true, margin: 0,
    fontFace: F.body, fontSize: o.size || 15, color: o.color || C.ink, valign: "top",
    paraSpaceAfter: o.gap === undefined ? 10 : o.gap, lineSpacing: o.ls || 22,
  });
}

function callout(slide, x, y, w, h, text, o) {
  o = o || {};
  slide.addShape("roundRect", {
    x, y, w, h, rectRadius: 0.07,
    fill: { color: o.fill || C.paleAcc }, line: { color: o.line || "E0C4BE", width: 1 },
  });
  slide.addText(text, {
    x: x + 0.3, y: y + 0.16, w: w - 0.6, h: h - 0.32, isTextBox: true, margin: 0,
    fontFace: F.body, fontSize: o.size || 14, color: o.color || "7A2E22",
    lineSpacing: o.ls || 20, valign: "middle", italic: !!o.italic,
  });
}

function stat(slide, x, y, w, big, label, o) {
  o = o || {};
  slide.addText(big, {
    x, y, w, h: 0.95, isTextBox: true, margin: 0,
    fontFace: F.head, fontSize: o.size || 46, bold: true,
    color: o.color || C.forest, align: o.align || "center",
  });
  slide.addText(label, {
    x, y: y + 0.95, w, h: 0.6, isTextBox: true, margin: 0,
    fontFace: F.body, fontSize: 12, color: C.muted, align: o.align || "center", lineSpacing: 16,
  });
}

// Punnett square. top / left are arrays of gamete labels; fill(i,j) -> {t, fill, color}
function punnett(slide, x, y, cell, top, left, fill, o) {
  o = o || {};
  const lab = o.lab || 0.55;
  const g = o.gap === undefined ? 0.07 : o.gap;   // gutter between every cell
  const gx = o.gutter === undefined ? 0.16 : o.gutter; // header-to-grid gutter
  const x0 = x + lab + gx, y0 = y + lab + gx;
  top.forEach((t, j) => chip(slide, x0 + j * cell, y, cell - g, lab, t,
    { fill: C.deep, color: C.moss, size: o.hsize || 15, lw: 0 }));
  left.forEach((t, i) => chip(slide, x, y0 + i * cell, lab, cell - g, t,
    { fill: C.deep, color: C.moss, size: o.hsize || 15, lw: 0 }));
  for (let i = 0; i < left.length; i++) {
    for (let j = 0; j < top.length; j++) {
      const c = fill(i, j);
      chip(slide, x0 + j * cell, y0 + i * cell, cell - g, cell - g, c.t,
        { fill: c.fill, color: c.color, size: o.csize || 16, line: "D8E2D2" });
    }
  }
}

function table(slide, x, y, w, cols, rows, o) {
  o = o || {};
  const colW = o.colW || cols.map(() => w / cols.length);
  const rowH = o.rowH || 0.36;
  let cx = x;
  cols.forEach((c, j) => {
    slide.addText(c, {
      x: cx, y, w: colW[j], h: rowH, isTextBox: true, margin: 8,
      fontFace: F.body, fontSize: o.hs || 12, bold: true, color: C.white,
      align: j === 0 ? "left" : (o.align || "center"), valign: "middle",
      fill: { color: C.forest },
    });
    cx += colW[j];
  });
  rows.forEach((r, i) => {
    cx = x;
    r.forEach((v, j) => {
      slide.addText(String(v), {
        x: cx, y: y + rowH + i * rowH, w: colW[j], h: rowH, isTextBox: true, margin: 8,
        fontFace: F.body, fontSize: o.bs || 12, color: C.ink,
        align: j === 0 ? "left" : (o.align || "center"), valign: "middle",
        fill: { color: i % 2 ? C.white : C.cream },
      });
      cx += colW[j];
    });
  });
}

function arrow(slide, x, y, w, o) {
  o = o || {};
  slide.addShape("rightArrow", {
    x, y, w, h: o.h || 0.26,
    fill: { color: o.color || C.moss }, line: { color: o.color || C.moss, width: 0 },
  });
}

module.exports = { C, F, M, W, H, titleSlide, sectionSlide, contentSlide, closingSlide,
                   chip, card, cardText, bullets, callout, stat, punnett, table, arrow, footer };
