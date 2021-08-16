import styled from 'styled-components';
import Navbar from './UnstyledNavbar';

const StyledNavbar = styled(Navbar)`
  position: sticky;
  width: 100%;
  height: ${(props) => (props.isMobile ? '56px' : '88px')};
  left: 0px;
  top: 0px;

  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 4px 16px rgba(97, 121, 139, 0.1);

  & > .content {
    margin-top: 88px;
  }
  & > a > svg {
    width: 78px;
    height: 49px;
    min-width: 78px;
    min-height: 49px;

    position: absolute;
    left: 120px;
    top: 20px;
  }

  & > .links {
    width: 413px;
    height: 20px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    left: calc(50% - 413px / 2 - 189.5px);
    top: calc(50% - 20px / 2 - 1px);
    & > a {
      margin: 0 10px;

      width: fit-content;

      text-align: center;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      text-decoration: none;

      color: ${(props) => props.theme.color.steel};
    }
    .highlighted {
      color: ${(props) => props.theme.color.navy};
    }
  }

  .socials {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    position: absolute;
    width: 168px;
    height: 24px;
    right: 336px;
    top: 31px;

    & > a {
      margin: 0px 20px;
    }
  }

  button {
    position: absolute;
    width: 127px;
    height: 36px;
    right: 120px;
    top: calc(50% - 36px / 2);
  }
`;

export default StyledNavbar;
