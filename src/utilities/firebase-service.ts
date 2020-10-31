import firebase from "firebase/app";

export const config = {
    apiKey: "AIzaSyCbUUf-CdcpnHn1acXTcDK5TNzvDpYHFnM",
    authDomain: "budget-app-80644.firebaseapp.com",
    databaseURL: "https://budget-app-80644.firebaseio.com",
    projectId: "budget-app-80644",
    storageBucket: "budget-app-80644.appspot.com",
    messagingSenderId: "287184915156",
    appId: "1:287184915156:web:b0f63f20cd93c3fd5ec941",
    measurementId: "G-N0FY36X64T",
};

const FirebaseService = (() => {
    firebase.initializeApp(config);

    const auth = firebase.auth();
    const firestore = firebase.firestore();

    return { auth, firestore };
})();

export default FirebaseService;
