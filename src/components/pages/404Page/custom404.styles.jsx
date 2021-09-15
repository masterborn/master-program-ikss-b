import styled from 'styled-components';

import StyledPrimaryButton from '@buttons/primaryButton/StyledPrimaryButton';
import { Header1, Header2 } from '@typography/headers';
import IKKSErrorImage from './IKKSErrorImage';

export const ErrorPageContainer = styled.div(
  ({ theme: { medias } }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  @media ${medias.mobile} {
    padding: 0 2.4rem;
    & span {
      display: inline-block;
      width: 7.6rem;
    }
  }
`,
);

export const IKKSContainer = styled.div(
  ({ theme: { medias } }) => `
  display: flex;
  justify-content: center;
  margin-top: 11.6rem;
  margin-bottom: -6.5rem;
  width: 100%;
  height: auto;
  @media ${medias.mobile} {
    margin-top: 20.7rem;
    margin-bottom: 0;
    height: 51vw;
    min-height: 13.6rem;
    width: 100%;
  }
`,
);

export const IKKSLogo = styled(IKKSErrorImage)(
  ({ theme: { medias } }) => `
  @media ${medias.mobile} {
    height: auto;
    width: auto;
  }
`,
);

export const ErrorMessage = styled.h1(
  ({ theme: { medias } }) => `
  margin-bottom: 3.2rem;

  ${Header1};
  @media ${medias.mobile} {
    margin-bottom: 2.4rem;
    ${Header2};
  }
`,
);
export const ErrorDescription = styled.p(
  ({ theme: { medias } }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.2rem;
  font-size: 2.0rem;
  line-height: 3.2rem;
  @media ${medias.mobile} {
    margin-bottom: 2.4rem;
    text-align: center;
    display: inline;
    font-size: 1.4rem;
    line-height: 2.8rem;
  }
`,
);

export const GetBackButton = styled(StyledPrimaryButton)(
  ({ theme: { medias } }) => `
  width: 15.3rem;
  @media ${medias.mobile} {
    width: max-content;
    min-width: 12.4rem;
    height: 3.6rem;
    padding: .9rem 1.6rem;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`,
);
