@echo off
echo.
echo ====================================
echo Portfolio Website Setup Guide
echo ====================================
echo.
echo This script will help you get started.
echo.

REM Check if Node.js is installed
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] Node.js is not installed.
    echo.
    echo STEP 1: Install Node.js
    echo -------
    echo 1. Visit: https://nodejs.org/
    echo 2. Download the LTS (Long Term Support) version
    echo 3. Run the installer and follow the prompts
    echo 4. Restart your terminal after installation
    echo.
    echo STEP 2: After installing Node.js, run this again
    echo.
    pause
    exit /b
)

echo [✓] Node.js is installed: 
node -v

REM Check if npm is available
npm -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] npm is not available. Please restart your terminal.
    pause
    exit /b
)

echo [✓] npm is available: 
npm -v
echo.

REM Install dependencies
echo STEP 1: Installing dependencies...
echo -------
npm install
if %errorlevel% neq 0 (
    echo [!] Error installing dependencies
    pause
    exit /b
)

echo.
echo [✓] Dependencies installed successfully!
echo.
echo STEP 2: Starting the server...
echo -------
echo.
echo The website will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server.
echo.

npm start
pause
