"""Generate Arabic (RTL) copies of English pages/components.

Usage (from the project root):
  python3 scripts/i18n/generate-ar.py app/services/new-page/page.jsx components/home/NewSection.jsx
      -> creates the Arabic copy of just those files (and of any component/data
         file they import that has no Arabic copy yet). Existing Arabic files
         are NOT overwritten unless you add --force.
  python3 scripts/i18n/generate-ar.py --all --force
      -> regenerates the whole Arabic site from English (overwrites any
         translations already imported — only for a fresh start).

After generating, run `npm run i18n:export` to get the new strings to translate.


  app/<route>/page.jsx      -> app/ar/<route>/page.jsx
  components/<x>/<Y>.jsx    -> components/ar/<x>/<Y>.jsx   (only those reachable)
  data/<x>.js               -> data/ar/<x>.js              (only those reachable)

Each copy: internal links get the /ar prefix, physical Tailwind utilities become
logical (ml->ms, left->start, text-left->text-start, ...), directional icons and
gradients are mirrored, hover nudges / motion x offsets are inverted.
Copy (text) is left as the English placeholder for the translator.
"""
import os, re, sys, json

ARGS = [a for a in sys.argv[1:] if not a.startswith("--")]
FORCE = "--force" in sys.argv
ALL = "--all" in sys.argv
ROOT = os.getcwd()
APP, COMP, DATA = (os.path.join(ROOT, d) for d in ("app", "components", "data"))

ROUTE_ROOTS = ("about-us", "contact-us", "request-a-quote", "services", "projects", "gallery",
               "industries", "technical-library", "blog", "engineering", "products", "quality-standards")
SKIP_COMPONENTS = {"providers/ThemeProvider.jsx"}
CHROME = ["common/Header.jsx", "common/Footer.jsx", "common/QuickContact.jsx", "common/ScrollToTop.jsx"]

HEADER = ("// ARABIC (RTL) VERSION — generated from the English file of the same path.\n"
          "// Text is still the English placeholder: replace each English string with Arabic.\n"
          "// Layout is already right-to-left. Keep links starting with /ar.\n")


# ------------------------------------------------------------------ discovery
def pages():
    out = []
    for d, _, files in os.walk(APP):
        rel = os.path.relpath(d, APP)
        if rel.split(os.sep)[0] in ("api", "ar"):
            continue
        for f in files:
            if f in ("page.jsx", "page.js") or (f == "layout.jsx" and rel != "."):
                out.append(os.path.normpath(os.path.join(rel, f)))
    return sorted(out)


IMPORT_RE = re.compile(r'''from\s+["'](@/components/[^"']+|@/data/[^"']+|\./[^"']+|\.\./[^"']+)["']''')


def resolve(spec, from_dir):
    """Return ('components'|'data', relpath) for an import spec, else None."""
    if spec.startswith("@/components/"):
        base, rel = COMP, spec[len("@/components/"):]
    elif spec.startswith("@/data/"):
        base, rel = DATA, spec[len("@/data/"):]
    else:
        p = os.path.normpath(os.path.join(from_dir, spec))
        for base in (COMP, DATA):
            if p.startswith(base + os.sep):
                rel = os.path.relpath(p, base)
                break
        else:
            return None
    for ext in ("", ".jsx", ".js"):
        if os.path.isfile(os.path.join(base, rel + ext)):
            return ("components" if base == COMP else "data", rel + ext)
    return None


def reachable(entry_files):
    seen, stack = set(), list(entry_files)
    while stack:
        path = stack.pop()
        src = open(path).read()
        for spec in IMPORT_RE.findall(src):
            r = resolve(spec, os.path.dirname(path))
            if not r or r in seen:
                continue
            if r[0] == "components" and r[1] in SKIP_COMPONENTS:
                continue
            seen.add(r)
            stack.append(os.path.join(COMP if r[0] == "components" else DATA, r[1]))
    return seen


# ------------------------------------------------------------------ transforms
def strip_ext(p):
    return re.sub(r"\.(jsx|js)$", "", p)


def remap_imports(src, copied):
    def fix(m):
        spec = m.group(1)
        if spec.startswith("@/components/"):
            rel = spec[len("@/components/"):]
            r = resolve(spec, COMP)
            if r and r in copied:
                return m.group(0).replace(spec, "@/components/ar/" + rel)
        if spec.startswith("@/data/"):
            r = resolve(spec, DATA)
            if r and r in copied:
                return m.group(0).replace(spec, "@/data/ar/" + spec[len("@/data/"):])
        return m.group(0)  # relative imports keep working inside the mirrored folder
    return IMPORT_RE.sub(fix, src)


ROUTE_RE = re.compile(r'''(["'`])/(?:(%s)(?=[/"'`#?$])|(?=["'`]))''' % "|".join(ROUTE_ROOTS))


