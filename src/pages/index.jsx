import React from 'react';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import ProjectsSection from '@root/components/home/projects/ProjectsSection';
import PartnersSection from '@root/components/home/partnersList/PartnersSection';
import TopSection from '../components/home/topSection';
import ValuesSection from '../components/home/valuesSection';
import ContactForm from '../components/contactForm';

export default function index({ homepageData: { partners, basicContent, projects } }) {
  const { 'homepage-partners-text': partnersText } = basicContent;

  return (
    <div>
      <TopSection />
      <ValuesSection />
      <ProjectsSection projects={projects} />
      <PartnersSection partners={partners} partnersText={partnersText} />
      <ContactForm />
    </div>
  );
}

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
