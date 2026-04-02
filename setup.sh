#!/bin/bash

echo ""
echo "===================================="
echo "Portfolio Website Setup Guide"
echo "===================================="
echo ""
echo "This script will help you get started."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "[!] Node.js is not installed."
    echo ""
    echo "STEP 1: Install Node.js"
    echo "-------"
    echo "1. Visit: https://nodejs.org/"
    echo "2. Download the LTS (Long Term Support) version"
    echo "3. Run the installer"
    echo "4. Restart your terminal"
    echo ""
    echo "STEP 2: After installing Node.js, run this script again"
    echo ""
    exit 1
fi

echo "[✓] Node.js is installed:"
node -v

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "[!] npm is not available. Please restart your terminal."
    exit 1
fi

echo "[✓] npm is available:"
npm -v
echo ""

# Install dependencies
echo "STEP 1: Installing dependencies..."
echo "-------"
npm install
if [ $? -ne 0 ]; then
    echo "[!] Error installing dependencies"
    exit 1
fi

echo ""
echo "[✓] Dependencies installed successfully!"
echo ""
echo "STEP 2: Starting the server..."
echo "-------"
echo ""
echo "The website will be available at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server."
echo ""

npm start
