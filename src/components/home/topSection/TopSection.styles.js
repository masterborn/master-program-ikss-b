import styled from 'styled-components';
import Socials from '../../icons/SocialsCollection';
import { Header1 } from '../../typography/headers';
import { ParagraphBody } from '../../typography/paragraphs';

export const StyledTopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const LeftSide = styled.div`
  min-width: 416px;
  margin-top: 77px;
  margin-left: 120px;
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
    }
  }
`;

export const Header = styled(Header1)`
  width: 512px;
`;

export const TopSectionImage = styled.img`
  width: 808px;
  height: 505px;
`;

export const Paragraph = styled(ParagraphBody)`
  width: 384px;
  margin: 32px 0;

  color: ${(props) => props.theme.color.steel};
`;
