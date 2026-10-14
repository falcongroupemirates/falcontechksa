// Write the translator's Arabic text into the Arabic site files.
//   Run:  node scripts/i18n/import-ar.mjs [translations/ar-strings.csv]
// Every occurrence of an English string (in text positions only — never class
// names, links or ids) is replaced with its Arabic translation. Rows with an
// empty "arabic" cell are left as English. Safe to run more than once.

import fs from "node:fs";
import path from "node:path";
import { ROOT, arFiles, parseFile, textNodes, fromCsv, norm } from "./strings.mjs";

const csvPath = path.resolve(ROOT, process.argv[2] || "translations/ar-strings.csv");
const [head, ...rows] = fromCsv(fs.readFileSync(csvPath, "utf8"));
const en = head.indexOf("english"), ar = head.indexOf("arabic");
if (en < 0 || ar < 0) throw new Error('CSV needs "english" and "arabic" columns');

const map = new Map();
for (const r of rows) {
  const from = norm(r[en] || ""), to = (r[ar] || "").trim();
  if (from && to) map.set(from, to);
}

const quoteFor = (raw) => (raw.startsWith("'") ? "'" : '"');

function replacement(hit, src, to) {
  const { node, kind } = hit;
  const raw = src.slice(node.start, node.end);
  if (kind === "jsx") {
    const lead = raw.match(/^\s*/)[0], trail = raw.match(/\s*$/)[0];
    const safe = /[{}<>]/.test(to) ? `{${JSON.stringify(to)}}` : to;
    return lead + safe + trail;
  }
  if (kind === "attr") {
    return to.includes('"') ? `{${JSON.stringify(to)}}` : `"${to}"`;
  }
  if (kind === "template") {
    const lead = (node.value.cooked.match(/^\s*/) || [""])[0];
    const trail = (node.value.cooked.match(/\s*$/) || [""])[0];
    return (lead + to + trail).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
  }
  // string literal: keep the original quote style
  const q = quoteFor(raw);
  const body = to.replace(/\\/g, "\\\\").replace(new RegExp(q, "g"), "\\" + q).replace(/\n/g, "\\n");
  return q + body + q;
}

let files = 0, replaced = 0;
for (const file of arFiles()) {
  const src = fs.readFileSync(file, "utf8");
  let ast;
  try { ast = parseFile(src); } catch { continue; }
  const hits = [];
  for (const hit of textNodes(ast)) {
    const to = map.get(hit.value);
    if (to) hits.push({ ...hit, to });
  }
  if (!hits.length) continue;
  let out = src;
  for (const h of hits.sort((a, b) => b.node.start - a.node.start)) {
    out = out.slice(0, h.node.start) + replacement(h, src, h.to) + out.slice(h.node.end);
  }
  fs.writeFileSync(file, out);
  files++; replaced += hits.length;
}
console.log(`Replaced ${replaced} strings in ${files} files (${map.size} translations loaded).`);
