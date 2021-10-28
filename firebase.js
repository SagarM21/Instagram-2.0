// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAo-b5FXz_dtggicdf_UQ_dyB3kHdGQetA",
	authDomain: "instaclone-38168.firebaseapp.com",
	projectId: "instaclone-38168",
	storageBucket: "instaclone-38168.appspot.com",
	messagingSenderId: "837730065192",
	appId: "1:837730065192:web:36267ab0ccb719b0420e1d",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
