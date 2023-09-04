import Head from "next/head";
import type { AppProps } from "next/app";
import { productName, version } from "../../package.json";

const pageTitle = `${productName} - v${version}`;

import "../styles/main.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{pageTitle}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
