import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../partnersList/PartnersSection.style';

export default function PartnerLogo({ partner }) {
  const {
    logo: { title, url },
    linkUrl,
  } = partner;
  return (
    <Logo>
      <a href={linkUrl || ''}>
        <img alt={title} src={url} />
      </a>
    </Logo>
  );
}

PartnerLogo.propTypes = {
  partner: PropTypes.shape({
    logo: PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    }),
    linkUrl: PropTypes.string,
  }).isRequired,
};
