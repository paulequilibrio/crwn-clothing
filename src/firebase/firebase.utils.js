import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyA70FnCOSmoZJKTAqrXkQHzSKUTJeBbsrw',
  authDomain: 'crwn-db-8f28a.firebaseapp.com',
  databaseURL: 'https://crwn-db-8f28a.firebaseio.com',
  projectId: 'crwn-db-8f28a',
  storageBucket: 'crwn-db-8f28a.appspot.com',
  messagingSenderId: '988655285473',
  appId: '1:988655285473:web:9ae0760b91e2e4b9d073a0',
  measurementId: 'G-JYKWF3E07J'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
