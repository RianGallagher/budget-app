import React, { useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import IncomeContext from "state/income/income-context/income-context";
import FirebaseService from "utilities/firebase-service";
import BudgetComponent from "components/budget-component";
import MonetaryNumber from "components/monetary-number";
import SpinnerUntil from "components/spinner-until";

import AddComponent from "./add-component";
import { IComponentWithId } from "./budget-breakdown.types";
import "./budget-breakdown.scss";

/**
 * A breakdown of the user's budget.
 */
const BudgetBreakdown = () => {
    const { firestore, auth } = FirebaseService;
    const { income } = useContext(IncomeContext);
    const { uid } = auth.currentUser!;
    const componentsRef = firestore.collection(`users/${uid}/components`);

    const [components, loading] = useCollectionData<IComponentWithId>(componentsRef, {
        idField: "componentId",
    });

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
                                <BudgetComponent {...component} key={component.componentId} />
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
