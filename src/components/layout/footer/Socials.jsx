import React from 'react';
import PropTypes from 'prop-types';

import { FbIcon, IgIcon, YtIcon, InIcon } from '@icons/socialRegular';

export default function Socials({ socialsLinks }) {
  return (
    <div className="socials">
      <a href={socialsLinks.fb}>
        <FbIcon />
      </a>
      <a href={socialsLinks.ig}>
        <IgIcon />
      </a>
      <a href={socialsLinks.yt}>
        <YtIcon />
      </a>
      <a href={socialsLinks.in}>
        <InIcon />
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
