import styled from 'styled-components';
import { Header3 } from '@root/components/typography/headers';
import ValuesTile from '@root/components/home/valuesSection/ValuesTile';

export const CooperationValuesSectionContainer = styled.div`
  width: 1224px;
  margin-top: 148px;

  text-align: center;

  @media (max-width: 550px) {
    width: 100%;
    padding: 0 12px;
  }
`;
export const Title = styled(Header3)`
  color: ${({ theme: { color } }) => color.navy};

  @media (max-width: 550px) {
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

  @media (max-width: 550px) {
    margin-top: 24px;

    flex-direction: column;
    align-items: center;
  }
`;

export const CooperationValuesTile = styled(ValuesTile)`
  margin: 50px 12px 12px;

  @media (max-width: 550px) {
    margin: 12px 0;
  }
`;
