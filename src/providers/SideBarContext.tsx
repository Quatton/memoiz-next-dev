// Write example on how to create a context provider
import { Dispatch, SetStateAction, createContext, useState } from "react";

type SideBarState = "hidden" | "overlay" | "push";

type SideBarContextType = {
  sidebarState: SideBarState;
  setSidebarState: Dispatch<SetStateAction<SideBarState>>;
};

const SideBarContext = createContext<SideBarContextType>({
  sidebarState: "hidden",
  setSidebarState: () => {},
});

const SideBarContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [sidebarState, setSidebarState] = useState<SideBarState>("hidden");

  return (
    <SideBarContext.Provider value={{ sidebarState, setSidebarState }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideBarContext, SideBarContextProvider };
