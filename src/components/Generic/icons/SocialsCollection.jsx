import React from 'react';
import PropTypes from 'prop-types';

import { FbCircleIcon, IgCircleIcon, YtCircleIcon, InCircleIcon } from './socialCircle';
import { FbIcon, IgIcon, YtIcon, InIcon } from './socialRegular';

export default function Socials({ className, socialsLinks, showRegular, showLabel }) {
  const {
    socialFacebook: {
      title: facebookTitle,
      linkUrl: facebookUrl,
      linkCaption: facebookLinkCaption,
    },
    socialInstagram: {
      title: instagramTitle,
      linkUrl: instagramUrl,
      linkCaption: instagramLinkCaption,
    },
    socialYoutube: { title: youtubeTitle, linkUrl: youtubeUrl, linkCaption: youtubeLinkCaption },
    socialLinkedin: {
      title: linkedinTitle,
      linkUrl: linkedinUrl,
      linkCaption: linkedinLinkCaption,
    },
  } = socialsLinks;

  return (
    <ul className={className}>
      <a href={facebookUrl} alt={facebookLinkCaption || facebookTitle}>
        {showRegular ? <FbIcon /> : <FbCircleIcon />}
        {showLabel && <h5>Facebook</h5>}
      </a>

      <a href={instagramUrl} alt={instagramLinkCaption || instagramTitle}>
        {showRegular ? <IgIcon /> : <IgCircleIcon />}
        {showLabel && <h5>Instagram</h5>}
      </a>
      <a href={youtubeUrl} alt={youtubeLinkCaption || youtubeTitle}>
        {showRegular ? <YtIcon /> : <YtCircleIcon />}
        {showLabel && <h5>YouTube</h5>}
      </a>

      <a href={linkedinUrl} alt={linkedinLinkCaption || linkedinTitle}>
        {showRegular ? <InIcon /> : <InCircleIcon />}
        {showLabel && <h5>LinkedIn</h5>}
      </a>
    </ul>
  );
}

Socials.propTypes = {
  className: PropTypes.string,
  socialsLinks: PropTypes.shape({
    socialFacebook: PropTypes.shape({
      title: PropTypes.string,
      linkUrl: PropTypes.string,
      linkCaption: PropTypes.string,
    }),
    socialInstagram: PropTypes.shape({
      title: PropTypes.string,
      linkUrl: PropTypes.string,
      linkCaption: PropTypes.string,
    }),
    socialYoutube: PropTypes.shape({
      title: PropTypes.string,
      linkUrl: PropTypes.string,
      linkCaption: PropTypes.string,
    }),
    socialLinkedin: PropTypes.shape({
      title: PropTypes.string,
      linkUrl: PropTypes.string,
      linkCaption: PropTypes.string,
    }),
  }).isRequired,
  showRegular: PropTypes.bool,
  showLabel: PropTypes.bool,
};

Socials.defaultProps = {
  className: '',
  showRegular: false,
  showLabel: false,
};
