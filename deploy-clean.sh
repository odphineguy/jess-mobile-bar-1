#!/bin/bash

echo "🚀 Clean Deployment for Jess's Mobile Bar"
echo "========================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Build the project
echo "📦 Building the project..."
npm run build:client

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build completed successfully!"

# Check if dist/public exists
if [ ! -d "dist/public" ]; then
    echo "❌ Error: dist/public directory not found after build."
    exit 1
fi

# Create a temporary directory for deployment
echo "📁 Preparing deployment files..."
TEMP_DIR=$(mktemp -d)
cp -r dist/public/* "$TEMP_DIR/"

# Switch to gh-pages branch
echo "🌿 Setting up gh-pages branch..."
git checkout -b gh-pages 2>/dev/null || git checkout gh-pages

# Remove all files except .git
echo "🧹 Cleaning gh-pages branch..."
git rm -rf . 2>/dev/null || true

# Copy only the built files
echo "📁 Copying built files..."
cp -r "$TEMP_DIR"/* .

# Clean up temp directory
rm -rf "$TEMP_DIR"

# Add all files
echo "📝 Adding files to git..."
git add .

# Commit
echo "💾 Committing changes..."
git commit -m "Deploy Jess's Mobile Bar website - $(date)"

# Push to gh-pages branch
echo "🚀 Pushing to gh-pages branch..."
git push origin gh-pages --force

# Switch back to main branch
echo "🔄 Switching back to main branch..."
git checkout main

echo "✅ Clean deployment completed!"
echo "🌐 Your site should be available at: https://odphineguy.github.io/jess-mobile-bar-1/"
echo ""
echo "Note: You may need to enable GitHub Pages in your repository settings:"
echo "1. Go to Settings > Pages"
echo "2. Set Source to 'Deploy from a branch'"
echo "3. Select 'gh-pages' branch"
echo "4. Click Save"
