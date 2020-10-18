import React, { useState } from "react";

import IncomeContext from "../income-context/income-context";

import { IProps } from "./income-provider.types";

const IncomeProvider = ({ children, income: initialIncome }: IProps) => {
    const [income, setIncome] = useState<number>(initialIncome);

    const addIncome = (income: number) => setIncome(income);

    return <IncomeContext.Provider value={{ addIncome, income }}>{children}</IncomeContext.Provider>;
};

export default IncomeProvider;
