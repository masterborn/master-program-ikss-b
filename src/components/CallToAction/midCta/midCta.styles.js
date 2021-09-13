import styled from 'styled-components';
import { Header3, Header5 } from '../../../styles/typography/headers';

export const MidCtaContainer = styled.div(
  ({ theme: { medias } }) => `
  /* just for display testing */
  margin: 120px 0 120px 0;
  width: 1200px;
  height: 352px;

  @media ${medias.mobile} {
    width: 100%;
    padding: 0 24px;
    height: auto;
  }
`,
);

export const CtaOverlay = styled.div(
  ({ theme: { medias, color } }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  border-radius: 16px;
  padding-bottom: 113px;
  padding-top: 115px;

  width: 100%;
  height: 100%;
  background-color: ${color.blueTints.blue10};

  @media ${medias.mobile} {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`,
);

export const MidCtaHeader = styled.h3(
  ({ theme: { medias } }) => `
  margin-bottom: 32px;
  ${Header3};
  text-align: center;
  @media ${medias.mobile} {
    width: 100%;
    padding: 0 31px;
    margin-top: 0;
    margin-bottom: 24px;

    ${Header5};
  }
`,
);
