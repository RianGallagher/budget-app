export interface IFormValues {
    readonly income: string;
}

export interface IProps {
    readonly setIncome: (income: number) => void;
}
