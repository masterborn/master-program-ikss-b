import styled from 'styled-components';
import { Header2 } from '../typography/headers';
import { ParagraphBody } from '../typography/paragraphs';

export const MissionContainer = styled.div`
  display: flex;
  width: 1197px;
  height: auto;
  margin-top: 148px;
  @media ${({ theme: { medias } }) => medias.mobile} {
    margin-top: 80px;
    padding: 0 24px 0 24px;
    justify-content: flex-start;
    width: 100%;
    flex-direction: column;
  }
`;

export const MissionImage = styled.img`
  margin-right: 56px;
  border-radius: 16px;
  width: 483px;
  height: auto;
  border-radius: 16px;
  @media ${({ theme: { medias } }) => medias.mobile} {
    margin-right: 0;
    border-radius: 8px;
    width: 100%;
  }
`;
export const MissionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 19px 0 18px 0;
  @media ${({ theme: { medias } }) => medias.mobile} {
    padding: 32px 0 0 0;
  }
`;
export const MissionHeader = styled(Header2)`
  margin-bottom: 24px;
  @media ${({ theme: { medias } }) => medias.mobile} {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 32px;
  }
`;
export const MissionDescription = styled(ParagraphBody)`
  @media ${({ theme: { medias } }) => medias.mobile} {
    font-size: 14px;
    line-height: 28px;
  }
`;
