import React from "react";
import firebase from "firebase";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import FirebaseService from "utilities/firebase-service";
import Button from "components/button";
import "./sign-in.scss";
import { useHistory, useLocation } from "react-router";

/**
 * A button to allow the user to sign in.
 */
const SignIn = () => {
    const { auth } = FirebaseService;
    const history = useHistory();
    const location = useLocation<{ from: { pathname: string } }>();
    const { from } = location.state ?? { from: { pathname: "/" } };
    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await auth.signInWithPopup(provider);
            history.replace(from);
        } catch (error) {
            console.log(`error`, error);
        }
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
