#!/bin/bash
# Deployment script for Vercel

echo "Preparing for deployment..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo "Ready for deployment to Vercel"
    echo ""
    echo "To deploy:"
    echo "1. Install Vercel CLI: npm install -g vercel"
    echo "2. Login to Vercel: vercel login"
    echo "3. Deploy: vercel --prod"
else
    echo "Build failed. Please check the errors above."
    exit 1
fi