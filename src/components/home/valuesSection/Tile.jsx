import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Header5 } from '../../typography/headers';
import { ParagraphBody } from '../../typography/paragraphs';

export default function Tile({ data }) {
  return (
    <div className="tile">
      <div className="content">
        {data.image1 ? (
          <Image src={`https:${data.image1}`} height={232} width={232} />
        ) : (
          <div className="image-filler" />
        )}
        <Header5>{data.title}</Header5>
        <ParagraphBody>{data.text1}</ParagraphBody>
      </div>
    </div>
  );
}

Tile.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text1: PropTypes.string,
    image1: PropTypes.string,
  }).isRequired,
};
