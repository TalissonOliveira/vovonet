import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBvBfa3QIFXQ7YgH5VyQd0-QInrzM1xycA",
    authDomain: "vovonet-2aa24.firebaseapp.com",
    projectId: "vovonet-2aa24",
    storageBucket: "vovonet-2aa24.appspot.com",
    messagingSenderId: "900527112373",
    appId: "1:900527112373:web:83a6e6a992929ad78f3efc",
    measurementId: "G-S42NG0VMMT"
  };
  // Initialize Firebase
  if (!firebase.apps.length) { // Se não foi inicializado, inicializes 
    firebase.initializeApp(firebaseConfig);
 }else { // Se já foi inicializado, use ele
    firebase.app();
 }
  //firebase.analytics(); não é suportado pelo Node.js e nem pelp React Native

  export default firebase