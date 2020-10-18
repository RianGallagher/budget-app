import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { config } from "./firebase.config";
import SignIn from "./components/sign-in";
import IncomePage from "./components/income-page";
import SignOut from "./components/sign-out";
import "./App.css";

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="App">
            <header>
                <h1>A Budget App!</h1>
                <SignOut auth={auth} />
            </header>
            <section>{user ? <IncomePage firestore={firestore} /> : <SignIn auth={auth} />}</section>
        </div>
    );
};

export default App;
