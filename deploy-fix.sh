#!/bin/bash

echo "🚀 Fixing GitHub Pages Deployment"
echo "================================"

# Build the project
echo "📦 Building project..."
npm run build:client

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Switch to gh-pages branch
echo "🌿 Switching to gh-pages branch..."
git checkout gh-pages

# Remove ALL files except .git
echo "🧹 Cleaning branch completely..."
git rm -rf . 2>/dev/null || true

# Copy files from dist/public to root (not to a dist folder)
echo "📁 Copying built files to root..."
cp -r dist/public/* .

# Remove the dist folder if it was copied
rm -rf dist

# Add and commit
echo "📝 Committing changes..."
git add .
git commit -m "Fix deployment structure - $(date)"

# Push
echo "🚀 Pushing to GitHub..."
git push origin gh-pages

# Switch back to main
echo "🔄 Switching back to main..."
git checkout main

echo "✅ Deployment fixed!"
echo "🌐 Your site should now work at: https://odphineguy.github.io/jess-mobile-bar-1/"
