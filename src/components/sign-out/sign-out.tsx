import React from "react";

import { IProps } from "./sign-out.types";
import "./sign-out.scss";

const SignOut = ({ auth }: IProps) => {
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
