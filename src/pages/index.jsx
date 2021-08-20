import React from 'react';
import Mockup from '@components/Example/mockup';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import ProjectsSection from '@root/components/home/projects/ProjectsSection';
import PartnersSection from '@root/components/home/partnersList/PartnersSection';
import TopSection from '../components/home/topSection';
import ValuesSection from '../components/home/valuesSection';

export default function index({ homepageData: { partners, basicContent } }) {
  const { 'homepage-partners-text': partnersText } = basicContent;

  return (
    <div>
      <TopSection />
      <ValuesSection />
      <ProjectsSection />
      <PartnersSection partners={partners} partnersText={partnersText} />

      <Mockup />
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
