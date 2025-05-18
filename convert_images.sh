#!/bin/bash

# Ensure output directories exist
mkdir -p ./public/images/screenshots
mkdir -p ./public/images/thumbnails

# Task 1: Convert originals to WebP format with 90% quality
echo "Screenshots:"
for img in ./src/images/*.png; do
  [ -f "$img" ] || continue  # Skip if no matches found
  filename=$(basename -- "$img")
  name="${filename%.*}"
  convert "$img" -resize 1400x -quality 80 "./public/images/screenshots/${name}.webp"
  echo "- ${name}"
done

# Task 2: Scale originals to 300px wide and save as WebP with 80% quality
echo "Thumbnails:"
for img in ./src/images/*.png; do
  [ -f "$img" ] || continue  # Skip if no matches found
  filename=$(basename -- "$img")
  name="${filename%.*}"
  convert "$img" \
    -filter Mitchell \
    -resize 520x \
    -unsharp 0.25x0.25+8+0.065 \
    -quality 100 \
    "./public/images/thumbnails/${name}.webp"
  echo "- ${name}"
done

echo "Conversion complete!"