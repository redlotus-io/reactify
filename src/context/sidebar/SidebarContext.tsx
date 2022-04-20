import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type InitialContextType = {
  isSidebarOpen: boolean;
  setisSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

type ProviderProps = {
  children: React.ReactNode;
};

const initContextData: InitialContextType = {
  isSidebarOpen: false,
  setisSidebarOpen: () => {},
};

const SidebarContext = createContext(initContextData);

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }: ProviderProps) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setisSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
