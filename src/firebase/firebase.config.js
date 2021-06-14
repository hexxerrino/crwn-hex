import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAueTYDteLeNI_3qIabd2huThwuTvy20hU",
    authDomain: "crwn-hex.firebaseapp.com",
    projectId: "crwn-hex",
    storageBucket: "crwn-hex.appspot.com",
    messagingSenderId: "928257313305",
    appId: "1:928257313305:web:aa01da30099eea87ca3888",
    measurementId: "G-N1RS1400ZL"
}
  
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const firestore = firebase.firestore()

export const addShopData = (collection, data) => {
    const batch = firestore.batch()
    const colRef = firestore.collection(collection)
    
    Object.keys(data).forEach(async key => {
        const docRef = colRef.doc()
        await batch.set(docRef, data[key])
    })
    batch.commit()
}

export const stateFromDatabase = (collection) => {
    const state = {}

    collection.docs.forEach(doc => {
        const data = doc.data()
        state[data.title.toLowerCase()] = {...data, id: doc.id}
    })

    return state
}

export const getCurrentUser = () => {
    return new Promise((res, rej) => {
        const unsub = auth.onAuthStateChanged(async (user) => {
            unsub()
            if (user) {
                res(user)
            } else {
                rej(new Error("the guy isn't logged in"))
            }
        })
    })
}

export const addNewUserIfNewUser = async (user) => {
    if(!user) {return}

    const docRef = firestore.collection("users").doc(user.uid)
    const doc = await docRef.get()

    if (!doc.exists) {
        try {
            docRef.set({
                name: user.displayName,
                email: user.email,
                creationDate: Date(),
                photoURL: user.photoURL
            })
        } catch (error) {
            console.log(error)
        }
    }

    return docRef
}