import React from 'react';
import partners from './partners.json';
import {
  Logo,
  LogosContainer,
  LogosSection,
  PartnersDescription,
  PartnersHeader,
} from './PartnersSection.style';

function sortLogos() {
  // once API integration is up, this function will belong in contentful mapper
  const homepagePartners = partners.filter((partner) => partner.showOnHomepage);
  homepagePartners.forEach((partner, index) => {
    if (!partner.order) homepagePartners[index].order = 0;
  });
  homepagePartners.sort((a, b) => b.order - a.order);
  return homepagePartners;
}
export default function PartnersSection() {
  const homepagePartners = sortLogos();
  return (
    <LogosSection>
      <PartnersHeader>Współpracują z nami</PartnersHeader>
      <PartnersDescription>
        Na pewno powinno się pojawić tu logo UE na pierwszym miejscu. Kilka słów o tym, co można
        zyskać współpracując z wami jako partnerzy. Jakie to niesie korzyści PR’owe etc.
      </PartnersDescription>
      <LogosContainer>
        {homepagePartners.map(({ logo: { title, url } }) => (
          <Logo key={title}>
            <img alt={title} src={url} />
          </Logo>
        ))}
      </LogosContainer>
    </LogosSection>
  );
}
