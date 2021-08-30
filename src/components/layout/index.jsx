import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/dist/client/router';
import { useSelector } from 'react-redux';
import {
  StyledLayout,
  PageWrapper,
  TopBackgroundGradient,
  BottomBackgroundGradient,
} from './Layout.styles';
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

export default function Layout({ children, contactFormText, tooltipText }) {
  const router = useRouter();
  const isHomepage = router.pathname === '/';
  const isContactModalOpened = useSelector((state) => state.modal.isModalOpened);
  const isMobile = useSelector((state) => state.isMobile);

  return (
    <PageWrapper>
      <StyledLayout>
        <Navbar paths={paths} currPathname={router.pathname} />
        {router.pathname !== '/' && (
          <ContactFormModal
            contactFormText={contactFormText}
            tooltipText={tooltipText}
            isOpened={isContactModalOpened}
          />
        )}

        <div id="main">
          <TopBackgroundGradient isMobile={isMobile} />
          {children}
          <BottomBackgroundGradient isHomepage={isHomepage} isMobile={isMobile} />
        </div>

        <Footer paths={paths} isHomepage={isHomepage} />
      </StyledLayout>
    </PageWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  contactFormText: PropTypes.shape({}).isRequired,
  tooltipText: PropTypes.shape({}).isRequired,
};
