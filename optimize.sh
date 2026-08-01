#!/bin/bash

echo "🖼️ Optimizing images for faster loading..."

# Check if images are in public folder
if [ -d "public/images" ]; then
  echo "📁 Optimizing images in public/images..."
  
  # Use jpegoptim if available
  if command -v jpegoptim &> /dev/null; then
    find public/images -name "*.jpg" -o -name "*.jpeg" | xargs jpegoptim --max=85 --strip-all 2>/dev/null
    echo "✅ JPEG images optimized!"
  else
    echo "⚠️ jpegoptim not installed. Run: sudo apt install jpegoptim"
  fi
  
  # Use optipng if available
  if command -v optipng &> /dev/null; then
    find public/images -name "*.png" | xargs optipng -o2 2>/dev/null
    echo "✅ PNG images optimized!"
  else
    echo "⚠️ optipng not installed. Run: sudo apt install optipng"
  fi
else
  echo "📁 public/images folder not found. Run: cp -r src/assets/images/* public/images/"
fi

echo "✅ Done!"
