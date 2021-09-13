import styled from 'styled-components';
import Socials from '@root/components/icons/SocialsCollection';
import { Header1 } from '../../typography/headers';
import { ParagraphBody } from '../../typography/paragraphs';

export const StyledHomepageHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 550px) {
    max-width: 550px;
    min-width: 300px;
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;

  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TextSection = styled.div`
  min-width: 416px;
  margin-top: 77px;
  margin-left: 120px;
  @media (max-width: 550px) {
    min-width: 300px;
    margin-top: 40px;
    margin-left: 0;
    padding: 0 24px;
    order: 2;
  }
`;

export const HomepageHeroVideo = styled.video`
  width: 808px;
  height: 505px;

  @media (max-width: 550px) {
    order: 1;
    width: 100%;
    max-width: 550px;
    height: auto;
  }
`;

export const StyledSocials = styled(Socials)`
  width: 1037px;
  height: 137px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 120px;
  padding-left: 56px;

  background-color: ${(props) => props.theme.color.white};

  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px 0px 0px 16px;

  @media (max-width: 550px) {
    width: 80%;
    height: 80px;
    margin-top: 40px;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    justify-content: space-around;
  }

  a {
    height: 48px;
    display: flex;
    flex: row;
    align-items: center;

    text-decoration: none;

    color: ${(props) => props.theme.color.navy};
    svg {
      transform: scale(2);
      margin-right: 24px;
      margin-left: 24px;

      @media (max-width: 550px) {
        transform: scale(1.5);
        margin: 0;
      }
    }
    @media (max-width: 550px) {
      height: 32px;
      width: 32px;
    }
  }
`;

export const Header = styled(Header1)`
  width: 100%;

  @media (max-width: 550px) {
    font-size: 32px;
    line-height: 44px;
  }
`;
export const HomepageHeroImage = styled.img`
  width: 808px;
  height: 505px;
`;

export const Paragraph = styled(ParagraphBody)`
  width: 100%;
  margin: 32px 0;

  color: ${(props) => props.theme.color.steel};

  @media (max-width: 550px) {
    margin: 24px 0;

    font-size: 14px;
    line-height: 28px;
  }
`;
