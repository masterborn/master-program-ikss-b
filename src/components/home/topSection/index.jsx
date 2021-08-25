import React from 'react';
import PropTypes from 'prop-types';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import {
  StyledTopSection,
  Content,
  LeftSide,
  Header,
  Paragraph,
  StyledSocials,
  TopSectionImage,
} from './TopSection.styles';
import SecondaryButton from '../../buttons/secondaryButton';

export default function TopSection({ topSectionContent, socials }) {
  const {
    title: sectionHeader,
    image1: { url: mediaUrl, title: mediaTitle },
    text1: richText,
  } = topSectionContent;

  const urlIsVideo = /.*\.mp4$/.test(mediaUrl);
  const Description = convertRichTextToReactComponent(Paragraph, richText);
  const handleClick = () => {};

  return (
    <StyledTopSection className="hideNavSocials">
      <Content>
        <LeftSide>
          <Header>{sectionHeader}</Header>
          {Description}
          <SecondaryButton isBig onClick={handleClick}>
            Skontaktuj się
          </SecondaryButton>
        </LeftSide>
        {urlIsVideo ? (
          <video src={`https:${mediaUrl}`} alt={mediaTitle} width={808} muted autoPlay loop />
        ) : (
          <TopSectionImage src={mediaUrl} alt={mediaTitle} />
        )}
      </Content>

      <StyledSocials socialsLinks={socials} showLabel />
    </StyledTopSection>
  );
}

TopSection.propTypes = {
  topSectionContent: PropTypes.shape({
    title: PropTypes.string,
    image1: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
    text1: PropTypes.shape({}),
  }).isRequired,
  socials: PropTypes.shape({}).isRequired,
};
