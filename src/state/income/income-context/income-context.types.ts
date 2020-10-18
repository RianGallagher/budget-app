export interface IIncomeContext {
    readonly addIncome: (income: number) => void;
    readonly income: number;
}