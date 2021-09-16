import React from 'react';
import PropTypes from 'prop-types';
import { LoaderIcon } from '../icons/misc';

import {
  SuccessButton,
  ErrorButton,
  SubmitButton,
  StyledSuccessIcon,
  StyledErrorIcon,
} from './ContactForm.styles';

export default function RenderSubmitButton({ formStatus, FORM_SENDING_STATUS, isMobile }) {
  switch (formStatus) {
    case FORM_SENDING_STATUS.success:
      return (
        <SuccessButton>
          <StyledSuccessIcon />
          Wiadomość wysłano!{!isMobile && ' Odpowiemy wkrótce.'}
        </SuccessButton>
      );
    case FORM_SENDING_STATUS.error:
      return (
        <ErrorButton>
          <StyledErrorIcon />
          Coś poszło nie tak.{!isMobile && ' Spróbuj jeszcze raz.'}
        </ErrorButton>
      );
    case FORM_SENDING_STATUS.loading:
      return (
        <SubmitButton large={!isMobile}>
          <LoaderIcon intervalDuration={200} />
        </SubmitButton>
      );
    default:
      return <SubmitButton large={!isMobile}>Wyślij wiadomość</SubmitButton>;
  }
}

RenderSubmitButton.propTypes = {
  formStatus: PropTypes.string.isRequired,
  FORM_SENDING_STATUS: PropTypes.shape({
    success: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.string,
  }).isRequired,
  isMobile: PropTypes.bool.isRequired,
};
