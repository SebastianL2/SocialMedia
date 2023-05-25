
  // Import the functions you need from the SDKs you need
  import firebase from 'firebase/compat/app';
  import firestore  from 'firebase/compat/firestore';
  import 'firebase/compat/storage';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA1RyzyixnAB_kgjG-jeLS3h9AGp99e8ws",
    authDomain: "edu-net-7e0a0.firebaseapp.com",
    projectId: "edu-net-7e0a0",
    storageBucket: "edu-net-7e0a0.appspot.com",
    messagingSenderId: "299423624562",
    appId: "1:299423624562:web:545cefb8b5d9a2e68cc1eb",
    measurementId: "G-CWR3DWNSHQ"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  export const db = app.firestore()
  const storage= firebase.storage()
  export {storage,firebase as defautl}
  
