import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/dist/client/router';
import { useSelector } from 'react-redux';
import {
  StyledLayout,
  PageWrapper,
  PageContentWrapper,
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

export default function Layout({
  children,
  socials,
  footerText,
  contactFormText,
  tooltipText,
  homepageHeroRef,
}) {
  const router = useRouter();
  const isOnHomepage = router.pathname === '/';
  const isContactModalOpened = useSelector((state) => state.modal.isModalOpened);

  const isValidPage = paths.some(({ path }) => path === router.pathname);

  return (
    <PageWrapper>
      <StyledLayout>
        <Navbar
          socials={socials}
          paths={paths}
          currPathname={router.pathname}
          homepageHeroRef={homepageHeroRef}
        />
        {router.pathname !== '/' && (
          <ContactFormModal
            contactFormText={contactFormText}
            tooltipText={tooltipText}
            isOpened={isContactModalOpened}
          />
        )}

        <PageContentWrapper>
          <TopBackgroundGradient />

          <main id="main">{children}</main>

          {isValidPage && <BottomBackgroundGradient isOnHomepage={isOnHomepage} />}
        </PageContentWrapper>

        {isValidPage && (
          <Footer
            socials={socials}
            footerText={footerText}
            paths={paths}
            isOnHomepage={isOnHomepage}
          />
        )}
      </StyledLayout>
    </PageWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  socials: PropTypes.shape({}).isRequired,
  footerText: PropTypes.shape({}).isRequired,
  contactFormText: PropTypes.shape({}).isRequired,
  tooltipText: PropTypes.shape({}).isRequired,
  homepageHeroRef: PropTypes.shape({}),
};

Layout.defaultProps = {
  homepageHeroRef: null,
};
