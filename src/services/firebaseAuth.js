import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

// User registration
export const registerUser = async (email, password, userData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Save additional user data to Firestore
    await setDoc(doc(db, 'users', user.uid), {
      ...userData,
      email: user.email,
      createdAt: new Date(),
      role: 'user'
    });
    
    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// User login
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Admin login (custom validation)
export const adminLogin = async (email, password) => {
  try {
    // Check if it's the admin credentials
    if (email === 'admin@123' && password === 'admin123') {
      // For admin, we'll create a custom admin session
      // In a real app, you'd want to store admin data in Firestore
      return { 
        success: true, 
        user: { 
          uid: 'admin-123', 
          email: 'admin@123', 
          role: 'admin' 
        } 
      };
    } else {
      return { success: false, error: 'Invalid admin credentials' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Driver registration
export const registerDriver = async (email, password, driverData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Save driver data to Firestore
    await setDoc(doc(db, 'drivers', user.uid), {
      ...driverData,
      email: user.email,
      createdAt: new Date(),
      role: 'driver'
    });
    
    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Driver login
export const loginDriver = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Get driver data from Firestore
    const driverDoc = await getDoc(doc(db, 'drivers', user.uid));
    if (driverDoc.exists()) {
      return { 
        success: true, 
        user: { ...user, ...driverDoc.data() } 
      };
    } else {
      return { success: false, error: 'Driver not found' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Logout
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get current user
export const getCurrentUser = () => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
};
