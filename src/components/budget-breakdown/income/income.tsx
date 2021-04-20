import React from "react";
import { IncomeView, IProps } from "./income.types";
import { faCalendar, faCalendarAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import Button from "components/button";
import MonetaryNumber from "components/monetary-number";
import { Views } from "constants/views";
import { useHistory } from "react-router-dom";
import "./income.scss";

/**
 * Display the user's income and a button to edit the income.
 * @param props.income The income to display.
 */
const Income = ({ income, updateIncomeView }: IProps) => {
    const history = useHistory();

    return (
        <div className="income">
            <div className="income__display">
                <h2>Income</h2>
                <>&nbsp;-&nbsp;</>
                <MonetaryNumber value={income} />
                <Button icon={faEdit} isIconOnly onClick={() => history.push(Views.Income)}></Button>
            </div>

            <div className="income__views">
                <Button onClick={() => updateIncomeView(IncomeView.Monthly)} icon={faCalendar}>
                    Monthly
                </Button>
                <Button onClick={() => updateIncomeView(IncomeView.Yearly)} icon={faCalendarAlt}>
                    Yearly
                </Button>
            </div>
        </div>
    );
};

export default Income;
