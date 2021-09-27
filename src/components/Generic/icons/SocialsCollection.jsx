import React from 'react';
import PropTypes from 'prop-types';

import { FbCircleIcon, IgCircleIcon, YtCircleIcon, InCircleIcon } from './socialCircle';
import { FbIcon, IgIcon, YtIcon, InIcon } from './socialRegular';
import SocialsLabel from './SocialsCollection.styles';

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
        {showLabel && <SocialsLabel>Facebook</SocialsLabel>}
      </a>

      <a href={instagramUrl} alt={instagramLinkCaption || instagramTitle}>
        {showRegular ? <IgIcon /> : <IgCircleIcon />}
        {showLabel && <SocialsLabel>Instagram</SocialsLabel>}
      </a>
      <a href={youtubeUrl} alt={youtubeLinkCaption || youtubeTitle}>
        {showRegular ? <YtIcon /> : <YtCircleIcon />}
        {showLabel && <SocialsLabel>YouTube</SocialsLabel>}
      </a>

      <a href={linkedinUrl} alt={linkedinLinkCaption || linkedinTitle}>
        {showRegular ? <InIcon /> : <InCircleIcon />}
        {showLabel && <SocialsLabel>LinkedIn</SocialsLabel>}
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
