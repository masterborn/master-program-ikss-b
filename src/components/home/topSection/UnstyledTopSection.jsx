import React from 'react';
import PropTypes from 'prop-types';
import { Header1 } from '../../typography/headers';
import { ParagraphBody } from '../../typography/paragraphs';
import SecondaryButton from '../../buttons/secondaryButton';
import Socials from '../../icons/SocialsCollection';

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

export default function UnstyledTopSection({ className }) {
  const handleClick = () => {};

  return (
    <section className={`${className} hideNavSocials`}>
      <div className="main-content">
        <div className="left-side">
          <Header1>{MOCKUP.title}</Header1>
          <ParagraphBody>{MOCKUP.text}</ParagraphBody>
          <SecondaryButton isBig onClick={handleClick}>
            Skontaktuj się
          </SecondaryButton>
        </div>
        <video className="video" src={`https:${MOCKUP.image1}`} muted autoPlay loop />
      </div>

      <Socials socialsLinks={MOCK_SOCIALS} className="socials" showLabel />
    </section>
  );
}

UnstyledTopSection.propTypes = {
  className: PropTypes.string.isRequired,
};
