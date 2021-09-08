import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import { scrollToContactForm } from '@root/components/layout/navbar/contactFormButton';
import {
  StyledTopSection,
  Content,
  TextSection,
  Header,
  Paragraph,
  StyledSocials,
  TopSectionImage,
  TopSectionVideo,
} from './TopSection.styles';
import SecondaryButton from '../../buttons/secondaryButton';

export default function TopSection({ topSectionContent, socials }) {
  const isMobile = useSelector((state) => state.isMobile);

  const navbarHeight = isMobile ? '56px' : '88px';

  const {
    title: sectionHeader,
    image1: { url: mediaUrl, title: mediaTitle },
    text1: richText,
  } = topSectionContent;

  const urlIsImage = /.*.(jpg|png|jpeg)$/.test(mediaUrl);
  const Description = convertRichTextToReactComponent(Paragraph, richText);
  const handleClick = () => scrollToContactForm(navbarHeight);

  return (
    <StyledTopSection className="hideNavSocials">
      <Content>
        <TextSection>
          <Header>{sectionHeader}</Header>
          {Description}
          <SecondaryButton large={!isMobile} onClick={handleClick}>
            Skontaktuj się
          </SecondaryButton>
        </TextSection>
        {urlIsImage ? (
          <TopSectionImage src={mediaUrl} alt={mediaTitle} />
        ) : (
          <TopSectionVideo
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
