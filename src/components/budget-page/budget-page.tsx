import { Views } from "constants/views";

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
    const breakdownView = `${url}${Views.Breakdown}`;
    const incomeView = `${url}${Views.Income}`;

    return (
        <Switch>
            {user === null ? (
                <Redirect to={{ pathname: Views.Budget }} />
            ) : (
                <>
                    <ProtectedRoute
                        path={breakdownView}
                        redirectPath={incomeView}
                        shouldRedirect={typeof user.income === "undefined"}
                    >
                        <BudgetBreakdown income={user.income} />
                    </ProtectedRoute>
                    <Route path={incomeView}>
                        <IncomeForm />
                    </Route>
                    <Redirect to={{ pathname: breakdownView }} />
                </>
            )}
        </Switch>
    );
};

export default BudgetPage;
