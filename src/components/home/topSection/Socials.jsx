import React from 'react';
import PropTypes from 'prop-types';
import { FbCircleIcon, IgCircleIcon, YtCircleIcon, InCircleIcon } from '../../icons/socialCircle';
import { Header5 } from '../../typography/headers';

export default function Socials({ socialsLinks }) {
  return (
    <div className="socials">
      <a href={socialsLinks.fb} target="_blank" rel="noreferrer">
        <FbCircleIcon />
        <Header5>Facebook</Header5>
      </a>
      <a href={socialsLinks.ig} target="_blank" rel="noreferrer">
        <IgCircleIcon />
        <Header5>Instagram</Header5>
      </a>
      <a href={socialsLinks.yt} target="_blank" rel="noreferrer">
        <YtCircleIcon />
        <Header5>YouTube</Header5>
      </a>
      <a href={socialsLinks.in} target="_blank" rel="noreferrer">
        <InCircleIcon />
        <Header5>LinkedIn</Header5>
      </a>
    </div>
  );
}

Socials.propTypes = {
  socialsLinks: PropTypes.shape({
    fb: PropTypes.string,
    ig: PropTypes.string,
    yt: PropTypes.string,
    in: PropTypes.string,
  }).isRequired,
};
