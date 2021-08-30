import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleModal } from '@root/redux/actions/modalActions';
import StyledCtaButton from './ctaButton.styles';

export default function CtaButton({ buttonCaption }) {
  const dispatch = useDispatch();
  const openContactModal = (modalState) => dispatch(toggleModal(modalState));

  return (
    <StyledCtaButton onClick={openContactModal} isBig>
      {buttonCaption}
    </StyledCtaButton>
  );
}

CtaButton.propTypes = {
  buttonCaption: PropTypes.string.isRequired,
};
