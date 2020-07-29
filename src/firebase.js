import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlCd3TYqQrTwbViwz-u3wiyweo5_7kJzQ",
    authDomain: "clone-5711f.firebaseapp.com",
    databaseURL: "https://clone-5711f.firebaseio.com",
    projectId: "clone-5711f",
    storageBucket: "clone-5711f.appspot.com",
    messagingSenderId: "1000733812150",
    appId: "1:1000733812150:web:881df095877dd718ff0d17",
    measurementId: "G-KKPJJXEBCL"
});


const auth = firebase.auth();

export { auth };