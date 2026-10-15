#!/bin/bash
# Saves the four Composition videos from your Squarespace site as MP4s in videos/.
# Needs ffmpeg:  brew install ffmpeg
# Run once, BEFORE you cancel Squarespace:  bash get-videos.sh
cd "$(dirname "$0")"
if ! command -v ffmpeg >/dev/null; then
  echo "ffmpeg isn't installed. Run:  brew install ffmpeg   then try again."; exit 1
fi
mkdir -p videos
B="https://video.squarespace-cdn.com/content/v1/5bbcf060840b16c55d15a1b2"
save() {
  echo "Saving $2 ..."
  ffmpeg -hide_banner -loglevel error -y -extension_picky 0 -i "$B/$1/playlist.m3u8" -c copy -bsf:a aac_adtstoasc "videos/$2" \
    && echo "  done ($(du -h "videos/$2" | cut -f1))" || echo "  FAILED: $2"
}
save ca09e62a-9979-4558-857c-ee530e4d4edf ford-dust-and-dreams.mp4
save 45733a0f-e0c2-47bb-a30d-e88e3fef264d arm-and-hammer-walking-the-cat.mp4
save 5e93ff11-1556-4844-a325-525b2b563fdf capital-group-one.mp4
save f791e9b1-8640-4ed0-8e58-7a13154533c6 doordash-big-strut.mp4
echo "All done. Check the files in the videos folder."
