import { NavbarBottom, NavbarTop, Sidebar } from "components/elements";

interface Props {
  children: React.ReactNode;
}

export const DefaultWrapper = ({ children }: Props) => {
  return (
    <>
      <div className="flex justify-center min-w-full min-h-screen bg-slate-50 dark:bg-slate-800">
        <div className="flex flex-col w-full">
          <div className="flex sticky top-0 z-10 items-center py-12 mb-3 w-full h-16 bg-slate-50">
            <NavbarTop
              user={{ id: "1", username: "Galaxy", email: "galaxy@gmail.com", avatar: null }}
            />
          </div>
          <div className="mx-4">{children}</div>
          <div className="flex fixed bottom-0 z-40 items-center py-2 m-2 w-[95%] h-fit bg-slate-50 rounded-md shadow-2xl">
            <NavbarBottom />
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
};
