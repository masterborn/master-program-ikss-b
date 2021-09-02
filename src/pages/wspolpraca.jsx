import React from 'react';
import PropTypes from 'prop-types';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData, { sortByOrder } from '@root/dataMappers/contentful';
import Layout from '@root/components/layout';
import PartnersSection from '@root/components/home/partnersList/PartnersSection';
import CooperationValuesSection from '@root/components/cooperation/valuesSection';

export default function Cooperation({ cooperationData: { common, partners, basicContent } }) {
  const {
    'social-facebook': socialFb,
    'social-linkedin': socialIn,
    'social-instagram': socialIg,
    'social-youtube': socialYt,
    'contact-form-text': contactFormText,
    'contact-form-tooltip': tooltipText,
    'footer-text': footerText,
  } = common;

  const valuesTiles = Object.entries(basicContent)
    .filter(([key]) => /cooperation-tile-/.test(key))
    .map(([, val]) => val);

  const { 'cooperation-logos-text': partnersText, 'cooperation-tiles-title': valuesTitle } =
    basicContent;
  const socials = { socialFb, socialIn, socialIg, socialYt };
  const orderedPartners = sortByOrder(partners);

  return (
    <Layout
      socials={socials}
      footerText={footerText}
      contactFormText={contactFormText}
      tooltipText={tooltipText}
    >
      <CooperationValuesSection valuesTiles={valuesTiles} valuesTitle={valuesTitle} />

      <PartnersSection partners={orderedPartners} partnersText={partnersText} />
    </Layout>
  );
}

export async function getStaticProps() {
  const resJson = await getPagesDataMockup();
  const pagesData = mapData(resJson);

  const {
    basicContent: { common, cooperation: basicContent },
    partnerLogos: partners,
  } = pagesData;
  const cooperationData = { partners, common, basicContent };
  return {
    props: {
      cooperationData,
    },
  };
}

Cooperation.propTypes = {
  cooperationData: PropTypes.shape({
    common: PropTypes.shape({
      'contact-form-text': PropTypes.shape({}),
      'contact-form-tooltip': PropTypes.shape({}),
      'social-facebook': PropTypes.shape({}),
      'social-linkedin': PropTypes.shape({}),
      'social-instagram': PropTypes.shape({}),
      'social-youtube': PropTypes.shape({}),
      'footer-text': PropTypes.shape({}),
    }),
    partners: PropTypes.arrayOf(PropTypes.object).isRequired,
    basicContent: PropTypes.shape({
      'cooperation-logos-text': PropTypes.shape({}),
      'cooperation-tiles-title': PropTypes.shape({}),
    }),
  }).isRequired,
};
