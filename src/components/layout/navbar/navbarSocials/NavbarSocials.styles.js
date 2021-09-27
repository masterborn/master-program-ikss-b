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
  width: 16.8rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-left: 19.9rem;

  & > a:hover {
    transform: scale(1.2);
  }
`;
