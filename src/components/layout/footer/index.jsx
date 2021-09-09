import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  StyledFooter,
  FooterWrapper,
  Filler,
  StyledSrollUpButton,
  Centered,
  LinksContainer,
  Label,
  StyledLogo,
  StyledSocials,
  Paragraph,
  MBLink,
} from './Footer.styles';
import LoveIcon from './LoveIcon';

const MASTERBORN_LINK = 'https://masterborn.com/';

export default function Footer({ socials, footerText, paths, isHomepage }) {
  const { title } = footerText;

  const scrollUp = () => {
    window.scroll(0, 0);
  };

  return (
    <StyledFooter>
      {isHomepage && <Filler isHomepage={isHomepage} />}
      <FooterWrapper>
        <StyledSrollUpButton isHomepage={isHomepage} onClick={scrollUp} />

        <Centered>
          <LinksContainer>
            {paths.map(({ name, path }) => (
              <Link href={path} key={path}>
                <Label>{name}</Label>
              </Link>
            ))}
          </LinksContainer>
          <StyledSocials socialsLinks={socials} showRegular />

          <Link href="/" passHref>
            <a href className="logo">
              <StyledLogo />
            </a>
          </Link>

          <Paragraph>
            {title} <br />
            Made with <LoveIcon /> by <MBLink href={MASTERBORN_LINK}>MasterBorn Software</MBLink>
          </Paragraph>
        </Centered>
      </FooterWrapper>
    </StyledFooter>
  );
}

Footer.propTypes = {
  socials: PropTypes.shape({}).isRequired,
  footerText: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
  isHomepage: PropTypes.bool.isRequired,
};
