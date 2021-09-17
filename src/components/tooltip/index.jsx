import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import InfoTooltip from './infoTooltip';
import ErrorTooltip from './errorTooltip';

export default function Tooltip({ className, children, errorTooltip, tooltipContent }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const nodeRef = useRef();

  const toggleShowTooltip = (show) => setShowTooltip(show);

  const handleClickOnComponent = ({ target }) => setShowTooltip(nodeRef.current.contains(target));

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOnComponent);

    return () => {
      document.removeEventListener('mousedown', handleClickOnComponent);
    };
  }, []);

  return (
    <span
      className={className}
      ref={nodeRef}
      onMouseEnter={() => toggleShowTooltip(true)}
      onMouseLeave={() => toggleShowTooltip(false)}
    >
      {errorTooltip ? (
        <ErrorTooltip tooltipText={tooltipContent} show={showTooltip} />
      ) : (
        <InfoTooltip tooltipText={tooltipContent} show={showTooltip} />
      )}
      {children}
    </span>
  );
}

Tooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  errorTooltip: PropTypes.bool,
  tooltipContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

Tooltip.defaultProps = {
  className: '',
  errorTooltip: false,
};
