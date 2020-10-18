import React, { useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import IncomeContext from "../../state/income/income-context/income-context";
import BudgetComponent from "../budget-component";
import MonetaryNumber from "../monetary-number";

import "./budget-breakdown.scss";
import { IProps } from "./budget-breakdown.types";

interface IComponent {
    readonly title: string;
    readonly percentage: number;
}

const BudgetBreakdown = ({ firestore }: IProps) => {
    const { income } = useContext(IncomeContext);
    const componentsRef = firestore.collection("components");

    const [components, loading, error] = useCollectionData<IComponent>(componentsRef);

    return (
        <div>
            {error && <strong>Error: {error}</strong>}
            {loading && <span>List: Loading...</span>}
            {!loading && components && (
                <>
                    <div className="income">
                        <h1>Income</h1>
                        {income === null ? <div>Nothing</div> : <MonetaryNumber value={income} />}
                    </div>
                    <div className="budget-components">
                        {components.map((component) => (
                            <BudgetComponent
                                title={component.title}
                                percentage={component.percentage}
                                key={component.title}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default BudgetBreakdown;
