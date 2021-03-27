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
    return (
        <Button icon={faSignOutAlt} onClick={signOut}>
            Sign Out
        </Button>
    );
};

export default SignOut;
