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
        <div>{expense.name}</div>
        <>&nbsp;-&nbsp;</>
        <MonetaryNumber value={componentValue * (expense.percentage / 100)} />
        <>&nbsp;</>
        <div>
            ( <span className="expense__percentage">{`${expense.percentage}%`}</span>)
        </div>
    </div>
);

export default Expense;
