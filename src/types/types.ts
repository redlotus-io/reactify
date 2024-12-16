import { JSX } from "react";

export interface ISidebarRouter {
  to: string;
  routeName: string;
  smallIcon: JSX.Element;
  bigIcon: JSX.Element;
  element?: JSX.Element;
  tooltip?: string;
}
export interface IRegularRouter {
  to: string;
  element?: JSX.Element;
}

export interface UserType {
  id: string;
  email: string;
  username: string;
  avatar: string;
}
