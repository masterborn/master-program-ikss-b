import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { toggleModal } from '@redux/actions/modalActions';
import { ContactModalContainer, StyledContactForm, ModalBackground } from './ContactModal.styles';

export default function ContactModal({ contactFormText, tooltipText }) {
  const isContactModalOpened = useSelector((state) => state.modal.isModalOpened);
  const dispatch = useDispatch();

  const closeContactModal = () => dispatch(toggleModal(false));

  if (!isContactModalOpened) return null;
  return (
    <ContactModalContainer>
      <ModalBackground onClick={closeContactModal} />
      <StyledContactForm
        contactFormText={contactFormText}
        tooltipText={tooltipText}
        isInModal
        closeModal={closeContactModal}
      />
    </ContactModalContainer>
  );
}

ContactModal.propTypes = {
  contactFormText: PropTypes.shape({}).isRequired,
  tooltipText: PropTypes.shape({}).isRequired,
};