def prefix_links(src):
    out = []
    for line in src.split("\n"):
        if line.lstrip().startswith("import "):
            out.append(line)
            continue
        # "/" alone -> "/ar" ; "/services/..." -> "/ar/services/..."
        line = re.sub(r'''(["'`])/(["'`])''', lambda m: f"{m.group(1)}/ar{m.group(2)}"
                      if m.group(1) == m.group(2) else m.group(0), line)
        line = re.sub(r'''(["'`])/(%s)(?=[/"'`#?$])''' % "|".join(ROUTE_ROOTS),
                      lambda m: f"{m.group(1)}/ar/{m.group(2)}", line)
        out.append(line)
    return "\n".join(out)


VAL = r"(?:\d+(?:\.\d+)?|\d+/\d+|px|full|auto|\[[^\]\s]+\])"
TOKEN = re.compile(r'''(?<![\w\-\[\]:/.!#])((?:[\w\-\[\]&@.*=/!>()]+:)*)(!?)(-?)([a-z][\w\-./\[\]%#]*)(?![\w\-\[\]/%])''')
SWAP_SIDE = {"l": "s", "r": "e", "tl": "ss", "tr": "se", "bl": "es", "br": "ee"}


def map_core(variants, core, neg):
    m = re.fullmatch(r"(m|p)(l|r)-(" + VAL + ")", core)
    if m:
        return neg + m.group(1) + {"l": "s", "r": "e"}[m.group(2)] + "-" + m.group(3)
    m = re.fullmatch(r"(left|right)-(" + VAL + ")", core)
    if m and m.group(2) != "1/2":
        return neg + {"left": "start", "right": "end"}[m.group(1)] + "-" + m.group(2)
    if core in ("text-left", "text-right"):
        return neg + core.replace("left", "start").replace("right", "end")
    if core in ("float-left", "float-right"):
        return neg + core.replace("left", "start").replace("right", "end")
    m = re.fullmatch(r"border-(l|r)(-.+)?", core)
    if m:
        return neg + "border-" + {"l": "s", "r": "e"}[m.group(1)] + (m.group(2) or "")
    m = re.fullmatch(r"rounded-(tl|tr|bl|br|l|r)(-.+)?", core)
    if m:
        return neg + "rounded-" + SWAP_SIDE[m.group(1)] + (m.group(2) or "")
    m = re.fullmatch(r"bg-(linear|gradient)-to-(r|l|tr|tl|br|bl)", core)
    if m:
        d = m.group(2).translate(str.maketrans("rl", "lr"))
        return neg + f"bg-{m.group(1)}-to-{d}"
    m = re.fullmatch(r"origin-(left|right|top-left|top-right|bottom-left|bottom-right)", core)
    if m:
        d = m.group(1)
        d = d.replace("left", "#").replace("right", "left").replace("#", "right")
        return neg + "origin-" + d
    m = re.fullmatch(r"translate-x-(" + VAL + ")", core)
    if m and re.search(r"(hover|focus|group-|peer-)", variants):
        return ("" if neg else "-") + core
    return None


def logical_classes(src):
    def fix(m):
        variants, bang, neg, core = m.groups()
        new = map_core(variants, core, neg)
        if new is None:
            return m.group(0)
        return variants + bang + new
    return TOKEN.sub(fix, src)


ICON_SWAP = {"ArrowLeft": "ArrowRight", "ArrowRight": "ArrowLeft", "ChevronLeft": "ChevronRight",
             "ChevronRight": "ChevronLeft", "ArrowUpRight": "ArrowUpLeft", "ArrowDownRight": "ArrowDownLeft",
             "ArrowUpLeft": "ArrowUpRight", "ArrowDownLeft": "ArrowDownRight"}


def mirror_icons(src):
    src = re.sub(r"\b(%s)\b" % "|".join(ICON_SWAP), lambda m: ICON_SWAP[m.group(1)], src)
    # A rotated arrow mirrors as the swapped icon rotated the other way.
    def unrotate(m):
        return re.sub(r"(?<![\w-])(-?)rotate-(\d+)", lambda r: ("" if r.group(1) else "-") + "rotate-" + r.group(2), m.group(0))
    return re.sub(r"<(?:%s)\b[^>]*>" % "|".join(ICON_SWAP), unrotate, src)


def mirror_motion(src):
    src = re.sub(r'\bx: (-?)(\d+(?:\.\d+)?)\b', lambda m: "x: " + ("" if m.group(1) else "-") + m.group(2)
                 if m.group(2) not in ("0",) else m.group(0), src)
    src = re.sub(r'\bx: "(-?)(\d+%)"', lambda m: 'x: "' + ("" if m.group(1) else "-") + m.group(2) + '"', src)
    # clip-path polygons and radial-gradient centres: x -> 100% - x
    def flip_poly(m):
        pts = []
        for pt in m.group(1).split(","):
            x, y = pt.split()
            xv = float(x.rstrip("%"))
            pts.append(f"{100 - xv:g}% {y}")
        return "polygon(" + ", ".join(pts) + ")"
    src = re.sub(r"polygon\(([^)]*)\)", flip_poly, src)
    src = re.sub(r"\bat (\d+(?:\.\d+)?)% ", lambda m: f"at {100 - float(m.group(1)):g}% ", src)
    # inline style offsets
    src = re.sub(r'style=\{\{ (left|right): ', lambda m: "style={{ " + ("right" if m.group(1) == "left" else "left") + ": ", src)
    return src


