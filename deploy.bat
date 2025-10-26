@echo off
REM Deployment script for Vercel on Windows

echo Preparing for deployment...

REM Install dependencies
echo Installing dependencies...
npm install

REM Build the project
echo Building the project...
npm run build

REM Check if build was successful
if %ERRORLEVEL% EQU 0 (
    echo Build successful!
    echo Ready for deployment to Vercel
    echo.
    echo To deploy:
    echo 1. Install Vercel CLI: npm install -g vercel
    echo 2. Login to Vercel: vercel login
    echo 3. Deploy: vercel --prod
) else (
    echo Build failed. Please check the errors above.
    exit /b 1
)