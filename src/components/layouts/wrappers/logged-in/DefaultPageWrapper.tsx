import {
  ExpandedSidebarContent,
  NavbarBottom,
  NavbarTop,
  PartialPageWrapper,
  Sidebar,
  SmallSidebarContent,
} from "@redlotus/ui";

import { NavbarBottomContent } from "components";
import { routesWithSidebar } from "routes";

interface Props {
  children: React.ReactNode;
  RightSide?: React.ReactNode;
}

export const DefaultPageWrapper = ({ children, RightSide }: Props) => {
  const appLogo = "/icons/android-chrome-512x512.png";
  const avatar = "/general/avatar.svg";
  const username = "Galaxy";

  return (
    <PartialPageWrapper
      MobileContent={
        <>
          <NavbarTop
            title="Template"
            user={{ id: "1", username, email: "galaxy@gmail.com", avatar: null }}
          />
          <div className="px-4">{children}</div>
          <NavbarBottom>
            <NavbarBottomContent />
          </NavbarBottom>
        </>
      }
      Sidebar={
        <Sidebar
          ExpandedSidebarContent={
            <ExpandedSidebarContent
              routes={routesWithSidebar}
              appLogo={appLogo}
              BottomContent={
                <div className="flex flex-row items-center px-4 space-x-3">
                  <img className="h-14 w-14" alt="user" src={avatar} />
                  <p className="text-xl font-semibold">{username}</p>
                </div>
              }
            />
          }
          SmallSidebarContent={
            <SmallSidebarContent
              routes={routesWithSidebar}
              appLogo={appLogo}
              BottomContent={<img className="h-14 w-14" alt="avatar" src={avatar} />}
            />
          }
        />
      }
      RightSide={RightSide}
    >
      {children}
    </PartialPageWrapper>
  );
};
