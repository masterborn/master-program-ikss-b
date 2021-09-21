import React from 'react';
import PropTypes from 'prop-types';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import { InfoTooltipContainer, Text, InfoTooltipTail } from './InfoTooltip.styles';

export default function InfoTooltip({ tooltipText, show }) {
  const { text1: text } = tooltipText;

  const Body = convertRichTextToReactComponent(Text, text);

  if (!show) return null;
  return (
    <InfoTooltipContainer>
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
