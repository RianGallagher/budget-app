import React, { useContext, useEffect } from "react";
import ReactModal from "react-modal";

import ModalContext from "../../../state/modal/modal-context/modal-context";

import { IProps } from "./modal.types";
import "./modal.scss";

const ROOT_ID = "root";

const Modal = ({ children }: IProps) => {
    const { hideModal, isOpen } = useContext(ModalContext);

    useEffect(() => {
        if (document.getElementById(ROOT_ID)) {
            ReactModal.setAppElement(`#${ROOT_ID}`);
        }
    }, []);

    return (
        <ReactModal
            className="modal__outer"
            isOpen={isOpen}
            onRequestClose={hideModal}
            overlayClassName="modal__overlay"
            parentSelector={() => document.getElementById(ROOT_ID) ?? document.body}
        >
            <div className="modal">
                <div className="modal__content">{children}</div>
            </div>
        </ReactModal>
    );
};

export default Modal;
