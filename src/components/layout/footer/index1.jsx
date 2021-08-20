import styled from 'styled-components';
import Footer from './UnstyledFooter';

const StyledFooter = styled(Footer)`
  position: relative;

  width: 100%;
  height: 404px;

  background-color: ${(props) => props.theme.color.ikssBlue};
  color: ${(props) => props.theme.color.white};

  .centered {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 56px;
    padding-bottom: 48px;
    z-index: 1;

    .links {
      a {
        margin: 0px 32px;
        color: ${(props) => props.theme.color.white};
        text-decoration: none;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
      }
      margin-bottom: 48px;
    }
    .socials {
      width: 189px;

      margin-bottom: 29px;

      display: flex;
      justify-content: space-between;
    }

    & .logo {
      margin-bottom: 56px;

      & > svg {
        width: 84px;
        height: 48px;
      }
    }
  }

  .filler {
    position: absolute;
    left: 0;
    top: -324px;
    width: 100%;
    z-index: -100;
    height: 324px;
    background-color: ${(props) => props.theme.color.ikssBlue};
    visibility: ${(props) => !props.isHomepage && 'hidden'};
  }
  .scrollUpButton {
    position: absolute;
    top: ${(props) => (props.isHomepage ? '-371px' : '-47px')};
    right: 126px;
    visibility: visible;
    z-index: 1;
    & > svg > g:hover {
      cursor: pointer;
    }
  }
`;

export default StyledFooter;
