import { IExpense, IExpenseWithId } from "../expense.types";

export interface IProps {
    readonly expense: IExpenseWithId;
    readonly updateExpense: (value: Partial<IExpense>) => Promise<void>;
}
