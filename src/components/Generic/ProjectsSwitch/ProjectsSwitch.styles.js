import { ButtonBigText } from '@root/styles/typography/buttonsText';
import styled from 'styled-components';

export const ProjectsSwitchContainer = styled.div(
  ({ theme: { medias, color }, isOnGrid }) => `
  display: flex;
  justify-content: center;
  width: ${isOnGrid ? 'max-content' : 'auto'};
  height: 48px;
  background-color: ${color.blueTints.blue10};
  margin-bottom: ${isOnGrid ? '48px' : '64px'};
  border-radius: 26px;

  @media ${medias.mobile} {
    margin-bottom: 24px;
    background: ${isOnGrid ? 'iherit' : 'none'};
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
`,
);

export const DateSwitchButton = styled.button(
  ({ theme: { medias, color }, clicked }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  padding: 14px 24px;
  border: none;
  border-radius: 26px;
  color: ${clicked ? color.white : color.navy};
  background-color: ${clicked ? color.ikssBlue : color.blueTints.blue10};
  ${ButtonBigText}
  cursor: pointer;

  @media ${medias.mobile} {
    height: 31px;
    width: 84px;
    padding: 9px 16px;
    font-size: 10px;
    line-height: 13px;
  }
`,
);

export const SwitchButton = styled.button(
  ({ theme: { medias, color }, clicked }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  padding: 14px 24px;
  border: none;
  border-radius: 26px;
  color: ${clicked ? color.white : color.navy};
  background-color: ${clicked ? color.ikssBlue : color.blueTints.blue10};
  font-weight: 700;
  line-height: 20px;
  font-size: 16px;
  cursor: pointer;

  @media ${medias.mobile} {
    height: 31px;
    width: auto;
    padding: 9px 16px;
    font-size: 10px;
    line-height: 13px;
    &:first-child {
      margin: 0 100% 12px 100%;
      min-width: max-content;
    }
    &:last-child {
      margin: 0 0 0 12px;
    }
  }
  @media (max-width: 380px) {
    min-width: 90px;
    max-width: 120px;
  }
`,
);
