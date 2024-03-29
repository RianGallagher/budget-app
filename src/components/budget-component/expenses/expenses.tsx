import React from "react";

import { IProps } from "./expenses.types";
import { IExpenseWithId } from "./expense/expense.types";
import SpinnerUntil from "components/spinner-until";
import useExpenses from "hooks/use-expenses";
import Expense from "./expense";
import AddExpense from "./add-expense";
import "./expenses.scss";

/**
 * Show a list of expenses associated with a component.
 * @param props.componendId    The ID of the component that the expense belongs to.
 * @param props.componentValue The value associated with the component.
 */
const Expenses = ({ componentId, componentValue }: IProps) => {
    const { expensesQuery, expensesRef } = useExpenses(componentId);
    const [expenses, loading] = expensesQuery;
    return (
        <SpinnerUntil<IExpenseWithId[]> data={expenses} isReady={!loading && typeof expenses !== "undefined"}>
            {(expenses) => (
                <>
                    <ul className="expenses-list">
                        {expenses.map((expense) => (
                            <li key={expense.expenseId}>
                                <Expense componentValue={componentValue} expense={expense} expensesRef={expensesRef} />
                            </li>
                        ))}
                    </ul>
                    <AddExpense expensesRef={expensesRef} />
                </>
            )}
        </SpinnerUntil>
    );
};

export default Expenses;
