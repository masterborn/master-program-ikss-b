import React from 'react';
import PropTypes from 'prop-types';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import Layout from '@root/components/layout';
import {
  ErrorDescription,
  ErrorMessage,
  ErrorPageContainer,
  GetBackButton,
  IKKSContainer,
  IKKSLogo,
} from '@root/components/404Page/custom404.styles';
import Link from 'next/link';

export default function Custom404({ custom404Data: { common } }) {
  const { 'contact-form-text': contactFormText } = common;
  const { 'contact-form-tooltip': tooltipText } = common;

  return (
    <Layout contactFormText={contactFormText} tooltipText={tooltipText}>
      <ErrorPageContainer>
        <IKKSContainer>
          <IKKSLogo />
        </IKKSContainer>
        <ErrorMessage>ups, 404</ErrorMessage>
        <ErrorDescription>
          Za każdym razem kiedy trafiasz na tę stronę, ktoś wymawia <span>„i-ka-ka-es”</span>
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

export async function getStaticProps() {
  const resJson = await getPagesDataMockup();
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

Custom404.propTypes = {
  custom404Data: PropTypes.shape({
    common: PropTypes.shape({
      'contact-form-text': PropTypes.shape({}),
      'contact-form-tooltip': PropTypes.shape({}),
    }),
  }).isRequired,
};
