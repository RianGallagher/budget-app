import React from "react";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import FirebaseService from "utilities/firebase-service";
import Button from "components/button";

import "./sign-out.scss";

/**
 * A button to sign out the user.
 */
const SignOut = () => {
    const { auth } = FirebaseService;
    const signOut = () => {
        auth.signOut();
    };

    if (auth.currentUser) {
        return (
            <Button icon={faSignOutAlt} onClick={signOut}>
                Sign Out
            </Button>
        );
    } else {
        return null;
    }
};

export default SignOut;
