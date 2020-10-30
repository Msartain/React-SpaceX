import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDtaeS0f-m4iLx_t3Xs0dbUfgydEnlcmj0",
    authDomain: "space-explorer-3a337.firebaseapp.com",
    databaseURL: "https://space-explorer-3a337.firebaseio.com",
    projectId: "space-explorer-3a337",
    storageBucket: "space-explorer-3a337.appspot.com",
    messagingSenderId: "324152371211",
    appId: "1:324152371211:web:e95af993daa2eda65c3f0e"
};

firebase.initializeApp(firebaseConfig);

// local vars
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// auth functions
function login() {
    return auth.signInWithPopup(provider);
}

function logout() {
    return auth.signOut();
}

// export auth functions and observer
export { login, logout, auth }