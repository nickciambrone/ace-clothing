import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBJ6FVJpVlrvWg4aYGE7SJzobWwLPx3iio",
    authDomain: "ace-db-f38d4.firebaseapp.com",
    projectId: "ace-db-f38d4",
    storageBucket: "ace-db-f38d4.appspot.com",
    messagingSenderId: "371595783362",
    appId: "1:371595783362:web:4a02f509ab9f3e9e171f5b",
    measurementId: "G-B7XXK2Y164"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);



  export default firebase;

