import React from 'react';
import PropTypes from 'prop-types';
import { ContactModalContainer, StyledContactForm, ModalBackground } from './ContactModal.styles';

export default function ContactModal({ isOpened, closeModal }) {
  if (!isOpened) return null;
  return (
    <ContactModalContainer>
      <ModalBackground onClick={closeModal} />
      <StyledContactForm isModal closeModal={closeModal} />
    </ContactModalContainer>
  );
}

ContactModal.propTypes = {
  isOpened: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
};

ContactModal.defaultProps = {
  isOpened: false,
};
