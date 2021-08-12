import React from 'react';
import PropTypes from 'prop-types';

import { FbCircleIcon, IgCircleIcon, YtCircleIcon, InCircleIcon } from '../../icons/socialCircle';

export default function Socials({ socialsLinks }) {
  return (
    <div className="socials">
      <a href={socialsLinks.fb}>
        <FbCircleIcon />
      </a>
      <a href={socialsLinks.ig}>
        <IgCircleIcon />
      </a>
      <a href={socialsLinks.yt}>
        <YtCircleIcon />
      </a>
      <a href={socialsLinks.in}>
        <InCircleIcon />
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
