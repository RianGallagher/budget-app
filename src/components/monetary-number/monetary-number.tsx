import React, { useMemo } from "react";

import { Currency } from "./monetary-number.constants";
import { IProps } from "./monetary-number.types";
import "./monetary-number.scss";

const MonetaryNumber = ({ currency = Currency.Euro, value }: IProps) => {
    const formattedValue = useMemo(() => {
        return value.toFixed(2);
    }, [value]);

    return <div className="monetary-number">{`${currency} ${formattedValue}`}</div>;
};

export default MonetaryNumber;
