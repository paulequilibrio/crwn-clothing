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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
