import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import SignIn from "./components/sign-in";
import BudgetPage from "./components/budget-page";
import SignOut from "./components/sign-out";
import FirebaseService from "./utilities/firebase-service";
import "./App.scss";

const App = () => {
    const { auth } = FirebaseService;
    const [user] = useAuthState(auth);

    return (
        <div className="app">
            <header className="header">
                <div className="header__title">
                    <h1>Budget App</h1>
                </div>
                <SignOut />
            </header>
            <section>{user ? <BudgetPage /> : <SignIn />}</section>
        </div>
    );
};

export default App;
