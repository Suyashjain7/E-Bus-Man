// Firebase Setup Validation Utility
import { auth, db } from '../firebase';
import { connectAuthEmulator, connectFirestoreEmulator } from 'firebase/firestore';

// Check if Firebase is properly configured
export const validateFirebaseSetup = async () => {
  const issues = [];
  const warnings = [];

  // Check environment variables
  const requiredEnvVars = [
    'REACT_APP_FIREBASE_API_KEY',
    'REACT_APP_FIREBASE_AUTH_DOMAIN',
    'REACT_APP_FIREBASE_PROJECT_ID'
  ];

  requiredEnvVars.forEach(envVar => {
    const value = process.env[envVar];
    if (!value) {
      issues.push(`❌ Missing environment variable: ${envVar}`);
    } else if (value.includes('your-') || value.includes('demo-')) {
      issues.push(`❌ ${envVar} contains placeholder value: ${value}`);
    }
  });

  // Check if Firebase services are accessible
  try {
    // Test Auth service
    if (auth) {
      warnings.push('✅ Firebase Auth initialized');
    } else {
      issues.push('❌ Firebase Auth not initialized');
    }

    // Test Firestore service
    if (db) {
      warnings.push('✅ Firebase Firestore initialized');
    } else {
      issues.push('❌ Firebase Firestore not initialized');
    }
  } catch (error) {
    issues.push(`❌ Firebase initialization error: ${error.message}`);
  }

  return {
    isValid: issues.length === 0,
    issues,
    warnings
  };
};

// Test Firebase connection
export const testFirebaseConnection = async () => {
  try {
    // Try to access Firestore (this will fail if not configured)
    const testDoc = await db.collection('test').doc('connection').get();
    return { success: true, message: 'Firebase connection successful' };
  } catch (error) {
    return { 
      success: false, 
      message: `Firebase connection failed: ${error.message}`,
      suggestion: 'Please check your Firebase configuration and ensure the project exists'
    };
  }
};

// Display setup status
export const displayFirebaseStatus = (validation) => {
  console.log('\n🔥 Firebase Setup Status:');
  console.log('========================');
  
  if (validation.isValid) {
    console.log('✅ Firebase is properly configured!');
  } else {
    console.log('❌ Firebase setup issues found:');
    validation.issues.forEach(issue => console.log(`  ${issue}`));
  }
  
  if (validation.warnings.length > 0) {
    console.log('\n📋 Status:');
    validation.warnings.forEach(warning => console.log(`  ${warning}`));
  }
  
  if (!validation.isValid) {
    console.log('\n🔧 To fix these issues:');
    console.log('1. Create a Firebase project at https://console.firebase.google.com/');
    console.log('2. Enable Authentication and Firestore');
    console.log('3. Get your configuration from Project Settings');
    console.log('4. Copy env.example to .env and fill in your values');
    console.log('5. Restart the development server');
  }
};
