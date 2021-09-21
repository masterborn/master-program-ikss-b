import React from 'react';
import PropTypes from 'prop-types';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import Layout from '@root/components/layout';
import MissionTile from '@root/components/aboutUs/MissionTile';
import HistoryTile from '@root/components/aboutUs/HistoryTile';
import TeamTile from '@root/components/aboutUs/TeamTile';
import BoardMembersSection from '@root/components/aboutUs/boardMembersSection';
import BottomCta from '@root/components/CallToAction/bottomCta/BottomCta';
import TopSection from '@root/components/topSection/TopSection';
import CustomHead from '@root/components/CustomHead/CustomHead';

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
    socialFacebook,
    socialLinkedin,
    socialInstagram,
    socialYoutube,
    contactFormText,
    contactFormTooltip,
    footerText,
  } = common;
  const socials = { socialFacebook, socialLinkedin, socialInstagram, socialYoutube };
  const {
    aboutUsMeta,
    aboutUsTopSection,
    aboutUsContent1: missionContent,
    aboutUsContent2: historyContent,
    aboutUsContent3: teamContent,
    aboutUsBoardMembersText,
    aboutUsBottomCta,
  } = basicContent;
  return (
    <>
      <CustomHead metaContent={aboutUsMeta} />
      <Layout
        socials={socials}
        footerText={footerText}
        contactFormText={contactFormText}
        tooltipText={contactFormTooltip}
      >
        <TopSection topSectionContent={aboutUsTopSection} sectionId="o-nas" />

        <MissionTile missionContent={missionContent} />
        <HistoryTile historyContent={historyContent} />
        <BoardMembersSection
          boardMembersSectionText={aboutUsBoardMembersText}
          boardMembers={boardMembers}
        />
        <TeamTile teamContent={teamContent} />
        <BottomCta bottomCtaContent={aboutUsBottomCta} />
      </Layout>
    </>
  );
}

AboutUs.propTypes = {
  aboutUsData: PropTypes.shape({
    common: PropTypes.shape({
      contactFormText: PropTypes.shape({}),
      contactFormTooltip: PropTypes.shape({}),
      socialFacebook: PropTypes.shape({}),
      socialLinkedin: PropTypes.shape({}),
      socialInstagram: PropTypes.shape({}),
      socialYoutube: PropTypes.shape({}),
      footerText: PropTypes.shape({}),
    }).isRequired,
    basicContent: PropTypes.shape({
      aboutUsMeta: PropTypes.shape({}),
      aboutUsContent1: PropTypes.shape({}),
      aboutUsContent2: PropTypes.shape({}),
      aboutUsContent3: PropTypes.shape({}),
      aboutUsBoardMembersText: PropTypes.shape({}),
      aboutUsBottomCta: PropTypes.shape({}),
      aboutUsTopSection: PropTypes.shape({}),
    }).isRequired,
    boardMembers: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
