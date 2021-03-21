import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export enum Variant {
    positive = "positive",
    negative = "negative",
}

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    readonly children?: React.ReactNode;
    readonly icon: IconDefinition;
    readonly isIconOnly?: boolean;
    readonly variant?: Variant;
}
