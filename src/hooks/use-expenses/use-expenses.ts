import { IExpense } from "components/budget-component/expenses/expense/expense.types";
import { useCollectionData } from "react-firebase-hooks/firestore";
import FirebaseService from "utilities/firebase-service";

/**
 * A hook for get the expenses associated with a particular component.
 * @param componentId The ID of the component that you're getting expenses for.
 */
const useExpenses = (componentId: string) => {
    const { firestore, auth } = FirebaseService;
    const user = auth.currentUser;
    const expensesRef = firestore.collection(`users/${user?.uid}/components/${componentId}/expenses`);

    return useCollectionData<IExpense>(expensesRef, {
        idField: "expenseId",
    });
};

export default useExpenses;
