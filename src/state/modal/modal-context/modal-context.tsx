import { createContext } from "react";

import { doNothing } from "../../../utilities";

import { IModalContext } from "./modal-context.types";

const ModalContext = createContext<IModalContext>({
    hideModal: doNothing,
    isOpen: false,
    showModal: doNothing,
});

export default ModalContext;
