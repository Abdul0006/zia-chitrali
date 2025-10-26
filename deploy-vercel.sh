#!/bin/bash
# Deployment script for Vercel

echo "Preparing for deployment..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "Vercel CLI is not installed. Installing..."
    npm install -g vercel
fi

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo "Ready for deployment to Vercel"
    echo ""
    echo "To deploy:"
    echo "1. Login to Vercel: vercel login"
    echo "2. Deploy: vercel --prod"
else
    echo "Build failed. Please check the errors above."
    exit 1
fi