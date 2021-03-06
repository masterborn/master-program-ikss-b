import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/extensions
import { convertRichTextToReactComponent } from '@dataMappers/contentful.jsx';
import PartnerLogo from '@logos/PartnerLogo';
import {
  LogosContainer,
  LogosSection,
  PartnersDescription,
  PartnersHeader,
} from '@partnerTiles/PartnersSection.style';

export default function PartnersSection({ partners, partnersText }) {
  const { title: partnersTitle, text1: richText } = partnersText;
  const Description = convertRichTextToReactComponent(PartnersDescription, richText);
  return (
    <LogosSection id="partnerzy">
      <PartnersHeader>{partnersTitle}</PartnersHeader>
      {Description}
      <LogosContainer>
        {partners.map((partner) => (
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
