import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import toggleIsMobile from '@root/redux/actions/isMobileActions';

export default function IsMobileProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia('(max-width: 55.0rem)').matches;
      dispatch(toggleIsMobile(isMobile));
    };

    const isMobile = window.matchMedia('(max-width: 55.0rem)').matches;
    dispatch(toggleIsMobile(isMobile));

    window.addEventListener('resize', handleResize);
  }, [dispatch]);
  return <div>{children}</div>;
}

IsMobileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
