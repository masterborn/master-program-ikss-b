import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Socials from './Socials';
import Logo from '../../logos/PlainLogo';
import { ParagraphSmall } from '../../typography/paragraphs';
import LoveIcon from './LoveIcon';
import ScrollUpButton from '../../buttons/ScrollUpButton';

const MOCK_SOCIALS = {
  fb: 'https://www.facebook.com/',
  ig: 'https://www.instagram.com/',
  yt: 'https://www.youtube.com/',
  in: 'https://www.linkedin.com/',
};
const MOCK_RIGHT_RESERVERD =
  '©2021 All rights reserved by Informacja Kulturalno-Sportowa Studentów';

export default function Footer({ className, paths }) {
  const scrollUp = () => {
    window.scroll(0, 0);
  };

  return (
    <div className={className}>
      <div className="filler" />

      <div className="scrollUpButton">
        <ScrollUpButton onClick={scrollUp} />
      </div>

      <div className="centered">
        <div className="links">
          {paths.map(({ name, path }) => (
            <Link href={path} key={path} passHref>
              <a href>{name}</a>
            </Link>
          ))}
        </div>
        <Socials socialsLinks={MOCK_SOCIALS} />

        <Link href="/" passHref>
          <a href className="logo">
            <Logo />
          </a>
        </Link>

        <ParagraphSmall>{MOCK_RIGHT_RESERVERD}</ParagraphSmall>
        <ParagraphSmall>
          Made with <LoveIcon /> by MasterBorn Software
        </ParagraphSmall>
      </div>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string.isRequired,
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
};
