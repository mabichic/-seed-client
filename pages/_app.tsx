import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";

export default function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;

  return (
    <ApolloProvider client={client}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps}/>
        </Layout>
          </SessionProvider>
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}
