import React from 'react';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import {
  HistoryImage,
  HistoryHeader,
  HistoryTextContainer,
  HistoryTileContainer,
  HistoryDescription,
  HistoryRow,
} from './HistoryTile.styles';

export default function HistoryTile({ historyContent }) {
  const { title, image1, image2, text1: richText1, text2: richText2 } = historyContent;
  const Description1 = convertRichTextToReactComponent(HistoryDescription, richText1);
  const Description2 = convertRichTextToReactComponent(HistoryDescription, richText2);

  return (
    <HistoryTileContainer>
      <HistoryRow>
        <HistoryTextContainer>
          <HistoryHeader>{title}</HistoryHeader>
          {Description1}
        </HistoryTextContainer>
        <HistoryImage src={image1.url} alt={image1.title} />
      </HistoryRow>
      <HistoryRow>
        <HistoryTextContainer>{Description2}</HistoryTextContainer>
        <HistoryImage src={image2.url} alt={image2.title} />
      </HistoryRow>
    </HistoryTileContainer>
  );
}
