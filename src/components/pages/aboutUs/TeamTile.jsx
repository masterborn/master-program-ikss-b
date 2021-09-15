import React from 'react';
import PropTypes from 'prop-types';

import { convertRichTextToReactComponent } from '@mappers/contentful';
import { TeamDescription, TeamHeader, TeamImage, TeamTileContainer } from './TeamTile.styles';

export default function TeamTile({ teamContent }) {
  const { title, image1: image, text1: richText } = teamContent;
  const Description = convertRichTextToReactComponent(TeamDescription, richText);
  return (
    <TeamTileContainer>
      <TeamHeader>{title}</TeamHeader>
      {Description}
      {image && <TeamImage src={image.url} alt={image.title} />}
    </TeamTileContainer>
  );
}

TeamTile.propTypes = {
  teamContent: PropTypes.shape({
    title: PropTypes.string,
    image1: PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    }),
    text1: PropTypes.shape({}),
  }).isRequired,
};
