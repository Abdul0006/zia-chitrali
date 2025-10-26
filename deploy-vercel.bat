@echo off
REM Deployment script for Vercel on Windows

echo Preparing for deployment...

REM Check if vercel CLI is installed
vercel --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Vercel CLI is not installed. Installing...
    npm install -g vercel
)

REM Build the project
echo Building the project...
npm run build

REM Check if build was successful
if %ERRORLEVEL% EQU 0 (
    echo Build successful!
    echo Ready for deployment to Vercel
    echo.
    echo To deploy:
    echo 1. Login to Vercel: vercel login
    echo 2. Deploy: vercel --prod
) else (
    echo Build failed. Please check the errors above.
    exit /b 1
)