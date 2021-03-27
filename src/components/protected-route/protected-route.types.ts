import { RouteProps } from "react-router";

export interface IProps extends RouteProps {
    readonly shouldRedirect: boolean;
    readonly redirectPath: string;
}
