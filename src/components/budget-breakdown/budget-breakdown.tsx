import React from "react";
import BudgetComponent from "components/budget-component";
import SpinnerUntil from "components/spinner-until";
import useComponents from "hooks/use-components";
import AddComponent from "./add-component";
import { IComponentWithId, IProps } from "./budget-breakdown.types";
import Income from "./income";
import { useIncome } from "./budget-breakdown.utilities";
import "./budget-breakdown.scss";

/**
 * A breakdown of the user's budget.
 */
const BudgetBreakdown = ({ income: yearlyIncome }: IProps) => {
    const [components, loading] = useComponents();
    const { income, updateIncomeView } = useIncome(yearlyIncome);

    return (
        <div className="budget-breakdown">
            <Income income={income} updateIncomeView={updateIncomeView} />
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
