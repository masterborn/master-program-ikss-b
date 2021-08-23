import React from 'react';
import {
  StyledTopSection,
  Content,
  LeftSide,
  Header,
  Paragraph,
  StyledSocials,
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

export default function TopSection() {
  const handleClick = () => {};

  return (
    <StyledTopSection className="hideNavSocials">
      <Content>
        <LeftSide>
          <Header>{MOCKUP.title}</Header>
          <Paragraph>{MOCKUP.text}</Paragraph>
          <SecondaryButton isBig onClick={handleClick}>
            Skontaktuj się
          </SecondaryButton>
        </LeftSide>
        <video src={`https:${MOCKUP.image1}`} width={808} muted autoPlay loop />
      </Content>

      <StyledSocials socialsLinks={MOCK_SOCIALS} className="socials" showLabel />
    </StyledTopSection>
  );
}
