// Shared logic for the Arabic translation workflow.
// Finds every piece of visible text in the Arabic files (app/ar, components/ar,
// data/ar) and can replace it with a translation — without touching class
// names, links, image paths, ids or other code strings.

import fs from "node:fs";
import path from "node:path";
import { parse } from "@babel/parser";

export const ROOT = process.cwd();
export const AR_DIRS = ["app/ar", "components/ar", "data/ar"];

// JSX attributes whose values are code, not text
const SKIP_ATTRS = new Set([
  "className", "href", "src", "srcSet", "id", "key", "type", "rel", "target", "sizes",
  "style", "variant", "dir", "lang", "hrefLang", "role", "name", "htmlFor", "autoComplete",
  "inputMode", "method", "action", "as", "fill", "loading", "preload", "layoutId", "viewBox",
  "d", "xmlns", "fetchPriority", "accept", "pattern", "encType", "form", "value", "mode",
  "strokeWidth", "stroke", "points", "transform", "aria-hidden", "decoding", "referrerPolicy",
  "allow", "frameBorder", "allowFullScreen", "width", "height", "x", "y", "color", "bg",
]);

// Object keys whose values are code, not text
const SKIP_KEYS = new Set([
  "id", "slug", "href", "src", "image", "thumb", "avatar", "icon", "className", "variant",
  "type", "key", "code", "ctaHref", "url", "file", "color", "layoutId", "canonical", "locale",
  "@context", "@type", "access", "category_id", "ease", "mode", "sizes", "clipPath",
  "backgroundImage", "backgroundSize", "maskImage", "left", "right", "top", "bottom",
  "en", "ar", "x-default", "accept", "format", "target", "rel",
]);

const CLASS_TOKEN = /^[!-]?[a-z0-9\[][a-zA-Z0-9@\[\]&:/.%_()#,=>*'-]*$/;

export function isText(value) {
  const v = value.trim();
  if (!v || !/[A-Za-z]/.test(v)) return false;
  if (/^(\/|#|https?:|mailto:|tel:|@\/|\.\.?\/|wa\.me)/.test(v)) return false;
  if (/^[a-z_][A-Za-z0-9_.-]*$/.test(v)) return false; // identifiers: "success", "easeOut", "_blank"
  if (/^\\/.test(v)) return false; // escape sequences
  if (v === "noopener noreferrer") return false;
  if (/^[^\s@]+@[^\s@]+\.[a-z]+$/i.test(v)) return false; // email
  if (/\.(png|jpe?g|webp|svg|gif|pdf|mp4|woff2?)$/i.test(v)) return false;
  if (/^(polygon|radial-gradient|linear-gradient|rgba?|url|calc|var)\(/.test(v)) return false;
  const tokens = v.split(/\s+/);
  if (tokens.every((t) => CLASS_TOKEN.test(t)) && tokens.some((t) => /[-:]/.test(t))) return false; // class list
  return true;
}

function attrName(n) {
  return n.name.type === "JSXNamespacedName" ? `${n.name.namespace.name}:${n.name.name.name}` : n.name.name;
}

function keyName(n) {
  if (n.computed) return null;
  if (n.key.type === "Identifier") return n.key.name;
  if (n.key.type === "StringLiteral") return n.key.value;
  return null;
}

// Whitespace-insensitive form used as the CSV key
export const norm = (s) => s.trim().replace(/\s+/g, " ");

// Walk the AST and yield { node, kind, value } for every translatable string.
export function* textNodes(ast) {
  function* walk(node, ancestors) {
    if (!node || typeof node.type !== "string") return;
    const parent = ancestors[ancestors.length - 1];

    if (node.type === "ImportDeclaration" || node.type === "ExportAllDeclaration" ||
        node.type === "ExportNamedDeclaration" && node.source) return;
    if (node.type === "JSXAttribute" && SKIP_ATTRS.has(attrName(node))) return;
    // inline <style> / <script> contents are code
    if (node.type === "JSXElement" && ["style", "script"].includes(node.openingElement.name.name)) return;
    if (node.type === "ObjectProperty" && SKIP_KEYS.has(keyName(node))) {
      return; // whole value is code
    }
    if (node.type === "CallExpression") {
      const c = node.callee;
      const name = c.type === "Identifier" ? c.name
        : c.type === "MemberExpression" && c.object.type === "Identifier" ? c.object.name : "";
      if (["fetch", "require", "console", "URL"].includes(name)) return;
    }

    if (node.type === "JSXText") {
      if (isText(node.value)) yield { node, kind: "jsx", value: norm(node.value) };
      return;
    }
    if (node.type === "StringLiteral") {
      // object keys are not text
      if (parent && parent.type === "ObjectProperty" && parent.key === node) return;
      if (parent && parent.type === "MemberExpression" && parent.property === node) return;
      if (isText(node.value)) {
        const inAttr = parent && parent.type === "JSXAttribute";
        yield { node, kind: inAttr ? "attr" : "string", value: norm(node.value) };
      }
      return;
    }
    if (node.type === "TemplateElement") {
      const v = node.value.cooked ?? "";
      if (isText(v)) yield { node, kind: "template", value: norm(v) };
      return;
    }

    for (const key of Object.keys(node)) {
      if (key === "loc" || key === "start" || key === "end" || key === "extra" ||
          key === "leadingComments" || key === "trailingComments" || key === "innerComments") continue;
      const child = node[key];
      if (Array.isArray(child)) {
        for (const c of child) yield* walk(c, [...ancestors, node]);
      } else if (child && typeof child.type === "string") {
        // ObjectProperty: only descend into the value
        if (node.type === "ObjectProperty" && key === "key") continue;
        yield* walk(child, [...ancestors, node]);
      }
    }
  }
  yield* walk(ast.program, []);
}

export function parseFile(src) {
  return parse(src, { sourceType: "module", plugins: ["jsx"] });
}

export function arFiles() {
  const out = [];
  const visit = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) visit(p);
      else if (/\.(jsx?|mjs)$/.test(e.name)) out.push(p);
    }
  };
  for (const d of AR_DIRS) visit(path.join(ROOT, d));
  return out.sort();
}

// ---------------------------------------------------------------- CSV
export function toCsv(rows) {
  const esc = (v) => {
    const s = String(v ?? "");
    return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return "﻿" + rows.map((r) => r.map(esc).join(",")).join("\r\n") + "\r\n";
}

export function fromCsv(text) {
  text = text.replace(/^﻿/, "");
  const rows = [];
  let row = [], field = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') q = false;
      else field += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field.replace(/\r$/, "")); rows.push(row); row = []; field = ""; }
    else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}
