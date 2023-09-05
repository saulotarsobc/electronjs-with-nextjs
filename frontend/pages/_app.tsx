import { build, version } from "../../package.json";
import Head from "next/head";
import type { AppProps } from "next/app";

const pageTitle = `${build.productName} - v${version}`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta lang="pt-br" />
        <title>{pageTitle}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
