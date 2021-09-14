import React from 'react';
import PropTypes from 'prop-types';
import { FbCircleIcon, IgCircleIcon, YtCircleIcon, InCircleIcon } from './socialCircle';
import { FbIcon, IgIcon, YtIcon, InIcon } from './socialRegular';
import { Header5 } from '../../styles/typography/headers';

export default function Socials({ className, socialsLinks, showRegular, showLabel }) {
  const {
    socialFb: { title: facebookTitle, linkUrl: facebookUrl, linkCaption: facebookLinkCaption },
    socialIg: { title: instagramTitle, linkUrl: instagramUrl, linkCaption: instagramLinkCaption },
    socialYt: { title: youtubeTitle, linkUrl: youtubeUrl, linkCaption: youtubeLinkCaption },
    socialIn: { title: linkedinTitle, linkUrl: linkedinUrl, linkCaption: linkedinLinkCaption },
  } = socialsLinks;

  return (
    <div className={className}>
      <a href={facebookUrl} alt={facebookLinkCaption || facebookTitle}>
        {showRegular ? <FbIcon /> : <FbCircleIcon />}
        {showLabel && <Header5>Facebook</Header5>}
      </a>

      <a href={instagramUrl} alt={instagramLinkCaption || instagramTitle}>
        {showRegular ? <IgIcon /> : <IgCircleIcon />}
        {showLabel && <Header5>Instagram</Header5>}
      </a>
      <a href={youtubeUrl} alt={youtubeLinkCaption || youtubeTitle}>
        {showRegular ? <YtIcon /> : <YtCircleIcon />}
        {showLabel && <Header5>YouTube</Header5>}
      </a>

      <a href={linkedinUrl} alt={linkedinLinkCaption || linkedinTitle}>
        {showRegular ? <InIcon /> : <InCircleIcon />}
        {showLabel && <Header5>LinkedIn</Header5>}
      </a>
    </div>
  );
}

Socials.propTypes = {
  className: PropTypes.string,
  socialsLinks: PropTypes.shape({
    socialFb: PropTypes.shape({
      title: PropTypes.string,
      linkUrl: PropTypes.string,
      linkCaption: PropTypes.string,
    }),
    socialIg: PropTypes.shape({
      title: PropTypes.string,
      linkUrl: PropTypes.string,
      linkCaption: PropTypes.string,
    }),
    socialYt: PropTypes.shape({
      title: PropTypes.string,
      linkUrl: PropTypes.string,
      linkCaption: PropTypes.string,
    }),
    socialIn: PropTypes.shape({
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
