import React from 'react';
import PropTypes from 'prop-types';
import { CtaOverlay, MidCtaContainer, MidCtaHeader } from './midCta.styles';
import CtaButton from '../ctaButton';

export default function MidCta({ midCtaContent }) {
  const { title, linkCaption: buttonText } = midCtaContent;

  return (
    <MidCtaContainer className="kontakt">
      <CtaOverlay>
        {title && <MidCtaHeader>{title}</MidCtaHeader>}
        {buttonText && <CtaButton buttonCaption={buttonText} />}
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
