@echo off
echo.
echo 🔥 Firebase Setup for E-Bus System
echo ===================================
echo.

echo 📋 Step 1: Checking if .env file exists...
if not exist .env (
    echo ❌ .env file not found
    echo 📝 Creating .env file from template...
    copy env.example .env
    echo ✅ .env file created!
    echo.
    echo ⚠️  IMPORTANT: You need to edit .env file with your Firebase configuration
    echo.
) else (
    echo ✅ .env file found
)

echo.
echo 📦 Step 2: Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)
echo ✅ Dependencies installed successfully!

echo.
echo 🔍 Step 3: Checking Firebase configuration...
node -e "
const fs = require('fs');
const path = require('path');

// Check if .env exists
if (!fs.existsSync('.env')) {
    console.log('❌ .env file not found');
    process.exit(1);
}

// Read .env file
const envContent = fs.readFileSync('.env', 'utf8');

// Check for placeholder values
const placeholders = ['your-api-key', 'your-project-id', 'your-messaging-sender-id', 'your-app-id'];
let hasPlaceholders = false;

placeholders.forEach(placeholder => {
    if (envContent.includes(placeholder)) {
        console.log('❌ Found placeholder:', placeholder);
        hasPlaceholders = true;
    }
});

if (hasPlaceholders) {
    console.log('');
    console.log('🚨 FIREBASE NOT CONFIGURED!');
    console.log('');
    console.log('📋 Next steps:');
    console.log('1. Go to https://console.firebase.google.com/');
    console.log('2. Create a new project or select existing');
    console.log('3. Enable Authentication and Firestore');
    console.log('4. Get your configuration from Project Settings');
    console.log('5. Edit .env file with your actual Firebase values');
    console.log('6. Run this script again');
    console.log('');
    process.exit(1);
} else {
    console.log('✅ Firebase configuration looks good!');
    console.log('🚀 Ready to start the application!');
}
"

if %errorlevel% neq 0 (
    echo.
    echo 📝 Please configure Firebase and run this script again
    pause
    exit /b 1
)

echo.
echo 🚀 Step 4: Starting the application...
echo The app will open at http://localhost:3000
echo.
call npm start
