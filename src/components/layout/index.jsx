import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/dist/client/router';
import StyledLayout from './StyledLayout';
import Navbar from './navbar';
import Footer from './footer';

const paths = [
  {
    name: 'Strona główna',
    path: '/',
  },
  {
    name: 'Projekty',
    path: '/projekty',
  },
  {
    name: 'O nas',
    path: '/onas',
  },
  {
    name: 'Współpraca',
    path: '/wspolpraca',
  },
];

export default function Layout({ children }) {
  const router = useRouter();
  const isMobile = false;

  return (
    <StyledLayout isMobile={isMobile}>
      <Navbar isMobile={isMobile} paths={paths} currPathname={router.pathname} />

      <div className="pageContent">{children}</div>

      <Footer />
    </StyledLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
