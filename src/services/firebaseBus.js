import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  orderBy,
  doc,
  updateDoc,
  deleteDoc 
} from 'firebase/firestore';
import { db } from '../firebase';

// Add new bus information
export const addBusInfo = async (busData) => {
  try {
    const docRef = await addDoc(collection(db, 'buses'), {
      ...busData,
      createdAt: new Date(),
      status: 'active'
    });
    
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get all buses
export const getAllBuses = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'buses'));
    const buses = [];
    querySnapshot.forEach((doc) => {
      buses.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, buses };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Search buses by route
export const searchBusesByRoute = async (source, destination) => {
  try {
    const route = `${source} to ${destination}`;
    const q = query(
      collection(db, 'buses'),
      where('route', '==', route),
      where('status', '==', 'active'),
      orderBy('departure')
    );
    
    const querySnapshot = await getDocs(q);
    const buses = [];
    querySnapshot.forEach((doc) => {
      buses.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, buses };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get buses by operator
export const getBusesByOperator = async (operator) => {
  try {
    const q = query(
      collection(db, 'buses'),
      where('operator', '==', operator),
      where('status', '==', 'active')
    );
    
    const querySnapshot = await getDocs(q);
    const buses = [];
    querySnapshot.forEach((doc) => {
      buses.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, buses };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update bus information
export const updateBusInfo = async (busId, updateData) => {
  try {
    const busRef = doc(db, 'buses', busId);
    await updateDoc(busRef, {
      ...updateData,
      updatedAt: new Date()
    });
    
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete bus information
export const deleteBusInfo = async (busId) => {
  try {
    await deleteDoc(doc(db, 'buses', busId));
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get bus statistics
export const getBusStatistics = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'buses'));
    const totalBuses = querySnapshot.size;
    let activeBuses = 0;
    let totalSeats = 0;
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.status === 'active') {
        activeBuses++;
        totalSeats += data.seats || 0;
      }
    });
    
    return {
      success: true,
      stats: {
        totalBuses,
        activeBuses,
        totalSeats
      }
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
