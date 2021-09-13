// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDubIgoZ3uqa73XslIJVbE8iULgPouoI24",
  authDomain: "trafficode-19b19.firebaseapp.com",
  databaseURL: "https://trafficode-19b19-default-rtdb.firebaseio.com",
  projectId: "trafficode-19b19",
  storageBucket: "trafficode-19b19.appspot.com",
  messagingSenderId: "424440571969",
  appId: "1:424440571969:web:377630a720c98dd5c0fec0",
  measurementId: "G-9EB85R8Z1W"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
getAnalytics(firebase);

export default firebase;
