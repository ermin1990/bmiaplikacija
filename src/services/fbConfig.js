import firebase from "firebase/app"
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCe52TutaUVPsMCtb-q-FQtyQJgwf4zvKw",
    authDomain: "bmiapp-5e01e.firebaseapp.com",
    projectId: "bmiapp-5e01e",
    storageBucket: "bmiapp-5e01e.appspot.com",
    messagingSenderId: "741866412059",
    appId: "1:741866412059:web:fb8f1adb163209900880be",
    measurementId: "G-KE15P2L84W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;