import { IModalContext } from "../../../state/modal/modal-context/modal-context.types";

export interface IProps {
    readonly children: React.ReactNode | ((context: IModalContext) => React.ReactNode);
    readonly isOpen?: boolean;
}
