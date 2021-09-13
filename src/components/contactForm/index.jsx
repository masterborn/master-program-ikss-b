import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeInputValues,
  resetInputValues,
  changeFormSendingStatus,
} from '@root/redux/actions/contactFormActions';
import { sendEmailMockup } from '@root/clients/formcarry';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import { inputsValidationInitialState } from '@root/consts/contactForm';
import validateInputs from './validation';
import { XIcon, LoaderIco../../styles/typography/headerssc';
import { Header3 } from '../typography/headers'../../styles/typography/paragraphs
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
  FullWidthInput,
  ContentInput,
  StyledCheckbox,
  RODOContainer,
  RODO,
  RODOLink,
  SubmitButton,
  SuccessButton,
  StyledSuccessIcon,
  ErrorButton,
  StyledErrorIcon,
  ZIPCode,
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
  isInModal,
  closeModal,
}) {
  const { title, text1: text } = contactFormText;

  const formValues = useSelector((state) => state.contactForm.inputsValues);
  const dispatch = useDispatch();

  const isMobile = useSelector((state) => state.isMobile);

  const [validatedInputs, setValidatedInputs] = useState(inputsValidationInitialState);

  const resetValidatedInputs = () => {
    setValidatedInputs(inputsValidationInitialState);
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
      sendEmailMockup(formValues, changeFormStatus, FORM_SENDING_STATUS);
    } else if (formStatus === FORM_SENDING_STATUS.success) {
      dispatch(changeFormSendingStatus(FORM_SENDING_STATUS.initial));

      if (isInModal) {
        closeModal();
      }
    }
  };

  const renderSubmitButton = () => {
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
  };

  const Body = convertRichTextToReactComponent(ParagraphBody, text);

  return (
    <ContactFormContainer className={className} id="contact-form" isInModal={isInModal}>
      <ContactFormContent isInModal={isInModal}>
        {isInModal && <CloseButton icon={<XIcon />} onClick={closeModal} />}

        <TopSection>
          <Header3>{title}</Header3>
          {Body}
        </TopSection>

        <Form onSubmit={handleSubmit}>
          <InputRow spaceBetween>
            <label htmlFor="firstName">
              <ParagraphSmall>Imię</ParagraphSmall>
              <NameInput
                name="firstName"
                value={formValues.firstName || ''}
                onChange={handleInputChange}
                placeholder="Wpisz swoje imię"
                isInvalid={validatedInputs.firstName.isInvalid}
                isValid={validatedInputs.firstName.isValid}
                withIcon={validatedInputs.firstName.isInvalid}
                disabled={disableInputs}
                errorTooltipText={validatedInputs.firstName.message}
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
              <FullWidthInput
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
            <label htmlFor="title">
              <ParagraphSmall>Temat</ParagraphSmall>
              <FullWidthInput
                name="title"
                value={formValues.title || ''}
                onChange={handleInputChange}
                placeholder="Temat wiadomości"
                isInvalid={validatedInputs.title.isInvalid}
                isValid={validatedInputs.title.isValid}
                withIcon={validatedInputs.title.isInvalid}
                disabled={disableInputs}
                errorTooltipText={validatedInputs.title.message}
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

          <InputRow isTerms>
            <StyledCheckbox
              name="hasAgreedToTerms"
              onChange={handleInputChange}
              checked={formValues.hasAgreedToTerms}
              isInvalid={validatedInputs.termsCheckbox.isInvalid}
              disabled={disableInputs}
            />
            <RODOContainer>
              {!isMobile && <Tooltip tooltipText={tooltipText} show={showTooltip} />}
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
          <ZIPCode
            name="_gotcha"
            // eslint-disable-next-line no-underscore-dangle
            value={formValues._gotcha || ''}
            onChange={handleInputChange}
          />
          {renderSubmitButton()}
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
  isInModal: PropTypes.bool,
  closeModal: PropTypes.func,
};
ContactForm.defaultProps = {
  className: '',
  isInModal: false,
  closeModal: () => {},
};
