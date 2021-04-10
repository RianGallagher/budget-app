import React from "react";
import MonetaryNumber from "components/monetary-number";

import DeleteComponentButton from "./delete-component-button";
import UpdateComponentButton from "./update-component-button";
import { IProps } from "./budget-component.types";
import "./budget-component.scss";

/**
 * A component of the user's budget.
 * @param props.componentId The ID of the component being displayed.
 * @param props.income      The income of the user.
 * @param props.percentage  The percentage of income that this component is allocated.
 * @param props.title       The title of the component.
 */
const BudgetComponent = ({ componentId, income, percentage, title }: IProps) => (
    <div className="budget-component">
        <div className="budget-component__title">{`${title} - ${percentage}%`}</div>
        <MonetaryNumber value={income * (percentage / 100)} />
        <div className="budget-component__buttons">
            <DeleteComponentButton componentId={componentId} />
            <UpdateComponentButton componentId={componentId} percentage={percentage} title={title} />
        </div>
    </div>
);

export default BudgetComponent;