def add_alternates(src, route):
    en = "/" + route if route else "/"
    ar = "/ar" + ("/" + route if route else "")
    alt = (f'  alternates: {{\n    canonical: "{ar}",\n    languages: {{ en: "{en}", ar: "{ar}", "x-default": "{en}" }},\n  }},\n')
    if "export const metadata = {" in src:
        return src.replace("export const metadata = {\n", "export const metadata = {\n" + alt, 1)
    return src


def with_header(src):
    if src.startswith('"use client"'):
        first, rest = src.split("\n", 1)
        return first + "\n\n" + HEADER + rest
    return HEADER + "\n" + src


def transform(src, copied, route=None):
    src = remap_imports(src, copied)
    src = prefix_links(src)
    src = logical_classes(src)
    src = mirror_icons(src)
    src = mirror_motion(src)
    if route is not None:
        src = add_alternates(src, route)
    return with_header(src)


# ------------------------------------------------------------------ special cases
def special(relpath, src):
    # phone numbers / emails always read left-to-right
    src = re.sub(r'(\s)href="(tel|mailto):', r'\1dir="ltr"\1href="\2:', src)
    if relpath == "components/gallery/GalleryExplorer.jsx":
        # Translated category names must not change the image file names.
        cats = re.search(r"const CATEGORIES = \[\n(.*?)\n\];", src, re.S)
        items = re.findall(r'"([^"]+)"', cats.group(1))
        new = ("// `key` builds the image file name — keep it in English.\n"
               "// `label` is what visitors see — translate it.\n"
               "const CATEGORY_LIST = [\n"
               + "".join(f'  {{ key: "{i}", label: "{i}" }},\n' for i in items)
               + "];\n\nconst CATEGORIES = CATEGORY_LIST.map((c) => c.label);")
        src = src.replace(cats.group(0), new)
        a = "const GALLERY = CATEGORIES.flatMap((category) => {\n  const s = slug(category);"
        assert a in src
        src = src.replace(a, "const GALLERY = CATEGORY_LIST.flatMap(({ key, label: category }) => {\n  const s = slug(key);")
    if relpath == "components/contact/ContactInfoSection.jsx":
        src = src.replace("{item.value}", "<bdi>{item.value}</bdi>")
    if relpath == "components/home/ServicesSection.jsx":
        # The auto-scroll marquee works in LTR scroll coordinates; keep the track
        # LTR and set each card back to RTL.
        src = src.replace('onMouseLeave={() => (pausedRef.current = false)}\n      className="flex cursor-grab',
                          'onMouseLeave={() => (pausedRef.current = false)}\n      dir="ltr"\n      className="flex cursor-grab')
        src = src.replace("draggable={false}\n", 'draggable={false}\n                      dir="rtl"\n', 1)
    if relpath == "components/common/Header.jsx":
        src = src.replace("<header\n", '<header\n        lang="ar"\n        dir="rtl"\n', 1)
    if relpath == "components/common/Footer.jsx":
        src = re.sub(r"<footer\b", '<footer lang="ar" dir="rtl"', src, count=1)
    return src


# ------------------------------------------------------------------ run
def main():
    pg = pages()
    entries = [os.path.join(APP, p) for p in pg] + [os.path.join(COMP, c) for c in CHROME]
    everything = reachable(entries) | {("components", c) for c in CHROME}
    if not ALL and not ARGS:
        print(__doc__)
        return
    wanted_pages = pg if ALL else [os.path.relpath(a, "app") for a in ARGS if a.startswith("app/")]
    wanted_comp = everything if ALL else (
        {("components", os.path.relpath(a, "components")) for a in ARGS if a.startswith("components/")}
        | {("data", os.path.relpath(a, "data")) for a in ARGS if a.startswith("data/")}
        | reachable([os.path.join(ROOT, a) for a in ARGS]))
    written = []
    def write(dst, out):
        if os.path.exists(dst) and not FORCE:
            return
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        open(dst, "w").write(out)
        written.append(os.path.relpath(dst, ROOT))
    for kind, rel in sorted(wanted_comp):
        base = COMP if kind == "components" else DATA
        src = open(os.path.join(base, rel)).read()
        write(os.path.join(base, "ar", rel), special(f"{kind}/{rel}", transform(src, everything)))
    for p in wanted_pages:
        src = open(os.path.join(APP, p)).read()
        route = os.path.dirname(p).replace(os.sep, "/")
        route = "" if route == "." else route
        is_page = os.path.basename(p).startswith("page.")
        out = transform(src, everything, route if is_page else None)
        if p == os.path.join("technical-library", "[category]", "page.jsx"):
            out = out.replace("""    description: cat.description,
  };""", """    description: cat.description,
    alternates: {
      canonical: `/ar/technical-library/${category}`,
      languages: {
        en: `/technical-library/${category}`,
        ar: `/ar/technical-library/${category}`,
        "x-default": `/technical-library/${category}`,
      },
    },
  };""")
        write(os.path.join(APP, "ar", p), out)
    for w in written:
        print("wrote", w)
    print(len(written), "Arabic files written" + ("" if FORCE else " (existing files kept)"))


main()
