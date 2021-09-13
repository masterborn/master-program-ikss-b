import { ButtonSmallText } from '@root/styles/typography/buttonsText';
import { Header4, Header5 } from '@root/styles/typography/headers';
import { ParagraphBody, ParagraphSmall } from '@root/styles/typography/paragraphs';
import styled from 'styled-components';

export const ProjectArticle = styled.article(
  ({ theme: { medias }, isOnGrid }) => `
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: ${isOnGrid ? '588px' : '997px'};
  height: auto;
  margin-bottom: ${isOnGrid ? '24px' : '56px'};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  @media ${medias.mobile} {
    width: 100%;
  }
  a {
    margin-top: ${isOnGrid ? '24px' : '32px'};

    color: inherit;
    text-decoration: none;
    @media ${medias.mobile} {
      display: flex;
      justify-content: center;
    }
  }
  &:nth-child(2n) {
    order: ${isOnGrid && 2};
  }
  &:nth-child(2n + 1) {
    order: ${isOnGrid && 1};
  }
`,
);
export const ProjectMediaContainer = styled.div(
  ({ theme: { medias } }) => `
  border-radius: 16px 16px 0 0;
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
  padding: ${isOnGrid ? '32px 32px 40px 32px' : '64px 102px 66px 103px'};
  @media ${medias.mobile} {
    padding: 24px 26px 32px 24px;
  }
`,
);
export const ProjectHeader = styled.div(
  ({ theme: { medias }, isOnGrid }) => `
  display: flex;
  align-items: flex-end;
  text-align: center;
  margin-bottom: ${isOnGrid ? '28px' : '32px'};
  @media ${medias.mobile} {
    text-align: left;
    margin-bottom: 16px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`,
);

export const ProjectDate = styled.h5(
  ({ theme: { medias, color } }) => `
  ${Header5};;
  color: ${color.steel};

  @media ${medias.mobile} {
    ${ButtonSmallText}
  }
`,
);

export const ProjectTitle = styled.h4(
  ({ theme: { medias } }) => `
  ${Header4};
  margin: 0 24px 0 0;
  @media ${medias.mobile} {
    ${Header5};
    margin-bottom: 8px;
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
  border-radius: 16px 16px 0 0;
  @media ${medias.mobile} {
    max-width: 100%;
    height: auto;
  }
`,
);
