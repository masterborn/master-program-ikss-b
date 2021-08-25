import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { StyledTile, Content, ImageFiller, Title, Body } from './ValuesTile.styles';

export default function ValuesTile({ data }) {
  return (
    <StyledTile>
      <Content>
        {data.image1 ? (
          <Image src={`https:${data.image1}`} height={232} width={232} />
        ) : (
          <ImageFiller />
        )}
        <Title>{data.title}</Title>
        <Body>{data.text1}</Body>
      </Content>
    </StyledTile>
  );
}

ValuesTile.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text1: PropTypes.string,
    image1: PropTypes.string,
  }).isRequired,
};