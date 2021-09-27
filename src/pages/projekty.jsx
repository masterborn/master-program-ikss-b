import React from 'react';
import PropTypes from 'prop-types';

import { getPagesDataMockup } from '@clients/contentful';
import mapData from '@dataMappers/contentful';
import Layout from '@layout';
import BottomCta from '@cta/bottomCta/BottomCta';
import ProjectsMasonry from '@projects/ProjectsMasonry';
import TopSection from '@topSection/TopSection';

export async function getStaticProps() {
  const resJson = await getPagesDataMockup();
  const pagesData = mapData(resJson);

  const {
    basicContent: { projects: basicContent, common },
    projects,
  } = pagesData;
  const projectsData = { basicContent, common, projects };

  return {
    props: {
      projectsData,
    },
  };
}

export default function Projects({ projectsData: { basicContent, projects, common } }) {
  const {
    projectsTopSection,
    projectsBottomCtaText: bottomCtaContent,
    projectsMiddleCtaText: midCtaContent,
  } = basicContent;

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
      <TopSection topSectionContent={projectsTopSection} sectionId="projekty" />

      <ProjectsMasonry midCtaContent={midCtaContent} projectsData={projects} />
      <BottomCta isOnProjects bottomCtaContent={bottomCtaContent} />
    </Layout>
  );
}

Projects.propTypes = {
  projectsData: PropTypes.shape({
    common: PropTypes.shape({
      contactFormText: PropTypes.shape({}),
      contactFormTooltip: PropTypes.shape({}),
      socialFacebook: PropTypes.shape({}),
      socialLinkedin: PropTypes.shape({}),
      socialInstagram: PropTypes.shape({}),
      socialYoutube: PropTypes.shape({}),
      footerText: PropTypes.shape({}),
    }).isRequired,
    basicContent: PropTypes.shape({
      projectsBottomCtaText: PropTypes.shape({}),
      projectsMiddleCtaText: PropTypes.shape({}),
      projectsTopSection: PropTypes.shape({}),
    }),
    projects: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
