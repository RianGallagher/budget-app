import React from "react";
import firebase from "firebase";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import FirebaseService from "utilities/firebase-service";
import Button from "components/button";

import "./sign-in.scss";

/**
 * A button to allow the user to sign in.
 */
const SignIn = () => {
    const { auth } = FirebaseService;
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };

    return (
        <div className="sign-in">
            <p>Please sign in to make use of the app</p>
            <Button icon={faSignInAlt} onClick={signInWithGoogle}>
                Sign in with Google
            </Button>
        </div>
    );
};

export default SignIn;
