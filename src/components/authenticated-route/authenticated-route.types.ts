import { IProps as IProtectedRouteProps } from "components/protected-route/protected-route.types";

export interface IProps extends Omit<IProtectedRouteProps, "redirectPath" | "shouldRedirect"> {}
