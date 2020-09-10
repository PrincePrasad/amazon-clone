import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAgNWTotrIXL77gaqzJfLSQdM7Hx9t378s",
    authDomain: "clone-2139e.firebaseapp.com",
    databaseURL: "https://clone-2139e.firebaseio.com",
    projectId: "clone-2139e",
    storageBucket: "clone-2139e.appspot.com",
    messagingSenderId: "752680001912",
    appId: "1:752680001912:web:8c724fb42d9ca8be65e88d",
    measurementId: "G-XRJ3RC7CKH"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };