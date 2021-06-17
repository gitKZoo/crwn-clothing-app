import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
  apiKey: "AIzaSyB6eNr4KIjrAkwrNesAbcUGF0igEw4IGQ8",
  authDomain: "crwn-clothing-db-a28ac.firebaseapp.com",
  projectId: "crwn-clothing-db-a28ac",
  storageBucket: "crwn-clothing-db-a28ac.appspot.com",
  messagingSenderId: "1061975452472",
  appId: "1:1061975452472:web:0d89d30dfd7bfc56492fcd"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;