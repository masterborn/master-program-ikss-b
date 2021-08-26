import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

export default function CustomThemeProvider({ children, theme }) {
  const { isModalOpened } = useSelector((state) => state.modal);

  return <ThemeProvider theme={{ ...theme, isModalOpened }}>{children}</ThemeProvider>;
}

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({}).isRequired,
};
