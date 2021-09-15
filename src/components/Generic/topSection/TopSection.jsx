import React from 'react';
import PropTypes from 'prop-types';

import { convertRichTextToReactComponent } from '@mappers/contentful';
import {
  TopSectionContainer,
  TopSectionDescription,
  TopSectionHeader,
  TopSectionImage,
} from './TopSection.styles';

export default function TopSection({ topSectionContent, sectionId, isOnCooperation = false }) {
  const { title: sectionTitle, image1: image, text1: richText } = topSectionContent;
  const Description = convertRichTextToReactComponent(TopSectionDescription, richText);
  return (
    <TopSectionContainer isOnCooperationPage={isOnCooperation} id={sectionId}>
      {image && <TopSectionImage src={image.url} alt={image.title} />}
      {sectionTitle && <TopSectionHeader>{sectionTitle}</TopSectionHeader>}
      {richText && Description}
    </TopSectionContainer>
  );
}

TopSection.propTypes = {
  topSectionContent: PropTypes.shape({
    title: PropTypes.string,
    image1: PropTypes.PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
    text1: PropTypes.PropTypes.shape({
      content: PropTypes.arrayOf(PropTypes.object),
      data: PropTypes.shape({}),
      nodeType: PropTypes.string,
    }),
  }).isRequired,
  sectionId: PropTypes.string.isRequired,
  isOnCooperation: PropTypes.bool,
};

TopSection.defaultProps = {
  isOnCooperation: false,
};
