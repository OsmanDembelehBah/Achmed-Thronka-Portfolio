#!/bin/bash

echo "🖼️ Optimizing images for faster loading..."

# Install jpegoptim if not installed
if ! command -v jpegoptim &> /dev/null; then
  echo "Installing jpegoptim..."
  sudo apt-get install -y jpegoptim 2>/dev/null || brew install jpegoptim 2>/dev/null
fi

# Optimize images in public folder
if [ -d "public/images" ]; then
  echo "Optimizing images in public/images..."
  find public/images -name "*.jpg" -o -name "*.jpeg" | xargs jpegoptim --max=75 --strip-all 2>/dev/null
  echo "✅ Images optimized!"
else
  echo "📁 public/images folder not found. Run: cp -r src/assets/images/* public/images/"
fi

echo "✅ Done!"
