import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBuS6OUMS3jvp8LoHwdOE03IwhSdQXo-X0",
    authDomain: "karachi-db.firebaseapp.com",
    projectId: "karachi-db",
    storageBucket: "karachi-db.appspot.com",
    messagingSenderId: "640615730045",
    appId: "1:640615730045:web:17167c32e292f03e79da14"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //Setup Google Authentication
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;