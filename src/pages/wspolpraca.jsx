import React from 'react';
import PropTypes from 'prop-types';

import { getPagesDataMockup } from '@clients/contentful';
import mapData, { sortByOrder } from '@root/dataMappers/contentful';
import Layout from '@layout';
import PartnersSection from '@generic/partnersList/PartnersSection';
import CooperationValuesSection from '@cooperation/valuesSection';
import BottomCta from '@cta/bottomCta/BottomCta';
import TopSection from '@topSection/TopSection';

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

  const {
    'cooperation-top-section': topSectionContent,
    'cooperation-logos-text': partnersText,
    'cooperation-tiles-title': valuesTitle,
    'cooperation-tile-1': cooperationTile1,
    'cooperation-tile-2': cooperationTile2,
    'cooperation-tile-3': cooperationTile3,
    'cooperation-tile-4': cooperationTile4,
    'cooperation-tile-5': cooperationTile5,
    'cooperation-bottom-cta': bottomCtaContent,
  } = basicContent;
  const socials = { socialFb, socialIn, socialIg, socialYt };
  const valuesTiles = [
    cooperationTile1,
    cooperationTile2,
    cooperationTile3,
    cooperationTile4,
    cooperationTile5,
  ];
  const orderedPartners = sortByOrder(partners);

  return (
    <Layout
      socials={socials}
      footerText={footerText}
      contactFormText={contactFormText}
      tooltipText={tooltipText}
    >
      <TopSection isOnCooperation topSectionContent={topSectionContent} sectionId="współpraca" />
      <CooperationValuesSection valuesTiles={valuesTiles} valuesTitle={valuesTitle} />
      <PartnersSection partners={orderedPartners} partnersText={partnersText} />
      <BottomCta bottomCtaContent={bottomCtaContent} />
    </Layout>
  );
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
      'cooperation-tile-1': PropTypes.shape({}),
      'cooperation-tile-2': PropTypes.shape({}),
      'cooperation-tile-3': PropTypes.shape({}),
      'cooperation-tile-4': PropTypes.shape({}),
      'cooperation-tile-5': PropTypes.shape({}),
      'cooperation-bottom-cta': PropTypes.shape({}),
      'cooperation-top-section': PropTypes.shape({}),
    }),
  }).isRequired,
};
