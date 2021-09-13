import styled from 'styled-components';
import { Header3 } from '@root/components/typography/headers';
import ValuesTile from '@root/components/home/valuesSection/ValuesTile';

export const CooperationValuesSectionContainer = styled.div`
  width: 1224px;
  margin-top: 148px;

  text-align: center;

  @media ${({ theme: { medias } }) => medias.mobile} {
    margin-top: 80px;
    width: 100%;
  }
`;
export const Title = styled(Header3)`
  color: ${({ theme: { color } }) => color.navy};

  @media ${({ theme: { medias } }) => medias.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`;
export const CooperationValuesTilesContainer = styled.div`
  width: 100%;
  margin-top: 62px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media ${({ theme: { medias } }) => medias.mobile} {
    margin-top: 24px;

    flex-direction: column;
    align-items: center;
  }
`;

export const CooperationValuesTile = styled(ValuesTile)`
  margin: 50px 12px 12px;

  @media ${({ theme: { medias } }) => medias.mobile} {
    margin: 12px 0;
  }
`;
