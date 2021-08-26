/* eslint-disable react/jsx-props-no-spreading */
import { useRef } from 'react';
import CustomThemeProvider from '@root/styles/CustomThemeProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import store from '@root/redux/store';
import Head from 'next/head';
import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';
import IsMobileProvider from '@contextProviders/IsMobileProvider';

const App = (props) => {
  const queryClientRef = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  // eslint-disable-next-line react/prop-types
  const { Component, pageProps } = props;

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
      <ReduxProvider store={store}>
        <CustomThemeProvider theme={theme}>
          <QueryClientProvider client={queryClientRef.current}>
            <Hydrate>
              <IsMobileProvider>
                <Component {...pageProps} />
              </IsMobileProvider>
            </Hydrate>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
          <GlobalStyles />
        </CustomThemeProvider>
      </ReduxProvider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default App;
