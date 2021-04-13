import React from "react";
import { IProps } from "./income.types";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Button from "components/button";
import MonetaryNumber from "components/monetary-number";
import { Views } from "constants/views";
import { useHistory } from "react-router-dom";
import "./income.scss";

/**
 * Display the user's income and a button to edit the income.
 * @param props.income The income to display.
 */
const Income = ({ income }: IProps) => {
    const history = useHistory();
    return (
        <div className="income">
            <h2>Income</h2>
            <>&nbsp;-&nbsp;</>
            <MonetaryNumber value={income} />
            <Button icon={faEdit} isIconOnly onClick={() => history.push(Views.Income)}></Button>
        </div>
    );
};

export default Income;
