// ============================================================
// Shared header, nav and footer for every page.
// Edit the nav or footer here once and it updates everywhere.
// (When the site is published, build.js writes these straight into each page.)
// ============================================================

// One line under the logo on every page. Leave "" to hide it.
const TAGLINE = "";

const NAV = [
  { label: "Discography", href: "/" },
  { label: "Composition",            href: "/composition.html" },
  { label: "Drums To Go™",      href: "/drums.html" },
  // Hidden for now. Delete the two slashes at the start of the next line to show it again.
  // { label: "Me",                     href: "/me.html" },
  { label: "Blog",                   href: "https://coolingpie.substack.com/" },
  { label: "Free Stuff",             href: "/free.html" },
];

const FOOTER_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/umareyougonnafinishthat/" },
  { label: "Twitter",   href: "https://twitter.com/coolingpie/" },
  { label: "Substack",  href: "https://coolingpie.substack.com/" },
];

// ---- Nothing below here needs editing ----
function siteHeaderHTML(path) {
  const here = path.replace(/index\.html$/, "");
  const isCurrent = (href) =>
    href === "/" ? here === "/" : here.startsWith(href.replace(/index\.html$/, "").replace(/\.html$/, ""));
  return `
      <a href="/" aria-label="Julian Fader, home">
        <img class="logo" src="/images/logo.jpg" alt="Julian Fader" width="369" height="364"
             onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'logo-text',textContent:'JULIAN FADER'}))">
      </a>
      ${TAGLINE ? `<p class="tagline">${TAGLINE}</p>` : ""}
      <nav class="site-nav" aria-label="Main">
        <ul>
          ${NAV.map(n => `<li><a href="${n.href}"${n.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}${isCurrent(n.href) ? ' aria-current="page"' : ""}>${n.label}</a></li>`).join("")}
        </ul>
      </nav>`;
}

function siteFooterHTML(year) {
  return `
      <p>${FOOTER_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join("")}</p>
      <p>&copy; <span id="year">${year}</span> Julian Fader</p>`;
}

// In the browser: fill in the header and footer if the page wasn't pre-built
// (that's the case when you preview on your own computer).
if (typeof document !== "undefined") (function () {
  const year = new Date().getFullYear();
  const header = document.getElementById("site-header");
  if (header && !header.children.length) {
    header.className = "site-header";
    header.innerHTML = siteHeaderHTML(location.pathname);
  }
  const footer = document.getElementById("site-footer");
  if (footer && !footer.children.length) {
    footer.className = "site-footer";
    footer.innerHTML = siteFooterHTML(year);
  }
  const y = document.getElementById("year");
  if (y) y.textContent = year;   // keeps the copyright year right on pre-built pages
})();
