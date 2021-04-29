import React from "react";

import { IProps } from "./expense.types";
import MonetaryNumber from "components/monetary-number";
import "./expense.scss";

/**
 * Render information for an expense.
 * @param props.componentValue The value associated with the component this expense belongs to.
 * @param props.expense        The expense being rendered.
 * @returns
 */
const Expense = ({ componentValue, expense }: IProps) => (
    <div className="expense" key={expense.expenseId}>
        <div className="expense__name">{expense.name}</div>
        <MonetaryNumber value={expense.value} />
        <div className="expense__percentage">{`${Math.floor((expense.value / componentValue) * 100)}%`}</div>
    </div>
);

export default Expense;
