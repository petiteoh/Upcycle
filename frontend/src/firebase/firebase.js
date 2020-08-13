import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdq0enSvk0ueW_2mQYeZKJ2QidBDpgA-E",
  authDomain: "upcycled-firebase.firebaseapp.com",
  databaseURL: "https://upcycled-firebase.firebaseio.com",
  projectId: "upcycled-firebase",
  storageBucket: "upcycled-firebase.appspot.com",
  messagingSenderId: "1013675761940",
  appId: "1:1013675761940:web:2454a10a69a5c75a906201",
  measurementId: "G-K87VEVLW1C",
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();

export { storage, firebase as default };