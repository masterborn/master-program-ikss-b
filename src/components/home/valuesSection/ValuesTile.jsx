import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import {
  StyledValueTile,
  ValueTileContent,
  ValueTileImageFiller,
  ValueTileParagraph,
  ValueTileTitle,
} from './ValuesTile.styles';

export default function ValuesTile({ className, data, isOnHomepage }) {
  const {
    title,
    text1: richText,
    image1: { url: imageUrl },
  } = data;
  const Body = convertRichTextToReactComponent(ValueTileParagraph, richText);
  return (
    <StyledValueTile>
      <ValueTileContent>
        {imageUrl ? (
          <Image src={`https:${imageUrl}`} height={232} width={232} alt={title} />
        ) : (
          <ValueTileImageFiller />
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
  isOnHomepage: PropTypes.bool,
};

ValuesTile.defaultProps = {
  className: '',
  isOnHomepage: false,
};
