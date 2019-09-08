 import firebase from 'firebase/app';
 import 'firebase/firestore'
 import 'firebase/auth';

 const config = {
   apiKey: "AIzaSyBMZHV7SddInBdLXBjh7sYcr_dsRAEn9T0",
   authDomain: "crwn-db-4d521.firebaseapp.com",
   databaseURL: "https://crwn-db-4d521.firebaseio.com",
   projectId: "crwn-db-4d521",
   storageBucket: "crwn-db-4d521.appspot.com",
   messagingSenderId: "60829361097",
   appId: "1:60829361097:web:ca0eaa6648e53251"
 };


 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore(); //database

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({
   prompt: 'select_account'
 }) // pop up window to select google account

 export const signInWithGoogle = () => auth.signInWithPopup(provider);



 //userAuth login auth return, ID is from this object (${userAuth.uid} )
 export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;
   console.log('userAuth', userAuth);
   const userRef = firestore.doc(`users/${userAuth.uid}`); // try to get the record from firestore database
   console.log((`users/${userAuth.uid}`));
   const snapShot = await userRef.get();
   console.log("snapShot", snapShot);
   console.log("userRef", userRef);
   console.log("snapShot.exists", snapShot.exists);

   if (!snapShot.exists) { //test if user exist in firebase database
     console.log('here not exit');
     const {
       displayName,
       email
     } = userAuth;
     const createdAt = new Date();
     try {
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       });
     } catch (error) {
       console.log('error creating user', error.message);
     }
   }

   return userRef;
 };
 export default firebase;