import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { sortByOrder } from '@root/dataMappers/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import {
  Logo,
  LogosContainer,
  LogosSection,
  PartnersDescription,
  PartnersHeader,
} from './PartnersSection.style';

function renderRichText(richText) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <PartnersDescription>{children}</PartnersDescription>,
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <b>{text}</b>,
    },
  };
  return documentToReactComponents(richText, options);
}

export default function PartnersSection({ partners, partnersText }) {
  function sortPartners() {
    const homepagePartners = partners.filter(
      (partner) => partner.showOnHomepage && partner.logo.url,
    );
    return sortByOrder(homepagePartners);
  }
  const { title: partnersTitle, text1: richText } = partnersText;
  const homepagePartners = useMemo(sortPartners, [partners]);
  const partnersDescription = renderRichText(richText);

  return (
    <LogosSection>
      <PartnersHeader>{partnersTitle}</PartnersHeader>
      {partnersDescription}
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
  partners: PropTypes.arrayOf(PropTypes.object).isRequired,
  partnersText: PropTypes.shape({
    page: PropTypes.string,
    identifier: PropTypes.string,
    title: PropTypes.string,
    text1: PropTypes.shape({
      data: PropTypes.shape({}),
      nodeType: PropTypes.string,
      content: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};
