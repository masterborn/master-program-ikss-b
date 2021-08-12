import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../../logos/BubbleLogo';
import Socials from './Socials';
import PrimaryButton from '../../buttons/primaryButton';

const MOCK_SOCIALS = {
  fb: 'https://www.facebook.com/',
  ig: 'https://www.instagram.com/',
  yt: 'https://www.youtube.com/',
  in: 'https://www.linkedin.com/',
};

export default function Navbar({ className, paths }) {
  const router = useRouter();

  return (
    <nav className={className}>
      <Link href="/" passHref>
        <a href>
          <Logo />
        </a>
      </Link>
      <div className="links">
        {paths.map(({ name, path }) => (
          <Link href={path} key={path} passHref>
            <a href className={router.pathname === path ? 'highlighted' : ''}>
              {name}
            </a>
          </Link>
        ))}
      </div>

      <Socials socialsLinks={MOCK_SOCIALS} router={router} />

      <PrimaryButton>Skontaktuj się</PrimaryButton>
    </nav>
  );
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
};
