import React from 'react';
import PropTypes from 'prop-types';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import Layout from '@root/components/layout';
import TopSection from '@root/components/topSection/TopSection';

export default function AboutUs({ aboutUsData: { common, basicContent } }) {
  const { 'about-us-top-section': topSectionContent } = basicContent;
  const { 'contact-form-text': contactFormText } = common;
  const { 'contact-form-tooltip': tooltipText } = common;

  return (
    <Layout contactFormText={contactFormText} tooltipText={tooltipText}>
      <TopSection topSectionContent={topSectionContent} sectionId="o-nas" />
    </Layout>
  );
}

export async function getStaticProps() {
  const resJson = await getPagesDataMockup();
  const pagesData = mapData(resJson);

  const {
    basicContent: { common, 'about-us': basicContent },
  } = pagesData;
  const aboutUsData = { common, basicContent };

  return {
    props: {
      aboutUsData,
    },
  };
}

AboutUs.propTypes = {
  aboutUsData: PropTypes.shape({
    common: PropTypes.shape({
      'contact-form-text': PropTypes.shape({}),
      'contact-form-tooltip': PropTypes.shape({}),
    }),
    basicContent: PropTypes.shape({
      'about-us-top-section': PropTypes.shape({}),
    }),
  }).isRequired,
};
