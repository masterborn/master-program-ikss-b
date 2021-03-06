import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import getPagesData from '@clients/contentful';
import mapData from '@dataMappers/contentful';
import Layout from '@layout';
import {
  ErrorDescription,
  ErrorMessage,
  ErrorPageContainer,
  GetBackButton,
  IKKSContainer,
  IKKSLogo,
} from '@404Page/custom404.styles';

export async function getStaticProps() {
  const resJson = await getPagesData();
  const pagesData = mapData(resJson);

  const {
    basicContent: { common },
  } = pagesData;
  const custom404Data = { common };

  return {
    props: {
      custom404Data,
    },
  };
}

export default function Custom404({ custom404Data: { common } }) {
  const {
    socialFacebook,
    socialLinkedin,
    socialInstagram,
    socialYoutube,
    contactFormText,
    contactFormTooltip,
    footerText,
  } = common;
  const socials = { socialFacebook, socialLinkedin, socialInstagram, socialYoutube };

  return (
    <Layout
      socials={socials}
      footerText={footerText}
      contactFormText={contactFormText}
      tooltipText={contactFormTooltip}
    >
      <ErrorPageContainer>
        <IKKSContainer>
          <IKKSLogo />
        </IKKSContainer>
        <ErrorMessage>ups, 404</ErrorMessage>
        <ErrorDescription>
          Za każdym razem kiedy trafiasz na tę stronę, ktoś wymawia <span>„i-ka-ka-es”</span>{' '}
          zamiast
          <b> „ikss”.</b>
        </ErrorDescription>
        <Link href="/">
          <GetBackButton isBig>Uciekam stąd</GetBackButton>
        </Link>
      </ErrorPageContainer>
    </Layout>
  );
}

Custom404.propTypes = {
  custom404Data: PropTypes.shape({
    common: PropTypes.shape({
      contactFormText: PropTypes.shape({}),
      contactFormTooltip: PropTypes.shape({}),
      socialFacebook: PropTypes.shape({}),
      socialLinkedin: PropTypes.shape({}),
      socialInstagram: PropTypes.shape({}),
      socialYoutube: PropTypes.shape({}),
      footerText: PropTypes.shape({}),
    }).isRequired,
  }).isRequired,
};
