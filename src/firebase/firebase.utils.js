import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDKNaFYqA7ckeouLCeB5Dniu2C8FvaK480",
	authDomain: "wineproject-5f75a.firebaseapp.com",
	databaseURL: "https://wineproject-5f75a.firebaseio.com",
	projectId: "wineproject-5f75a",
	storageBucket: "wineproject-5f75a.appspot.com",
	messagingSenderId: "823715876447",
	appId: "1:823715876447:web:f2a269f4794456794b15ea",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // console.log(userRef);
	const snapShot = await userRef.get();
	// console.log(snapShot);

	if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        // console.log(userAuth)
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName: displayName,
				email: email,
				createdAt: createdAt,
				...additionalData
			});
		} catch (err) {
			console.log(err.message + 'это ошибка');
		}
	}

	return userRef;
};

firebase.initializeApp(config)
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
