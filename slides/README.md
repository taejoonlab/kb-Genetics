# slides/ — lecture deck build system for BME333 / BIO333

This folder holds the **scripts** that generate the lecture decks, not the decks
themselves. The `.pptx` files are build outputs and are gitignored — run the
scripts to produce them.

Keeping the generator in the repo is the point: it means lecture 17's deck comes
out looking like lecture 03's without anyone having to remember the palette.

## Files

| Path | What it is |
|---|---|
| `src/theme.js` | Shared palette, type scale and layout helpers — title/section/content/closing slides, cards, callouts, chips, Punnett squares, tables, stat blocks. Change a colour here and every deck follows. |
| `src/lecNN.js` | One script per lecture. Content only; all geometry comes from `theme.js`. |
| `BME333_LecNN_*.pptx` | Build output. Gitignored. |

## Building

```bash
npm install pptxgenjs      # once
node src/lec03.js          # writes BME333_Lec03_Mendel-Principles.pptx
node src/lec04.js
```

Each script writes to the path in its final `writeFile` call — adjust if you move things.

## Conventions

- **Canvas** `LAYOUT_WIDE` (13.333 × 7.5 in). Page margin 0.65 in, footer at the foot.
  Coordinates past the canvas edge are written, not clamped, so a shape simply
  vanishes — keep the margin arithmetic honest.
- **Palette** forest `2C5F2D` dominant, moss `97BC62` supporting, terracotta
  `B85042` as the single accent for exceptions, caution and key numbers. Dark
  slides (`1B3A1C`) open and close each deck and mark section breaks.
- **Type** Cambria for headings, Calibri for body — both ship with Office and
  render true-to-width under LibreOffice, so overflow checks in the PDF preview
  are trustworthy. Avoid Aptos; it has no metric-compatible substitute.
- **Motif** the rounded allele "chip". Used for genotypes, Punnett cells, gamete
  symbols and numbered list markers. It is what makes the decks read as one course.
- **Speaker notes** every slide carries a minute budget plus what to ask the class
  and where to pause. Written with `slide.addNotes()`, never as a text box.
- **Slide language** English; speaker notes assume a Korean-speaking instructor.

## Writing a new lecture deck

1. Read the vault note first — `en/lectures/lecNN_*.md`. The deck should use the
   same objectives, the same worked numbers, the same allele symbols and the same
   discussion questions. Diverging from the note is how the two drift apart.
2. Pull the recent papers from `lectures/2026.Recent-Papers.md`.
3. Copy the nearest existing `src/lecNN.js` and replace the slide blocks. Each
   block is delimited by a `// ----- N name` comment so blocks can be moved or
   swapped without hunting for braces.
4. Build, then run the checks below. The first render always has a few real
   defects — overflow, overlap, crowding.

## Checks before using a deck

```bash
python <pptx-skill>/scripts/office/validate.py deck.pptx     # schema + relationships
markitdown deck.pptx | grep -iE "lorem|ipsum|TODO|\[insert" # leftover placeholders
soffice --headless --convert-to pdf deck.pptx
pdftoppm -jpeg -r 110 deck.pdf s                             # then LOOK at every s-NN.jpg
```

The validator checks the file, not the layout. Text overflow, colliding boxes and
labels sitting on top of a chart line are only visible in the rendered images.
