import styled from 'styled-components';
import ScrollUpButton from '../../buttons/ScrollUpButton';
import Logo from '../../logos/PlainLogo';
import { ParagraphSmall } from '../../typography/paragraphs';
import Socials from '../../icons/SocialsCollection';

export const StyledFooter = styled.footer`
  position: relative;

  width: 100%;
  height: 404px;

  background-color: ${(props) => props.theme.color.ikssBlue};
`;

export const Filler = styled.div`
  position: absolute;
  left: 0;
  top: -324px;
  width: 100%;
  z-index: -100;
  height: 324px;
  background-color: ${(props) => props.theme.color.ikssBlue};
`;

export const StyledSrollUpButton = styled(ScrollUpButton)`
  position: absolute;
  top: ${(props) => (props.isHomepage ? '-371px' : '-47px')};
  right: 126px;
  z-index: 1;
  & > g:hover {
    cursor: pointer;
  }
`;

export const Centered = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 56px;
  padding-bottom: 48px;
  z-index: 1;
`;

export const LinksContainer = styled.div`
  width: fit-content;

  margin-bottom: 48px;

  display: flex;
  justify-content: space-between;
`;

export const Label = styled.h3`
  min-width: fit-content;
  margin: 0px 32px;

  cursor: pointer;

  color: ${(props) => props.theme.color.white};
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

export const StyledSocials = styled(Socials)`
  margin-bottom: 29px;

  a {
    margin: 0px 32px;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 84px;
  height: 48px;
`;

export const Paragraph = styled(ParagraphSmall)`
  margin-top: 56px;
  color: ${(props) => props.theme.color.white};

  text-align: center;
`;

export const MBLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
