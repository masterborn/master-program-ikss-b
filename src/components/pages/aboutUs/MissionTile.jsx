import React from 'react';
import PropTypes from 'prop-types';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import {
  MissionContainer,
  MissionDescription,
  MissionHeader,
  MissionImage,
  MissionTextContainer,
} from './MissionTile.styles';

export default function MissionTile({ missionContent }) {
  const { title, text1: richText, image1: image } = missionContent;
  const Description = convertRichTextToReactComponent(MissionDescription, richText);
  return (
    <MissionContainer>
      {image && <MissionImage src={image.url} alt={image.title} />}
      <MissionTextContainer>
        <MissionHeader>{title}</MissionHeader>
        {Description}
      </MissionTextContainer>
    </MissionContainer>
  );
}

MissionTile.propTypes = {
  missionContent: PropTypes.shape({
    title: PropTypes.string,
    text1: PropTypes.shape({}),
    image1: PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  }).isRequired,
};
