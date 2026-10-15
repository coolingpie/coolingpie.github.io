// Builds an album page from the matching entry in records.js.
// Nothing here needs editing; change records.js instead.
(function () {
  const box = document.getElementById("album");
  const slug = new URLSearchParams(location.search).get("r");
  const i = RECORDS.findIndex(r => slugOf(r) === slug);
  const r = RECORDS[i];

  if (!r) {
    box.innerHTML = `<p>Couldn't find that record. <a href="/">Back to the discography</a></p>`;
    return;
  }
  document.title = `${r.artist}, ${r.title} | Julian Fader`;

  const spotifyEmbed = (url) => {
    const m = String(url).match(/open\.spotify\.com\/(album|playlist|track)\/([A-Za-z0-9]+)/);
    return m ? `https://open.spotify.com/embed/${m[1]}/${m[2]}` : "";
  };
  const button = (url, label) => url
    ? `<a class="button button-outline" href="${esc(url)}" target="_blank" rel="noopener">${label}</a>` : "";

  // Previous / next among records that have pages
  const withPages = RECORDS.filter(hasPage);
  const j = withPages.indexOf(r);
  const prev = withPages[j - 1], next = withPages[j + 1];
  const navLink = (x, dir) => x
    ? `<a href="/album.html?r=${encodeURIComponent(slugOf(x))}">${dir === "prev" ? "&larr; " : ""}${esc(x.artist)}, ${esc(x.title)}${dir === "next" ? " &rarr;" : ""}</a>`
    : "<span></span>";

  const embed = r.spotify && spotifyEmbed(r.spotify);

  box.innerHTML = `
    <p class="album-back"><a href="/">&larr; Production Discography</a></p>
    <article class="album">
      <img class="album-cover" src="/images/covers/${esc(r.cover)}" alt="${esc(r.artist)}, ${esc(r.title)} cover">
      <div class="album-info">
        <p class="album-artist">${esc(r.artist)}</p>
        <h1 class="album-title">${esc(r.title)}</h1>
        <p class="album-meta">${esc(r.year)}${r.label ? ` &middot; ${esc(r.label)}` : ""}</p>
        ${r.role ? `<p class="album-role">${esc(r.role)}</p>` : ""}
        ${r.notes ? `<p>${esc(r.notes)}</p>` : ""}
        ${r.credits ? `<p class="album-credits">${esc(r.credits)}</p>` : ""}
        <div class="album-buttons">
          ${button(r.bandcamp, "Bandcamp")}${button(r.spotify, "Spotify")}${button(r.apple, "Apple Music")}${button(!hasPage(r) ? "" : r.link, "Listen")}
        </div>
      </div>
    </article>
    ${embed ? `<iframe class="album-player" src="${embed}" title="Listen on Spotify" loading="lazy" allow="encrypted-media"></iframe>` : ""}
    <nav class="album-nav" aria-label="More records">${navLink(prev, "prev")}${navLink(next, "next")}</nav>`;
})();
