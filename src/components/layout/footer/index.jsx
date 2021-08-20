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
  fb: 'https://www.facebook.com/',
  ig: 'https://www.instagram.com/',
  yt: 'https://www.youtube.com/',
  in: 'https://www.linkedin.com/',
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
