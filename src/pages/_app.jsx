/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import { Provider as ReduxProvider } from 'react-redux';

import CustomThemeProvider from '@styles/CustomThemeProvider';
import store from '@redux/store';
import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';
import IsMobileProvider from '@contextProviders/IsMobileProvider';

const App = (props) => {
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
          <IsMobileProvider>
            <Component {...pageProps} />
          </IsMobileProvider>
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
