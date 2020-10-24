import React, { useEffect } from "react";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import SignIn from "./components/sign-in";
import IncomePage from "./components/income-page";
import SignOut from "./components/sign-out";
import FirebaseService from "./utilities/firebase-service";
import "./App.css";

const App = () => {
    const { auth, setUser } = FirebaseService;
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (typeof user !== "undefined") {
            setUser(user);
        }
    }, [user, setUser]);

    return (
        <div className="App">
            <header>
                <h1>A Budget App!</h1>
                <SignOut />
            </header>
            <section>{user ? <IncomePage /> : <SignIn />}</section>
        </div>
    );
};

export default App;
