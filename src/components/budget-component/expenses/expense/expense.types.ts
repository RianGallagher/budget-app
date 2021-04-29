export interface IExpense {
    readonly expenseId: number;
    readonly name: string;
    readonly percentage: number;
}

export interface IProps {
    readonly componentValue: number;
    readonly expense: IExpense;
}
