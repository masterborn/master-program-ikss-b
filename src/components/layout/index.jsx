import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRouter } from 'next/dist/client/router';
import StyledLayout from './StyledLayout';
import Navbar from './navbar';
import Footer from './footer';
import ContactFormModal from '../contactForm/contactModal';

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

const Centered = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Layout({
  children,
  isContactModalOpened,
  closeContactModal,
  openContactModal,
}) {
  const router = useRouter();
  const isMobile = false;

  return (
    <Centered>
      <StyledLayout isMobile={isMobile}>
        <Navbar
          isMobile={isMobile}
          paths={paths}
          currPathname={router.pathname}
          openContactModal={openContactModal}
        />
        {router.pathname !== '/' && (
          <ContactFormModal
            isMobile={false}
            isOpened={isContactModalOpened}
            closeModal={closeContactModal}
          />
        )}
        <div className="pageContent">{children}</div>

        <Footer paths={paths} isHomepage={router.pathname === '/'} />
      </StyledLayout>
    </Centered>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isContactModalOpened: PropTypes.bool.isRequired,
  closeContactModal: PropTypes.func.isRequired,
  openContactModal: PropTypes.func.isRequired,
};
