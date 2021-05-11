import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDn_yk-fbPujciOoDUUJdcK5R4XwAiwJ1s",
  authDomain: "resume-builder-e58f0.firebaseapp.com",
  databaseURL: "https://resume-builder-e58f0.firebaseio.com",
  projectId: "resume-builder-e58f0",
  storageBucket: "resume-builder-e58f0.appspot.com",
  messagingSenderId: "8357925301",
  appId: "1:8357925301:web:3111013cb56deb881b89fc",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;