import React from "react";
import Head from "next/head";
import { productName } from "../../package.json";

export default function HeadComponent() {
  return (
    <Head>
      <title>{productName}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}
