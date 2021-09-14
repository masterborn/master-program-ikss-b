import React from 'react';
import PropTypes from 'prop-types';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import Layout from '@root/components/layout';
import MissionTile from '@root/components/pages/aboutUs/MissionTile';
import HistoryTile from '@root/components/pages/aboutUs/HistoryTile';
import TeamTile from '@root/components/pages/aboutUs/TeamTile';
import BoardMembersSection from '@root/components/pages/aboutUs/boardMembersSection';
import BottomCta from '@root/components/Generic/CallToAction/bottomCta/BottomCta';
import TopSection from '@root/components/Generic/topSection/TopSection';

export async function getStaticProps() {
  const resJson = await getPagesDataMockup();
  const pagesData = mapData(resJson);

  const {
    basicContent: { common, 'about-us': basicContent },
    boardMembers,
  } = pagesData;
  const aboutUsData = { common, basicContent, boardMembers };

  return {
    props: {
      aboutUsData,
    },
  };
}

export default function AboutUs({ aboutUsData: { common, basicContent, boardMembers } }) {
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
    'about-us-top-section': topSectionContent,
    'about-us-content-1': missionContent,
    'about-us-content-2': historyContent,
    'about-us-content-3': teamContent,
    'about-us-board-members-text': boardMembersSectionText,
    'about-us-bottom-cta': bottomCtaContent,
  } = basicContent;
  const socials = { socialFb, socialIn, socialIg, socialYt };
  return (
    <Layout
      socials={socials}
      footerText={footerText}
      contactFormText={contactFormText}
      tooltipText={tooltipText}
    >
      <TopSection topSectionContent={topSectionContent} sectionId="o-nas" />

      <MissionTile missionContent={missionContent} />
      <HistoryTile historyContent={historyContent} />
      <BoardMembersSection
        boardMembersSectionText={boardMembersSectionText}
        boardMembers={boardMembers}
      />
      <TeamTile teamContent={teamContent} />
      <BottomCta bottomCtaContent={bottomCtaContent} />
    </Layout>
  );
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
    basicContent: PropTypes.shape({
      'about-us-content-1': PropTypes.shape({}),
      'about-us-content-2': PropTypes.shape({}),
      'about-us-content-3': PropTypes.shape({}),
      'about-us-board-members-text': PropTypes.shape({}),
      'about-us-bottom-cta': PropTypes.shape({}),
      'about-us-top-section': PropTypes.shape({}),
    }).isRequired,
    boardMembers: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
