// ============================================================
// YOUR DISCOGRAPHY  (newest first)
// To add a record, copy a line and edit it.
//
// Required:
//   artist, title, year
//   cover:    image filename in images/covers/
//
// Optional:
//   credit:   your role codes, shown after the title, e.g. "P/R/M"
//             P = Produced, R = Recorded, M = Mixed, D = Drummed, Ma = Mastered
//             (the key above the grid is in index.html)
//   bandcamp: Bandcamp album ID. Clicking the cover opens a Bandcamp player.
//             (Claude can look these up for you.)
//   link:     if there's no bandcamp ID, where the cover goes when clicked
//             (Spotify, a label page...). Leave "" for no link.
//   notes:    your old Squarespace write-up, kept for reference.
//             Not shown on the site.
// ============================================================

const RECORDS = [
  { artist: "Remember Sports", title: "The Refrigerator", year: "2026", cover: "remember-sports-the-refrigerator-2026.jpg", credit: "P/R/M", link: "", bandcamp: "526053519" },
  { artist: "youbet", title: "youbet", year: "2026", cover: "youbet-youbet-2026.jpg", credit: "P/R/M", link: "" },
  { artist: "Gemma", title: "Be About It", year: "2026", cover: "gemma-be-about-it-2026.jpg", credit: "M", link: "" },
  { artist: "Ava Luna", title: "Ava Luna", year: "2025", cover: "ava-luna-ava-luna-2025.jpg", credit: "D", link: "" },
  { artist: "Lane", title: "Receiver", year: "2025", cover: "lane-receiver-2025.jpg", credit: "M/D", link: "" },
  { artist: "People Person Puzzle Tree", title: "Live In The Emerald Necklace", year: "2025", cover: "people-person-puzzle-tree-live-in-the-emerald-necklace-2025.jpg", credit: "R/M", link: "" },
  { artist: "Ben Special", title: "Booya", year: "2024", cover: "ben-special-booya-2024.jpg", credit: "M", link: "",
    notes: "Mixed by Julian @ Buddy’s Palace" },
  { artist: "Nora Roy", title: "No Steppy Snik", year: "2024", cover: "nora-roy-no-steppy-snik-2024.jpg", credit: "P/M", link: "",
    notes: "Produced and mixed by moi" },
  { artist: "Dolly", title: "Process", year: "2023", cover: "dolly-process-2023.jpg", credit: "P/M/D", link: "",
    notes: "Drums and production and mix by Julian and Carlos @ Honey Jar" },
  { artist: "youbet", title: "Carsick", year: "2023", cover: "youbet-carsick-2023.jpg", credit: "R/D", link: "",
    notes: "Drums recorded at Honey Jar" },
  { artist: "Zoomdweeby", title: "War Of The Ants", year: "2023", cover: "zoomdweeby-war-of-the-ants-2023.jpg", credit: "P", link: "",
    notes: "Produced by Julian + Victor at Honey Jar and various apts in Brooklyn and Boston" },
  { artist: "Goo", title: "Squid Ink Sky", year: "2023", cover: "goo-squid-ink-sky-2023.jpg", credit: "P/M", link: "",
    notes: "Produced and mixed by Julian @ Honey Jar in Brooklyn" },
  { artist: "Krill", title: "Alam No Hris (10th Anniversary Reissue)", year: "2022", cover: "krill-alam-no-hris-10th-anniversary-reissue-2022.jpg", credit: "Ma", link: "",
    notes: "Mastered by me" },
  { artist: "Blanky", title: "Blood Harmony", year: "2022", cover: "blanky-blood-harmony-2022.jpg", credit: "M", link: "",
    notes: "Mixed by me" },
  { artist: "Goo", title: "Winter Is Over", year: "2021", cover: "goo-winter-is-over-2021.jpg", credit: "R/M", link: "" },
  { artist: "Remember Sports", title: "Like A Stone", year: "2021", cover: "remember-sports-like-a-stone-2021.jpg", credit: "R/M", link: "",
    notes: "Recorded and mixed by Julian and Carlos at the Honey Jar" },
  { artist: "Anna Fox Rochinski", title: "Cherry", year: "2021", cover: "anna-fox-rochinski-cherry-2021.jpg", credit: "P/R/D", link: "",
    notes: "Produced and recorded by Carlos and I at Honey Jar Studios. I also played lots of the instruments!" },
  { artist: "Zoomdweeby", title: "Money God", year: "2020", cover: "zoomdweeby-money-god-2020.jpg", credit: "P/R", link: "",
    notes: "Produced and recorded at Honey Jar and at home. I played many instruments!" },
  { artist: "Knot", title: "Knot", year: "2020", cover: "knot-knot-2020.png", credit: "R/M", link: "",
    notes: "Recorded and mixed by Julian and Carlos at Honey Jar" },
  { artist: "Katie Von Schleicher", title: "Consummation", year: "2020", cover: "katie-von-schleicher-consummation-2020.jpg", credit: "R/D", link: "" },
  { artist: "youbet", title: "Compare and Despair", year: "2020", cover: "youbet-compare-and-despair-2020.jpg", credit: "R/M/D", link: "",
    notes: "Recorded + mixed @ Katie’s parents’ house in Maryland I also drummed on this and played a bunch of other instruments!" },
  { artist: "Gemma", title: "Tempo's Not A Feeling", year: "2019", cover: "gemma-tempo-s-not-a-feeling-2019.jpg", credit: "R/M", link: "",
    notes: "Drums recorded at Gravesend Recordings, with Carlos and Julian. Additional mixing at Julian’s house." },
  { artist: "Coughy", title: "Ocean Hug", year: "2019", cover: "coughy-ocean-hug-2019.jpg", credit: "P/R/M/D", link: "" },
  { artist: "Emily Reo", title: "Only You Can See It", year: "2019", cover: "emily-reo-only-you-can-see-it-2019.jpg", credit: "R/M", link: "",
    notes: "Drums and additional stuff recorded and mixed by Emily, Julian and Carlos at Gravesend Recordings. Additional production and mixing at Frisbie and Julian’s house" },
  { artist: "The Glow", title: "Am I", year: "2019", cover: "the-glow-am-i-2019.jpg", credit: "R", link: "",
    notes: "Guitar + bass recorded at Julian’s" },
  { artist: "Net", title: "Snowburn", year: "2019", cover: "net-snowburn-2019.jpg", credit: "M", link: "",
    notes: "Mixed at Buddy’s Palace" },
  { artist: "Jennifer Vanilla", title: "J.E.N.N.I.F.E.R. EP", year: "2019", cover: "jennifer-vanilla-j-e-n-n-i-f-e-r-ep-2019.jpg", credit: "P/M", link: "",
    notes: "Production and mixing by Julian + Carlos, additional instruments played by Julian + Carlos as well" },
  { artist: "Sam Evian", title: "Cherry Tree", year: "2019", cover: "sam-evian-cherry-tree-2019.jpg", credit: "R/D", link: "",
    notes: "Recorded at Gravesend Recordings, with Carlos Hernandez. Julian drummed, Carlos played bass." },
  { artist: "Nicole Yun", title: "Paper Suit", year: "2019", cover: "nicole-yun-paper-suit-2019.jpg", credit: "R/M", link: "",
    notes: "Recorded by Julian and Carlos at Gravesend Recordings at the Silent Barn, mixed by Julian in a lot of different places" },
  { artist: "Frankie Cosmos", title: "Vessel", year: "2018", cover: "frankie-cosmos-vessel-2018.jpg", credit: "P/R/M", link: "",
    notes: "Produced + mixed at Gravesend Recordings with Carlos Hernandez and Hunter Davidsohn. Basic tracking was done upstate with Hunter and then we all got together for overdubs and mixing." },
  { artist: "NADINE", title: "oh my", year: "2018", cover: "nadine-oh-my-2018.jpg", credit: "R/M/D", link: "",
    notes: "Recorded + mixed at Gravesend Recordings and in Dripping Springs, TX with Carlos Hernandez. We both play all the instruments on this, Nadia sings. I’m very proud of this album. It helped me learn to step out on some other instruments — a major confidence turning point!" },
  { artist: "Ava Luna", title: "Moon 2", year: "2018", cover: "ava-luna-moon-2-2018.jpg", credit: "R/M/D", link: "",
    notes: "Recorded in various empty homes in Hull, MA and SW Vermont, as well as various studios in NYC between Sept 2016 and Feb 2018. I played drums, some synths, some guitars, etc etc and was involved with engineering and mixing." },
  { artist: "Ava Luna", title: "Histoire de Melody Nelson", year: "2018", cover: "ava-luna-histoire-de-melody-nelson-2018.jpg", credit: "R/M/D", link: "",
    notes: "Recorded and mixed at Gravesend Recordings with Carlos Hernandez. We did our best to respect the original Serge Gainsbourg album and then fuck it up where we could. I think it came out really well. Kudos to Simon for arranging the strings." },
  { artist: "Big Ups", title: "Two Parts Together", year: "2018", cover: "big-ups-two-parts-together-2018.jpg", credit: "R", link: "",
    notes: "Recorded at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Gabby's World", title: "Beast On Beast", year: "2018", cover: "gabby-s-world-beast-on-beast-2018.jpg", credit: "M", link: "",
    notes: "Mixed at Gravesend Recordings with Carlos Hernandez. Carlos did the tracking at Gravesend too." },
  { artist: "Katie Von Schleicher", title: "Glad To Be Here/Party Dawn 7\"", year: "2018", cover: "katie-von-schleicher-glad-to-be-here-party-dawn-7-2018.jpg", credit: "M", link: "",
    notes: "Mixed at Buddy’s Palace with Katie." },
  { artist: "Speedy Ortiz", title: "Twerp Verse", year: "2018", cover: "speedy-ortiz-twerp-verse-2018.jpg", credit: "R", link: "",
    notes: "Recorded at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Birthing Hips", title: "Urge To Merge", year: "2018", cover: "birthing-hips-urge-to-merge-2018.jpg", credit: "R/M", link: "",
    notes: "Recorded and mixed at Gravesend Recordings with Carlos Hernandez. Most of this album was tracked entirely live! RIP Birthing Hips." },
  { artist: "Miles Francis", title: "Swimmers", year: "2018", cover: "miles-francis-swimmers-2018.jpg", credit: "M", link: "",
    notes: "Mixed at Gravesend Recordings." },
  { artist: "Carlos Hernandez", title: "On Folly", year: "2018", cover: "carlos-hernandez-on-folly-2018.jpg", credit: "D", link: "",
    notes: "I got to play drums for this cut from Carlos’ solo album. Recorded in a very quick session at Gravesend Recordings." },
  { artist: "The Craters", title: "Underground", year: "2018", cover: "the-craters-underground-2018.jpg", credit: "M", link: "",
    notes: "Mixed at Buddy’s Palace." },
  { artist: "Holy Tunics", title: "Butter Dish", year: "2018", cover: "holy-tunics-butter-dish-2018.jpg", credit: "R/M", link: "",
    notes: "Recorded and mixed at Gravesend Recordings." },
  { artist: "Katie Von Schleicher", title: "Shitty Hits", year: "2017", cover: "katie-von-schleicher-shitty-hits-2017.jpg", credit: "R/D", link: "",
    notes: "Recorded in Maryland with Katie + Adam. I played drums and some additional sounds on most of these songs as well." },
  { artist: "Francine", title: "When We Were Loud", year: "2018", cover: "francine-when-we-were-loud-2018.jpg", credit: "M", link: "",
    notes: "Mixed at Gravesend Recordings. Francine is one of my favorite bands of all time — getting to work on their album was an actual dream come true. Thank you Clayton!" },
  { artist: "White Suns", title: "Psychic Drift", year: "2017", cover: "white-suns-psychic-drift-2017.jpg", credit: "R/M", link: "",
    notes: "Recorded + mixed at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Ovlov", title: "Greatest Hits Vol II/What's So Great About The City EP", year: "2011/2017", cover: "ovlov-greatest-hits-vol-ii-what-s-so-great-about-the-city-ep-2011-2017.jpg", credit: "R/M", link: "",
    notes: "Recorded + mixed at the Trinity Korean Methodist Church Basement with Carlos Hernandez. I played mellotron on one song." },
  { artist: "Laser Background", title: "Dark Nuclear Bogs", year: "2017", cover: "laser-background-dark-nuclear-bogs-2017.jpg", credit: "R/M", link: "",
    notes: "Recorded at the house in Cumming, GA with Carlos Hernandez, mixed at Gravesend Recordings, also with Carlos. I play lots of instruments on this, as does Carlos!" },
  { artist: "Operator Music Band", title: "Coordination", year: "2017", cover: "operator-music-band-coordination-2017.jpg", credit: "D", link: "",
    notes: "Dara and Jared invited me to drum on this EP…I had a really good time playing with them!" },
  { artist: "Sad13", title: "Slugger", year: "2016", cover: "sad13-slugger-2016.jpg", credit: "R/D", link: "",
    notes: "I drummed on most of this album and engineered a lot of it as well." },
  { artist: "Leapling", title: "Suspended Animation", year: "2016", cover: "leapling-suspended-animation-2016.jpg", credit: "M", link: "",
    notes: "Mixed at Second Base with Dan Arnes." },
  { artist: "Laser Background", title: "Correct", year: "2016", cover: "laser-background-correct-2016.jpg", credit: "R/M", link: "",
    notes: "Recorded and mixed at Gravesend Recordings with Carlos Hernandez. We both play a lot of instruments on this!" },
  { artist: "Cloud Becomes Your Hand", title: "Rest In Fleas", year: "2016", cover: "cloud-becomes-your-hand-rest-in-fleas-2016.jpg", credit: "R", link: "",
    notes: "Recorded at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Mutual Benefit", title: "Skip A Sinking Stone", year: "2016", cover: "mutual-benefit-skip-a-sinking-stone-2016.jpg", credit: "R", link: "",
    notes: "Recorded at Gravesend Recordings with Carlos Hernandez. I play percussion and make some sounds on some songs on this record. Carlos made some noises as well!" },
  { artist: "Ava Luna", title: "Infinite House", year: "2015", cover: "ava-luna-infinite-house-2015.jpg", credit: "R/D", link: "",
    notes: "Recorded in Benton, MS at Cindy’s house and at Gravesend Recordings. Mixed by Dave Fridmann. Reminds me of hot afternoons in Mississippi, running to break up the day. Getting drunk at night and jamming until we had “Victoria”. I think this is my favorite." },
  { artist: "Um Are", title: "Um Are You Gonna Finish That", year: "2015", cover: "um-are-um-are-you-gonna-finish-that-2015.jpg", credit: "P/R/M/D", link: "",
    notes: "A collection of songs that I wrote and performed on my own." },
  { artist: "Eartheater", title: "RIP Chrysalis", year: "2015", cover: "eartheater-rip-chrysalis-2015.jpg", credit: "R/M", link: "",
    notes: "Recorded and mixed two of the songs from this record at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Ava Luna", title: "Electric Balloon", year: "2015", cover: "ava-luna-electric-balloon-2015.jpg", credit: "R/D", link: "",
    notes: "Recorded at the Kagan House in Franklin, NY over the course of a month. Mostly recorded by a crackling fire….a burst of inspiration. I played a bunch of instruments but mostly drums. Engineered it all with Carlos." },
  { artist: "Transcendental Telecom", title: "Escape From Shred City", year: "2015", cover: "transcendental-telecom-escape-from-shred-city-2015.jpg", credit: "R/M/D", link: "",
    notes: "Drummed on this, as well as recorded and mixed it! Spencer is a long time friend and collaborator and we’ve worked together for many years. This EP is a blast of capital R Roc, which meant Spencer let me keep the drums very loud!" },
  { artist: "Mr Twin Sister", title: "s/t", year: "2014", cover: "mr-twin-sister-s-t-2014.jpg", credit: "R", link: "",
    notes: "Engineered vocals + strings at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Palehound", title: "Kitchen", year: "2014", cover: "palehound-kitchen-2014.jpg", credit: "R/M", link: "",
    notes: "Recorded and mixed at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Krill", title: "Lucky Leaves", year: "2013", cover: "krill-lucky-leaves-2013.jpg", credit: "R/M", link: "",
    notes: "Recorded and mixed at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Palehound", title: "Bent Nail", year: "2013", cover: "palehound-bent-nail-2013.jpg", credit: "R/M/D", link: "",
    notes: "Recorded and mixed at Gravesend Recordings with Carlos Hernandez. I played drums and Carlos played bass on most of this EP." },
  { artist: "Krill", title: "Steve Hears Pile In Malden and Bursts Into Tears", year: "2014", cover: "krill-steve-hears-pile-in-malden-and-bursts-into-tears-2014.jpg", credit: "R/M", link: "",
    notes: "Recorded and mixed at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Ava Luna", title: "Ice Level", year: "2012", cover: "ava-luna-ice-level-2012.jpg", credit: "M/D", link: "",
    notes: "Recorded in Gary’s basement in Ditmas Park in one day! Mixed by Carlos mostly, with some help from me." },
  { artist: "Total Slacker", title: "Thrashin'", year: "2011", cover: "total-slacker-thrashin-2011.jpg", credit: "R/M", link: "",
    notes: "Recorded and mixed at Trinity Korean Methodist Church with Carlos Hernandez." },
  { artist: "Spencer Tricker", title: "Logic", year: "2006", cover: "spencer-tricker-logic-2006.jpg", credit: "R/M/D", link: "",
    notes: "A blast from the Olden Days that still holds up…I recorded/mixed/played on this." }
];


// ---- Nothing below here needs editing ----
(function () {
  const grid = document.getElementById("records");
  if (!grid) return;
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  grid.innerHTML = RECORDS.map((r, i) => {
    let tag = "div", attrs = "";
    if (r.bandcamp) { tag = "button"; attrs = ` type="button" data-play="${i}" aria-label="Play ${esc(r.artist)}, ${esc(r.title)}"`; }
    else if (r.link) { tag = "a"; attrs = ` href="${esc(r.link)}" target="_blank" rel="noopener"`; }
    return `
    <${tag} class="record${r.bandcamp ? " playable" : ""}"${attrs}>
      <span class="cover-wrap">
        <img src="/images/covers/${esc(r.cover)}" alt="${esc(r.artist)}, ${esc(r.title)}" loading="lazy">
        ${r.bandcamp ? '<span class="play-badge" aria-hidden="true"></span>' : ""}
      </span>
      <span class="artist">${esc(r.artist)}</span>
      <span class="title">${esc(r.title)} <span class="year">(${esc(r.year)})</span>${r.credit ? ` <span class="credit">(${esc(r.credit)})</span>` : ""}</span>
    </${tag}>`;
  }).join("");

  // Bandcamp pop-up player
  const modal = document.createElement("div");
  modal.className = "player-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="player-box" role="dialog" aria-modal="true" aria-label="Album player">
      <button type="button" class="player-close" aria-label="Close player">&times;</button>
      <div class="player-frame"></div>
    </div>`;
  document.body.appendChild(modal);
  const frame = modal.querySelector(".player-frame");
  let lastFocus = null;

  function open(r) {
    lastFocus = document.activeElement;
    frame.innerHTML = `<iframe title="${esc(r.artist)}, ${esc(r.title)} on Bandcamp"
      src="https://bandcamp.com/EmbeddedPlayer/album=${encodeURIComponent(r.bandcamp)}/size=large/bgcol=ffffff/linkcol=3a8a86/tracklist=true/artwork=small/transparent=true/"
      seamless></iframe>`;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector(".player-close").focus();
  }
  function close() {
    modal.hidden = true;
    frame.innerHTML = "";              // stops the music
    document.body.classList.remove("modal-open");
    if (lastFocus) lastFocus.focus();
  }
  grid.addEventListener("click", (e) => {
    const b = e.target.closest("[data-play]");
    if (b) open(RECORDS[+b.dataset.play]);
  });
  modal.addEventListener("click", (e) => { if (e.target === modal || e.target.closest(".player-close")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) close(); });
})();
