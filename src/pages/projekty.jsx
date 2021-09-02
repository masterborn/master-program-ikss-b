import React from 'react';
import PropTypes from 'prop-types';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import Layout from '@root/components/layout';
import ProjectsGrid from '@root/components/cooperation/ProjectsMasonry';

export default function Projects({ projectsData: { projects, common } }) {
  const { 'contact-form-text': contactFormText } = common;
  const { 'contact-form-tooltip': tooltipText } = common;

  return (
    <Layout contactFormText={contactFormText} tooltipText={tooltipText}>
      <ProjectsGrid projectsData={projects} />
    </Layout>
  );
}

export async function getStaticProps() {
  const resJson = await getPagesDataMockup();
  const pagesData = mapData(resJson);

  const {
    basicContent: { common },
    projects,
  } = pagesData;
  const projectsData = { projects, common };

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
  }).isRequired,
};
