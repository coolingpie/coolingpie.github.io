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
//   bandcamp: Bandcamp ID: "a" + album number, or "t" + track number for
//             singles, e.g. "a526053519". Clicking the cover opens a player.
//             (Claude can look these up for you.)
//   link:     if there's no bandcamp ID, where the cover goes when clicked
//             (Spotify, a label page...). Leave "" for no link.
//   notes:    your old Squarespace write-up, kept for reference.
//             Not shown on the site.
// ============================================================

const RECORDS = [
  { artist: "2nd Grade", title: "Girls and Boys", year: "2026", cover: "2nd-grade-girls-and-boys-2026.jpg", credit: "M", link: "", bandcamp: "a1868775891" },
  { artist: "Remember Sports", title: "The Refrigerator", year: "2026", cover: "remember-sports-the-refrigerator-2026.jpg", credit: "P/R/M", link: "", bandcamp: "a526053519" },
  { artist: "youbet", title: "youbet", year: "2026", cover: "youbet-youbet-2026.jpg", credit: "P/R/M", link: "", bandcamp: "a1682366158" },
  { artist: "Gemma", title: "Be About It", year: "2026", cover: "gemma-be-about-it-2026.jpg", credit: "M", link: "", bandcamp: "a3326081862" },
  { artist: "Lily Konigsberg", title: "Free Byrd", year: "2026", cover: "lily-konigsberg-free-byrd-2026.jpg", credit: "M", link: "", bandcamp: "t1141225862" },
  { artist: "Fog Lake", title: "Hollowbody", year: "2026", cover: "fog-lake-hollowbody-2026.jpg", credit: "D", link: "", bandcamp: "a278097121" },
  { artist: "Ava Mirzadegan", title: "For the Light", year: "2026", cover: "ava-mirzadegan-for-the-light-2026.jpg", credit: "P/R/M", link: "", bandcamp: "a2400680330" },
  { artist: "Beck Zegans", title: "Engraving of Armor", year: "2026", cover: "beck-zegans-engraving-of-armor-2026.jpg", credit: "P/M/D", link: "", bandcamp: "a3723593184" },
  { artist: "Ava Luna", title: "Ava Luna", year: "2025", cover: "ava-luna-ava-luna-2025.jpg", credit: "D", link: "", bandcamp: "a546441070" },
  { artist: "Lane", title: "Receiver", year: "2025", cover: "lane-receiver-2025.jpg", credit: "M/D", link: "", bandcamp: "a2040369710" },
  { artist: "People Person Puzzle Tree", title: "Live In The Emerald Necklace", year: "2025", cover: "people-person-puzzle-tree-live-in-the-emerald-necklace-2025.jpg", credit: "R/M", link: "", bandcamp: "a1303853311" },
  { artist: "youbet", title: "Deny", year: "2025", cover: "youbet-deny-2025.jpg", credit: "P/R/M", link: "", bandcamp: "t3090423545" },
  { artist: "Oberbaum", title: "I Should Be Softer", year: "2025", cover: "oberbaum-i-should-be-softer-2025.jpg", credit: "D", link: "", bandcamp: "a2473901316" },
  { artist: "Transcendental Telecom", title: "Light Pollution", year: "2025", cover: "transcendental-telecom-light-pollution-2025.jpg", credit: "P/M", link: "", bandcamp: "a2489934606" },
  { artist: "Shark?", title: "A Simple Life", year: "2025", cover: "shark-a-simple-life-2025.jpg", credit: "M", link: "", bandcamp: "a1249690519" },
  { artist: "Various Artists", title: "F/D Fifteen", year: "2025", cover: "various-artists-f-d-fifteen-2025.jpg", credit: "Ma", link: "", bandcamp: "a2192315291" },
  { artist: "Ben Special", title: "Booya", year: "2024", cover: "ben-special-booya-2024.jpg", credit: "M", link: "", bandcamp: "a3822757834",
    notes: "Mixed by Julian @ Buddy’s Palace" },
  { artist: "Nora Roy", title: "No Steppy Snik", year: "2024", cover: "nora-roy-no-steppy-snik-2024.jpg", credit: "P/M", link: "", bandcamp: "t2492785587",
    notes: "Produced and mixed by moi" },
  { artist: "Trace Mountains", title: "Sick Of Myself", year: "2024", cover: "trace-mountains-sick-of-myself-2024.jpg", credit: "R/D", link: "", bandcamp: "a2392664363" },
  { artist: "youbet", title: "Way To Be", year: "2024", cover: "youbet-way-to-be-2024.jpg", credit: "R/D", link: "", bandcamp: "a3571708630" },
  { artist: "Dolly", title: "Interloper", year: "2024", cover: "dolly-interloper-2024.jpg", credit: "M/D", link: "" },
  { artist: "Beeef", title: "Somebody's Favorite", year: "2024", cover: "beeef-somebody-s-favorite-2024.jpg", credit: "M", link: "", bandcamp: "a2137704288" },
  { artist: "Arminda K", title: "Time and a Feeling", year: "2024", cover: "arminda-k-time-and-a-feeling-2024.jpg", credit: "D", link: "", bandcamp: "a282105997" },
  { artist: "meadows", title: "The Birds Took You Away", year: "2024", cover: "meadows-the-birds-took-you-away-2024.jpg", credit: "D", link: "", bandcamp: "a1738027512" },
  { artist: "Nora Roy", title: "Goldfish", year: "2024", cover: "nora-roy-goldfish-2024.jpg", credit: "P/M", link: "", bandcamp: "t2454437551" },
  { artist: "Nora Roy", title: "Fickle", year: "2024", cover: "nora-roy-fickle-2024.jpg", credit: "M", link: "", bandcamp: "t4236035278" },
  { artist: "Katie Von Schleicher", title: "Pilea", year: "2024", cover: "katie-von-schleicher-pilea-2024.jpg", credit: "D", link: "", bandcamp: "t2299988357" },
  { artist: "Mr Twin Sister", title: "Demos, Outtakes, B-Sides", year: "2024", cover: "mr-twin-sister-demos-outtakes-b-sides-2024.jpg", credit: "Ma", link: "", bandcamp: "a2434557999" },
  { artist: "Um Are", title: "Beatles Tape '24", year: "2024", cover: "um-are-beatles-tape-24-2024.jpg", credit: "P/R/M/D", link: "", bandcamp: "a9941453" },
  { artist: "Dolly", title: "Process", year: "2023", cover: "dolly-process-2023.jpg", credit: "P/M/D", link: "",
    notes: "Drums and production and mix by Julian and Carlos @ Honey Jar" },
  { artist: "youbet", title: "Carsick", year: "2023", cover: "youbet-carsick-2023.jpg", credit: "R/D", link: "", bandcamp: "t3649134018",
    notes: "Drums recorded at Honey Jar" },
  { artist: "Zoomdweeby", title: "War Of The Ants", year: "2023", cover: "zoomdweeby-war-of-the-ants-2023.jpg", credit: "P", link: "", bandcamp: "a3503750682",
    notes: "Produced by Julian + Victor at Honey Jar and various apts in Brooklyn and Boston" },
  { artist: "Goo", title: "Squid Ink Sky", year: "2023", cover: "goo-squid-ink-sky-2023.jpg", credit: "P/M", link: "", bandcamp: "a1310274939",
    notes: "Produced and mixed by Julian @ Honey Jar in Brooklyn" },
  { artist: "Katie Von Schleicher", title: "A Little Touch of Schleicher in the Night", year: "2023", cover: "katie-von-schleicher-a-little-touch-of-schleicher-in-the-night-2023.jpg", credit: "R", link: "", bandcamp: "a125744839" },
  { artist: "Fog Lake", title: "Midnight Society", year: "2023", cover: "fog-lake-midnight-society-2023.jpg", credit: "D", link: "", bandcamp: "a1456408109" },
  { artist: "Sweet Dreams Nadine", title: "Sweet Dreams Nadine", year: "2023", cover: "sweet-dreams-nadine-sweet-dreams-nadine-2023.jpg", credit: "P/R/M/D", link: "", bandcamp: "a2606773563" },
  { artist: "Mutual Benefit", title: "Growing at the Edges", year: "2023", cover: "mutual-benefit-growing-at-the-edges-2023.jpg", credit: "R", link: "", bandcamp: "a3828334547" },
  { artist: "Zoomdweeby", title: "Parasite", year: "2023", cover: "zoomdweeby-parasite-2023.jpg", credit: "P/R/M/D", link: "", bandcamp: "t2811451738" },
  { artist: "Remember Sports", title: "Heads Carolina, Tails California", year: "2023", cover: "remember-sports-heads-carolina-tails-california-2023.jpg", credit: "Ma", link: "", bandcamp: "t2945933653" },
  { artist: "Emily Reo", title: "How to Disappear", year: "2023", cover: "emily-reo-how-to-disappear-2023.jpg", credit: "P/M", link: "", bandcamp: "t3413315614" },
  { artist: "Krill", title: "Alam No Hris (10th Anniversary Reissue)", year: "2022", cover: "krill-alam-no-hris-10th-anniversary-reissue-2022.jpg", credit: "Ma", link: "", bandcamp: "a56797359",
    notes: "Mastered by me" },
  { artist: "Blanky", title: "Blood Harmony", year: "2022", cover: "blanky-blood-harmony-2022.jpg", credit: "M", link: "", bandcamp: "a3013325932",
    notes: "Mixed by me" },
  { artist: "Bellows", title: "Next of Kin", year: "2022", cover: "bellows-next-of-kin-2022.jpg", credit: "D", link: "", bandcamp: "a3728917692" },
  { artist: "Emily Yacina", title: "All The Things: A Decade of Songs", year: "2022", cover: "emily-yacina-all-the-things-a-decade-of-songs-2022.jpg", credit: "P", link: "", bandcamp: "a238478265" },
  { artist: "Heavy Mirrors", title: "Empty Trip", year: "2022", cover: "heavy-mirrors-empty-trip-2022.jpg", credit: "R/D", link: "", bandcamp: "a2142135135" },
  { artist: "Zoomdweeby", title: "Buddy", year: "2022", cover: "zoomdweeby-buddy-2022.jpg", credit: "P/M/D", link: "", bandcamp: "t1427164710" },
  { artist: "Remember Sports", title: "Leap Day", year: "2022", cover: "remember-sports-leap-day-2022.jpg", credit: "M", link: "", bandcamp: "a1843609153" },
  { artist: "Emily Reo", title: "98", year: "2022", cover: "emily-reo-98-2022.jpg", credit: "P/M/Ma", link: "", bandcamp: "a3040159714" },
  { artist: "S. Raekwon", title: "Where I'm at Now (Expanded Edition)", year: "2022", cover: "s-raekwon-where-i-m-at-now-expanded-edition-2022.jpg", credit: "R/M", link: "", bandcamp: "a1944911692" },
  { artist: "Goo", title: "Winter Is Over", year: "2021", cover: "goo-winter-is-over-2021.jpg", credit: "R/M", link: "", bandcamp: "t691472909" },
  { artist: "Remember Sports", title: "Like A Stone", year: "2021", cover: "remember-sports-like-a-stone-2021.jpg", credit: "R/M", link: "", bandcamp: "a2039088048",
    notes: "Recorded and mixed by Julian and Carlos at the Honey Jar" },
  { artist: "Anna Fox Rochinski", title: "Cherry", year: "2021", cover: "anna-fox-rochinski-cherry-2021.jpg", credit: "P/R/D", link: "", bandcamp: "a1450360354",
    notes: "Produced and recorded by Carlos and I at Honey Jar Studios. I also played lots of the instruments!" },
  { artist: "Mr Twin Sister", title: "Al Mundo Azul", year: "2021", cover: "mr-twin-sister-al-mundo-azul-2021.jpg", credit: "D", link: "", bandcamp: "a2148936542" },
  { artist: "Fog Lake", title: "Tragedy Reel", year: "2021", cover: "fog-lake-tragedy-reel-2021.jpg", credit: "D", link: "", bandcamp: "a1914672261" },
  { artist: "Quilt", title: "Unreleased Tracks from \"Quilt\" (2011)", year: "2021", cover: "quilt-unreleased-tracks-from-quilt-2011-2021.jpg", credit: "Ma", link: "", bandcamp: "a2163848995" },
  { artist: "Arminda K", title: "It's Nearly Night Time", year: "2021", cover: "arminda-k-it-s-nearly-night-time-2021.jpg", credit: "D", link: "", bandcamp: "a792797320" },
  { artist: "Um Are", title: "Big Wins", year: "2021", cover: "um-are-big-wins-2021.jpg", credit: "P/R/M/D", link: "", bandcamp: "a85021851" },
  { artist: "Sweet Dreams Nadine", title: "Indigo + Porcelain", year: "2021", cover: "sweet-dreams-nadine-indigo-porcelain-2021.jpg", credit: "P/R/M/D", link: "", bandcamp: "a1460027003" },
  { artist: "Knot", title: "Knot", year: "2020", cover: "knot-knot-2020.png", credit: "R/M", link: "", bandcamp: "a87576686",
    notes: "Recorded and mixed by Julian and Carlos at Honey Jar" },
  { artist: "Katie Von Schleicher", title: "Consummation", year: "2020", cover: "katie-von-schleicher-consummation-2020.jpg", credit: "R/D", link: "", bandcamp: "a1419504234" },
  { artist: "youbet", title: "Compare and Despair", year: "2020", cover: "youbet-compare-and-despair-2020.jpg", credit: "R/M/D", link: "", bandcamp: "a719166873",
    notes: "Recorded + mixed @ Katie’s parents’ house in Maryland I also drummed on this and played a bunch of other instruments!" },
  { artist: "Emily Reo", title: "One Eye On The Sky", year: "2020", cover: "emily-reo-one-eye-on-the-sky-2020.jpg", credit: "P/M/D", link: "", bandcamp: "t1808841648" },
  { artist: "Laser Background", title: "Evergreen Legend", year: "2020", cover: "laser-background-evergreen-legend-2020.jpg", credit: "P/M/D", link: "", bandcamp: "a754625453" },
  { artist: "Radical Dads", title: "Paved Mountain", year: "2020", cover: "radical-dads-paved-mountain-2020.jpg", credit: "M", link: "", bandcamp: "a2779738762" },
  { artist: "Woodpainting", title: "Woodpainting", year: "2020", cover: "woodpainting-woodpainting-2020.jpg", credit: "R", link: "", bandcamp: "a3083770306" },
  { artist: "Zoomdweeby", title: "Traffic EP", year: "2020", cover: "zoomdweeby-traffic-ep-2020.jpg", credit: "P/R/M/D", link: "", bandcamp: "a3304816912" },
  { artist: "Ava Luna", title: "Live at Market Hotel", year: "2020", cover: "ava-luna-live-at-market-hotel-2020.jpg", credit: "M", link: "", bandcamp: "a761960955" },
  { artist: "Transcendental Telecom", title: "Arrondissement b/w Number/name", year: "2020", cover: "transcendental-telecom-arrondissement-b-w-number-name-2020.jpg", credit: "P/M", link: "", bandcamp: "a1467762811" },
  { artist: "Transcendental Telecom", title: "Don't Stop b/w Manila Shake", year: "2020", cover: "transcendental-telecom-don-t-stop-b-w-manila-shake-2020.jpg", credit: "P/M", link: "", bandcamp: "a626637545" },
  { artist: "Gemma", title: "Feeling's Not A Tempo", year: "2019", cover: "gemma-tempo-s-not-a-feeling-2019.jpg", credit: "R/M", link: "", bandcamp: "a2283765067",
    notes: "Drums recorded at Gravesend Recordings, with Carlos and Julian. Additional mixing at Julian’s house." },
  { artist: "Coughy", title: "Ocean Hug", year: "2019", cover: "coughy-ocean-hug-2019.jpg", credit: "P/R/M/D", link: "", bandcamp: "a3247707661" },
  { artist: "Emily Reo", title: "Only You Can See It", year: "2019", cover: "emily-reo-only-you-can-see-it-2019.jpg", credit: "R/M", link: "", bandcamp: "a4277743560",
    notes: "Drums and additional stuff recorded and mixed by Emily, Julian and Carlos at Gravesend Recordings. Additional production and mixing at Frisbie and Julian’s house" },
  { artist: "The Glow", title: "Am I", year: "2019", cover: "the-glow-am-i-2019.jpg", credit: "R", link: "", bandcamp: "a3004755541",
    notes: "Guitar + bass recorded at Julian’s" },
  { artist: "Net", title: "Snowburn", year: "2019", cover: "net-snowburn-2019.jpg", credit: "M", link: "", bandcamp: "t343167337",
    notes: "Mixed at Buddy’s Palace" },
  { artist: "Jennifer Vanilla", title: "J.E.N.N.I.F.E.R. EP", year: "2019", cover: "jennifer-vanilla-j-e-n-n-i-f-e-r-ep-2019.jpg", credit: "P/M", link: "", bandcamp: "a541076053",
    notes: "Production and mixing by Julian + Carlos, additional instruments played by Julian + Carlos as well" },
  { artist: "Sam Evian", title: "Cherry Tree", year: "2019", cover: "sam-evian-cherry-tree-2019.jpg", credit: "R/D", link: "", bandcamp: "a1323987627",
    notes: "Recorded at Gravesend Recordings, with Carlos Hernandez. Julian drummed, Carlos played bass." },
  { artist: "Nicole Yun", title: "Paper Suit", year: "2019", cover: "nicole-yun-paper-suit-2019.jpg", credit: "R/M", link: "", bandcamp: "a1725503030",
    notes: "Recorded by Julian and Carlos at Gravesend Recordings at the Silent Barn, mixed by Julian in a lot of different places" },
  { artist: "Miles Francis", title: "Doves", year: "2019", cover: "miles-francis-doves-2019.jpg", credit: "M", link: "", bandcamp: "a4128148631" },
  { artist: "Frankie Cosmos", title: "Vessel", year: "2018", cover: "frankie-cosmos-vessel-2018.jpg", credit: "P/R/M", link: "", bandcamp: "a3086331064",
    notes: "Produced + mixed at Gravesend Recordings with Carlos Hernandez and Hunter Davidsohn. Basic tracking was done upstate with Hunter and then we all got together for overdubs and mixing." },
  { artist: "NADINE", title: "oh my", year: "2018", cover: "nadine-oh-my-2018.jpg", credit: "R/M/D", link: "", bandcamp: "a2505063627",
    notes: "Recorded + mixed at Gravesend Recordings and in Dripping Springs, TX with Carlos Hernandez. We both play all the instruments on this, Nadia sings. I’m very proud of this album. It helped me learn to step out on some other instruments — a major confidence turning point!" },
  { artist: "Ava Luna", title: "Moon 2", year: "2018", cover: "ava-luna-moon-2-2018.jpg", credit: "R/M/D", link: "", bandcamp: "a2089993768",
    notes: "Recorded in various empty homes in Hull, MA and SW Vermont, as well as various studios in NYC between Sept 2016 and Feb 2018. I played drums, some synths, some guitars, etc etc and was involved with engineering and mixing." },
  { artist: "Ava Luna", title: "Histoire de Melody Nelson", year: "2018", cover: "ava-luna-histoire-de-melody-nelson-2018.jpg", credit: "R/M/D", link: "", bandcamp: "a4015047227",
    notes: "Recorded and mixed at Gravesend Recordings with Carlos Hernandez. We did our best to respect the original Serge Gainsbourg album and then fuck it up where we could. I think it came out really well. Kudos to Simon for arranging the strings." },
  { artist: "Big Ups", title: "Two Parts Together", year: "2018", cover: "big-ups-two-parts-together-2018.jpg", credit: "R", link: "", bandcamp: "a1307757516",
    notes: "Recorded at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Gabby's World", title: "Beast On Beast", year: "2018", cover: "gabby-s-world-beast-on-beast-2018.jpg", credit: "M", link: "", bandcamp: "a709086890",
    notes: "Mixed at Gravesend Recordings with Carlos Hernandez. Carlos did the tracking at Gravesend too." },
  { artist: "Katie Von Schleicher", title: "Glad To Be Here/Party Dawn 7\"", year: "2018", cover: "katie-von-schleicher-glad-to-be-here-party-dawn-7-2018.jpg", credit: "M", link: "", bandcamp: "a233852222",
    notes: "Mixed at Buddy’s Palace with Katie." },
  { artist: "Speedy Ortiz", title: "Twerp Verse", year: "2018", cover: "speedy-ortiz-twerp-verse-2018.jpg", credit: "R", link: "", bandcamp: "a617950688",
    notes: "Recorded at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Birthing Hips", title: "Urge To Merge", year: "2018", cover: "birthing-hips-urge-to-merge-2018.jpg", credit: "R/M", link: "", bandcamp: "a2819877502",
    notes: "Recorded and mixed at Gravesend Recordings with Carlos Hernandez. Most of this album was tracked entirely live! RIP Birthing Hips." },
  { artist: "Miles Francis", title: "Swimmers", year: "2018", cover: "miles-francis-swimmers-2018.jpg", credit: "M", link: "", bandcamp: "a180467348",
    notes: "Mixed at Gravesend Recordings." },
  { artist: "Carlos Hernandez", title: "On Folly", year: "2018", cover: "carlos-hernandez-on-folly-2018.jpg", credit: "D", link: "",
    notes: "I got to play drums for this cut from Carlos’ solo album. Recorded in a very quick session at Gravesend Recordings." },
  { artist: "The Craters", title: "Underground", year: "2018", cover: "the-craters-underground-2018.jpg", credit: "M", link: "",
    notes: "Mixed at Buddy’s Palace." },
  { artist: "Holy Tunics", title: "Butter Dish", year: "2018", cover: "holy-tunics-butter-dish-2018.jpg", credit: "R/M", link: "", bandcamp: "a3524350442",
    notes: "Recorded and mixed at Gravesend Recordings." },
  { artist: "Moon Revenge", title: "Phrases That Remain", year: "2018", cover: "moon-revenge-phrases-that-remain-2018.jpg", credit: "P/M", link: "", bandcamp: "a1414515773" },
  { artist: "Moon Revenge", title: "Radiant Color", year: "2018", cover: "moon-revenge-radiant-color-2018.jpg", credit: "M", link: "", bandcamp: "t2599592240" },
  { artist: "Nicole Yun", title: "Tommie", year: "2018", cover: "nicole-yun-tommie-2018.jpg", credit: "M", link: "", bandcamp: "t1539289016" },
  { artist: "Speedy Ortiz", title: "Adult Swim Singles", year: "2018", cover: "speedy-ortiz-adult-swim-singles-2018.jpg", credit: "R", link: "", bandcamp: "a3099228070" },
  { artist: "Katie Von Schleicher", title: "Shitty Hits", year: "2017", cover: "katie-von-schleicher-shitty-hits-2017.jpg", credit: "R/D", link: "", bandcamp: "a1370137526",
    notes: "Recorded in Maryland with Katie + Adam. I played drums and some additional sounds on most of these songs as well." },
  { artist: "Francine", title: "When We Were Loud", year: "2018", cover: "francine-when-we-were-loud-2018.jpg", credit: "M", link: "", bandcamp: "a3114499074",
    notes: "Mixed at Gravesend Recordings. Francine is one of my favorite bands of all time — getting to work on their album was an actual dream come true. Thank you Clayton!" },
  { artist: "White Suns", title: "Psychic Drift", year: "2017", cover: "white-suns-psychic-drift-2017.jpg", credit: "R/M", link: "", bandcamp: "a3070133946",
    notes: "Recorded + mixed at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Shark?", title: "Abilene", year: "2017", cover: "shark-abilene-2017.jpg", credit: "M", link: "", bandcamp: "a3821858785" },
  { artist: "Cassandra Jenkins", title: "Play Till You Win", year: "2017", cover: "cassandra-jenkins-play-till-you-win-2017.jpg", credit: "D", link: "", bandcamp: "a3531278563" },
  { artist: "Dent May", title: "Across The Multiverse", year: "2017", cover: "dent-may-across-the-multiverse-2017.jpg", credit: "R", link: "", bandcamp: "a2410576664" },
  { artist: "Secret Crush", title: "Double Life", year: "2017", cover: "secret-crush-double-life-2017.jpg", credit: "R", link: "", bandcamp: "a3981556599" },
  { artist: "Wae", title: "Glimmer", year: "2017", cover: "wae-glimmer-2017.jpg", credit: "M", link: "", bandcamp: "a3396024367" },
  { artist: "Transcendental Telecom", title: "Midnite J", year: "2017", cover: "transcendental-telecom-midnite-j-2017.jpg", credit: "P/M", link: "", bandcamp: "a1381004880" },
  { artist: "Heliotropes", title: "Over There That Way", year: "2016", cover: "heliotropes-over-there-that-way-2016.jpg", credit: "D", link: "" },
  { artist: "Heroes Of Toolik", title: "Like Night", year: "2016", cover: "heroes-of-toolik-like-night-2016.jpg", credit: "R", link: "", bandcamp: "a4237116864" },
  { artist: "Very Fresh", title: "Hey, It's Me!", year: "2016", cover: "very-fresh-hey-it-s-me-2016.jpg", credit: "D", link: "", bandcamp: "a2392058019" },
  { artist: "Mobile Steam Unit", title: "Tank", year: "2016", cover: "mobile-steam-unit-tank-2016.jpg", credit: "R", link: "", bandcamp: "a4071111726" },
  { artist: "Krill", title: "Krill", year: "2016", cover: "krill-krill-2016.jpg", credit: "R/M", link: "", bandcamp: "a290982648" },
  { artist: "Transcendental Telecom", title: "Etherise", year: "2016", cover: "transcendental-telecom-etherise-2016.jpg", credit: "R/M", link: "", bandcamp: "a2799789449" },
  { artist: "Ava Luna", title: "Takamatsu Station", year: "2015", cover: "ava-luna-takamatsu-station-2015.jpg", credit: "R/M/D", link: "", bandcamp: "a712539962" },
  { artist: "Radical Dads", title: "Universal Coolers", year: "2015", cover: "radical-dads-universal-coolers-2015.jpg", credit: "M", link: "", bandcamp: "a758053309" },
  { artist: "Friend Roulette", title: "I See You. Your Eyes Are Red.", year: "2015", cover: "friend-roulette-i-see-you-your-eyes-are-red-2015.jpg", credit: "R", link: "", bandcamp: "a1383858862" },
  { artist: "Kid Millions & Sarah Bernstein", title: "Live At Gravesend Feb. 11, 2015", year: "2015", cover: "kid-millions-sarah-bernstein-live-at-gravesend-feb-11-2015-2015.jpg", credit: "M", link: "" },
  { artist: "Very Fresh", title: "Clean Touch", year: "2015", cover: "very-fresh-clean-touch-2015.jpg", credit: "R/M/D", link: "", bandcamp: "a34902709" },
  { artist: "Shark?", title: "Becky and Debbie EP", year: "2015", cover: "shark-becky-and-debbie-ep-2015.jpg", credit: "R", link: "", bandcamp: "a1307819870" },
  { artist: "Radical Dads", title: "Cassette Brain", year: "2014", cover: "radical-dads-cassette-brain-2014.jpg", credit: "M", link: "", bandcamp: "a426333945" },
  { artist: "Grass is Green", title: "Vacation Vinny", year: "2014", cover: "grass-is-green-vacation-vinny-2014.jpg", credit: "P/R", link: "", bandcamp: "a1350668934" },
  { artist: "Ovlov", title: "Greatest Hits Vol II/What's So Great About The City EP", year: "2011/2017", cover: "ovlov-greatest-hits-vol-ii-what-s-so-great-about-the-city-ep-2011-2017.jpg", credit: "R/M", link: "", bandcamp: "a4092774234",
    notes: "Recorded + mixed at the Trinity Korean Methodist Church Basement with Carlos Hernandez. I played mellotron on one song." },
  { artist: "Laser Background", title: "Dark Nuclear Bogs", year: "2017", cover: "laser-background-dark-nuclear-bogs-2017.jpg", credit: "R/M", link: "", bandcamp: "a2279471449",
    notes: "Recorded at the house in Cumming, GA with Carlos Hernandez, mixed at Gravesend Recordings, also with Carlos. I play lots of instruments on this, as does Carlos!" },
  { artist: "Operator Music Band", title: "Coordination", year: "2017", cover: "operator-music-band-coordination-2017.jpg", credit: "D", link: "", bandcamp: "a1570398995",
    notes: "Dara and Jared invited me to drum on this EP…I had a really good time playing with them!" },
  { artist: "Sad13", title: "Slugger", year: "2016", cover: "sad13-slugger-2016.jpg", credit: "R/D", link: "", bandcamp: "a2324250641",
    notes: "I drummed on most of this album and engineered a lot of it as well." },
  { artist: "Leapling", title: "Suspended Animation", year: "2016", cover: "leapling-suspended-animation-2016.jpg", credit: "M", link: "", bandcamp: "a1326748062",
    notes: "Mixed at Second Base with Dan Arnes." },
  { artist: "Laser Background", title: "Correct", year: "2016", cover: "laser-background-correct-2016.jpg", credit: "R/M", link: "", bandcamp: "a2548010699",
    notes: "Recorded and mixed at Gravesend Recordings with Carlos Hernandez. We both play a lot of instruments on this!" },
  { artist: "Cloud Becomes Your Hand", title: "Rest In Fleas", year: "2016", cover: "cloud-becomes-your-hand-rest-in-fleas-2016.jpg", credit: "R", link: "", bandcamp: "a2880046892",
    notes: "Recorded at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Mutual Benefit", title: "Skip A Sinking Stone", year: "2016", cover: "mutual-benefit-skip-a-sinking-stone-2016.jpg", credit: "R", link: "", bandcamp: "a2363501150",
    notes: "Recorded at Gravesend Recordings with Carlos Hernandez. I play percussion and make some sounds on some songs on this record. Carlos made some noises as well!" },
  { artist: "Ava Luna", title: "Infinite House", year: "2015", cover: "ava-luna-infinite-house-2015.jpg", credit: "R/D", link: "", bandcamp: "a4009937458",
    notes: "Recorded in Benton, MS at Cindy’s house and at Gravesend Recordings. Mixed by Dave Fridmann. Reminds me of hot afternoons in Mississippi, running to break up the day. Getting drunk at night and jamming until we had “Victoria”. I think this is my favorite." },
  { artist: "Um Are", title: "Um Are You Gonna Finish That", year: "2015", cover: "um-are-um-are-you-gonna-finish-that-2015.jpg", credit: "P/R/M/D", link: "", bandcamp: "a1155774230",
    notes: "A collection of songs that I wrote and performed on my own." },
  { artist: "Eartheater", title: "RIP Chrysalis", year: "2015", cover: "eartheater-rip-chrysalis-2015.jpg", credit: "R/M", link: "", bandcamp: "a916083512",
    notes: "Recorded and mixed two of the songs from this record at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Ava Luna", title: "Electric Balloon", year: "2015", cover: "ava-luna-electric-balloon-2015.jpg", credit: "R/D", link: "", bandcamp: "a2245806396",
    notes: "Recorded at the Kagan House in Franklin, NY over the course of a month. Mostly recorded by a crackling fire….a burst of inspiration. I played a bunch of instruments but mostly drums. Engineered it all with Carlos." },
  { artist: "Transcendental Telecom", title: "Escape From Shred City", year: "2015", cover: "transcendental-telecom-escape-from-shred-city-2015.jpg", credit: "R/M/D", link: "", bandcamp: "a1816992624",
    notes: "Drummed on this, as well as recorded and mixed it! Spencer is a long time friend and collaborator and we’ve worked together for many years. This EP is a blast of capital R Roc, which meant Spencer let me keep the drums very loud!" },
  { artist: "Mr Twin Sister", title: "s/t", year: "2014", cover: "mr-twin-sister-s-t-2014.jpg", credit: "R", link: "", bandcamp: "a2726895690",
    notes: "Engineered vocals + strings at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Palehound", title: "Kitchen", year: "2014", cover: "palehound-kitchen-2014.jpg", credit: "R/M", link: "", bandcamp: "a2617774795",
    notes: "Recorded and mixed at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Fang Island", title: "Starquake", year: "2014", cover: "fang-island-starquake-2014.jpg", credit: "R", link: "", bandcamp: "a3780541560" },
  { artist: "Conveyor", title: "Prime", year: "2014", cover: "conveyor-prime-2014.jpg", credit: "R", link: "", bandcamp: "t4192151078" },
  { artist: "Ex-Breathers / Ovlov / Woozy / Gnarwhal", title: "Split", year: "2014", cover: "ex-breathers-ovlov-woozy-gnarwhal-split-2014.jpg", credit: "M", link: "", bandcamp: "a2828127279" },
  { artist: "Conveyor", title: "Ani Mag", year: "2014", cover: "conveyor-ani-mag-2014.jpg", credit: "R/M", link: "", bandcamp: "a3710299697" },
  { artist: "death ray architect", title: "Basic EP", year: "2014", cover: "death-ray-architect-basic-ep-2014.jpg", credit: "R/M", link: "", bandcamp: "a2915347135" },
  { artist: "death ray architect", title: "Command Line", year: "2014", cover: "death-ray-architect-command-line-2014.jpg", credit: "R", link: "", bandcamp: "t3627839616" },
  { artist: "Krill", title: "Lucky Leaves", year: "2013", cover: "krill-lucky-leaves-2013.jpg", credit: "R/M", link: "", bandcamp: "a972777722",
    notes: "Recorded and mixed at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Palehound", title: "Bent Nail", year: "2013", cover: "palehound-bent-nail-2013.jpg", credit: "R/M/D", link: "", bandcamp: "a2058577082",
    notes: "Recorded and mixed at Gravesend Recordings with Carlos Hernandez. I played drums and Carlos played bass on most of this EP." },
  { artist: "Krill", title: "Steve Hears Pile In Malden and Bursts Into Tears", year: "2014", cover: "krill-steve-hears-pile-in-malden-and-bursts-into-tears-2014.jpg", credit: "R/M", link: "", bandcamp: "a2851497189",
    notes: "Recorded and mixed at Gravesend Recordings with Carlos Hernandez." },
  { artist: "Shark?", title: "Savior", year: "2013", cover: "shark-savior-2013.jpg", credit: "R/M", link: "", bandcamp: "a3561996672" },
  { artist: "Radical Dads", title: "Creature Out", year: "2013", cover: "radical-dads-creature-out-2013.jpg", credit: "R/M", link: "", bandcamp: "a3031004612" },
  { artist: "Ava Luna", title: "Ice Level", year: "2012", cover: "ava-luna-ice-level-2012.jpg", credit: "M/D", link: "", bandcamp: "a2054268561",
    notes: "Recorded in Gary’s basement in Ditmas Park in one day! Mixed by Carlos mostly, with some help from me." },
  { artist: "Dialogue From a Silent Film", title: "Urban Surreal", year: "2012", cover: "dialogue-from-a-silent-film-urban-surreal-2012.jpg", credit: "D", link: "", bandcamp: "a456846371" },
  { artist: "Ava Luna", title: "Wrenning Day", year: "2012", cover: "ava-luna-wrenning-day-2012.jpg", credit: "R/D", link: "" },
  { artist: "Very Fresh", title: "Kitsch Tapes EP", year: "2012", cover: "very-fresh-kitsch-tapes-ep-2012.jpg", credit: "Ma", link: "", bandcamp: "a324363187" },
  { artist: "Total Slacker", title: "Thrashin'", year: "2011", cover: "total-slacker-thrashin-2011.jpg", credit: "R/M", link: "", bandcamp: "t3758683409",
    notes: "Recorded and mixed at Trinity Korean Methodist Church with Carlos Hernandez." },
  { artist: "Ovlov", title: "Not The Same Without You", year: "2010", cover: "ovlov-not-the-same-without-you-2010.jpg", credit: "P/M", link: "" },
  { artist: "Ava Luna", title: "Lemming", year: "2007", cover: "ava-luna-lemming-2007.jpg", credit: "R/D", link: "" },
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

  function bcPath(id) {
    const m = String(id).match(/^([at]?)(\d+)$/);
    return (m && m[1] === "t" ? "track=" : "album=") + (m ? m[2] : "");
  }
  function open(r) {
    lastFocus = document.activeElement;
    frame.innerHTML = `<iframe title="${esc(r.artist)}, ${esc(r.title)} on Bandcamp"
      src="https://bandcamp.com/EmbeddedPlayer/${bcPath(r.bandcamp)}/size=large/bgcol=ffffff/linkcol=3a8a86/tracklist=true/artwork=small/transparent=true/"
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
