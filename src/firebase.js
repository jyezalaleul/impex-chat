import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAOr_POncu9j76IF4qp74-BFC93Gw8shVA",
    authDomain: "twitter-clone-v1.firebaseapp.com",
    databaseURL: "https://twitter-clone-v1.firebaseio.com",
    projectId: "twitter-clone-v1",
    storageBucket: "twitter-clone-v1.appspot.com",
    messagingSenderId: "1009623895895",
    appId: "1:1009623895895:web:0d4775f3a3100f084cb812",
    measurementId: "G-11EGTTG3YZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;