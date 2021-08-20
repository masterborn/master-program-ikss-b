import React from 'react';
import Mockup from '@components/Example/mockup';
import getPagesData from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import TopSection from '../components/home/topSection';

export default function index() {
  return (
    <div>
      <TopSection />
      <Mockup />
    </div>
  );
}

export async function getStaticProps() {
  const resJson = await getPagesData();
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
