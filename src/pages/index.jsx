import React from 'react';
import PropTypes from 'prop-types';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import Layout from '@root/components/layout';
import ProjectsSection from '@root/components/home/projects/ProjectsSection';
import PartnersSection from '@root/components/home/partnersList/PartnersSection';
import sortHomepagePartners from '@root/dataMappers/partners';
import HomepageHero from '../components/home/hero';
import ValuesSection from '../components/home/valuesSection';
import ContactForm from '../components/contactForm';

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
    homepagePartnersText,
    homepageTopSection: homepageHeroContent,
    homepageValues,
    homepageTile1,
    homepageTile2,
    homepageTile3,
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
  const valuesTiles = [homepageTile1, homepageTile2, homepageTile3];
  const homepagePartners = sortHomepagePartners(partners);

  return (
    <Layout
      socials={socials}
      footerText={footerText}
      contactFormText={contactFormText}
      tooltipText={contactFormTooltip}
    >
      <HomepageHero homepageHeroContent={homepageHeroContent} socials={socials} />
      <ValuesSection valuesText={homepageValues} valuesTiles={valuesTiles} />
      <ProjectsSection projects={projects} />
      <PartnersSection partners={homepagePartners} partnersText={homepagePartnersText} />
      <ContactForm contactFormText={contactFormText} tooltipText={contactFormTooltip} />
    </Layout>
  );
}

Homepage.propTypes = {
  homepageData: PropTypes.shape({
    partners: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    basicContent: PropTypes.shape({
      homepagePartnersText: PropTypes.shape({}),
      homepageTopSection: PropTypes.shape({}),
      homepageValues: PropTypes.shape({}),
      homepageTile1: PropTypes.shape({}),
      homepageTile2: PropTypes.shape({}),
      homepageTile3: PropTypes.shape({}),
    }).isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    common: PropTypes.shape({
      contactFormText: PropTypes.shape({}),
      contactFormTooltip: PropTypes.shape({}),
      socialFacebook: PropTypes.shape({}),
      socialLinkedin: PropTypes.shape({}),
      socialInstagram: PropTypes.shape({}),
      socialYoutube: PropTypes.shape({}),
      footerText: PropTypes.shape({}),
    }).isRequired,
  }).isRequired,
};
