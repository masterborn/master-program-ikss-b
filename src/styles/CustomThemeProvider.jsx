import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

export default function CustomThemeProvider({ children, theme }) {
  const { isModalOpened } = useSelector((state) => state.modal);
  const isMobile = useSelector((state) => state.isMobile);

  return <ThemeProvider theme={{ ...theme, isModalOpened, isMobile }}>{children}</ThemeProvider>;
}

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({}).isRequired,
};
