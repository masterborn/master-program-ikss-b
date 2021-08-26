import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import { convertRichTextToReactComponent, sortByOrder } from '@root/dataMappers/contentful.jsx';

import PartnerLogo from '@root/components/logos/PartnerLogo';
import {
  LogosContainer,
  LogosSection,
  PartnersDescription,
  PartnersHeader,
} from './PartnersSection.style';

function sortPartners(partners) {
  const homepagePartners = partners.filter(
    ({ showOnHomepage, logo }) => showOnHomepage && logo.url,
  );
  return sortByOrder(homepagePartners);
}
export default function PartnersSection({ partners, partnersText }) {
  const { title: partnersTitle, text1: richText } = partnersText;
  const homepagePartners = useMemo(() => sortPartners(partners), [partners]);
  const Description = convertRichTextToReactComponent(PartnersDescription, richText);
  return (
    <LogosSection id="partners">
      <PartnersHeader>{partnersTitle}</PartnersHeader>
      {Description}
      <LogosContainer>
        {homepagePartners.map((partner) => (
          <PartnerLogo key={partner.name} partner={partner} />
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
