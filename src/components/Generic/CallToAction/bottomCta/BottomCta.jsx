import React from 'react';
import PropTypes from 'prop-types';

import { convertRichTextToReactComponent } from '@dataMappers/contentful';
import {
  BottomCtaContainer,
  BottomCtaHeader,
  BottomCtaText,
} from '@cta/bottomCta/BottomCta.styles';
import CtaButton from '@cta/ctaButton';

export default function BottomCta({ bottomCtaContent }) {
  const { title, linkCaption: buttonText, text1: richText } = bottomCtaContent;
  const CtaDescription = convertRichTextToReactComponent(BottomCtaText, richText);
  return (
    <BottomCtaContainer>
      {title && <BottomCtaHeader>{title}</BottomCtaHeader>}
      {richText && CtaDescription}
      {buttonText && <CtaButton isBig buttonCaption={buttonText} />}
    </BottomCtaContainer>
  );
}

BottomCta.propTypes = {
  bottomCtaContent: PropTypes.shape({
    title: PropTypes.string,
    linkCaption: PropTypes.string,
    text1: PropTypes.shape({
      nodeType: PropTypes.string,
      data: PropTypes.shape({}),
      content: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};
