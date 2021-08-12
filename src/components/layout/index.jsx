import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './navbar';
import Footer from './footer';

const Content = styled.div`
  margin-top: 88px;
`;

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
  return (
    <div>
      <Navbar paths={paths} />
      <Content>{children}</Content>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
