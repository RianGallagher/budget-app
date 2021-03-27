import React from "react";
import { Redirect, Route } from "react-router";

import { IProps } from "./protected-route.types";
import "./protected-route.scss";

const ProtectedRoute = ({ children, redirectPath, shouldRedirect, ...rest }: IProps) => {
    if (shouldRedirect) {
        return <Redirect to={{ pathname: redirectPath }} />;
    }
    return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
