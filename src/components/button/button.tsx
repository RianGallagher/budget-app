import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

import { IProps, Variant } from "./button.types";
import "./button.scss";

const Button = ({ children, icon, isIconOnly, variant, ...buttonProps }: IProps) => (
    <button
        className={classnames("button", {
            "button--circular": isIconOnly,
            "button--positive": variant === Variant.positive,
            "button--negative": variant === Variant.negative,
        })}
        {...buttonProps}
    >
        <FontAwesomeIcon icon={icon} />
        {children && children}
    </button>
);

export default Button;
