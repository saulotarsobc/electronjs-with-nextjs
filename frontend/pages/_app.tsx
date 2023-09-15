import Head from "next/head";
import Layout from "../components/Layout";

import type { AppProps } from "next/app";

import { build, version } from "../../package.json";
const pageTitle = `${build.productName} - v${version}`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
