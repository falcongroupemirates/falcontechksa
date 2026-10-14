// Export every text string of the Arabic site to a CSV for translation / proofreading.
//   Run:  npm run i18n:export
// Output: translations/ar-strings.csv with columns english | arabic | used_in.
//  - Strings already translated (imported earlier) are listed with their current
//    Arabic, so a reviewer can correct them in the same sheet.
//  - Strings still in English have an empty "arabic" cell.
// Edit in Excel, then File > Save As > "CSV UTF-8", then `npm run i18n:import`.

import fs from "node:fs";
import path from "node:path";
import { ROOT, arFiles, parseFile, textNodes, toCsv, fromCsv, norm } from "./strings.mjs";
import { loadApplied } from "./applied.mjs";

const OUT = path.join(ROOT, "translations", "ar-strings.csv");

// english -> arabic currently in the files (from previous imports)
const applied = loadApplied();
const arabicToEnglish = new Map([...applied].map(([en, ar]) => [norm(ar), en]));

// unsaved edits in an existing CSV win over the applied value
const pending = new Map();
if (fs.existsSync(OUT)) {
  const [head, ...rows] = fromCsv(fs.readFileSync(OUT, "utf8"));
  const e = head.indexOf("english"), a = head.indexOf("arabic");
  for (const r of rows) if (r[e] && r[a]) pending.set(norm(r[e]), r[a].trim());
}

const strings = new Map(); // english -> { arabic, files }
for (const file of arFiles()) {
  let ast;
  try { ast = parseFile(fs.readFileSync(file, "utf8")); } catch { console.warn("skip (parse error):", file); continue; }
  for (const { value } of textNodes(ast)) {
    let en = value, ar = "";
    if (arabicToEnglish.has(value)) { en = arabicToEnglish.get(value); ar = applied.get(en); }
    else if (/[؀-ۿ]/.test(value)) continue; // Arabic typed directly into a file
    else if (applied.has(value)) ar = applied.get(value); // e.g. codes kept in Latin ("DWG")
    if (pending.has(en)) ar = pending.get(en);
    if (!strings.has(en)) strings.set(en, { ar, files: new Set() });
    strings.get(en).files.add(path.relative(ROOT, file));
  }
}

const rows = [["english", "arabic", "used_in"]];
const sorted = [...strings].sort((a, b) => [...a[1].files][0].localeCompare([...b[1].files][0]));
for (const [en, { ar, files }] of sorted) rows.push([en, ar, [...files].join(" | ")]);
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, toCsv(rows));
const todo = rows.slice(1).filter((r) => !r[1]).length;
console.log(`${rows.length - 1} strings (${todo} untranslated) -> ${path.relative(ROOT, OUT)}`);
