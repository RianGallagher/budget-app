import React from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import IncomeProvider from "state/income/income-provider";
import FirebaseService from "utilities/firebase-service";
import BudgetBreakdown from "components/budget-breakdown";
import IncomeForm from "components/income-form";

import { IUser } from "./budget-page.types";

/**
 * A page to show the user their budget.
 */
const BudgetPage = () => {
    const { firestore, auth } = FirebaseService;
    const { uid } = auth.currentUser!;
    const userRef = firestore.doc(`users/${uid}`);

    const [user] = useDocumentData<IUser>(userRef);

    return (
        <>
            {typeof user?.income === "undefined" ? (
                <IncomeForm />
            ) : (
                <IncomeProvider income={user.income}>
                    <BudgetBreakdown />
                </IncomeProvider>
            )}
        </>
    );
};

export default BudgetPage;
