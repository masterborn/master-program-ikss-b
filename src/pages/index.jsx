import React from 'react';
import PropTypes from 'prop-types';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import Layout from '@root/components/layout';
import ProjectsSection from '@root/components/pages/home/projects/ProjectsSection';
import PartnersSection from '@root/components/Generic/partnersList/PartnersSection';
import sortHomepagePartners from '@root/dataMappers/partners';
import HomepageHero from '../components/pages/home/hero';
import ValuesSection from '../components/pages/home/valuesSection';
import ContactForm from '../components/Generic/contactForm';

export async function getStaticProps() {
  const resJson = await getPagesDataMockup();
  const pagesData = mapData(resJson);

  const {
    basicContent: { homepage: basicContent, common },
    projects,
    partnerLogos: partners,
  } = pagesData;
  const homepageData = { basicContent, common, projects, partners };

  return {
    props: {
      homepageData,
    },
  };
}

export default function Homepage({ homepageData: { partners, basicContent, common, projects } }) {
  const {
    'homepage-partners-text': partnersText,
    'homepage-top-section': homepageHeroContent,
    'homepage-values': valuesText,
    'homepage-tile-1': homepageTile1,
    'homepage-tile-2': homepageTile2,
    'homepage-tile-3': homepageTile3,
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
  const valuesTiles = [homepageTile1, homepageTile2, homepageTile3];
  const homepagePartners = sortHomepagePartners(partners);

  return (
    <Layout
      socials={socials}
      footerText={footerText}
      contactFormText={contactFormText}
      tooltipText={tooltipText}
    >
      <HomepageHero homepageHeroContent={homepageHeroContent} socials={socials} />
      <ValuesSection valuesText={valuesText} valuesTiles={valuesTiles} />
      <ProjectsSection projects={projects} />
      <PartnersSection partners={homepagePartners} partnersText={partnersText} />
      <ContactForm contactFormText={contactFormText} tooltipText={tooltipText} />
    </Layout>
  );
}

Homepage.propTypes = {
  homepageData: PropTypes.shape({
    partners: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    basicContent: PropTypes.shape({
      'homepage-partners-text': PropTypes.shape({}),
      'homepage-top-section': PropTypes.shape({}),
      'homepage-values': PropTypes.shape({}),
      'homepage-tile-1': PropTypes.shape({}),
      'homepage-tile-2': PropTypes.shape({}),
      'homepage-tile-3': PropTypes.shape({}),
    }).isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    common: PropTypes.shape({
      'contact-form-text': PropTypes.shape({}),
      'contact-form-tooltip': PropTypes.shape({}),
      'social-facebook': PropTypes.shape({}),
      'social-linkedin': PropTypes.shape({}),
      'social-instagram': PropTypes.shape({}),
      'social-youtube': PropTypes.shape({}),
      'footer-text': PropTypes.shape({}),
    }).isRequired,
  }).isRequired,
};
