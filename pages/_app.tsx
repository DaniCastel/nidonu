import * as React from "react";

import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
