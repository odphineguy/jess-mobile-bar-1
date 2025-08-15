#!/bin/bash

# Jess's Mobile Bar - Deployment Script
echo "🚀 Deploying Jess's Mobile Bar to GitHub Pages..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build completed successfully!"

# Check git status
echo "📋 Checking git status..."
git status

# Ask user if they want to commit and push
read -p "Do you want to commit and push to GitHub? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Add all changes
    echo "📝 Adding changes to git..."
    git add .
    
    # Commit
    echo "💾 Committing changes..."
    git commit -m "Update website - $(date)"
    
    # Push
    echo "🚀 Pushing to GitHub..."
    git push origin main
    
    echo "✅ Deployment initiated! Check GitHub Actions for build status."
    echo "🌐 Your site will be available at: https://yourusername.github.io/jess-mobile-bar-1/"
else
    echo "⏸️  Deployment cancelled."
fi
