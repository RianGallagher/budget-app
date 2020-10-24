import React, { useState } from "react";

import ModalContext from "../modal-context/modal-context";

import { IProps } from "./modal-provider.types";

const ModalProvider = ({ children, isOpen: initialIsOpen = false }: IProps) => {
    const [isOpen, setIsOpen] = useState(initialIsOpen);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return <ModalContext.Provider value={{ hideModal, isOpen, showModal }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
