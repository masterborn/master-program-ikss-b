import { Header3, Header4 } from '@root/styles/typography/headers';
import { ParagraphBody } from '@root/styles/typography/paragraphs';
import styled from 'styled-components';

export const BottomCtaContainer = styled.div(
  ({ theme: { medias } }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 635px;
  height: auto;
  margin: 148px 0;

  @media ${medias.mobile} {
    height: auto;
    margin: 103px 0;
    width: 100%;
    padding: 0 24px;
  }
`,
);

export const BottomCtaHeader = styled.h3(
  ({ theme: { medias } }) => `
  margin-bottom: 32px;
  ${Header3};
  text-align: center;
  @media ${medias.mobile} {
    margin-bottom: 16px;
    ${Header4};
  }
`,
);

export const BottomCtaText = styled.p(
  ({ theme: { medias } }) => `
  margin-bottom: 32px;
  ${ParagraphBody};
  text-align: center;

  @media ${medias.mobile} {
    margin-bottom: 16px;
  }
`,
);
