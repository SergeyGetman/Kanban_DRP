import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: import.meta.env.VITE_API_KEY_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_API_KEY_PROJECT_ID,
  storageBucket: import.meta.env.VITE_API_KEY_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_API_KEY_MESSAGE_IN_SENDERID,
  appId: import.meta.env.VITE_API_KEY_APP_I_DATA_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
