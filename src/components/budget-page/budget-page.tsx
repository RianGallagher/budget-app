import { Views } from "constants/views";

import React from "react";
import BudgetBreakdown from "components/budget-breakdown";
import IncomeForm from "components/income-form";
import { Switch } from "react-router";
import { Redirect, Route } from "react-router-dom";
import ProtectedRoute from "components/protected-route";
import useUser from "hooks/use-user";

/**
 * A page to show the user their budget.
 */
const BudgetPage = () => {
    const user = useUser();

    return (
        <Switch>
            {user === null ? (
                <Redirect to={{ pathname: Views.Budget }} />
            ) : (
                <>
                    <ProtectedRoute
                        path={Views.Breakdown}
                        redirectPath={Views.Income}
                        shouldRedirect={typeof user.income === "undefined"}
                    >
                        <BudgetBreakdown income={user.income} />
                    </ProtectedRoute>
                    <Route path={Views.Income}>
                        <IncomeForm />
                    </Route>
                    <Redirect to={{ pathname: Views.Breakdown }} />
                </>
            )}
        </Switch>
    );
};

export default BudgetPage;
