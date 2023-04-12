import { useContext } from "react";
import { SideBarContext } from "~/providers/SideBarContext";

export const SideBarTriggerArea = () => {
  const { sidebarState, setSidebarState } = useContext(SideBarContext);

  return (
    <div
      onMouseOver={(e) => {
        e.preventDefault();
        if (sidebarState === "hidden") {
          setSidebarState("overlay");
        }
      }}
      className="fixed z-10 h-full w-12"
    ></div>
  );
};
