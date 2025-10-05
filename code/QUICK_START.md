# 🚀 Quick Start Guide - E-Bus Management System

## ⚠️ **IMPORTANT: Use React App, Not HTML Files**

The error you're experiencing happens because you're opening the old HTML files instead of the new React application.

## 🎯 **Correct Way to Run the Application:**

### **Method 1: Using the Batch File (Easiest)**
1. **Double-click `start-app.bat`** in your project folder
2. Wait for the app to start
3. It will automatically open at `http://localhost:3000`

### **Method 2: Manual Commands**
1. **Open PowerShell/Command Prompt** in your project folder
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the app:**
   ```bash
   npm start
   ```
4. **Open browser to:** `http://localhost:3000`

## 🔗 **Correct URLs to Use:**

- ✅ **Home Page:** `http://localhost:3000/`
- ✅ **User Registration:** `http://localhost:3000/user-register`
- ✅ **Admin Login:** `http://localhost:3000/admin-login`
- ✅ **Driver Login:** `http://localhost:3000/driver-login`
- ✅ **Search Buses:** `http://localhost:3000/search-bus`

## ❌ **Don't Use These (Old HTML Files):**
- ❌ `user.html` - This causes the error
- ❌ `adminlogin.html` - Use React version instead
- ❌ `driver.html` - Use React version instead

## 🔧 **If You Still Get Errors:**

### **1. Clear Browser Cache:**
- Press `Ctrl + F5` to hard refresh
- Or clear browser cache completely

### **2. Check Console for Errors:**
- Press `F12` to open Developer Tools
- Look at the Console tab for any errors

### **3. Restart the Development Server:**
- Press `Ctrl + C` to stop the server
- Run `npm start` again

## 🎨 **Features Available:**

### **User Registration & Login:**
- Real Firebase authentication
- Form validation
- Error handling

### **Admin Panel:**
- Login with `admin@123` / `admin123`
- Access to driver management
- Bus information management

### **Bus Search:**
- Search buses by route
- Real-time results
- Booking functionality

### **Modern UI:**
- Curvy, rounded design
- Orange and light grey theme
- Responsive layout

## 🚨 **Troubleshooting:**

### **"registerUser is not defined" Error:**
- **Cause:** You're using old HTML files
- **Solution:** Use React app at `http://localhost:3000`

### **"Module not found" Error:**
- **Cause:** Dependencies not installed
- **Solution:** Run `npm install`

### **"Firebase not configured" Error:**
- **Cause:** Firebase config missing
- **Solution:** Follow `FIREBASE_SETUP.md` guide

## 📱 **Testing the Application:**

1. **Start the app** using one of the methods above
2. **Go to User Registration:** `http://localhost:3000/user-register`
3. **Fill out the form** and click Register
4. **Check for success message**
5. **Try logging in** with the same credentials

## 🎉 **Success Indicators:**

- ✅ App opens at `http://localhost:3000`
- ✅ No console errors
- ✅ Forms work properly
- ✅ Success/error messages appear
- ✅ Navigation works between pages

Your E-Bus Management System is now ready to use! 🚌
