import React from "react";
import SignIn from "components/sign-in";
import BudgetPage from "components/budget-page";
import SignOut from "components/sign-out";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "components/authenticated-route";
import "./App.scss";

const App = () => (
    <div className="app">
        <header className="header">
            <div className="header__title">
                <h1>Budget App</h1>
            </div>
            <SignOut />
        </header>
        <Router>
            <Switch>
                <Route path="/login">
                    <SignIn />
                </Route>
                <AuthenticatedRoute path="/budget">
                    <BudgetPage />
                </AuthenticatedRoute>
                <Redirect to={{ pathname: "/budget" }} />
            </Switch>
        </Router>
    </div>
);

export default App;
