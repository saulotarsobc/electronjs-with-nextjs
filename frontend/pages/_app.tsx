import { MantineProvider, createTheme } from "@mantine/core";
import Layout from "../components/Layout";
import "../styles/global.css";

// mantine
// core styles are required for all packages
import "@mantine/core/styles.css";

import type { AppProps } from "next/app";

const theme = createTheme({
  /** Your theme override here */
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}
