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
