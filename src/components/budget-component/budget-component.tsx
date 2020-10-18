import React, { useContext } from "react";

import IncomeContext from "../../state/income/income-context/income-context";
import MonetaryNumber from "../monetary-number";

import { IProps } from "./budget-component.types";
import "./budget-component.scss";

const BudgetComponent = ({ percentage, title }: IProps) => {
    const { income } = useContext(IncomeContext);

    if (income === null) {
        return <div>No Income</div>;
    } else {
        return (
            <div className="buget-components__component">
                <h2>{`${title} - ${percentage}%`}</h2>
                <MonetaryNumber value={income * (percentage / 100)} />
            </div>
        );
    }
};

export default BudgetComponent;
