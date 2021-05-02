import { IComponent } from "../../budget-breakdown/budget-breakdown.types";

export interface IProps extends IComponent {
    readonly updateComponent: (value: Partial<IComponent>) => Promise<void>;
}
