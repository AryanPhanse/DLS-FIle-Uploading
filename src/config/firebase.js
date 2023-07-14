import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoQHHM6CCKqrU-9Mr_RmsjG5DFzcD4Cvk",
  authDomain: "filemanage-8b377.firebaseapp.com",
  projectId: "filemanage-8b377",
  storageBucket: "filemanage-8b377.appspot.com",
  messagingSenderId: "226823231288",
  appId: "1:226823231288:web:41682197afaf21960c93cd"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;