import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import ValuesTilesSlider from './valuesTilesSlider';
import { StyledValuesSection, Title, Paragraph, TilesContainer } from './ValuesSection.styles';
import Tile from './ValuesTile';

export default function ValuesSection({ valuesText, valuesTiles }) {
  const { title, text1: richText } = valuesText;
  const isMobile = useSelector((state) => state.isMobile);
  const Body = convertRichTextToReactComponent(Paragraph, richText);
  return (
    <StyledValuesSection id="values-section">
      <Title>{title}</Title>
      {Body}
      {isMobile ? (
        <ValuesTilesSlider valuesTiles={valuesTiles} />
      ) : (
        <TilesContainer>
          {valuesTiles.map((val) => (
            <Tile data={val} key={val.title} />
          ))}
        </TilesContainer>
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
