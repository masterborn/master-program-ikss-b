import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { convertRichTextToReactComponent } from '@dataMappers/contentful';
import { scrollToContactForm } from '@generic/misc/contactFormActions';
import SecondaryButton from '@buttons/secondaryButton';
import {
  Content,
  TextSection,
  Header,
  Paragraph,
  StyledSocials,
  HomepageHeroImage,
  StyledHomepageHero,
  HomepageHeroVideo,
} from './HomepageHero.styles';

export default function HomepageHero({ homepageHeroContent, socials, homepageHeroRef }) {
  const {
    title: sectionHeader,
    image1: { url: mediaUrl, title: mediaTitle },
    text1: richText,
  } = homepageHeroContent;
  const isMobile = useSelector((state) => state.isMobile);
  const navbarHeight = isMobile ? 56 : 88;

  const urlIsImage = /.*.(jpg|png|jpeg)$/.test(mediaUrl);
  const Description = convertRichTextToReactComponent(Paragraph, richText);
  const handleClick = () => scrollToContactForm(navbarHeight);
  return (
    <StyledHomepageHero id="hero" ref={homepageHeroRef}>
      <Content>
        <TextSection>
          <Header>{sectionHeader}</Header>
          {Description}
          <SecondaryButton large={!isMobile} onClick={handleClick}>
            Skontaktuj się
          </SecondaryButton>
        </TextSection>
        {urlIsImage ? (
          <HomepageHeroImage src={mediaUrl} alt={mediaTitle} />
        ) : (
          <HomepageHeroVideo
            src={`https:${mediaUrl}`}
            alt={mediaTitle}
            width={808}
            muted
            autoPlay
            loop
          />
        )}
      </Content>

      <StyledSocials socialsLinks={socials} showLabel={!isMobile} />
    </StyledHomepageHero>
  );
}

HomepageHero.propTypes = {
  homepageHeroContent: PropTypes.shape({
    title: PropTypes.string,
    image1: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
    text1: PropTypes.shape({}),
  }).isRequired,
  socials: PropTypes.shape({}).isRequired,
  homepageHeroRef: PropTypes.shape({}).isRequired,
};
