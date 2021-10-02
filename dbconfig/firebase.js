import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHu76ccne9sW8juA6sgHwjY4uCL0TIiDI",
  authDomain: "paighamapp-9b52f.firebaseapp.com",
  projectId: "paighamapp-9b52f",
  storageBucket: "paighamapp-9b52f.appspot.com",
  messagingSenderId: "170506096681",
  appId: "1:170506096681:web:31621357d7b17e32b54c38",
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
