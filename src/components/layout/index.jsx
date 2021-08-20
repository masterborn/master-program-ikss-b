import React from 'react';
import styled from 'styled-components';
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
    path: '/o-nas',
  },
  {
    name: 'Współpraca',
    path: '/wspolpraca',
  },
];

const PageWrapper = styled.div`
  width: 100%;
`;

export default function Layout({ children }) {
  const router = useRouter();
  const isMobile = false;

  return (
    <PageWrapper>
      <StyledLayout isMobile={isMobile}>
        <Navbar isMobile={isMobile} paths={paths} currPathname={router.pathname} />

        <div id="main">{children}</div>

        <Footer paths={paths} isHomepage={router.pathname === '/'} />
      </StyledLayout>
    </PageWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
