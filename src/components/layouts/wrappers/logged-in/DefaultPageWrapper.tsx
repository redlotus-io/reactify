import { NavbarBottom, NavbarTop, PartialPageWrapper, Sidebar } from "@redlotus/ui";

import { ExpandedSidebarContent, NavbarBottomContent, SmallSidebarContent } from "components";

interface Props {
  children: React.ReactNode;
  RightSide?: React.ReactNode;
}

export const DefaultPageWrapper = ({ children, RightSide }: Props) => {
  return (
    <PartialPageWrapper
      MobileContent={
        <>
          <NavbarTop
            title="Template"
            user={{ id: "1", username: "Galaxy", email: "galaxy@gmail.com", avatar: null }}
          />
          <div className="px-4">{children}</div>
          <NavbarBottom>
            <NavbarBottomContent />
          </NavbarBottom>
        </>
      }
      Sidebar={
        <Sidebar
          ExpandedSidebarContent={<ExpandedSidebarContent />}
          SmallSidebarContent={<SmallSidebarContent />}
        />
      }
      RightSide={RightSide}
    >
      {children}
    </PartialPageWrapper>
  );
};
