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
  Content,
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
  isModal,
  closeModal,
}) {
  const { title, text1: text } = contactFormText;

  const formValues = useSelector((state) => state.contactForm.inputsValues);
  const dispatch = useDispatch();

  const [areInputsInvalid, setAreInputsInvalid] = useState({
    name: false,
    lastName: false,
    email: false,
    content: false,
    termsCheckbox: false,
  });

  const [areInputsValid, setAreInputsValid] = useState({
    name: false,
    lastName: false,
    email: false,
    content: false,
    termsCheckbox: false,
  });

  const resetAreInputsValid = () => {
    setAreInputsValid({
      name: false,
      lastName: false,
      email: false,
      content: false,
      termsCheckbox: false,
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

    setAreInputsInvalid(resources.areInputsInvalid);
    setAreInputsValid(resources.areInputsValid);

    return !Object.values(resources.areInputsInvalid).some((isInvalid) => isInvalid);
  };

  const changeFormStatus = (statusType) => {
    if (statusType === FORM_SENDING_STATUS.success) {
      dispatch(resetInputValues());
      resetAreInputsValid();
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
      <Content>
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
                isInvalid={areInputsInvalid.name}
                isValid={areInputsValid.name}
                withIcon={areInputsInvalid.name}
                disabled={disableInputs}
              />
            </label>
            <label htmlFor="lastName">
              <ParagraphSmall>Nazwisko</ParagraphSmall>
              <NameInput
                name="lastName"
                value={formValues.lastName || ''}
                onChange={handleInputChange}
                placeholder="Wpisz swoje nazwisko"
                isInvalid={areInputsInvalid.lastName}
                isValid={areInputsValid.lastName}
                withIcon={areInputsInvalid.lastName}
                disabled={disableInputs}
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
                isInvalid={areInputsInvalid.email}
                isValid={areInputsValid.email}
                withIcon={areInputsInvalid.email}
                disabled={disableInputs}
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
                isInvalid={areInputsInvalid.content}
                isValid={areInputsValid.content}
                disabled={disableInputs}
              />
            </label>
          </InputRow>

          <InputRow>
            <StyledCheckbox
              name="hasAgreedToTerms"
              onChange={handleInputChange}
              checked={formValues.hasAgreedToTerms}
              isInvalid={areInputsInvalid.termsCheckbox}
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
                    onMouseLeave={() => {
                      toggleShowTooltip(false);
                    }}
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
          {submitButton()}
        </Form>
      </Content>
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
