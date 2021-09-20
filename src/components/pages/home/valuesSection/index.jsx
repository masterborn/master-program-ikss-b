import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { convertRichTextToReactComponent } from '@dataMappers/contentful';
import ValuesTile from '@valueTile';
import ValuesTilesSlider from './valuesTilesSlider';
import {
  StyledValuesSection,
  ValuesSectionTitle,
  ValuesSectionParagraph,
  ValuesSectionTilesContainer,
} from './ValuesSection.styles';

export default function ValuesSection({ valuesText, valuesTiles }) {
  const { title, text1: richText } = valuesText;
  const isMobile = useSelector((state) => state.isMobile);
  const Body = convertRichTextToReactComponent(ValuesSectionParagraph, richText);
  return (
    <StyledValuesSection id="values-section">
      <ValuesSectionTitle>{title}</ValuesSectionTitle>
      {Body}
      {isMobile ? (
        <ValuesTilesSlider valuesTiles={valuesTiles} />
      ) : (
        <ValuesSectionTilesContainer>
          {valuesTiles.map((val) => (
            <ValuesTile data={val} key={val.title} />
          ))}
        </ValuesSectionTilesContainer>
      )}
    </StyledValuesSection>
  );
}

ValuesSection.propTypes = {
  valuesText: PropTypes.shape({
    title: PropTypes.string,
    text1: PropTypes.shape({}),
  }).isRequired,
  valuesTiles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
