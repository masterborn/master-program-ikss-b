import styled from 'styled-components';

import { Header2, Header4 } from '@typography/headers';
import { ParagraphBody, ParagraphSmall } from '@typography/paragraphs';

export const MissionContainer = styled.section(
  ({ theme: { medias } }) => `
  display: flex;
  width: 119.7rem;
  height: auto;
  margin-top: 14.8rem;
  @media ${medias.mobile} {
    margin-top: 8.0rem;
    padding: 0 2.4rem 0 2.4rem;
    justify-content: flex-start;
    width: 100%;
    flex-direction: column;
  }
`,
);

export const MissionImage = styled.img(
  ({ theme: { medias } }) => `
  margin-right: 5.6rem;
  border-radius: 1.6rem;
  width: 48.3rem;
  height: auto;
  border-radius: 1.6rem;
  @media ${medias.mobile} {
    margin-right: 0;
    border-radius: .8rem;
    width: 100%;
  }
`,
);
export const MissionTextContainer = styled.div(
  ({ theme: { medias } }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 1.9rem 0 1.8rem 0;
  @media ${medias.mobile} {
    padding: 3.2rem 0 0 0;
  }
`,
);
export const MissionHeader = styled.h2(
  ({ theme: { medias } }) => `
  ${Header2};
  margin-bottom: 2.4rem;
  @media ${medias.mobile} {
    ${Header4};
    margin-bottom: 1.6rem;
  }
`,
);
export const MissionDescription = styled.p(
  ({ theme: { medias } }) => `
  ${ParagraphBody};
  @media ${medias.mobile} {
    ${ParagraphSmall};
  }
`,
);
