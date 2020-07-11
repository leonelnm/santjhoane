import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBvXoQkZq0jO2uLWo-BIuXzK6df1U2tt7s",
    authDomain: "santjhoane.firebaseapp.com",
    databaseURL: "https://santjhoane.firebaseio.com",
    projectId: "santjhoane",
    storageBucket: "santjhoane.appspot.com",
    messagingSenderId: "682711346273",
    appId: "1:682711346273:web:1354a5b5937f087c6a0e20"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database()

export {
    db, firebase
}