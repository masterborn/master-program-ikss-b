import React from 'react';
import PropTypes from 'prop-types';
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

HistoryTile.propTypes = {
  historyContent: PropTypes.shape({
    title: PropTypes.string,
    image1: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
    image2: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
    text1: PropTypes.shape({}),
    text2: PropTypes.shape({}),
  }).isRequired,
};
