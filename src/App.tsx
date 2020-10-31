import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import SignIn from "./components/sign-in";
import BudgetPage from "./components/budget-page";
import SignOut from "./components/sign-out";
import FirebaseService from "./utilities/firebase-service";
import "./App.css";

const App = () => {
    const { auth } = FirebaseService;
    const [user] = useAuthState(auth);

    return (
        <div className="App">
            <header>
                <h1>A Budget App!</h1>
                <SignOut />
            </header>
            <section>{user ? <BudgetPage /> : <SignIn />}</section>
        </div>
    );
};

export default App;
