// Firebase Setup Checker
// Run this with: node check-firebase-setup.js

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking Firebase Setup...\n');

// Check if firebase.js exists
const firebasePath = path.join(__dirname, 'src', 'firebase.js');
if (!fs.existsSync(firebasePath)) {
  console.log('❌ src/firebase.js not found');
  process.exit(1);
}

// Read firebase.js content
const firebaseContent = fs.readFileSync(firebasePath, 'utf8');

// Check for placeholder values
const placeholders = [
  'your-api-key',
  'your-project-id',
  'your-messaging-sender-id',
  'your-app-id'
];

let hasPlaceholders = false;
placeholders.forEach(placeholder => {
  if (firebaseContent.includes(placeholder)) {
    console.log(`❌ Found placeholder: ${placeholder}`);
    hasPlaceholders = true;
  }
});

if (hasPlaceholders) {
  console.log('\n🚨 FIREBASE NOT CONFIGURED!');
  console.log('You need to:');
  console.log('1. Create a Firebase project');
  console.log('2. Get your configuration');
  console.log('3. Update src/firebase.js with real values');
  console.log('\nSee FIREBASE_SETUP.md for detailed instructions');
} else {
  console.log('✅ Firebase configuration looks good!');
}

// Check if node_modules exists
if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
  console.log('❌ Dependencies not installed');
  console.log('Run: npm install');
} else {
  console.log('✅ Dependencies installed');
}

console.log('\n📋 Next steps:');
console.log('1. Follow FIREBASE_SETUP.md');
console.log('2. Update src/firebase.js');
console.log('3. Run: npm start');
