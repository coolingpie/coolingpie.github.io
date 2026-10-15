// ============================================================
// Shared header, nav and footer for every page.
// Edit the nav or footer here once and it updates everywhere.
// ============================================================

// One line under the logo on every page. Leave "" to hide it.
const TAGLINE = "Producer · Mixer · Drummer · Composer";

const NAV = [
  { label: "Production Discography", href: "/" },
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

(function () {
  const here = location.pathname.replace(/index\.html$/, "");
  const isCurrent = (href) =>
    href === "/" ? here === "/" : here.startsWith(href.replace(/index\.html$/, ""));

  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <a href="/" aria-label="Julian Fader, home">
        <img class="logo" src="/images/logo.jpg" alt="Julian Fader"
             onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'logo-text',textContent:'JULIAN FADER'}))">
      </a>
      ${TAGLINE ? `<p class="tagline">${TAGLINE}</p>` : ""}
      <nav class="site-nav" aria-label="Main">
        <ul>
          ${NAV.map(n => `<li><a href="${n.href}"${n.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}${isCurrent(n.href) ? ' aria-current="page"' : ""}>${n.label}</a></li>`).join("")}
        </ul>
      </nav>`;
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <p>${FOOTER_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join("")}</p>
      <p>&copy; ${new Date().getFullYear()} Julian Fader</p>`;
  }
})();
