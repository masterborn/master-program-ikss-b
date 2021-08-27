import React from 'react';
import PropTypes from 'prop-types';
import { CtaOverlay, MidCtaButton, MidCtaContainer, MidCtaHeader } from './midCta.styles';

export default function MidCta({ midCtaContent }) {
  const { title, linkCaption: buttonText } = midCtaContent;
  return (
    <MidCtaContainer>
      <CtaOverlay>
        {title && <MidCtaHeader>{title}</MidCtaHeader>}
        {buttonText && <MidCtaButton isBig>{buttonText}</MidCtaButton>}
      </CtaOverlay>
    </MidCtaContainer>
  );
}

MidCta.propTypes = {
  midCtaContent: PropTypes.shape({
    title: PropTypes.string,
    linkCaption: PropTypes.string,
  }).isRequired,
};
