import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/dist/client/router';
import { StyledLayout, PageWrapper } from './Layout.styles';
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

export default function Layout({
  children,
  isMobile,
  isContactModalOpened,
  closeContactModal,
  openContactModal,
}) {
  const router = useRouter();

  return (
    <PageWrapper>
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

        <div id="main">{children}</div>

        <Footer paths={paths} isHomepage={router.pathname === '/'} />
      </StyledLayout>
    </PageWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isContactModalOpened: PropTypes.bool.isRequired,
  closeContactModal: PropTypes.func.isRequired,
  openContactModal: PropTypes.func.isRequired,
};
