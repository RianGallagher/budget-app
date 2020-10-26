import React, { useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import IncomeContext from "../../state/income/income-context/income-context";
import FirebaseService from "../../utilities/firebase-service";
import BudgetComponent from "../budget-component";
import MonetaryNumber from "../monetary-number";

import AddComponent from "./add-component";
import { IComponent } from "./budget-breakdown.types";
import DeleteComponentButton from "./delete-component-button";
import UpdateComponent from "./update-component";
import "./budget-breakdown.scss";

const BudgetBreakdown = () => {
    const { firestore, auth } = FirebaseService;
    const { income } = useContext(IncomeContext);
    const { uid } = auth.currentUser!;
    const componentsRef = firestore.collection(`users/${uid}/components`);

    const [components, loading, error] = useCollectionData<IComponent & { componentId: string }>(componentsRef, {
        idField: "componentId",
    });

    return (
        <div>
            <div className="income">
                <h1>Income</h1>
                {income === null ? <div>Nothing</div> : <MonetaryNumber value={income} />}
            </div>
            {error && <strong>Error: {error}</strong>}
            {loading && <span>List: Loading...</span>}
            {!loading && components && (
                <>
                    <div className="budget-components">
                        {components.map((component) => (
                            <React.Fragment key={component.componentId}>
                                <BudgetComponent {...component} />
                                <DeleteComponentButton componentId={component.componentId} />
                                <UpdateComponent {...component} />
                            </React.Fragment>
                        ))}
                    </div>
                    <AddComponent />
                </>
            )}
        </div>
    );
};

export default BudgetBreakdown;
