import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import React from 'react';
import { TeamDescription, TeamHeader, TeamImage, TeamTileContainer } from './TeamTile.styles';

export default function TeamTile({ teamContent }) {
  const { title, image1: image, text1: richText } = teamContent;
  const Description = convertRichTextToReactComponent(TeamDescription, richText);
  return (
    <TeamTileContainer>
      <TeamHeader>{title}</TeamHeader>
      {Description}
      <TeamImage src={image.url} alt={image.title} />
    </TeamTileContainer>
  );
}
