// src/lib/firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCm8bCdUT2OgBvVbB558b5VvkgDroF3KVg",
  authDomain: "portfolioblog-b8f4b.firebaseapp.com",
  projectId: "portfolioblog-b8f4b",
  storageBucket: "portfolioblog-b8f4b.appspot.com",
  messagingSenderId: "802930587672",
  appId: "1:802930587672:web:1c5e026d795ca3e433ab6d",
  measurementId: "G-103WTD0D31"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
