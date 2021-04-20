export enum IncomeView {
    Yearly = "yearly",
    Monthly = "Monthly",
}

export interface IProps {
    readonly income: number;
    readonly updateIncomeView: (income: IncomeView) => void;
}
