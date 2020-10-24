import React, { useState } from "react";

import IncomeProvider from "../../state/income/income-provider";
import BudgetBreakdown from "../budget-breakdown";
import IncomeForm from "../income-form";

import "./income-page.scss";

const IncomePage = () => {
    const [income, setIncome] = useState<number | null>(null);
    return (
        <>
            {income === null ? (
                <IncomeForm setIncome={setIncome} />
            ) : (
                <IncomeProvider income={income}>
                    <BudgetBreakdown />
                </IncomeProvider>
            )}
        </>
    );
};

export default IncomePage;
