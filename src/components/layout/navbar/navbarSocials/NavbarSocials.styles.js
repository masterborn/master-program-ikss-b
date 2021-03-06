import styled from 'styled-components';

import SocialsCollection from '@icons/SocialsCollection';

export const NavbarSocialsContainer = styled.div(
  ({ isHidden }) => `
    opacity:${isHidden ? '0' : '1'};
    z-index: ${isHidden ? '-1' : '1'};

    transition: opacity ease 0.2s;
  `,
);

export const StyledSocialsCollection = styled(SocialsCollection)`
  width: 16.8rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: opacity 500ms ease;
  margin-left: 19.9rem;

  & > a:hover {
    opacity: 0.5;
  }
`;
