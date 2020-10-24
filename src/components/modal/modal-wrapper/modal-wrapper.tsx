import React, { useContext } from "react";

import ModalContext from "../../../state/modal/modal-context/modal-context";
import Modal from "../modal/modal";

import { IProps } from "./modal-wrapper.types";
import "./modal-wrapper.scss";

const ModalWrapper = ({ children }: IProps) => {
    const context = useContext(ModalContext);

    return <Modal {...context}>{children}</Modal>;
};

export default ModalWrapper;
