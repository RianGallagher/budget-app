import React from "react";

import ModalProvider from "../../../state/modal/modal-provider/modal-provider";
import ModalContext from "../../../state/modal/modal-context/modal-context";

import { IProps } from "./modal-container.types";
import "./modal-container.scss";

const ModalContainer = ({ children, ...otherProps }: IProps) => (
    <ModalProvider {...otherProps}>
        <ModalContext.Consumer>
            {(context) => (typeof children === "function" ? children(context) : children)}
        </ModalContext.Consumer>
    </ModalProvider>
);

export default ModalContainer;
