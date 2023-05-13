// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyD5tcnGlKCUnFU1KY5n4yDgOCO4ks1LwWc",
    authDomain: "suggest-us-user.firebaseapp.com",
    projectId: "suggest-us-user",
    storageBucket: "suggest-us-user.appspot.com",
    messagingSenderId: "574151218734",
    appId: "1:574151218734:web:5821b65ac88eebb18871bf",
    measurementId: "G-X8C9DTVEM1",
    databaseURL :"https://suggest-us-user.REGION.firebasedatabase.app"
};

const firebaseConfig2 = {
    apiKey: "AIzaSyA56aNujMinkgWZtYB0CiaKCoub8bYSqew",
    authDomain: "suggest-us-doctor.firebaseapp.com",
    projectId: "suggest-us-doctor",
    storageBucket: "suggest-us-doctor.appspot.com",
    messagingSenderId: "684269231581",
    appId: "1:684269231581:web:471de50f9b2c269726ea34",
    measurementId: "G-1PCWVXQEWF"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const app2 = initializeApp(firebaseConfig2 ,'secondary');
// const analytics = getAnalytics(app);

const database = getDatabase()
const firestore = getFirestore();

export {app, app2 ,database ,firestore}