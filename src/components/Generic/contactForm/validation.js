import validator from 'validator';

const MAX_NAME_LENGTH = 20;
const MIN_NAME_LENGTH = 3;
const MAX_TITLE_LENGTH = 50;
const MIN_TITLE_LENGTH = 6;
const MAX_CONTENT_LENGTH = 150;
const MIN_CONTENT_LENGTH = 6;

const validateName = (firstName) => {
  if (firstName.length < MIN_NAME_LENGTH)
    return {
      isValid: false,
      isInvalid: true,
      message: `Pole powinno zawierać od ${MIN_NAME_LENGTH} do ${MAX_NAME_LENGTH} znaków.`,
    };
  if (firstName.length > MAX_NAME_LENGTH)
    return {
      isValid: false,
      isInvalid: true,
      message: `Pole powinno zawierać od ${MIN_NAME_LENGTH} do ${MAX_NAME_LENGTH} znaków.`,
    };

  return { isValid: true, isInvalid: false, message: 'ok' };
};
const validateLastName = (lastName) => {
  if (lastName.length < MIN_NAME_LENGTH)
    return {
      isValid: false,
      isInvalid: true,
      message: `Pole powinno zawierać od ${MIN_NAME_LENGTH} do ${MAX_NAME_LENGTH} znaków.`,
    };
  if (lastName.length > MAX_NAME_LENGTH)
    return {
      isValid: false,
      isInvalid: true,
      message: `Pole powinno zawierać od ${MIN_NAME_LENGTH} do ${MAX_NAME_LENGTH} znaków.`,
    };

  return { isValid: true, isInvalid: false, message: 'ok' };
};
const validateEmail = (email) => {
  if (!validator.isEmail(email))
    return { isValid: false, isInvalid: true, message: 'Niepoprawny adres email.' };

  return { isValid: true, isInvalid: false, message: 'ok' };
};
const validateTitle = (title) => {
  if (title.length < MIN_TITLE_LENGTH)
    return {
      isValid: false,
      isInvalid: true,
      message: `Pole powinno zawierać od ${MIN_TITLE_LENGTH} do ${MAX_TITLE_LENGTH} znaków.`,
    };
  if (title.length > MAX_TITLE_LENGTH)
    return {
      isValid: false,
      isInvalid: true,
      message: `Pole powinno zawierać od ${MIN_TITLE_LENGTH} do ${MAX_TITLE_LENGTH} znaków.`,
    };

  return { isValid: true, isInvalid: false, message: 'ok' };
};
const validateContent = (content) => {
  if (content.length < MIN_CONTENT_LENGTH)
    return {
      isValid: false,
      isInvalid: true,
      message: `Pole powinno zawierać od ${MIN_CONTENT_LENGTH} do ${MAX_CONTENT_LENGTH} znaków.`,
    };
  if (content.length > MAX_CONTENT_LENGTH)
    return {
      isValid: false,
      isInvalid: true,
      message: `Pole powinno zawierać od ${MIN_CONTENT_LENGTH} do ${MAX_CONTENT_LENGTH} znaków.`,
    };

  return { isValid: true, isInvalid: false, message: 'ok' };
};

const validateTermsCheckbox = (hasAgreedToTerms) => ({ isInvalid: !hasAgreedToTerms });

const validateInputs = (formValues) => {
  const validatedInputs = {
    firstName: validateName(formValues.firstName),
    lastName: validateLastName(formValues.lastName),
    email: validateEmail(formValues.email),
    title: validateTitle(formValues.title),
    content: validateContent(formValues.content),
    termsCheckbox: validateTermsCheckbox(formValues.hasAgreedToTerms),
  };

  return validatedInputs;
};

export default validateInputs;
