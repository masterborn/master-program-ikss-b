import React from 'react';
import PropTypes from 'prop-types';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import Layout from '@root/components/layout';
import MissionTile from '@root/components/aboutUs/MissionTile';
import HistoryTile from '@root/components/aboutUs/HistoryTile';
import TeamTile from '@root/components/aboutUs/TeamTile';

export default function AboutUs({ aboutUsData: { common, basicContent } }) {
  const {
    'social-facebook': socialFb,
    'social-linkedin': socialIn,
    'social-instagram': socialIg,
    'social-youtube': socialYt,
    'contact-form-text': contactFormText,
    'contact-form-tooltip': tooltipText,
    'footer-text': footerText,
  } = common;
  const {
    'about-us-content-1': missionContent,
    'about-us-content-2': historyContent,
    'about-us-content-3': teamContent,
  } = basicContent;
  console.log(basicContent);
  const socials = { socialFb, socialIn, socialIg, socialYt };

  return (
    <Layout
      socials={socials}
      footerText={footerText}
      contactFormText={contactFormText}
      tooltipText={tooltipText}
    >
      <MissionTile missionContent={missionContent} />
      <HistoryTile historyContent={historyContent} />
      <TeamTile teamContent={teamContent} />
    </Layout>
  );
}

export async function getStaticProps() {
  const resJson = await getPagesDataMockup();
  const pagesData = mapData(resJson);

  const {
    basicContent: { common, 'about-us': basicContent },
  } = pagesData;
  const aboutUsData = { common, basicContent };

  return {
    props: {
      aboutUsData,
    },
  };
}

AboutUs.propTypes = {
  aboutUsData: PropTypes.shape({
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
