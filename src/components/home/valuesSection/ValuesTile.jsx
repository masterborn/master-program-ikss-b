import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import {
  StyledValueTile,
  ValueTileContent,
  ValueTileImageFiller,
  ValueTileTitle,
  ValueTileParagraph,
} from './ValuesTile.styles';

export default function ValuesTile({ className, data, isOnCooperation }) {
  const {
    title,
    text1: richText,
    image1: { url: imageUrl },
  } = data;

  if (!imageUrl && !title && !richText) return null;

  const Body = convertRichTextToReactComponent(ValueTileParagraph, richText);

  return (
    <StyledValueTile className={className} isOnCooperation={isOnCooperation}>
      <ValueTileContent isOnCooperation={isOnCooperation}>
        {imageUrl ? (
          <Image src={`https:${imageUrl}`} height={232} width={232} alt={title} />
        ) : (
          <ValueTileImageFiller isOnCooperation={isOnCooperation} />
        )}

        <ValueTileTitle>{title}</ValueTileTitle>
        {Body}
      </ValueTileContent>
    </StyledValueTile>
  );
}

ValuesTile.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    title: PropTypes.string,
    text1: PropTypes.shape({}),
    image1: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  isOnCooperation: PropTypes.bool,
};

ValuesTile.defaultProps = {
  className: '',
  isOnCooperation: false,
};
