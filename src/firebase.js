import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNIxh6_y_JLcASOP0JwV3UyvbFr-bqUn4",
  authDomain: "linkedin-clone-3f3ca.firebaseapp.com",
  projectId: "linkedin-clone-3f3ca",
  storageBucket: "linkedin-clone-3f3ca.appspot.com",
  messagingSenderId: "543550932701",
  appId: "1:543550932701:web:981455cbac1c7d43dd3d34",
  measurementId: "G-5ZJ3XVT24K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
