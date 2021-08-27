import React from 'react';
import PropTypes from 'prop-types';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import Layout from '@root/components/layout';
import BottomCta from '@root/components/bottomCta/BottomCta';

export default function Projects({ projectsData: { basicContent, common } }) {
  const { 'contact-form-text': contactFormText } = common;
  const { 'contact-form-tooltip': tooltipText } = common;
  const { 'projects-bottom-cta-text': bottomCtaContent } = basicContent;
  return (
    <Layout contactFormText={contactFormText} tooltipText={tooltipText}>
      <BottomCta bottomCtaContent={bottomCtaContent} />
    </Layout>
  );
}

export async function getStaticProps() {
  const resJson = await getPagesDataMockup();
  const pagesData = mapData(resJson);

  const {
    basicContent: { projects: basicContent, common },
  } = pagesData;
  const projectsData = { basicContent, common };

  return {
    props: {
      projectsData,
    },
  };
}

Projects.propTypes = {
  projectsData: PropTypes.shape({
    common: PropTypes.shape({
      'contact-form-text': PropTypes.shape({}),
      'contact-form-tooltip': PropTypes.shape({}),
    }),
    basicContent: PropTypes.shape({
      'projects-top-section': PropTypes.shape({}),
      'projects-bottom-cta-text': PropTypes.shape({}),
    }),
  }).isRequired,
};
