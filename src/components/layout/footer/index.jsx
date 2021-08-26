import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  StyledFooter,
  Filler,
  StyledSrollUpButton,
  Centered,
  LinksContainer,
  Label,
  StyledLogo,
  StyledSocials,
  Paragraph,
} from './Footer.styles';
import LoveIcon from './LoveIcon';

const MOCK_SOCIALS = {
  socialFb: {
    page: 'common',
    identifier: 'social-facebook',
    title: 'URL do Facebooka',
    linkUrl: 'https://www.facebook.com/IKSSUE/',
    linkCaption: 'Facebook',
  },
  socialIn: {
    page: 'common',
    identifier: 'social-linkedin',
    title: 'URL do LinkedIn',
    linkUrl: 'https://www.linkedin.com/company/informacjakulturalnosportowastudentowikss/',
  },
  socialIg: {
    page: 'common',
    identifier: 'social-instagram',
    title: 'URL do Instagrama',
    linkUrl: 'https://www.instagram.com/ikssue/',
  },
  socialYt: {
    page: 'common',
    identifier: 'social-youtube',
    title: 'URL do YouTube',
    linkUrl: 'https://www.youtube.com/channel/UC6cKLW4YEBqA7FWmkY0HThQ',
  },
};
const MOCK_RIGHT_RESERVERD =
  '©2021 All rights reserved by Informacja Kulturalno-Sportowa Studentów';

export default function Footer({ paths, isHomepage }) {
  const scrollUp = () => {
    window.scroll(0, 0);
  };

  return (
    <StyledFooter>
      {isHomepage && <Filler isHomepage={isHomepage} />}

      <StyledSrollUpButton isHomepage={isHomepage} onClick={scrollUp} />

      <Centered>
        <LinksContainer>
          {paths.map(({ name, path }) => (
            <Link href={path} key={path}>
              <Label>{name}</Label>
            </Link>
          ))}
        </LinksContainer>
        <StyledSocials className="socials" socialsLinks={MOCK_SOCIALS} showRegular />

        <Link href="/" passHref>
          <a href className="logo">
            <StyledLogo />
          </a>
        </Link>

        <Paragraph>
          {MOCK_RIGHT_RESERVERD} <br />
          Made with <LoveIcon /> by MasterBorn Software
        </Paragraph>
      </Centered>
    </StyledFooter>
  );
}

Footer.propTypes = {
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
  isHomepage: PropTypes.bool.isRequired,
};
