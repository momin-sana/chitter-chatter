import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyZiOmWs0Roq9Aw27Ph6nQZjpgrWEYE1s",
    authDomain: "chitter-chatter-d56cc.firebaseapp.com",
    projectId: "chitter-chatter-d56cc",
    storageBucket: "chitter-chatter-d56cc.appspot.com",
    messagingSenderId: "266847926887",
    appId: "1:266847926887:web:0b7e064307876c74e6b2c2",
    measurementId: "G-EEN11NCC6N"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const projectStorage = firebase.storage();

export { auth, provider };
export default db;