#!/bin/bash

# Solid TuiCSS Playground Deployment Script
# Usage: ./scripts/deploy.sh [target]
# Targets: github, netlify, surge, local

set -e

TARGET=${1:-local}
PLAYGROUND_DIR="playground"
DIST_DIR="$PLAYGROUND_DIR/dist"

echo "🚀 Deploying Solid TuiCSS Playground to: $TARGET"

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -d "$PLAYGROUND_DIR" ]; then
    echo "❌ Error: Run this script from the project root directory"
    exit 1
fi

# Install dependencies if needed
echo "📦 Installing dependencies..."
if [ ! -d "node_modules" ]; then
    npm install
fi

cd $PLAYGROUND_DIR
if [ ! -d "node_modules" ]; then
    npm install
fi

# Build the playground
echo "🔨 Building playground..."
npm run build

cd ..

# Deploy based on target
case $TARGET in
    "github")
        echo "🐙 Deploying to GitHub Pages..."
        echo "Push to main branch to trigger automatic deployment"
        echo "Manual upload: Upload contents of $DIST_DIR to GitHub Pages"
        ;;
    
    "netlify")
        echo "🌐 Deploying to Netlify..."
        if command -v netlify &> /dev/null; then
            cd $DIST_DIR
            netlify deploy --prod --dir=.
            cd ../../
        else
            echo "❌ Netlify CLI not found. Install with: npm install -g netlify-cli"
            echo "Or drag & drop the $DIST_DIR folder to https://app.netlify.com/drop"
        fi
        ;;
    
    "surge")
        echo "⚡ Deploying to Surge.sh..."
        if command -v surge &> /dev/null; then
            cd $DIST_DIR
            surge . solid-tuicss-demo.surge.sh
            cd ../../
        else
            echo "❌ Surge CLI not found. Install with: npm install -g surge"
        fi
        ;;
    
    "local")
        echo "🏠 Starting local preview..."
        cd $PLAYGROUND_DIR
        npm run preview &
        PREVIEW_PID=$!
        echo "Preview running at http://localhost:4173"
        echo "Press Ctrl+C to stop"
        wait $PREVIEW_PID
        ;;
    
    *)
        echo "❌ Unknown target: $TARGET"
        echo "Available targets: github, netlify, surge, local"
        exit 1
        ;;
esac

echo "✅ Deployment to $TARGET completed!"