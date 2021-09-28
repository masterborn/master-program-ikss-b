import styled from 'styled-components';

import { ButtonSmallText } from '@typography/buttonsText';
import { Header5 } from '@typography/headers';
import { ParagraphBody, ParagraphSmall } from '@typography/paragraphs';

export const ProjectArticle = styled.article(
  ({ theme: { medias }, isOnGrid, order, showCta }) => `
  display: ${showCta ? 'inline-block' : 'block'};
  border-radius: 1.6rem;
  break-inside: avoid;
    transform: translateZ(0px);
  width: ${isOnGrid ? '58.8rem' : '99.7rem'};
  height: auto;
  margin-bottom: ${isOnGrid ? '2.4rem' : '5.6rem'};
  box-shadow: 3.38443rem 5.58976rem 8.0rem rgba(97, 121, 139, 0.07),
    1.71337rem 2.82982rem 3.4875rem rgba(97, 121, 139, 0.04725),
    .0676885rem 1.11795rem 1.3rem rgba(97, 121, 139, 0.035),
    .0148069rem 2.44552rem 4.625rem rgba(97, 121, 139, 0.02275);
  order: ${order};

  @media ${medias.mobile} {
    width: 100%;
    margin-bottom: ${isOnGrid ? '2.4rem' : '3.2rem'};

  }
  a {
    margin-top: ${isOnGrid ? '2.4rem' : '3.2rem'};
    color: inherit;
    text-decoration: none;
    @media ${medias.mobile} {
      margin-top: 1.6rem;
      display: flex;
      justify-content: center;
    }
 
  @media ${medias.mobile} {
    width: 100%;
    &:nth-child(n) {
      order: ${isOnGrid && 1};
    }
  }
`,
);
export const ProjectMediaContainer = styled.div(
  ({ theme: { medias } }) => `
  border-radius: 1.6rem 1.6rem 0 0;
  height: auto;
  width: 100%;
  @media ${medias.mobile} {
    height: auto;
  }
`,
);
export const ProjectSummary = styled.div(
  ({ theme: { medias }, isOnGrid }) => `
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: ${isOnGrid ? '3.2rem 3.2rem 4.0rem 3.2rem' : '6.4rem 10.2rem 6.6rem 10.3rem'};
  @media ${medias.mobile} {
    padding: 2.4rem 2.6rem 3.2rem 2.4rem;
  }
`,
);
export const ProjectHeader = styled.div(
  ({ theme: { medias }, isOnGrid }) => `
  display: flex;
  align-items: flex-end;
  text-align: center;
  margin-bottom: ${isOnGrid ? '2.8rem' : '3.2rem'};
  @media ${medias.mobile} {
    text-align: left;
    margin-bottom: 1.6rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`,
);

export const ProjectDate = styled.h5(
  ({ theme: { medias, color } }) => `
  color: ${color.steel};

  @media ${medias.mobile} {
    ${ButtonSmallText}
  }
`,
);

export const ProjectTitle = styled.h4(
  ({ theme: { medias } }) => `
  margin: 0 2.4rem 0 0;
  @media ${medias.mobile} {
    ${Header5};
    margin-bottom: .8rem;
  }
`,
);
export const ProjectDescription = styled.p(
  ({ theme: { medias } }) => `
  ${ParagraphBody};
  @media ${medias.mobile} {
    ${ParagraphSmall};
  }
`,
);

export const ProjectImage = styled.img(
  ({ theme: { medias } }) => `
  width: 100%;
  height: auto;
  border-radius: 1.6rem 1.6rem 0 0;
  @media ${medias.mobile} {
    max-width: 100%;
    height: auto;
  }
`,
);
