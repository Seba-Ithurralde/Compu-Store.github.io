import * as firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  addDoc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}


export async function getSingleProduct(id) {
  const documentRef = doc(db, 'productos', id);

  try {
    const snapshot = await getDoc(documentRef);
    if (snapshot.exists()) {
      return snapshot.data();
    } else {
      console.log('El documento no existe!');
    }
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
  }
}


export async function getProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, 'productos'));
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map((docu) => {
        return {
          id: docu.id,
          ...docu.data(),
        };
      });
      return productsList;
    } else {
      console.log('Coleccion vacía !');
    }
  } catch (error) {
    console.error('Error al obtener la coleccion: ', error);
  }
}


export async function sendOrder(order) {
  const ordersCollection = collection(db, 'ordernes');
  try {
    const docRef = await addDoc(ordersCollection, order);
    return docRef.id;
  } catch (error) {
    console.error('Error al agregar el documento nuevo ', error);
  }
}


export async function updateProduct(id, toUpdate) {
  const itemDocRef = doc(db, 'products', id);
  try {
    await updateDoc(itemDocRef, toUpdate);
    alert('Se actualizo el producto!');
  } catch (error) {
    console.log('Hubo un error al actualizar!', error);
  }
}


export async function updateMultiple() {
  const batch = writeBatch(db);

  const docRef1 = doc(db, 'productos', '1');
  const docRef2 = doc(db, 'ordenes', 'XMwdhrS4RS48EfpSb39N');

  batch.update(docRef1, { description: 'Notebook Acer Nitro' });
  batch.update(docRef2, { total: 3776556 });

  try {
    await batch.commit();
  } catch (error) {
    console.log(error);
  }
}