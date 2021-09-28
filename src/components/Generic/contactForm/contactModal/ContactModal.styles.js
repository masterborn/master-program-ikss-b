import styled from 'styled-components';

import ContactForm from '../index';

export const ContactModalContainer = styled.div(
  ({ theme: { color }, isOpened }) => `
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: ${isOpened ? 'auto' : 'hidden'};
  background-color: ${color.navy}99;

  opacity: ${isOpened ? '1' : '0'};
  z-index: ${isOpened ? '999' : '-10'};
  transition: 0.2s ease;
`,
);

export const StyledContactForm = styled(ContactForm)(
  ({ isOpened }) => `
  position: absolute;
  top:${isOpened ? '5%' : '-1000px'};
  left: 0;
  right: 0;
  margin: auto;

  transition: 0.3s ease;
`,
);

export const ModalBackground = styled.button`
  width: calc(100% - 1.5rem);
  height: calc(100% - 1.5rem);
  position: fixed;
  top: 0;
  left: 0;

  border: none;
  background-color: transparent;
`;

export const ContactFormWrapper = styled.div`
  min-height: 1000px;
`;
