import { useState, useEffect } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "utilities/local-storage";
import { IncomeView } from "./income/income.types";

/**
 * A hook for displaying income in differnt views, e.g monthly or yearly.
 * @param yearlyIncome The yearly income of the user.
 */
export const useIncome = (yearlyIncome: number) => {
    const storedIncomeView = getLocalStorageItem("incomeView") as IncomeView | null;

    const [income, setIncome] = useState(yearlyIncome);
    const [incomeView, setIncomeView] = useState<IncomeView | null>(storedIncomeView ?? IncomeView.Yearly);

    const updateIncomeView = (incomeView: IncomeView) => {
        setIncomeView(incomeView);
        setLocalStorageItem("incomeView", incomeView);
    };

    useEffect(() => {
        if (incomeView === IncomeView.Monthly) {
            setIncome(yearlyIncome / 12);
        } else {
            setIncome(yearlyIncome);
        }
    }, [incomeView]);

    return { income, updateIncomeView };
};
