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

export default function ValuesTile({ data }) {
  const { title, text1: richText, image1: image } = data;
  const Body = convertRichTextToReactComponent(ValueTileParagraph, richText);
  return (
    <StyledValueTile>
      <ValueTileContent>
        {image ? (
          <Image src={`https:${image.url}`} height={232} width={232} alt={title} />
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
  data: PropTypes.shape({
    title: PropTypes.string,
    text1: PropTypes.shape({}),
    image1: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};
