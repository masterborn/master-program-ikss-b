import React from 'react';
import PropTypes from 'prop-types';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import Layout from '@root/components/layout';
import BottomCta from '@root/components/CallToAction/bottomCta/BottomCta';
import ProjectsMasonry from '@root/components/cooperation/ProjectsMasonry';

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

export default function Projects({ projectsData: { basicContent, projects, common } }) {
  const {
    'projects-bottom-cta-text': bottomCtaContent,
    'projects-middle-cta-text': midCtaContent,
  } = basicContent;

  const {
    'social-facebook': socialFb,
    'social-linkedin': socialIn,
    'social-instagram': socialIg,
    'social-youtube': socialYt,
    'contact-form-text': contactFormText,
    'contact-form-tooltip': tooltipText,
    'footer-text': footerText,
  } = common;
  const socials = { socialFb, socialIn, socialIg, socialYt };

  return (
    <Layout
      socials={socials}
      footerText={footerText}
      contactFormText={contactFormText}
      tooltipText={tooltipText}
    >
      <ProjectsMasonry midCtaContent={midCtaContent} projectsData={projects} />
      <BottomCta bottomCtaContent={bottomCtaContent} />
    </Layout>
  );
}

Projects.propTypes = {
  projectsData: PropTypes.shape({
    common: PropTypes.shape({
      'contact-form-text': PropTypes.shape({}),
      'contact-form-tooltip': PropTypes.shape({}),
      'social-facebook': PropTypes.shape({}),
      'social-linkedin': PropTypes.shape({}),
      'social-instagram': PropTypes.shape({}),
      'social-youtube': PropTypes.shape({}),
      'footer-text': PropTypes.shape({}),
    }),
    basicContent: PropTypes.shape({
      'projects-top-section': PropTypes.shape({}),
      'projects-bottom-cta-text': PropTypes.shape({}),
      'projects-middle-cta-text': PropTypes.shape({}),
    }),
    projects: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
