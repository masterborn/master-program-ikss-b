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
  image.url =
    'https://images.ctfassets.net/n21y2i4hkj4h/2fNMHQifNLIKiyar2rpAma/84f429b1608b20d50789fd26de48554f/image_2.jpg';
  const Description = convertRichTextToReactComponent(MissionDescription, richText);
  return (
    <MissionContainer>
      <MissionImage src={image.url} alt={image.title} />
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
