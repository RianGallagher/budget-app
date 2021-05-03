import React from "react";

import { IProps } from "./expense.types";
import MonetaryNumber from "components/monetary-number";
import { useExpense } from "./expense.utilities";
import "./expense.scss";
import Button from "components/button";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import UpdateExpenseButton from "./update-expense-button";
import capitalize from "lodash/capitalize";

/**
 * Render information for an expense.
 * @param props.componentValue The value associated with the component this expense belongs to.
 * @param props.expense        The expense being rendered.
 * @returns
 */
const Expense = ({ componentValue, expense, expensesRef }: IProps) => {
    const { deleteExpense, updateExpense } = useExpense(expense.expenseId, expensesRef);

    return (
        <div className="expense" key={expense.expenseId}>
            <div className="expense__name">{capitalize(expense.name)}</div>
            <MonetaryNumber value={expense.value} />
            <div className="expense__percentage">{`${Math.floor((expense.value / componentValue) * 100)}%`}</div>
            <div>
                <UpdateExpenseButton expense={expense} updateExpense={updateExpense} />
                <Button icon={faTrash} onClick={deleteExpense} />
            </div>
        </div>
    );
};

export default Expense;
