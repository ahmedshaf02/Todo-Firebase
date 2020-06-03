import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
 
  authDomain: "fir-react-project-393d7.firebaseapp.com",
  databaseURL: "https://fir-react-project-393d7.firebaseio.com",
  projectId: "fir-react-project-393d7",
  storageBucket: "fir-react-project-393d7.appspot.com",
  messagingSenderId: "605703303791",
  appId: "1:605703303791:web:29ddf778efdf0640e5539a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export const user = database.collection("users/");
export const todo = database.collection("todo/");
