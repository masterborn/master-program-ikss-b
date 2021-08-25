import React from 'react';
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

const MOCKUP = {
  title: 'Przykładowy nagłówek IKSS',
  text: 'Urna, mi condimentum amet, consectetur mauris tincidunt gravida aenean. Dignissim in sit arcu nam. Ultrices integer odio feugiat vulputate.',
  image1:
    '//videos.ctfassets.net/n21y2i4hkj4h/4fPIBredtzYNienv1X0MSk/93a72f310b4c8a02de8428cccd288ceb/na_strone_ikss.mp4',
};
const MOCK_SOCIALS = {
  fb: 'https://www.facebook.com/',
  ig: 'https://www.instagram.com/',
  yt: 'https://www.youtube.com/',
  in: 'https://www.linkedin.com/',
};

export default function TopSection({ topSectionContent, socials }) {
  const {
    title: sectionHeader,
    image1: { url: mediaUrl, title: mediaTitle },
    text1: richText,
  } = topSectionContent;
  console.log(socials);

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
          <video src={`https:${mediaUrl}`} width={808} muted autoPlay loop />
        ) : (
          <TopSectionImage src={mediaUrl} alt={mediaTitle} />
        )}
      </Content>

      <StyledSocials socialsLinks={socials} className="socials" showLabel />
    </StyledTopSection>
  );
}
