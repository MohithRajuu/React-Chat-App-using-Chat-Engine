import firebase from 'firebase/app';

import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBX1FCiWzxwV599GewfeBH1NJ_itCDbVn4",
    authDomain: "chatapp-68211.firebaseapp.com",
    projectId: "chatapp-68211",
    storageBucket: "chatapp-68211.appspot.com",
    messagingSenderId: "765657844087",
    appId: "1:765657844087:web:d29b6bdc692e38b4337972"
  }).auth();