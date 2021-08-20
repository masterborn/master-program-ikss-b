import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { sortByOrder } from '@root/dataMappers/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import {
  Logo,
  LogosContainer,
  LogosSection,
  PartnersDescription,
  PartnersHeader,
} from './PartnersSection.style';

// function renderRichText(richText) {
//   const options = {
//     renderNode: {
//       [BLOCKS.PARAGRAPH]: (node, children) => <PartnersDescription>{children}</PartnersDescription>,
//     },
//   };
// }

export default function PartnersSection({ partners, partnersText }) {
  function sortPartners() {
    const homepagePartners = partners.filter(
      (partner) => partner.showOnHomepage && partner.logo.url,
    );
    return sortByOrder(homepagePartners);
  }
  const { title: partnersTitle, text1: richText } = partnersText;
  const homepagePartners = useMemo(sortPartners, [partners]);
  const partnersDescription = documentToReactComponents(richText);

  return (
    <LogosSection>
      <PartnersHeader>{partnersTitle}</PartnersHeader>
      <PartnersDescription>{partnersDescription}</PartnersDescription>
      <LogosContainer>
        {homepagePartners.map(({ logo: { title, url }, linkUrl }) => (
          <Logo key={title} href={linkUrl || ''}>
            <img alt={title} src={url} />
          </Logo>
        ))}
      </LogosContainer>
    </LogosSection>
  );
}

PartnersSection.propTypes = {
  partners: PropTypes.shape.isRequired,
  partnersText: PropTypes.shape.isRequired,
};
