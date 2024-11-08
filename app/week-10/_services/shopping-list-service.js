import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export const getItems = async (userId) => {
  try {
    const itemsRef = collection(db, "users", userId, "items"); 
    const itemsSnap = await getDocs(itemsRef);
    const itemsList = itemsSnap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return itemsList; 
  } catch (error) {
    console.error("Error getting items:", error);
    throw error;
  }
};


export const addItems = async (userId, newItem) => {
  try {
    const itemsRef = collection(db, "users", userId, "items"); 
    const docRef = await addDoc(itemsRef, newItem); 
    return docRef.id; 
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};
