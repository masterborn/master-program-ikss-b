import React from 'react';
import PropTypes from 'prop-types';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import { useRouter } from 'next/dist/client/router';
import {
  TopSectionContainer,
  TopSectionDescription,
  TopSectionHeader,
  TopSectionImage,
} from './TopSection.styles';

export default function TopSection({ topSectionContent, sectionId }) {
  const router = useRouter();
  const isCooperationPage = router.pathname === '/wspolpraca';

  const { title: sectionTitle, image1: image, text1: richText } = topSectionContent;
  const Description = convertRichTextToReactComponent(TopSectionDescription, richText);
  return (
    <TopSectionContainer isCooperationPage={isCooperationPage} id={sectionId}>
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
};
