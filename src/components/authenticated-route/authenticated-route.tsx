import React from "react";
import FirebaseService from "utilities/firebase-service";
import { useAuthState } from "react-firebase-hooks/auth";
import ProtectedRoute from "components/protected-route";

import { IProps } from "./authenticated-route.types";
import "./authenticated-route.scss";

const AuthenticatedRoute = ({ children, path, ...rest }: IProps) => {
    const { auth } = FirebaseService;
    const [user] = useAuthState(auth);
    return (
        <ProtectedRoute path={path} shouldRedirect={Boolean(user) === false} redirectPath="/login" {...rest}>
            {children}
        </ProtectedRoute>
    );
};

export default AuthenticatedRoute;
