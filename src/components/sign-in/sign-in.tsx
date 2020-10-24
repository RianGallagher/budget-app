import React from "react";
import firebase from "firebase";

import "./sign-in.scss";
import FirebaseService from "../../utilities/firebase-service";

const SignIn = () => {
    const { auth } = FirebaseService;
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
            <p>Do not violate the community guidelines or you will be banned for life!</p>
        </>
    );
};

export default SignIn;
