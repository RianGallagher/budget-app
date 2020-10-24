import React from "react";

import "./sign-out.scss";
import FirebaseService from "../../utilities/firebase-service";

const SignOut = () => {
    const { auth } = FirebaseService;
    if (auth.currentUser) {
        return (
            <button className="sign-out" onClick={() => auth.signOut()}>
                Sign Out
            </button>
        );
    } else {
        return <></>;
    }
};

export default SignOut;
