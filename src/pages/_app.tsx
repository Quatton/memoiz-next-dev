import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { SideBarContextProvider } from "~/providers/SideBarContext";

const MyApp: AppType<{}> = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <SideBarContextProvider>
        <Component {...pageProps} />
      </SideBarContextProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
