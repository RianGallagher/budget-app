import React, { useContext } from "react";
import IncomeContext from "state/income/income-context/income-context";
import MonetaryNumber from "components/monetary-number";

import DeleteComponentButton from "./delete-component-button";
import UpdateComponentButton from "./update-component-button";
import { IProps } from "./budget-component.types";
import "./budget-component.scss";

/**
 * A component of the user's budget.
 * @param props.componentId The ID of the component being displayed.
 * @param props.percentage  The percentage of income that this component is allocated.
 * @param props.title       The title of the component.
 */
const BudgetComponent = ({ componentId, percentage, title }: IProps) => {
    const { income } = useContext(IncomeContext);
    return (
        <div className="budget-components__component">
            <h2>{`${title} - ${percentage}%`}</h2>
            <MonetaryNumber value={income * (percentage / 100)} />
            <DeleteComponentButton componentId={componentId} />
            <UpdateComponentButton componentId={componentId} percentage={percentage} title={title} />
        </div>
    );
};

export default BudgetComponent;
