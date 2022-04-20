import { ScaleAnim } from "components/elements";
import { useSidebar } from "context";
import { UserType } from "types";

interface Props {
  user: UserType;
}

export const NavbarTop = ({ user }: Props) => {
  const { setisSidebarOpen } = useSidebar();

  return (
    <div className="flex flex-1 justify-between items-center px-4">
      <p className="text-2xl font-semibold text-gray-800">{import.meta.env.VITE_NAME}</p>
      <ScaleAnim>
        <div
          role="button"
          tabIndex={0}
          className="flex flex-row items-center cursor-pointer"
          onClick={() => setisSidebarOpen(isOpen => !isOpen)}
        >
          {user.avatar ? (
            <img className="w-5 h-5" alt="default pic" src={user.avatar} />
          ) : (
            <img className="w-14 h-14" alt="user" src="/assets/general/avatar.svg" />
          )}
        </div>
      </ScaleAnim>
    </div>
  );
};
