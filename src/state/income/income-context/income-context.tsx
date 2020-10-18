import { createContext } from "react";

import { IIncomeContext } from "./income-context.types";

function doNothing() {}

export const defaultContext: IIncomeContext = {
    addIncome: doNothing,
    income: 0,
};

const IncomeContext = createContext(defaultContext);
export default IncomeContext;
