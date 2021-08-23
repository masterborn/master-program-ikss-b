/* eslint-disable react/jsx-props-no-spreading */
import { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import PropTypes from 'prop-types';
import Head from 'next/head';
import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';
import Layout from '@root/components/layout';
import useIsMobile from '@root/hooks/useIsMobile';

const App = (props) => {
  const queryClientRef = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  // eslint-disable-next-line react/prop-types
  const { Component, pageProps } = props;
  const isMobile = useIsMobile();

  const [isContactModalOpened, setModalIsOpened] = useState(false);

  const closeContactModal = () => setModalIsOpened(false);
  const openContactModal = () => setModalIsOpened(true);

  const updatedTheme = {
    ...theme,
    overflow: isContactModalOpened ? 'hidden' : 'auto',
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
      <ThemeProvider theme={updatedTheme}>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate>
            <Layout
              isMobile={isMobile}
              closeContactModal={closeContactModal}
              openContactModal={openContactModal}
              isContactModalOpened={isContactModalOpened}
            >
              <Component {...pageProps} isMobile={isMobile} />
            </Layout>
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default App;
