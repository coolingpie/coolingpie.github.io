# julianfader.space

Plain HTML site hosted on GitHub Pages. Edit a file, commit, and it's live in a minute or two.

## What to edit

| To change... | Edit |
|---|---|
| The record grid on the home page | `assets/records.js` |
| Nav links and footer links | `assets/site.js` |
| Colors and fonts | top of `assets/style.css` |
| Page text | `composition.html`, `drums.html`, `me.html`, `free.html` |
| Composition videos | `composition.html` (instructions are in a comment near the top) |
| The "More Original Music" playlist | drop an MP3 in `audio/`, add its filename to the list near the bottom of `composition.html` |
| Buy Music Club embed | `index.html` |
| Browser tab icon | `images/favicon.png` |

Album covers go in `images/covers/`, video stills in `images/posters/`, videos in `videos/`.
Keep each file under 100 MB (GitHub's per-file limit). Anything bigger belongs on YouTube or Vimeo.

## How publishing works

Every commit to `main` runs `build.js` on GitHub, which copies the site and writes the header,
footer and record grid straight into each page. That way search engines and link previews can
read your credits without running any JavaScript. You never need to run it yourself.

If something goes wrong (say, a typo in `records.js`), the build fails, GitHub emails you, and the
live site stays on the last version that worked. Details are under the repo's **Actions** tab.

This needs **Settings > Pages > Source** set to **GitHub Actions**.

## Blog

The Blog link goes to Substack. Set the address in `assets/site.js`.

## Previewing on your own computer

Open Terminal in this folder and run `python3 -m http.server`, then visit http://localhost:8000.
(Opening the HTML files directly by double-clicking won't load the styles, because links start with `/`.)

The preview works without building: the pages fill in the header, footer and records themselves
when they haven't been pre-built.
