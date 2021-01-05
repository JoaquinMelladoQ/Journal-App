import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAXgb3Q_N2iq4FwjP2H8mgyLEYWcZcSKl4",
    authDomain: "journal-app-76077.firebaseapp.com",
    projectId: "journal-app-76077",
    storageBucket: "journal-app-76077.appspot.com",
    messagingSenderId: "410274370740",
    appId: "1:410274370740:web:c05d35daffacda6accf3e1"
  }

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase 
}