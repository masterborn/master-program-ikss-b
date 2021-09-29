import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import toggleIsMobile from '@redux/actions/isMobileActions';
import { medias } from '@styles/theme';

export default function IsMobileProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia(medias.mobile).matches;
      dispatch(toggleIsMobile(isMobile));
    };

    const isMobile = window.matchMedia(medias.mobile).matches;
    dispatch(toggleIsMobile(isMobile));

    window.addEventListener('resize', handleResize);
  }, [dispatch]);
  return <div>{children}</div>;
}

IsMobileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
