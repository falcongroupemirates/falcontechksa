// Export every English placeholder string in the Arabic site to a CSV for the
// translator.   Run:  node scripts/i18n/export-ar.mjs
// Output: translations/ar-strings.csv  (open in Excel, fill the "arabic" column,
// then File > Save As > "CSV UTF-8").  Already-translated strings are skipped.

import fs from "node:fs";
import path from "node:path";
import { ROOT, arFiles, parseFile, textNodes, toCsv, fromCsv } from "./strings.mjs";

const OUT = path.join(ROOT, "translations", "ar-strings.csv");
const hasArabic = (s) => /[؀-ۿ]/.test(s);

// keep translations already filled in a previous export
const existing = new Map();
if (fs.existsSync(OUT)) {
  const [head, ...rows] = fromCsv(fs.readFileSync(OUT, "utf8"));
  const en = head.indexOf("english"), ar = head.indexOf("arabic");
  for (const r of rows) if (r[en] && r[ar]) existing.set(r[en], r[ar]);
}

const strings = new Map(); // english -> Set(files)
for (const file of arFiles()) {
  const src = fs.readFileSync(file, "utf8");
  let ast;
  try { ast = parseFile(src); } catch (e) { console.warn("skip (parse error):", file); continue; }
  for (const { value } of textNodes(ast)) {
    const v = value.trim();
    if (hasArabic(v)) continue; // already translated
    if (!strings.has(v)) strings.set(v, new Set());
    strings.get(v).add(path.relative(ROOT, file));
  }
}

const rows = [["english", "arabic", "used_in"]];
for (const [en, files] of [...strings].sort((a, b) => [...a[1]][0].localeCompare([...b[1]][0]))) {
  rows.push([en, existing.get(en) || "", [...files].join(" | ")]);
}
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, toCsv(rows));
console.log(`${rows.length - 1} strings to translate -> ${path.relative(ROOT, OUT)}`);
