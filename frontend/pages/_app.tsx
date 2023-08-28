import Head from "next/head";
import { productName, version } from "../../package.json";
import type { AppProps } from "next/app";

const pageTitle = `${productName} - v${version}`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
