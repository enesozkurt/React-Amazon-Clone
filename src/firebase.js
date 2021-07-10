import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBj7z-rk3Z_e-mFlt1J3zH3hdCQjqizC8g",
    authDomain: "challenge-cbbc2.firebaseapp.com",
    projectId: "challenge-cbbc2",
    storageBucket: "challenge-cbbc2.appspot.com",
    messagingSenderId: "300864914116",
    appId: "1:300864914116:web:9f4eff44c45b8c73ae3f91",
    measurementId: "G-S6WHX1ZBKV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth();

export { db, auth };


