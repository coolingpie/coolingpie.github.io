// ============================================================
// YOUR DISCOGRAPHY  (newest first)
// To add a record, copy a line and edit it.
//   cover: put the image in images/covers/ and write its filename
//   link:  optional. Bandcamp, Spotify, anything. Leave "" for no link.
// ============================================================

const RECORDS = [
  { artist: "Remember Sports", title: "The Refrigerator", year: "2026", cover: "remember-sports-the-refrigerator-2026.jpg", link: "" },
  { artist: "youbet", title: "youbet", year: "2026", cover: "youbet-youbet-2026.jpg", link: "" },
  { artist: "Gemma", title: "Be About It", year: "2026", cover: "gemma-be-about-it-2026.jpg", link: "" },
  { artist: "Ava Luna", title: "Ava Luna", year: "2025", cover: "ava-luna-ava-luna-2025.jpg", link: "" },
  { artist: "Lane", title: "Receiver", year: "2025", cover: "lane-receiver-2025.jpg", link: "" },
  { artist: "People Person Puzzle Tree", title: "Live In The Emerald Necklace", year: "2025", cover: "people-person-puzzle-tree-live-in-the-emerald-necklace-2025.jpg", link: "" },
  { artist: "Ben Special", title: "Booya", year: "2024", cover: "ben-special-booya-2024.jpg", link: "" },
  { artist: "Nora Roy", title: "No Steppy Snik", year: "2024", cover: "nora-roy-no-steppy-snik-2024.jpg", link: "" },
  { artist: "Dolly", title: "Process", year: "2023", cover: "dolly-process-2023.jpg", link: "" },
  { artist: "youbet", title: "Carsick", year: "2023", cover: "youbet-carsick-2023.jpg", link: "" },
  { artist: "Zoomdweeby", title: "War Of The Ants", year: "2023", cover: "zoomdweeby-war-of-the-ants-2023.jpg", link: "" },
  { artist: "Goo", title: "Squid Ink Sky", year: "2023", cover: "goo-squid-ink-sky-2023.jpg", link: "" },
  { artist: "Krill", title: "Alam No Hris (10th Anniversary Reissue)", year: "2022", cover: "krill-alam-no-hris-10th-anniversary-reissue-2022.jpg", link: "" },
  { artist: "Blanky", title: "Blood Harmony", year: "2022", cover: "blanky-blood-harmony-2022.jpg", link: "" },
  { artist: "Goo", title: "Winter Is Over", year: "2021", cover: "goo-winter-is-over-2021.jpg", link: "" },
  { artist: "Remember Sports", title: "Like A Stone", year: "2021", cover: "remember-sports-like-a-stone-2021.jpg", link: "" },
  { artist: "Anna Fox Rochinski", title: "Cherry", year: "2021", cover: "anna-fox-rochinski-cherry-2021.jpg", link: "" },
  { artist: "Zoomdweeby", title: "Money God", year: "2020", cover: "zoomdweeby-money-god-2020.jpg", link: "" },
  { artist: "Knot", title: "Knot", year: "2020", cover: "knot-knot-2020.png", link: "" },
  { artist: "Katie Von Schleicher", title: "Consummation", year: "2020", cover: "katie-von-schleicher-consummation-2020.jpg", link: "" },
  { artist: "youbet", title: "Compare and Despair", year: "2020", cover: "youbet-compare-and-despair-2020.jpg", link: "" },
  { artist: "Gemma", title: "Tempo's Not A Feeling", year: "2019", cover: "gemma-tempo-s-not-a-feeling-2019.jpg", link: "" },
  { artist: "Coughy", title: "Ocean Hug", year: "2019", cover: "coughy-ocean-hug-2019.jpg", link: "" },
  { artist: "Emily Reo", title: "Only You Can See It", year: "2019", cover: "emily-reo-only-you-can-see-it-2019.jpg", link: "" },
  { artist: "The Glow", title: "Am I", year: "2019", cover: "the-glow-am-i-2019.jpg", link: "" },
  { artist: "Net", title: "Snowburn", year: "2019", cover: "net-snowburn-2019.jpg", link: "" },
  { artist: "Jennifer Vanilla", title: "J.E.N.N.I.F.E.R. EP", year: "2019", cover: "jennifer-vanilla-j-e-n-n-i-f-e-r-ep-2019.jpg", link: "" },
  { artist: "Sam Evian", title: "Cherry Tree", year: "2019", cover: "sam-evian-cherry-tree-2019.jpg", link: "" },
  { artist: "Nicole Yun", title: "Paper Suit", year: "2019", cover: "nicole-yun-paper-suit-2019.jpg", link: "" },
  { artist: "Frankie Cosmos", title: "Vessel", year: "2018", cover: "frankie-cosmos-vessel-2018.jpg", link: "" },
  { artist: "NADINE", title: "oh my", year: "2018", cover: "nadine-oh-my-2018.jpg", link: "" },
  { artist: "Ava Luna", title: "Moon 2", year: "2018", cover: "ava-luna-moon-2-2018.jpg", link: "" },
  { artist: "Ava Luna", title: "Histoire de Melody Nelson", year: "2018", cover: "ava-luna-histoire-de-melody-nelson-2018.jpg", link: "" },
  { artist: "Big Ups", title: "Two Parts Together", year: "2018", cover: "big-ups-two-parts-together-2018.jpg", link: "" },
  { artist: "Gabby's World", title: "Beast On Beast", year: "2018", cover: "gabby-s-world-beast-on-beast-2018.jpg", link: "" },
  { artist: "Katie Von Schleicher", title: "Glad To Be Here/Party Dawn 7\"", year: "2018", cover: "katie-von-schleicher-glad-to-be-here-party-dawn-7-2018.jpg", link: "" },
  { artist: "Speedy Ortiz", title: "Twerp Verse", year: "2018", cover: "speedy-ortiz-twerp-verse-2018.jpg", link: "" },
  { artist: "Birthing Hips", title: "Urge To Merge", year: "2018", cover: "birthing-hips-urge-to-merge-2018.jpg", link: "" },
  { artist: "Miles Francis", title: "Swimmers", year: "2018", cover: "miles-francis-swimmers-2018.jpg", link: "" },
  { artist: "Carlos Hernandez", title: "On Folly", year: "2018", cover: "carlos-hernandez-on-folly-2018.jpg", link: "" },
  { artist: "The Craters", title: "Underground", year: "2018", cover: "the-craters-underground-2018.jpg", link: "" },
  { artist: "Holy Tunics", title: "Butter Dish", year: "2018", cover: "holy-tunics-butter-dish-2018.jpg", link: "" },
  { artist: "Katie Von Schleicher", title: "Shitty Hits", year: "2017", cover: "katie-von-schleicher-shitty-hits-2017.jpg", link: "" },
  { artist: "Francine", title: "When We Were Loud", year: "2018", cover: "francine-when-we-were-loud-2018.jpg", link: "" },
  { artist: "White Suns", title: "Psychic Drift", year: "2017", cover: "white-suns-psychic-drift-2017.jpg", link: "" },
  { artist: "Ovlov", title: "Greatest Hits Vol II/What's So Great About The City EP", year: "2011/2017", cover: "ovlov-greatest-hits-vol-ii-what-s-so-great-about-the-city-ep-2011-2017.jpg", link: "" },
  { artist: "Laser Background", title: "Dark Nuclear Bogs", year: "2017", cover: "laser-background-dark-nuclear-bogs-2017.jpg", link: "" },
  { artist: "Operator Music Band", title: "Coordination", year: "2017", cover: "operator-music-band-coordination-2017.jpg", link: "" },
  { artist: "Sad13", title: "Slugger", year: "2016", cover: "sad13-slugger-2016.jpg", link: "" },
  { artist: "Leapling", title: "Suspended Animation", year: "2016", cover: "leapling-suspended-animation-2016.jpg", link: "" },
  { artist: "Laser Background", title: "Correct", year: "2016", cover: "laser-background-correct-2016.jpg", link: "" },
  { artist: "Cloud Becomes Your Hand", title: "Rest In Fleas", year: "2016", cover: "cloud-becomes-your-hand-rest-in-fleas-2016.jpg", link: "" },
  { artist: "Mutual Benefit", title: "Skip A Sinking Stone", year: "2016", cover: "mutual-benefit-skip-a-sinking-stone-2016.jpg", link: "" },
  { artist: "Ava Luna", title: "Infinite House", year: "2015", cover: "ava-luna-infinite-house-2015.jpg", link: "" },
  { artist: "Um Are", title: "Um Are You Gonna Finish That", year: "2015", cover: "um-are-um-are-you-gonna-finish-that-2015.jpg", link: "" },
  { artist: "Eartheater", title: "RIP Chrysalis", year: "2015", cover: "eartheater-rip-chrysalis-2015.jpg", link: "" },
  { artist: "Ava Luna", title: "Electric Balloon", year: "2015", cover: "ava-luna-electric-balloon-2015.jpg", link: "" },
  { artist: "Transcendental Telecom", title: "Escape From Shred City", year: "2015", cover: "transcendental-telecom-escape-from-shred-city-2015.jpg", link: "" },
  { artist: "Mr Twin Sister", title: "s/t", year: "2014", cover: "mr-twin-sister-s-t-2014.jpg", link: "" },
  { artist: "Palehound", title: "Kitchen", year: "2014", cover: "palehound-kitchen-2014.jpg", link: "" },
  { artist: "Krill", title: "Lucky Leaves", year: "2013", cover: "krill-lucky-leaves-2013.jpg", link: "" },
  { artist: "Palehound", title: "Bent Nail", year: "2013", cover: "palehound-bent-nail-2013.jpg", link: "" },
  { artist: "Krill", title: "Steve Hears Pile In Malden and Bursts Into Tears", year: "2014", cover: "krill-steve-hears-pile-in-malden-and-bursts-into-tears-2014.jpg", link: "" },
  { artist: "Ava Luna", title: "Ice Level", year: "2012", cover: "ava-luna-ice-level-2012.jpg", link: "" },
  { artist: "Total Slacker", title: "Thrashin'", year: "2011", cover: "total-slacker-thrashin-2011.jpg", link: "" },
  { artist: "Spencer Tricker", title: "Logic", year: "2006", cover: "spencer-tricker-logic-2006.jpg", link: "" }
];


// ---- Nothing below here needs editing ----
(function () {
  const grid = document.getElementById("records");
  if (!grid) return;
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  grid.innerHTML = RECORDS.map(r => {
    const tag = r.link ? "a" : "div";
    const attrs = r.link ? ` href="${esc(r.link)}" target="_blank" rel="noopener"` : "";
    return `
    <${tag} class="record"${attrs}>
      <img src="/images/covers/${esc(r.cover)}" alt="${esc(r.artist)}, ${esc(r.title)}" loading="lazy">
      <p class="artist">${esc(r.artist)}</p>
      <p class="title">${esc(r.title)} <span class="year">(${esc(r.year)})</span></p>
    </${tag}>`;
  }).join("");
})();
