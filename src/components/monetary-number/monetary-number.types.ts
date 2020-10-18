import { Currency } from "./monetary-number.constants";

export interface IProps {
    readonly currency?: Currency;
    readonly value: number;
}
