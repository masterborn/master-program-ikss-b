import styled from 'styled-components';
import ValuesSection from './UnstyledValuesSection';

const StyledValuesSection = styled(ValuesSection)`
  margin-top: 157px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: ${(props) => props.theme.color.navy};
  }
  p {
    width: 551px;
    margin-top: 32px;
    text-align: center;
    color: ${(props) => props.theme.color.steel};
  }

  .tiles-container {
    max-width: 1200px;
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    .tile {
      width: 384px;
      display: flex;
      flex-direction: column;

      margin-top: 62px;

      text-align: center;

      z-index: 0;

      background-color: ${(props) => props.theme.color.white};
      box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
        1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
        0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
        0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
      border-radius: 16px;

      .content {
        display: flex;
        flex-direction: column;
        position: relative;
        top: -62px;

        margin-bottom: -14px;

        align-items: center;

        .image-filler {
          width: 232px;
          height: 232px;
        }
        img {
        }
        h5 {
          width: 336px;
          height: 48px;
          color: ${(props) => props.theme.color.navy};
        }
        p {
          width: 336px;

          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;

          text-align: center;
        }
      }
    }
  }
`;

export default StyledValuesSection;
