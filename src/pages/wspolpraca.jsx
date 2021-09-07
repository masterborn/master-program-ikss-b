import React from 'react';
import PropTypes from 'prop-types';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import Layout from '@root/components/layout';
import TopSection from '@root/components/topSection/TopSection';

export default function Cooperation({ cooperationData: { common, basicContent } }) {
  const { 'cooperation-top-section': topSectionContent } = basicContent;
  const { 'contact-form-text': contactFormText } = common;
  const { 'contact-form-tooltip': tooltipText } = common;

  return (
    <Layout contactFormText={contactFormText} tooltipText={tooltipText}>
      <TopSection isOnCooperation topSectionContent={topSectionContent} sectionId="współpraca" />
    </Layout>
  );
}

export async function getStaticProps() {
  const resJson = await getPagesDataMockup();
  const pagesData = mapData(resJson);

  const {
    basicContent: { common, cooperation: basicContent },
  } = pagesData;
  const cooperationData = { common, basicContent };

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
    }),
    basicContent: PropTypes.shape({
      'cooperation-top-section': PropTypes.shape({}),
    }),
  }).isRequired,
};
