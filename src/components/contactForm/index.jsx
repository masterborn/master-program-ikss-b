import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeInputValues,
  resetInputValues,
  changeFormSendingStatus,
} from '@root/redux/actions/contactFormActions';
import sendEmail from '@root/clients/formcarry';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import validateInputs from './validation';
import { XIcon, LoaderIcon } from '../icons/misc';
import { Header3 } from '../typography/headers';
import { ParagraphBody, ParagraphSmall } from '../typography/paragraphs';
import Tooltip from './tooltip';
import {
  ContactFormContainer,
  CloseButton,
  ContactFormContent,
  TopSection,
  Form,
  InputRow,
  NameInput,
  EmailInput,
  ContentInput,
  StyledCheckbox,
  RODOContainer,
  RODO,
  RODOLink,
  SubmitButton,
  LoadingButton,
  SuccessButton,
  StyledSuccessIcon,
  ErrorButton,
  StyledErrorIcon,
} from './ContactForm.styles';

const FORM_SENDING_STATUS = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  error: 'error',
};

export default function ContactForm({
  className,
  contactFormText,
  tooltipText,
  isModal,
  closeModal,
}) {
  const { title, text1: text } = contactFormText;

  const formValues = useSelector((state) => state.contactForm.inputsValues);
  const dispatch = useDispatch();

  const [validatedInputs, setValidatedInputs] = useState({
    name: { isValid: false, isInvalid: false, message: '' },
    lastName: { isValid: false, isInvalid: false, message: '' },
    email: { isValid: false, isInvalid: false, message: '' },
    content: { isValid: false, isInvalid: false, message: '' },
    termsCheckbox: { isInvalid: false },
  });

  const resetValidatedInputs = () => {
    setValidatedInputs({
      name: { isValid: false, isInvalid: false, message: '' },
      lastName: { isValid: false, isInvalid: false, message: '' },
      email: { isValid: false, isInvalid: false, message: '' },
      content: { isValid: false, isInvalid: false, message: '' },
      termsCheckbox: { isValid: false, isInvalid: false, message: '' },
    });
  };

  const formStatus = useSelector((state) => state.contactForm.status);

  useEffect(() => {
    if (formStatus === FORM_SENDING_STATUS.success) {
      dispatch(changeFormSendingStatus(FORM_SENDING_STATUS.initial));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [showTooltip, setShowTooltip] = useState(false);

  const disableInputs = !(
    formStatus === FORM_SENDING_STATUS.initial || formStatus === FORM_SENDING_STATUS.error
  );

  const toggleShowTooltip = (show) => setShowTooltip(show);

  const handleInputChange = ({ target, target: { name } }) => {
    const value = name === 'hasAgreedToTerms' ? target.checked : target.value;

    dispatch(changeInputValues(name, value));
  };

  const isFormValid = () => {
    const resources = validateInputs(formValues);

    setValidatedInputs(resources);

    return !Object.values(resources).some(({ isInvalid }) => isInvalid);
  };

  const changeFormStatus = (statusType) => {
    if (statusType === FORM_SENDING_STATUS.success) {
      dispatch(resetInputValues());
      resetValidatedInputs();
    }
    return dispatch(changeFormSendingStatus(statusType));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      (formStatus === FORM_SENDING_STATUS.initial || formStatus === FORM_SENDING_STATUS.error) &&
      isFormValid()
    ) {
      sendEmail(formValues, changeFormStatus, FORM_SENDING_STATUS);
    } else if (formStatus === FORM_SENDING_STATUS.success) {
      dispatch(changeFormSendingStatus(FORM_SENDING_STATUS.initial));

      if (isModal) {
        closeModal();
      }
    }
  };

  const submitButton = () => {
    switch (formStatus) {
      case FORM_SENDING_STATUS.success:
        return (
          <SuccessButton>
            <StyledSuccessIcon />
            Wiadomość wysłano! Odpowiemy wkrótce.
          </SuccessButton>
        );
      case FORM_SENDING_STATUS.error:
        return (
          <ErrorButton>
            <StyledErrorIcon />
            Coś poszło nie tak. Spróbuj jeszcze raz.
          </ErrorButton>
        );
      case FORM_SENDING_STATUS.loading:
        return (
          <LoadingButton isBig>
            <LoaderIcon intervalDuration={200} />
          </LoadingButton>
        );
      default:
        return <SubmitButton isBig>Wyślij wiadomość</SubmitButton>;
    }
  };

  const Body = convertRichTextToReactComponent(ParagraphBody, text);

  return (
    <ContactFormContainer className={className} id="contact-form" isModal={isModal}>
      <ContactFormContent>
        {isModal && <CloseButton icon={<XIcon />} onClick={closeModal} />}

        <TopSection>
          <Header3>{title}</Header3>
          {Body}
        </TopSection>

        <Form onSubmit={handleSubmit}>
          <InputRow spaceBetween>
            <label htmlFor="name">
              <ParagraphSmall>Imię</ParagraphSmall>
              <NameInput
                name="name"
                value={formValues.name || ''}
                onChange={handleInputChange}
                placeholder="Wpisz swoje imię"
                isInvalid={validatedInputs.name.isInvalid}
                isValid={validatedInputs.name.isValid}
                withIcon={validatedInputs.name.isInvalid}
                disabled={disableInputs}
                errorTooltipText={validatedInputs.name.message}
              />
            </label>
            <label htmlFor="lastName">
              <ParagraphSmall>Nazwisko</ParagraphSmall>
              <NameInput
                name="lastName"
                value={formValues.lastName || ''}
                onChange={handleInputChange}
                placeholder="Wpisz swoje nazwisko"
                isInvalid={validatedInputs.lastName.isInvalid}
                isValid={validatedInputs.lastName.isValid}
                withIcon={validatedInputs.lastName.isInvalid}
                disabled={disableInputs}
                errorTooltipText={validatedInputs.lastName.message}
              />
            </label>
          </InputRow>

          <InputRow>
            <label htmlFor="email">
              <ParagraphSmall>Adres email</ParagraphSmall>
              <EmailInput
                name="email"
                value={formValues.email || ''}
                onChange={handleInputChange}
                placeholder="Wpisz swój adres e-mail"
                isInvalid={validatedInputs.email.isInvalid}
                isValid={validatedInputs.email.isValid}
                withIcon={validatedInputs.email.isInvalid}
                disabled={disableInputs}
                errorTooltipText={validatedInputs.email.message}
              />
            </label>
          </InputRow>

          <InputRow>
            <label htmlFor="content">
              <ParagraphSmall>Treść</ParagraphSmall>
              <ContentInput
                name="content"
                value={formValues.content || ''}
                onChange={handleInputChange}
                placeholder="O czym chcesz porozmawiać?"
                isInvalid={validatedInputs.content.isInvalid}
                isValid={validatedInputs.content.isValid}
                disabled={disableInputs}
                errorTooltipText={validatedInputs.content.message}
              />
            </label>
          </InputRow>

          <InputRow>
            <StyledCheckbox
              name="hasAgreedToTerms"
              onChange={handleInputChange}
              checked={formValues.hasAgreedToTerms}
              isInvalid={validatedInputs.termsCheckbox.isInvalid}
              disabled={disableInputs}
            />
            <RODOContainer>
              <Tooltip tooltipText={tooltipText} show={showTooltip} />
              <RODO>
                Zapoznałem się z{' '}
                <Link href="/terms" passHref>
                  <RODOLink
                    href
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => toggleShowTooltip(true)}
                    onMouseLeave={() => toggleShowTooltip(false)}
                  >
                    informacją o administratorze i przetwarzaniu danych.
                  </RODOLink>
                </Link>
              </RODO>
            </RODOContainer>
          </InputRow>

          {submitButton()}
        </Form>
      </ContactFormContent>
    </ContactFormContainer>
  );
}

ContactForm.propTypes = {
  className: PropTypes.string,
  contactFormText: PropTypes.shape({
    title: PropTypes.string,
    text1: PropTypes.shape({}),
  }).isRequired,
  tooltipText: PropTypes.shape({}).isRequired,
  isModal: PropTypes.bool,
  closeModal: PropTypes.func,
};
ContactForm.defaultProps = {
  className: '',
  isModal: false,
  closeModal: () => {},
};
