import { Brand } from "./Brand";
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { clsx } from "clsx";
import { useRouter } from "next/router";
import { dark } from "@clerk/themes";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { SideBar } from "./SideBar";
import { useContext } from "react";
import { SideBarContext } from "~/providers/SideBarContext";

export const DefaultHeader: React.FC = () => {
  return (
    <header
      className={clsx(
        "fixed z-20 h-20 w-full border-b border-zinc-800 px-4 py-4 dark:bg-zinc-950"
      )}
    >
      <div className="flex items-center justify-end gap-4">
        <div className="mr-auto">
          <Brand />
        </div>
        <SignedIn>
          <Link
            href="/dashboard"
            className="rounded-md px-4 py-2 dark:bg-rose-700 dark:hover:bg-rose-600 dark:focus:ring-1 dark:focus:ring-rose-500"
          >
            Go to Dashboard
          </Link>
          <UserButton
            showName={true}
            appearance={{
              baseTheme: dark,
            }}
          />
        </SignedIn>
        <SignedOut>
          <Link
            href="/signup"
            className="rounded-md px-4 py-2 dark:bg-rose-700 dark:hover:bg-rose-600 dark:focus:ring-1 dark:focus:ring-rose-500"
          >
            Sign Up
          </Link>
        </SignedOut>
      </div>
    </header>
  );
};

export const DashboardHeader: React.FC = () => {
  const { sidebarState, setSidebarState } = useContext(SideBarContext);

  return (
    <header
      className={clsx("w-full border-b border-zinc-800 pr-2 dark:bg-zinc-950")}
    >
      <div className="flex flex-1">
        <div
          onMouseOver={(e) => {
            e.preventDefault();
            if (sidebarState === "hidden") {
              setSidebarState("overlay");
            }
          }}
          className="p-2"
        >
          <button
            type="button"
            className="rounded-md p-2 transition-colors dark:hover:bg-rose-950"
            onClick={(e) => {
              e.preventDefault();
              setSidebarState((prev) => (prev === "push" ? "overlay" : "push"));
            }}
          >
            {sidebarState === "push" ? (
              <DoubleArrowLeftIcon />
            ) : sidebarState === "hidden" ? (
              <HamburgerMenuIcon />
            ) : (
              <DoubleArrowRightIcon />
            )}
          </button>
        </div>
        <div
          onMouseOver={(e) => {
            e.preventDefault();
            if (sidebarState === "overlay") {
              setSidebarState("hidden");
            }
          }}
          className="flex w-full justify-end p-2"
        >
          <SignedIn>
            <UserButton
              showName={true}
              appearance={{
                baseTheme: dark,
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};
