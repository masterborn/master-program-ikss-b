import styled from 'styled-components';

import { Header5 } from '@typography/headers';

export const MidCtaContainer = styled.div(
  ({ theme: { medias }, order }) => `
  margin: 6.8rem 0 9.2rem 0;
  width: 120.0rem;
  height: 35.2rem;
  column-span: all;
  break-inside: avoid;
  transform: translateZ(0px);
  @media ${medias.mobile} {
    order: ${order};
    width: 100%;
    padding: 0;
    height: 22rem;
    margin: 0.8rem 0 3.2rem 0;
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
