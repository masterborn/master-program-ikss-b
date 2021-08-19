import React from 'react';
import PropTypes from 'prop-types';
import { ContacModalContainer, StyledContactForm, ModalBackground } from './ContactModal.styles';

export default function UnstyledContactModal({ isOpened, closeModal }) {
  if (!isOpened) return null;
  return (
    <ContacModalContainer>
      <ModalBackground onClick={closeModal} />
      <StyledContactForm isModal closeModal={closeModal} />
    </ContacModalContainer>
  );
}

UnstyledContactModal.propTypes = {
  isOpened: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
};

UnstyledContactModal.defaultProps = {
  isOpened: false,
};
