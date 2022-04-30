import { NavbarBottom, NavbarTop, SidebarContainer } from "components";

interface Props {
  children: React.ReactNode;
}

export const DefaultWrapper = ({ children }: Props) => {
  return (
    <>
      <div className="flex justify-center min-w-full min-h-screen bg-slate-50 dark:bg-slate-800">
        <div className="flex flex-col w-full h-full">
          <NavbarTop
            user={{ id: "1", username: "Galaxy", email: "galaxy@gmail.com", avatar: null }}
          />
          <div className="mx-4">{children}</div>
          <NavbarBottom />
        </div>
      </div>
      <SidebarContainer />
    </>
  );
};
