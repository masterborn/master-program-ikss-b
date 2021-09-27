import styled from 'styled-components';

import { ButtonBigText } from '@typography/buttonsText';

export const ProjectsSwitchContainer = styled.div(
  ({ theme: { medias, color }, isOnGrid }) => `
  display: flex;
  justify-content: center;
  width: ${isOnGrid ? 'max-content' : 'auto'};
  height: 4.8rem;
  background-color: ${color.blueTints.blue10};
  margin-bottom: ${isOnGrid ? '4.8rem' : '6.4rem'};
  border-radius: 2.6rem;

  @media ${medias.mobile} {
    margin-bottom: ${isOnGrid ? '5.9rem' : '2.4rem'};
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
  width: 10.0rem;
  height: 100%;
  padding: 1.4rem 2.4rem;
  border: none;
  border-radius: 2.6rem;
  color: ${clicked ? color.white : color.navy};
  background-color: ${clicked ? color.ikssBlue : color.blueTints.blue10};
  ${ButtonBigText}
  cursor: pointer;

  &:hover{
    background-color: ${!clicked && color.blueTints.blue05};
  }

  @media ${medias.mobile} {
    height: 3.1rem;
    width: 8.4rem;
    padding: .9rem 1.6rem;
    font-size: 1.0rem;
    line-height: 1.3rem;
    font-weight: 700;
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
  padding: 1.4rem 2.4rem;
  border: none;
  border-radius: 2.6rem;
  color: ${clicked ? color.white : color.navy};
  background-color: ${clicked ? color.ikssBlue : color.blueTints.blue10};
  font-weight: 700;
  line-height: 2.0rem;
  font-size: 1.6rem;
  cursor: pointer;

  &:hover{
    background-color: ${!clicked && color.blueTints.blue05};
  }

  @media ${medias.mobile} {
    height: 3.1rem;
    width: 45%;
    padding: .9rem 1.6rem;
    font-size: 1.0rem;
    line-height: 1.3rem;

    &:first-child {
      margin: 0 100% 1.2rem 100%;
      width: 60%;
      min-width: 46%;
    }
    &:last-child {
      margin: 0 0 0 1.2rem;
    }
  }
  @media (max-width: 38.0rem) {
    min-width: 9.0rem;
  }
`,
);
