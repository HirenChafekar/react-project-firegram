import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChO9OY1SnY2gSqVPCFA8BEwtWxKhPbTEc",
  authDomain: "myfiregramproject.firebaseapp.com",
  projectId: "myfiregramproject",
  storageBucket: "myfiregramproject.appspot.com",
  messagingSenderId: "598130286682",
  appId: "1:598130286682:web:77d10f4c64812b1d9ab863"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp, auth };
