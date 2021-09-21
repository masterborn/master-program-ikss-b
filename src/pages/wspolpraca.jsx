import React from 'react';
import PropTypes from 'prop-types';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData, { sortByOrder } from '@root/dataMappers/contentful';
import Layout from '@root/components/layout';
import PartnersSection from '@root/components/home/partnersList/PartnersSection';
import CooperationValuesSection from '@root/components/cooperation/valuesSection';
import BottomCta from '@root/components/CallToAction/bottomCta/BottomCta';
import TopSection from '@root/components/topSection/TopSection';
import CustomHead from '@root/components/CustomHead/CustomHead';

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
    socialFacebook,
    socialLinkedin,
    socialInstagram,
    socialYoutube,
    contactFormText,
    contactFormTooltip,
    footerText,
  } = common;
  const socials = { socialFacebook, socialLinkedin, socialInstagram, socialYoutube };

  const {
    cooperationMeta,
    cooperationTopSection,
    cooperationLogosText: partnersText,
    cooperationTilesTitle: valuesTitle,
    cooperationTile1,
    cooperationTile2,
    cooperationTile3,
    cooperationTile4,
    cooperationTile5,
    cooperationBottomCta,
  } = basicContent;
  const valuesTiles = [
    cooperationTile1,
    cooperationTile2,
    cooperationTile3,
    cooperationTile4,
    cooperationTile5,
  ];
  const orderedPartners = sortByOrder(partners);

  return (
    <>
      <CustomHead metaContent={cooperationMeta} />
      <Layout
        socials={socials}
        footerText={footerText}
        contactFormText={contactFormText}
        tooltipText={contactFormTooltip}
      >
        <TopSection
          isOnCooperation
          topSectionContent={cooperationTopSection}
          sectionId="współpraca"
        />
        <CooperationValuesSection valuesTiles={valuesTiles} valuesTitle={valuesTitle} />
        <PartnersSection partners={orderedPartners} partnersText={partnersText} />
        <BottomCta bottomCtaContent={cooperationBottomCta} />
      </Layout>
    </>
  );
}

Cooperation.propTypes = {
  cooperationData: PropTypes.shape({
    common: PropTypes.shape({
      contactFormText: PropTypes.shape({}),
      contactFormTooltip: PropTypes.shape({}),
      socialFacebook: PropTypes.shape({}),
      socialLinkedin: PropTypes.shape({}),
      socialInstagram: PropTypes.shape({}),
      socialYoutube: PropTypes.shape({}),
      footerText: PropTypes.shape({}),
    }).isRequired,
    partners: PropTypes.arrayOf(PropTypes.object).isRequired,
    basicContent: PropTypes.shape({
      cooperationMeta: PropTypes.shape({}),
      cooperationLogosText: PropTypes.shape({}),
      cooperationTilesTitle: PropTypes.shape({}),
      cooperationTile1: PropTypes.shape({}),
      cooperationTile2: PropTypes.shape({}),
      cooperationTile3: PropTypes.shape({}),
      cooperationTile4: PropTypes.shape({}),
      cooperationTile5: PropTypes.shape({}),
      cooperationBottomCta: PropTypes.shape({}),
      cooperationTopSection: PropTypes.shape({}),
    }),
  }).isRequired,
};
