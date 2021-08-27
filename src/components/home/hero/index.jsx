import React from 'react';
import PropTypes from 'prop-types';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import SecondaryButton from '@root/components/buttons/secondaryButton';
import {
  Content,
  LeftSide,
  Header,
  Paragraph,
  StyledSocials,
  HomepageHeroImage,
  StyledHomepageHero,
} from './HomepageHero.styles';

export default function HomepageHero({ homepageHeroContent, socials }) {
  const {
    title: sectionHeader,
    image1: { url: mediaUrl, title: mediaTitle },
    text1: richText,
  } = homepageHeroContent;

  const urlIsImage = /.*.(jpg|png|jpeg)$/.test(mediaUrl);
  const Description = convertRichTextToReactComponent(Paragraph, richText);
  const handleClick = () => {};

  return (
    <StyledHomepageHero className="hideNavSocials">
      <Content>
        <LeftSide>
          <Header>{sectionHeader}</Header>
          {Description}
          <SecondaryButton isBig onClick={handleClick}>
            Skontaktuj się
          </SecondaryButton>
        </LeftSide>
        {urlIsImage ? (
          <HomepageHeroImage src={mediaUrl} alt={mediaTitle} />
        ) : (
          <video src={`https:${mediaUrl}`} alt={mediaTitle} width={808} muted autoPlay loop />
        )}
      </Content>

      <StyledSocials socialsLinks={socials} showLabel />
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
};
