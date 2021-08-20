import React from 'react';
import Mockup from '@components/Example/mockup';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import TopSection from '../components/home/topSection';
import ValuesSection from '../components/home/valuesSection';

export default function index() {
  return (
    <div>
      <TopSection />
      <ValuesSection />
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
