import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import { StyledTile, Content, ImageFiller, Title, Paragraph } from './ValuesTile.styles';

export default function ValuesTile({ className, data }) {
  const {
    title,
    text1: richText,
    image1: { url: imageUrl },
  } = data;
  const Body = convertRichTextToReactComponent(Paragraph, richText);

  if (!imageUrl && !title && !!Body[0].props.children) return null;

  return (
    <StyledTile className={className}>
      <Content>
        {imageUrl ? (
          <Image src={`https:${imageUrl}`} height={232} width={232} alt={title} />
        ) : (
          <ImageFiller />
        )}

        <Title>{title}</Title>
        {Body}
      </Content>
    </StyledTile>
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
};

ValuesTile.defaultProps = {
  className: '',
};
