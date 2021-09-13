import styled from 'styled-components';
import StyledPrimaryButton from '../buttons/primaryButton/StyledPrimaryButton';
import { Header1 } from '../typography/headers';
import { ParagraphBody } from '../typography/paragraphs';
import IKKSErrorImage from './IKKSErrorImage';

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  @media ${({ theme: { medias } }) => medias.mobile} {
    padding: 0 24px;
    & span {
      display: inline-block;
      width: 76px;
    }
  }
`;

export const IKKSContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 116px;
  margin-bottom: -65px;
  width: 100%;
  height: auto;
  @media ${({ theme: { medias } }) => medias.mobile} {
    margin-top: 207px;
    margin-bottom: 0;
    height: 51vw;
    min-height: 136px;
    width: 100%;
  }
`;

export const IKKSLogo = styled(IKKSErrorImage)`
  @media ${({ theme: { medias } }) => medias.mobile} {
    height: auto;
    width: auto;
  }
`;

export const ErrorMessage = styled(Header1)`
  margin-bottom: 32px;
  @media ${({ theme: { medias } }) => medias.mobile} {
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 56px;
  }
`;
export const ErrorDescription = styled(ParagraphBody)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  font-size: 20px;
  line-height: 32px;
  @media ${({ theme: { medias } }) => medias.mobile} {
    margin-bottom: 24px;
    text-align: center;
    display: inline;
    font-size: 14px;
    line-height: 28px;
  }
`;

export const GetBackButton = styled(StyledPrimaryButton)`
  width: 153px;
  @media ${({ theme: { medias } }) => medias.mobile} {
    width: max-content;
    min-width: 124px;
    height: 36px;
    padding: 9px 16px;
    font-size: 14px;
    line-height: 18px;
  }
`;
