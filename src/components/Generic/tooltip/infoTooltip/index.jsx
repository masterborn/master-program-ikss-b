import React from 'react';
import PropTypes from 'prop-types';

import { convertRichTextToReactComponent } from '@dataMappers/contentful';
import { InfoTooltipContainer, Text, InfoTooltipTail } from './InfoTooltip.styles';

export default function InfoTooltip({ tooltipText, show }) {
  const { text1: text } = tooltipText;

  const Body = convertRichTextToReactComponent(Text, text);

  return (
    <InfoTooltipContainer show={show}>
      {Body}
      <InfoTooltipTail />
    </InfoTooltipContainer>
  );
}

InfoTooltip.propTypes = {
  tooltipText: PropTypes.shape({
    text1: PropTypes.shape({}),
  }).isRequired,
  show: PropTypes.bool,
};

InfoTooltip.defaultProps = {
  show: false,
};
