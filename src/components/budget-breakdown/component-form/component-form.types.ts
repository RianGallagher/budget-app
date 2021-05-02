import { IComponent } from "../budget-breakdown.types";

export interface IFormValues extends Omit<IComponent, "percentage"> {
    readonly percentage: number | null;
}

export interface IProps {
    readonly buttonLabel: string;
    readonly initialValues?: IFormValues;
    readonly onSubmit: (formValues: IComponent) => void;
}
