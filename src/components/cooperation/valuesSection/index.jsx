import React from 'react';
import PropTypes from 'prop-types';
import {
  CooperationValuesSectionContainer,
  Title,
  CooperationValuesTilesContainer,
  CooperationValuesTile,
} from './CooperationValuesSection.styles';

export default function CooperationValuesSection({ valuesTiles, valuesTitle }) {
  const { title } = valuesTitle;

  return (
    <CooperationValuesSectionContainer>
      <Title>{title}</Title>
      <CooperationValuesTilesContainer>
        {valuesTiles.map((tileData) => (
          <CooperationValuesTile data={tileData} key={tileData.title} isOnCooperation />
        ))}
      </CooperationValuesTilesContainer>
    </CooperationValuesSectionContainer>
  );
}

CooperationValuesSection.propTypes = {
  valuesTiles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  valuesTitle: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};
