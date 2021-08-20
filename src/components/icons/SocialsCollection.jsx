import React from 'react';
import PropTypes from 'prop-types';
import { FbCircleIcon, IgCircleIcon, YtCircleIcon, InCircleIcon } from './socialCircle';
import { FbIcon, IgIcon, YtIcon, InIcon } from './socialRegular';
import { Header5 } from '../typography/headers';

export default function Socials({ className, socialsLinks, showRegular, showLabel }) {
  return (
    <div className={className}>
      <a href={socialsLinks.fb} target="_blank" rel="noreferrer">
        {showRegular ? <FbIcon /> : <FbCircleIcon />}
        {showLabel && <Header5>Facebook</Header5>}
      </a>

      <a href={socialsLinks.ig} target="_blank" rel="noreferrer">
        {showRegular ? <IgIcon /> : <IgCircleIcon />}
        {showLabel && <Header5>Instagram</Header5>}
      </a>
      <a href={socialsLinks.yt} target="_blank" rel="noreferrer">
        {showRegular ? <YtIcon /> : <YtCircleIcon />}
        {showLabel && <Header5>YouTube</Header5>}
      </a>

      <a href={socialsLinks.in} target="_blank" rel="noreferrer">
        {showRegular ? <InIcon /> : <InCircleIcon />}
        {showLabel && <Header5>LinkedIn</Header5>}
      </a>
    </div>
  );
}

Socials.propTypes = {
  className: PropTypes.string,
  socialsLinks: PropTypes.shape({
    fb: PropTypes.string,
    ig: PropTypes.string,
    yt: PropTypes.string,
    in: PropTypes.string,
  }).isRequired,
  showRegular: PropTypes.bool,
  showLabel: PropTypes.bool,
};

Socials.defaultProps = {
  className: '',
  showRegular: false,
  showLabel: false,
};
