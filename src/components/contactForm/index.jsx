import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import sendEmail from '@root/clients/formcarry';
import validateInputs from './validation';
import { XIcon, LoaderIcon } from '../icons/misc';
import { Header3 } from '../typography/headers';
import { ParagraphBody, ParagraphSmall } from '../typography/paragraphs';
import WavingHand from './WavingHand';
import {
  ContactFormContainer,
  CloseButton,
  Content,
  TopSection,
  Form,
  Row,
  NameInput,
  EmailInput,
  ContentInput,
  StyledCheckbox,
  StyledRODO,
  StyledRODOLink,
  SubmitButton,
  LoadingButton,
  SuccessButton,
  StyledSuccessIcon,
  ErrorButton,
  StyledErrorIcon,
} from './ContactForm.styles';

const MOCKUP = {
  text1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ut volutpat tincidunt dictumst neque neque molestie parturient.',
};

const STATUS_STATES = {
  changing: 'changing',
  loading: 'loading',
  success: 'success',
  error: 'error',
};

export default function ContactForm({ className, isModal, closeModal }) {
  const [formValues, setFormValues] = useState({
    name: '',
    lastName: '',
    email: '',
    content: '',
    isTermsBoxChecked: false,
  });

  const [areInputsInvalid, setAreInputsInvalid] = useState({
    name: false,
    lastName: false,
    email: false,
    content: false,
    termsCheckbox: false,
  });

  const [formStatus, setFormStatus] = useState('changing');

  const handleNameChange = ({ target: { value } }) => {
    setFormValues((prevState) => ({ ...prevState, name: value }));
  };
  const handleLastNameChange = ({ target: { value } }) => {
    setFormValues((prevState) => ({ ...prevState, lastName: value }));
  };
  const handleEmailChange = ({ target: { value } }) => {
    setFormValues((prevState) => ({ ...prevState, email: value }));
  };
  const handleContentChange = ({ target: { value } }) => {
    setFormValues((prevState) => ({ ...prevState, content: value }));
  };
  const handleTermsCheckboxSelect = ({ target: { checked } }) => {
    setFormValues((prevState) => ({ ...prevState, isTermsBoxChecked: checked }));
  };

  const isFormValid = () => {
    const resources = validateInputs(formValues);

    setAreInputsInvalid(resources);

    return !Object.values(resources).some((isInvalid) => isInvalid);
  };

  const changeFormStatus = (statusType) => setFormStatus(statusType);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      (formStatus === STATUS_STATES.changing || formStatus === STATUS_STATES.error) &&
      isFormValid()
    ) {
      sendEmail(formValues, changeFormStatus, STATUS_STATES);
    } else if (formStatus === STATUS_STATES.success) {
      setFormValues({
        name: '',
        lastName: '',
        email: '',
        content: '',
        isTermsBoxChecked: false,
      });
      setFormStatus(STATUS_STATES.changing);
    }
  };

  const submitButton = () => {
    switch (formStatus) {
      case STATUS_STATES.success:
        return (
          <SuccessButton>
            <StyledSuccessIcon />
            Wiadomość wysłano! Odpowiemy wkrótce.
          </SuccessButton>
        );
      case STATUS_STATES.error:
        return (
          <ErrorButton>
            <StyledErrorIcon />
            Coś poszło nie tak. Spróbuj jeszcze raz.
          </ErrorButton>
        );
      case STATUS_STATES.loading:
        return (
          <LoadingButton isBig>
            <LoaderIcon intervalDuration={200} />
          </LoadingButton>
        );
      default:
        return <SubmitButton isBig>Wyślij wiadomość</SubmitButton>;
    }
  };

  return (
    <ContactFormContainer className={className} id="contact-form" isModal={isModal}>
      <Content>
        {isModal && <CloseButton icon={<XIcon />} onClick={closeModal} />}

        <TopSection>
          <Header3>
            Skontaktuj się z nami <WavingHand />{' '}
          </Header3>
          <ParagraphBody>{MOCKUP.text1}</ParagraphBody>
        </TopSection>

        <Form onSubmit={handleSubmit}>
          <Row spaceBetween>
            <label htmlFor="name">
              <ParagraphSmall>Imię</ParagraphSmall>
              <NameInput
                value={formValues.name || ''}
                onChange={handleNameChange}
                placeholder="Wpisz swoje imię"
                isInvalid={areInputsInvalid.name}
              />
            </label>
            <label htmlFor="lastName">
              <ParagraphSmall>Nazwisko</ParagraphSmall>
              <NameInput
                value={formValues.lastName || ''}
                onChange={handleLastNameChange}
                placeholder="Wpisz swoje nazwisko"
                isInvalid={areInputsInvalid.lastName}
              />
            </label>
          </Row>

          <Row>
            <label htmlFor="email">
              <ParagraphSmall>Adres email</ParagraphSmall>
              <EmailInput
                value={formValues.email || ''}
                onChange={handleEmailChange}
                placeholder="Wpisz swój adres e-mail"
                isInvalid={areInputsInvalid.email}
              />
            </label>
          </Row>

          <Row>
            <label htmlFor="content">
              <ParagraphSmall>Treść</ParagraphSmall>
              <ContentInput
                value={formValues.content || ''}
                onChange={handleContentChange}
                placeholder="O czym chcesz porozmawiać?"
                isInvalid={areInputsInvalid.content}
              />
            </label>
          </Row>

          <Row>
            <StyledCheckbox
              onChange={handleTermsCheckboxSelect}
              checked={formValues.isTermsBoxChecked}
              isInvalid={areInputsInvalid.termsCheckbox}
            />
            <StyledRODO>
              Zapoznałem się z{' '}
              <Link href="/terms" passHref>
                <StyledRODOLink href>
                  informacją o administratorze i przetwarzaniu danych.
                </StyledRODOLink>
              </Link>
            </StyledRODO>
          </Row>

          {submitButton()}
        </Form>
      </Content>
    </ContactFormContainer>
  );
}

ContactForm.propTypes = {
  className: PropTypes.string,
  isModal: PropTypes.bool,
  closeModal: PropTypes.func,
};
ContactForm.defaultProps = {
  className: '',
  isModal: false,
  closeModal: () => {},
};
