import React from "react";
import BudgetComponent from "components/budget-component";
import MonetaryNumber from "components/monetary-number";
import SpinnerUntil from "components/spinner-until";
import useComponents from "hooks/use-components";

import AddComponent from "./add-component";
import { IComponentWithId, IProps } from "./budget-breakdown.types";
import "./budget-breakdown.scss";

/**
 * A breakdown of the user's budget.
 */
const BudgetBreakdown = ({ income }: IProps) => {
    const [components, loading] = useComponents();
    return (
        <div className="budget-breakdown">
            <div className="income">
                <h2>Income</h2>
                <MonetaryNumber value={income} />
            </div>
            <SpinnerUntil<IComponentWithId[]> data={components} isReady={!loading && typeof components !== "undefined"}>
                {(components) => (
                    <div className="budget-components__container">
                        <div className="budget-components">
                            {components.map((component) => (
                                <BudgetComponent {...component} income={income} key={component.componentId} />
                            ))}
                        </div>
                        <AddComponent />
                    </div>
                )}
            </SpinnerUntil>
        </div>
    );
};

export default BudgetBreakdown;
