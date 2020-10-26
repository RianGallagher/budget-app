import { IComponent } from "../budget-breakdown.types";

export interface IFormValues {
    readonly title: string;
    readonly percentage: string | number;
}

export interface IProps {
    readonly buttonLabel: string;
    readonly initialValues?: IFormValues;
    readonly onSubmit: (formValues: IFormValues) => void;
}
