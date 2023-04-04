import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";

import Menu from "../components/Menu";

import { type AppType } from "next/app";
import { type Session } from "next-auth";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Menu />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
