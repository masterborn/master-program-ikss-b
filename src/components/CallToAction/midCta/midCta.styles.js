import styled from 'styled-components';
import { Header3, Header5 } from '../../../styles/typography/headers';

export const MidCtaContainer = styled.div(
  ({ theme: { medias } }) => `
  /* just for display testing */
  margin: 12.0rem 0 12.0rem 0;
  width: 120.0rem;
  height: 35.2rem;

  @media ${medias.mobile} {
    width: 100%;
    padding: 0 2.4rem;
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
  border-radius: 1.6rem;
  padding-bottom: 11.3rem;
  padding-top: 11.5rem;

  width: 100%;
  height: 100%;
  background-color: ${color.blueTints.blue10};

  @media ${medias.mobile} {
    padding-top: 5.6rem;
    padding-bottom: 5.6rem;
  }
`,
);

export const MidCtaHeader = styled.h3(
  ({ theme: { medias } }) => `
  margin-bottom: 3.2rem;
  ${Header3};
  text-align: center;
  @media ${medias.mobile} {
    width: 100%;
    padding: 0 3.1rem;
    margin-top: 0;
    margin-bottom: 2.4rem;

    ${Header5};
  }
`,
);
