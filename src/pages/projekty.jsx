import React from 'react';
import PropTypes from 'prop-types';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import Layout from '@root/components/layout';
import MidCta from '@root/components/CallToAction/midCta/midCta';

export default function Projects({ projectsData: { basicContent, common } }) {
  console.log(basicContent);
  const { 'projects-middle-cta-text': midCtaContent } = basicContent;
  const { 'contact-form-text': contactFormText } = common;
  const { 'contact-form-tooltip': tooltipText } = common;

  return (
    <Layout contactFormText={contactFormText} tooltipText={tooltipText}>
      <MidCta midCtaContent={midCtaContent} />
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
    basicContent: PropTypes.PropTypes.shape({
      'projects-middle-cta-text': PropTypes.shape({}),
    }),
  }).isRequired,
};
