import firebase from 'firebase'

// Initialize Firebase


const config = {
    apiKey: "AIzaSyDKp6kjckmtMbM_r7WhGibC32ACg9by1vo",
    authDomain: "isa-sandbox-88427.firebaseapp.com",
    databaseURL: "https://isa-sandbox-88427.firebaseio.com",
    projectId: "isa-sandbox-88427",
    storageBucket: "isa-sandbox-88427.appspot.com",
    messagingSenderId: "362929972320"
};


firebase.initializeApp(config);


export const database = firebase.database();