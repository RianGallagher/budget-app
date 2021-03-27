import React from "react";
import BudgetBreakdown from "components/budget-breakdown";
import IncomeForm from "components/income-form";
import { Switch, useRouteMatch } from "react-router";
import { Redirect, Route } from "react-router-dom";
import ProtectedRoute from "components/protected-route";
import useUser from "hooks/use-user";

/**
 * A page to show the user their budget.
 */
const BudgetPage = () => {
    const { url } = useRouteMatch();
    const user = useUser();

    return (
        <Switch>
            {user === null ? (
                <Redirect to={{ pathname: "/budget" }} />
            ) : (
                <>
                    <ProtectedRoute
                        path={`${url}/breakdown`}
                        redirectPath={`${url}/income`}
                        shouldRedirect={typeof user.income === "undefined"}
                    >
                        <BudgetBreakdown income={user.income} />
                    </ProtectedRoute>
                    <Route path={`${url}/income`}>
                        <IncomeForm />
                    </Route>
                    <Redirect to={{ pathname: `${url}/breakdown` }} />
                </>
            )}
        </Switch>
    );
};

export default BudgetPage;
