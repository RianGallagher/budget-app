export interface IExpense {
    readonly expenseId: number;
    readonly name: string;
    readonly value: number;
}

export interface IProps {
    readonly componentValue: number;
    readonly expense: IExpense;
}
