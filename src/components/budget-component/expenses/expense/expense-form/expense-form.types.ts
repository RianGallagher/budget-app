import { IExpense } from "../expense.types";

export interface IFormValues extends Omit<IExpense, "value"> {
    readonly value: number | null;
}

export interface IProps {
    readonly initialValues?: IFormValues;
    readonly onSubmit: (values: IExpense) => void;
}
