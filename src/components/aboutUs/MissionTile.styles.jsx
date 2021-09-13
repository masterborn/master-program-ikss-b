import styled from 'styled-components';
import { Header2, Header4 } from '../../styles/typography/headers';
import { ParagraphBody, ParagraphSmall } from '../../styles/typography/paragraphs';

export const MissionContainer = styled.div(
  ({ theme: { medias } }) => `
  display: flex;
  width: 1197px;
  height: auto;
  margin-top: 148px;
  @media ${medias.mobile} {
    margin-top: 80px;
    padding: 0 24px 0 24px;
    justify-content: flex-start;
    width: 100%;
    flex-direction: column;
  }
`,
);

export const MissionImage = styled.img(
  ({ theme: { medias } }) => `
  margin-right: 56px;
  border-radius: 16px;
  width: 483px;
  height: auto;
  border-radius: 16px;
  @media ${medias.mobile} {
    margin-right: 0;
    border-radius: 8px;
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
  padding: 19px 0 18px 0;
  @media ${medias.mobile} {
    padding: 32px 0 0 0;
  }
`,
);
export const MissionHeader = styled.h2(
  ({ theme, theme: { medias } }) => `
  ${Header2(theme)};
  margin-bottom: 24px;
  @media ${medias.mobile} {
    ${Header4(theme)};
    margin-bottom: 16px;
  }
`,
);
export const MissionDescription = styled.p(
  ({ theme, theme: { medias } }) => `
  ${ParagraphBody(theme)};
  @media ${medias.mobile} {
    ${ParagraphSmall(theme)};
  }
`,
);
