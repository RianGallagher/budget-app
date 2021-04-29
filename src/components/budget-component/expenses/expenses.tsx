import React from "react";

import { IProps } from "./expenses.types";
import SpinnerUntil from "components/spinner-until";
import { IExpense } from "./expense/expense.types";
import useExpenses from "hooks/use-expenses";
import Expense from "./expense";
import "./expenses.scss";

/**
 * Show a list of expenses associated with a component.
 * @param props.componendId    The ID of the component that the expense belongs to.
 * @param props.componentValue The value associated with the component.
 */
const Expenses = ({ componentId, componentValue }: IProps) => {
    const [expenses, loading] = useExpenses(componentId);
    return (
        <SpinnerUntil<IExpense[]> data={expenses} isReady={!loading && typeof expenses !== "undefined"}>
            {(expenses) => (
                <>
                    {expenses.map((expense) => (
                        <Expense key={expense.expenseId} componentValue={componentValue} expense={expense} />
                    ))}
                </>
            )}
        </SpinnerUntil>
    );
};

export default Expenses;
