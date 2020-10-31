import React from "react";

import { IProps } from "./spinner-until.types";
import "./spinner-until.scss";

/**
 * Shows a spinner until the data required to render is ready.
 * @param props.children The elements that should render when the data is ready.
 * @param props.data     The data that the children rely on.
 * @param props.isReady  A boolean indicating if the data is ready for render.
 */
const SpinnerUntil = <T extends {}>({ children, data, isReady }: IProps<T>) => {
    if (isReady) {
        return <>{children(data as T)}</>;
    } else {
        return <div>Loading...</div>;
    }
};

export default SpinnerUntil;
