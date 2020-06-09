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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email, photoURL, phoneNumber } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        phoneNumber,
        ...additionalData
      })
    } catch (error) {
      console.error('error creating user', error.message)
    }
  }
  return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })
  return batch.commit()
}

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
  const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
    const { title, items } = docSnapshot.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
