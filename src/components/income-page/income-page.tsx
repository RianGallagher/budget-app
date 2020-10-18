import React, { useState } from "react";

import IncomeProvider from "../../state/income/income-provider";
import BudgetBreakdown from "../budget-breakdown";
import IncomeForm from "../income-form";

import "./income-page.scss";
import { IProps } from "./income-page.types";

const IncomePage = ({ firestore }: IProps) => {
    const [income, setIncome] = useState<number | null>(null);
    return (
        <>
            {income === null ? (
                <IncomeForm setIncome={setIncome} />
            ) : (
                <IncomeProvider income={income}>
                    <BudgetBreakdown firestore={firestore} />
                </IncomeProvider>
            )}
        </>
    );
};

export default IncomePage;
