import styled from 'styled-components';

import ContactForm from '../index';

export const ContactModalContainer = styled.div(
  ({ theme: { color } }) => `
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${color.navy}99;
`,
);

export const StyledContactForm = styled(ContactForm)`
  position: absolute;
  top: 5%;
  left: 0;
  right: 0;
  margin: auto;
`;

export const ModalBackground = styled.button`
  width: calc(100% - 1.5rem);
  height: calc(100% - 1.5rem);
  position: fixed;
  top: 0;
  left: 0;

  border: none;
  background-color: transparent;
`;