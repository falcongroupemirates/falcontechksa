// Remembers which Arabic text was written for each English string, so a
// corrected translation can replace the old one on the next import.
import fs from "node:fs";
import path from "node:path";
import { ROOT } from "./strings.mjs";

const FILE = path.join(ROOT, "translations", "ar-applied.json");

export function loadApplied() {
  if (!fs.existsSync(FILE)) return new Map();
  return new Map(Object.entries(JSON.parse(fs.readFileSync(FILE, "utf8"))));
}

export function saveApplied(map) {
  fs.mkdirSync(path.dirname(FILE), { recursive: true });
  const obj = Object.fromEntries([...map].sort((a, b) => a[0].localeCompare(b[0])));
  fs.writeFileSync(FILE, JSON.stringify(obj, null, 1) + "\n");
}
