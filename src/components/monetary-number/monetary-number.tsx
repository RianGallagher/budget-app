import React from "react";

import { Currency } from "./monetary-number.constants";
import { IProps } from "./monetary-number.types";
import "./monetary-number.scss";

const MonetaryNumber = ({ currency = Currency.Euro, value }: IProps) => (
    <div className="monetary-number">{`${currency} ${value.toFixed(2)}`}</div>
);

export default MonetaryNumber;
