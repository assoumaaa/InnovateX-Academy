import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAnVwd09ZECF1DVjn0y34Jiqxu9_obn7to",
    authDomain: "academy-x-87af5.firebaseapp.com",
    projectId: "academy-x-87af5",
    storageBucket: "academy-x-87af5.appspot.com",
    messagingSenderId: "753204352749",
    appId: "1:753204352749:web:8f29252ba235a3ea6b1ee4"
  };


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);