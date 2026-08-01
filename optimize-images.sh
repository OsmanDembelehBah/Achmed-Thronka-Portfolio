#!/bin/bash

echo "🖼️ Optimizing images for faster loading..."

# Install imagemin if needed
# npm install -g imagemin-cli

# Optimize all images in public folder
if command -v imagemin &> /dev/null; then
  imagemin public/images/**/*.{jpg,jpeg,png} --out-dir=public/images --plugin=jpegoptim --plugin=pngquant
  echo "✅ Images optimized!"
else
  echo "⚠️  imagemin not installed. Run: npm install -g imagemin-cli"
  echo "📝 For now, images will load as-is."
fi

echo "✅ Done!"
