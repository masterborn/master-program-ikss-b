import React from 'react';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import ProjectsSection from '@root/components/home/projects/ProjectsSection';
import PartnersSection from '@root/components/home/partnersList/PartnersSection';
import TopSection from '../components/home/topSection';
import ValuesSection from '../components/home/valuesSection';

export default function index({ homepageData: { partners, basicContent, projects, common } }) {
  const { 'homepage-partners-text': partnersText } = basicContent;
  const { 'homepage-top-section': topSectionContent } = basicContent;
  const {
    'social-facebook': socialFb,
    'social-linkedin': socialIn,
    'social-instagram': socialIg,
    'social-youtube': socialYt,
  } = common;
  const socials = { socialFb, socialIn, socialIg, socialYt };
  const {
    'homepage-values': valuesText,
    'homepage-tile-1': homepageTile1,
    'homepage-tile-2': homepageTile2,
    'homepage-tile-3': homepageTile3,
  } = basicContent;
  const valuesTiles = [homepageTile1, homepageTile2, homepageTile3];

  return (
    <div>
      <TopSection topSectionContent={topSectionContent} socials={socials} />
      <ValuesSection valuesText={valuesText} valuesTiles={valuesTiles} />
      <ProjectsSection projects={projects} />
      <PartnersSection partners={partners} partnersText={partnersText} />
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
