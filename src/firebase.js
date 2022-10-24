// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDa8bMud-nrHTuZzbMVN0Al950dMVqkKY",
  authDomain: "clone-dfb09.firebaseapp.com",
  projectId: "clone-dfb09",
  storageBucket: "clone-dfb09.appspot.com",
  messagingSenderId: "840432307362",
  appId: "1:840432307362:web:5cc86f11026690366a1bfb",
  measurementId: "G-92W6J3S6QY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
