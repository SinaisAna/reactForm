import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDcwVXDK7GsdOefYMdy91MJwqqLRbiJysc",
    authDomain: "react-d4169.firebaseapp.com",
    projectId: "react-d4169",
    storageBucket: "react-d4169.appspot.com",
    messagingSenderId: "985372188435",
    appId: "1:985372188435:web:5ac1b9e0b693394d7cc4e6",
    measurementId: "G-HJJV8CGCV6"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth()

  export {auth}