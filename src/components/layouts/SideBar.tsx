import {
  BoxIcon,
  ChatBubbleIcon,
  HomeIcon,
  TableIcon,
} from "@radix-ui/react-icons";
import clsx from "clsx";
import Link from "next/link";
import { useContext } from "react";
import { SideBarContext } from "~/providers/SideBarContext";

export const SideBar: React.FC<{
  activeRoute: "home" | "databases" | "chat";
}> = ({ activeRoute }) => {
  const { sidebarState, setSidebarState } = useContext(SideBarContext);
  const activeColor = clsx("dark:bg-rose-900");
  const inactiveColor = clsx("dark:bg-rose-950 dark:hover:bg-rose-800");
  const activeColorGlass = clsx("dark:bg-rose-900/50");
  const inactiveColorGlass = clsx(
    "dark:bg-rose-950/50 dark:hover:bg-rose-800/50"
  );

  return (
    <aside
      className={clsx(
        "h-full transition-all",
        sidebarState === "hidden" && "fixed -translate-x-full transform p-2",
        sidebarState === "overlay" && "fixed z-20 w-60 transform p-2",
        sidebarState === "push" && "w-60 animate-grow overflow-x-hidden"
      )}
      id="sidebar"
      onMouseLeave={(e) => {
        e.preventDefault();
        if (sidebarState === "overlay") {
          setSidebarState("hidden");
        }
      }}
    >
      <div
        className={clsx(
          "flex h-full flex-col",
          sidebarState === "overlay" ? "rounded-sm" : "",
          sidebarState === "push"
            ? "bg-rose-950"
            : "bg-rose-950/50 backdrop-blur-sm backdrop-filter"
        )}
      >
        <Link
          href="/dashboard"
          className={clsx(
            "flex items-center gap-2 rounded-t-sm px-4 py-2 transition-all",
            sidebarState === "push"
              ? activeRoute === "home"
                ? activeColor
                : inactiveColor
              : activeRoute === "home"
              ? activeColorGlass
              : inactiveColorGlass
          )}
        >
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link
          href="/dashboard/databases"
          className={clsx(
            "flex items-center gap-2 px-4 py-2 transition-all",
            sidebarState === "push"
              ? activeRoute === "databases"
                ? activeColor
                : inactiveColor
              : activeRoute === "databases"
              ? activeColorGlass
              : inactiveColorGlass
          )}
        >
          <TableIcon />
          <span>My Databases</span>
        </Link>
        <Link
          href="/dashboard/chat"
          className={clsx(
            "flex items-center gap-2 rounded-b-sm px-4 py-2 transition-all",
            sidebarState === "push"
              ? activeRoute === "chat"
                ? activeColor
                : inactiveColor
              : activeRoute === "chat"
              ? activeColorGlass
              : inactiveColorGlass
          )}
        >
          <ChatBubbleIcon />
          <span>Chat</span>
        </Link>
      </div>
    </aside>
  );
};
