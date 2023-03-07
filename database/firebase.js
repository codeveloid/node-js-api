// Import the functions you need from the SDKs you need
require('dotenv').config();
const { initializeApp } = require("firebase/app")
const { 
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
} = require("firebase/firestore")
//const Firestore = require('@google-cloud/firestore');
const { 
  GoogleAuthProvider, 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup 
} = require("firebase/auth")

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

//const DB = new Firestore({
//  projectId: 'kang-koding-kisama',
//  keyFilename: '../service.json',
//})

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const db = getFirestore(App);
const Auth = getAuth(App);
const googleProvider = new GoogleAuthProvider();

module.exports = { 
  db, 
  Auth, 
  googleProvider, 
  addDoc,
  getDocs,
  where,
  collection,
  query,
  createUserWithEmailAndPassword 
};