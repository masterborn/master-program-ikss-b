import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '@root/redux/actions/modalActions';
import { ContactModalContainer, StyledContactForm, ModalBackground } from './ContactModal.styles';

export default function ContactModal() {
  const isContactModalOpened = useSelector((state) => state.modal.isModalOpened);
  const dispatch = useDispatch();

  const closeContactModal = () => dispatch(closeModal());

  if (!isContactModalOpened) return null;
  return (
    <ContactModalContainer>
      <ModalBackground onClick={closeContactModal} />
      <StyledContactForm isModal closeModal={closeContactModal} />
    </ContactModalContainer>
  );
}
