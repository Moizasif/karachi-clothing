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

 export const createUserProfileDocument = async (userAuth, additionalData) => {
   if(!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if(!snapShot.exists) {
        const {displayName , email } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch (error) {
          console.log('error creating user', error.message)
        }
   }
    return userRef;

  
 }

  firebase.initializeApp(config);
  if (!firebase.apps.length) {
    firebase.initializeApp({});
 }else {
    firebase.app(); // if already initialized, use that one
 }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //Setup Google Authentication
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;