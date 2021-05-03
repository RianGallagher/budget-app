import { firestore } from "firebase";

export interface IExpense {
    readonly name: string;
    readonly value: number;
}

export interface IExpenseWithId extends IExpense {
    readonly expenseId: string;
}

export interface IProps {
    readonly componentValue: number;
    readonly expense: IExpenseWithId;
    readonly expensesRef: firestore.CollectionReference<firestore.DocumentData>;
}
