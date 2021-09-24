import styled from 'styled-components';

import SocialsCollection from '@icons/SocialsCollection';

export const NavbarSocialsContainer = styled.div(
  ({ isHidden }) => `
    opacity:${isHidden ? '0' : '1'};
    z-index: ${isHidden ? '-1' : '1'};

    transition: opacity ease 0.4s;
  `,
);

export const StyledSocialsCollection = styled(SocialsCollection)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin-left: 19.9rem;

  & > a {
    margin: 0rem 2rem;

    transition: transform ease 0.4s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
