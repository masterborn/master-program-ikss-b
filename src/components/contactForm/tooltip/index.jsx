import React from 'react';
import PropTypes from 'prop-types';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import { TooltipContainer, Text, Tail } from './Tooltip.styles';

export default function Tooltip({ tooltipText, show }) {
  const Body = convertRichTextToReactComponent(Text, tooltipText.text1);
  if (!show) return null;
  return (
    <TooltipContainer>
      {Body}
      <Tail />
    </TooltipContainer>
  );
}

Tooltip.propTypes = {
  tooltipText: PropTypes.shape({
    text1: PropTypes.shape({}),
  }).isRequired,
  show: PropTypes.bool,
};

Tooltip.defaultProps = {
  show: false,
};
