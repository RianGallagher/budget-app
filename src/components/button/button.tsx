import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

import { IProps } from "./button.types";
import "./button.scss";

const Button = ({ children, icon, isIconOnly, ...buttonProps }: IProps) => (
    <button className={classnames("button", { "button--circular": isIconOnly })} {...buttonProps}>
        <FontAwesomeIcon icon={icon} />
        {children && children}
    </button>
);

export default Button;
