# julianfader.space

Plain HTML site hosted on GitHub Pages. No build step: edit a file, commit, and it's live in about a minute.

## What to edit

| To change... | Edit |
|---|---|
| The record grid on the home page | `assets/records.js` |
| Nav links, footer links, contact email in footer | `assets/site.js` |
| Colors and fonts | top of `assets/style.css` |
| Page text | `composition.html`, `drums.html`, `me.html`, `free.html` |
| Buy Music Club embed | `index.html` |

## Step 1: get your images and videos (do this before cancelling Squarespace)

In Terminal, run:

    bash ~/Downloads/julianfader.space/get-images.sh

That downloads your logo, photos and all 66 album covers into `images/`.

The four Composition videos are hosted by Squarespace and will disappear when you cancel.
Save them with (needs `brew install ffmpeg` first):

    bash get-videos.sh

They land in `videos/` with the names the Composition page expects. Keep each under 100 MB
(GitHub's per-file limit). If one is bigger, upload it to YouTube or Vimeo instead.

Optional: add `images/favicon.png`, a small square icon for the browser tab.

## Blog

The Blog link goes to Substack. Set the address in `assets/site.js`.

## Previewing on your own computer

Open Terminal in this folder and run `python3 -m http.server`, then visit http://localhost:8000.
(Opening the HTML files directly by double-clicking won't load the styles, because links start with `/`.)
