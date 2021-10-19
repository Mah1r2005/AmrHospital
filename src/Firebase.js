import firebase from 'firebase/compat/app';
import "firebase/compat/auth" ;
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

var app=firebase.initializeApp({
    apiKey: "AIzaSyCWC8Ou0fp5x7l8pzeVA5XfMHyoP-mHosI",
    authDomain: "fir-react-9399a.firebaseapp.com",
    projectId: "fir-react-9399a",
    storageBucket: "fir-react-9399a.appspot.com",
    messagingSenderId: "539087284368",
    appId: "1:539087284368:web:a8303d3afa8aa107b69015",
})

export var auth=app.auth()
export default app
