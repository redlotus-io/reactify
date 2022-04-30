import { Sidebar } from "components";
import { useIsMobile } from "hooks";

export const SidebarContainer = () => {
  const { isMobile } = useIsMobile();

  return <Sidebar placeMent={isMobile ? "right" : "left"} />;
};
