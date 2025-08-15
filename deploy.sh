#!/bin/bash

echo "🚀 Deploying Jess's Mobile Bar Website"
echo "====================================="

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

# Remove all files except .git
echo "🧹 Cleaning branch..."
git rm -rf . 2>/dev/null || true

# Copy built files
echo "📁 Copying built files..."
cp -r dist/public/* .

# Add and commit
echo "📝 Committing changes..."
git add .
git commit -m "Deploy website - $(date)"

# Push
echo "🚀 Pushing to GitHub..."
git push origin gh-pages

# Switch back to main
echo "🔄 Switching back to main..."
git checkout main

echo "✅ Deployment complete!"
echo "🌐 Your site: https://odphineguy.github.io/jess-mobile-bar-1/"
