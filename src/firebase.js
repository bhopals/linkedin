import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbN870WlTDIphMMHAVklYGV5c6slVRLxc",
  authDomain: "linkedin-clone-cce9e.firebaseapp.com",
  projectId: "linkedin-clone-cce9e",
  storageBucket: "linkedin-clone-cce9e.appspot.com",
  messagingSenderId: "1092482674741",
  appId: "1:1092482674741:web:8f040ef22f161374c2817c",
  measurementId: "G-892HJ1WJBL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
