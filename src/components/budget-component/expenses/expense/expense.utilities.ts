import { firestore } from "firebase";
import { IExpense } from "./expense.types";

/**
 * A hook for performing database operations on an expense.
 * @param expenseId   The ID of the expense being changed.
 * @param expensesRef The database ref of the expenses.
 * @returns An object containing functions for deleting and updating an expense.
 */
export const useExpense = (expenseId: string, expensesRef: firestore.CollectionReference<firestore.DocumentData>) => {
    const expenseRef = expensesRef.doc(expenseId);

    const deleteExpense = () => {
        return expenseRef.delete();
    };

    const updateExpense = (value: Partial<IExpense>) => {
        return expenseRef.update(value);
    };

    return { deleteExpense, updateExpense };
};
