import { build, version } from "../../package.json";
import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

const pageTitle = `${build.productName} - v${version}`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta lang="pt-br" />
        <title>{pageTitle}</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
