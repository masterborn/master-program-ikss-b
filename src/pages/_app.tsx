import { FunctionComponent, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import Head from 'next/head';
import { AppProps } from 'next/app';
import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';
import Layout from '../components/layout';

const App: FunctionComponent<AppProps> = (props) => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const { Component, pageProps } = props;

  const [isContactModalOpened, setModalIsOpened] = useState(false);

  const closeContactModal = () => {
    setModalIsOpened(false);
  };
  const openContactModal = () => {
    setModalIsOpened(true);
  };

  return (
    <>
      <Head>
        <title>App Name</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout
              closeContactModal={closeContactModal}
              openContactModal={openContactModal}
              isContactModalOpened={isContactModalOpened}
            >
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <GlobalStyles isContactModalOpened={isContactModalOpened} />
      </ThemeProvider>
    </>
  );
};

export default App;
