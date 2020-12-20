import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAprokpkFRVXwMW78kZkfSkmWgS7nCY_Eg",
    authDomain: "sabir-clothing.firebaseapp.com",
    databaseURL: "https://sabir-clothing.firebaseio.com",
    projectId: "sabir-clothing",
    storageBucket: "sabir-clothing.appspot.com",
    messagingSenderId: "488835305407",
    appId: "1:488835305407:web:67e99048e0f7ea8e60db0a",
    measurementId: "G-SMXYV7BGWJ"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
}

///Add to item collection
export const addCollectionItems = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit()

};

///Get All Item Collection
export const convertCollectionSnapshotToMap = collectionSnapshot => {
  const tranformedCollection = collectionSnapshot.docs.map(docSnapShot => {
    const {title, items} = docSnapShot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapShot.id,
      title,
      items
    };
  });

  return tranformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  } ,{});
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
