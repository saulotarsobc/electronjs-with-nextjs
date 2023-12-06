import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";

import { build, version, description } from "../../package.json";
const pageTitle = `${build.productName} - v${version}`;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../build/icon.png" />
      </Head>
      <Header />
      {children}
    </>
  );
}
