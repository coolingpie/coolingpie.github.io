// ============================================================
// Builds the published site into _site/.
//
// GitHub runs this automatically every time you commit
// (see .github/workflows/deploy.yml). You never need to run it yourself.
//
// What it does: copies the site, and writes the header, footer and
// record grid straight into each page, so search engines and link
// previews can read them without running any JavaScript.
//
// To try it on your own computer:  node build.js
// ============================================================

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const OUT = path.join(ROOT, "_site");

// Everything that gets published, besides the .html pages in this folder.
const COPY = ["assets", "images", "audio", "videos", "CNAME", "robots.txt", "sitemap.xml", ".nojekyll"];

// Load the same two files the browser uses, so there is one source of truth.
const site = vm.createContext({});
for (const file of ["assets/site.js", "assets/records.js"]) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), "utf8"), site, { filename: file });
}
const records = vm.runInContext("RECORDS", site);

// Swap an empty placeholder tag for a filled-in one. Stops the build if the placeholder is missing.
function fill(html, placeholder, filled, page) {
  if (!html.includes(placeholder)) throw new Error(`${page}: couldn't find ${placeholder}`);
  return html.replace(placeholder, () => filled);
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT);
for (const item of COPY) {
  const from = path.join(ROOT, item);
  if (fs.existsSync(from)) fs.cpSync(from, path.join(OUT, item), { recursive: true });
}

const year = new Date().getFullYear();
const pages = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));
for (const page of pages) {
  let html = fs.readFileSync(path.join(ROOT, page), "utf8");
  const url = page === "index.html" ? "/" : "/" + page;

  html = fill(html, '<header id="site-header"></header>',
    `<header id="site-header" class="site-header">${site.siteHeaderHTML(url)}\n</header>`, page);
  html = fill(html, '<footer id="site-footer"></footer>',
    `<footer id="site-footer" class="site-footer">${site.siteFooterHTML(year)}\n</footer>`, page);
  if (page === "index.html") {
    html = fill(html, '<div class="records" id="records"></div>',
      `<div class="records" id="records">${site.recordsHTML()}\n  </div>`, page);
  }
  fs.writeFileSync(path.join(OUT, page), html);
}

// Friendly checks. These show up as warnings on GitHub but don't block publishing.
let warnings = 0;
const warn = (msg) => { warnings++; console.log(`::warning::${msg}`); };
records.forEach((r, i) => {
  const name = `${r.artist || "?"}, ${r.title || "?"}`;
  for (const key of ["artist", "title", "year", "cover"]) {
    if (!r[key]) warn(`Record ${i + 1} (${name}) is missing "${key}"`);
  }
  if (r.cover && !/^https?:/.test(r.cover) && !fs.existsSync(path.join(ROOT, "images/covers", r.cover))) {
    warn(`Record ${i + 1} (${name}): no file named images/covers/${r.cover}`);
  }
  if (r.bandcamp && !/^[at]\d+$/.test(r.bandcamp)) {
    warn(`Record ${i + 1} (${name}): bandcamp ID "${r.bandcamp}" should be "a" or "t" followed by numbers`);
  }
});

console.log(`Built ${pages.length} pages with ${records.length} records into _site/` + (warnings ? ` (${warnings} warnings)` : ""));
