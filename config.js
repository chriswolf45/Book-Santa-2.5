import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
   apiKey: "AIzaSyCVeV4hyBG5RXcVwYc4ldqoVkgV9XgN77s",
   authDomain: "book-santa-f79ce.firebaseapp.com",
   databaseURL: "https://book-santa-f79ce.firebaseio.com",
   projectId: "book-santa-f79ce",
   storageBucket: "book-santa-f79ce.appspot.com",
   messagingSenderId: "337283364523",
   appId: "1:337283364523:web:e22d0e550c86befa7129ee"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
