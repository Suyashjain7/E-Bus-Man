# Firebase Setup for E-Bus System

This guide will help you set up Firebase for your E-Bus Management System.

## 🚀 **Step 1: Create Firebase Project**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `e-bus-system` (or your preferred name)
4. Enable Google Analytics (optional)
5. Click "Create project"

## 🔧 **Step 2: Enable Firebase Services**

### **Authentication**
1. In Firebase Console, go to "Authentication" → "Sign-in method"
2. Enable "Email/Password" provider
3. Click "Save"

### **Firestore Database**
1. Go to "Firestore Database" → "Create database"
2. Choose "Start in test mode" (for development)
3. Select a location close to your users
4. Click "Done"

### **Storage (Optional)**
1. Go to "Storage" → "Get started"
2. Choose "Start in test mode"
3. Select a location
4. Click "Done"

## 📱 **Step 3: Get Firebase Configuration**

1. In Firebase Console, click the gear icon ⚙️ → "Project settings"
2. Scroll down to "Your apps" section
3. Click the web icon (</>)
4. Register app with name: `e-bus-web`
5. Copy the configuration object

## 🔑 **Step 4: Update Firebase Config**

Replace the placeholder values in `src/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

## 📦 **Step 5: Install Dependencies**

```bash
npm install
```

This will install Firebase and other required packages.

## 🗄️ **Step 6: Firestore Database Structure**

The system will automatically create these collections:

### **Users Collection**
```javascript
users: {
  [userId]: {
    firstName: string,
    lastName: string,
    email: string,
    role: 'user',
    createdAt: timestamp
  }
}
```

### **Drivers Collection**
```javascript
drivers: {
  [driverId]: {
    email: string,
    role: 'driver',
    createdAt: timestamp
  }
}
```

### **Buses Collection**
```javascript
buses: {
  [busId]: {
    route: string,
    busType: string,
    departure: string,
    arrival: string,
    price: string,
    seats: number,
    operator: string,
    details: string,
    contact: string,
    status: 'active',
    createdAt: timestamp
  }
}
```

## 🔒 **Step 7: Security Rules (Optional)**

### **Firestore Security Rules**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Drivers can read/write their own data
    match /drivers/{driverId} {
      allow read, write: if request.auth != null && request.auth.uid == driverId;
    }
    
    // Buses are readable by all, writable by authenticated users
    match /buses/{busId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### **Storage Security Rules**
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 🧪 **Step 8: Test the Setup**

1. Start your development server:
   ```bash
   npm start
   ```

2. Test user registration and login
3. Test admin login with `admin@123` / `admin123`
4. Test adding bus information
5. Test searching buses

## 📊 **Step 9: Firebase Console Features**

### **Monitor Usage**
- Go to "Usage and billing" to monitor API calls
- Check "Authentication" for user sign-ups
- View "Firestore Database" for data

### **Analytics (Optional)**
- Enable Google Analytics in project settings
- Track user behavior and app performance

## 🚨 **Important Notes**

1. **Never commit Firebase config with real API keys to public repositories**
2. **Use environment variables for production**
3. **Test security rules thoroughly before production**
4. **Monitor Firebase usage to avoid unexpected charges**

## 🔧 **Environment Variables (Production)**

Create a `.env` file in your project root:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

Then update `src/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
```

## 🎯 **Next Steps**

After setup, you can:
1. **Customize security rules** based on your requirements
2. **Add more Firebase services** like Cloud Functions
3. **Implement real-time updates** using Firestore listeners
4. **Add push notifications** using Firebase Cloud Messaging
5. **Set up monitoring** and error tracking

Your E-Bus system is now connected to Firebase! 🎉
