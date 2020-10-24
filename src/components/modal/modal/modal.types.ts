import { IModalContext } from "../../../state/modal/modal-context/modal-context.types";

export interface IProps extends IModalContext {
    readonly children: React.ReactNode;
}
