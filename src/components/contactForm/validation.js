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
      message: 'Zbyt krótkie imię. Powinno zawierać od 3 do 20 znaków.',
    };
  if (firstName.length > MAX_NAME_LENGTH)
    return {
      isValid: false,
      isInvalid: true,
      message: 'Zbyt długie imię. Powinno zawierać od 3 do 20 znaków.',
    };

  return { isValid: true, isInvalid: false, message: 'ok' };
};
const validateLastName = (lastName) => {
  if (lastName.length < MIN_NAME_LENGTH)
    return {
      isValid: false,
      isInvalid: true,
      message: 'Zbyt krótkie nazwisko. Powinno zawierać od 3 do 20 znaków.',
    };
  if (lastName.length > MAX_NAME_LENGTH)
    return {
      isValid: false,
      isInvalid: true,
      message: 'Zbyt długie nazwisko. Powinno zawierać od 3 do 20 znaków.',
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
      message: 'Zbyt krótki tytuł. Powinno zawierać od 6 do 50 znaków.',
    };
  if (title.length > MAX_TITLE_LENGTH)
    return {
      isValid: false,
      isInvalid: true,
      message: 'Zbyt długi tytuł. Powinno zawierać od 6 do 50 znaków.',
    };

  return { isValid: true, isInvalid: false, message: 'ok' };
};
const validateContent = (content) => {
  if (content.length < MIN_CONTENT_LENGTH)
    return {
      isValid: false,
      isInvalid: true,
      message: 'Zbyt krótki tekst. Powinno zawierać od 6 do 150 znaków.',
    };
  if (content.length > MAX_CONTENT_LENGTH)
    return {
      isValid: false,
      isInvalid: true,
      message: 'Zbyt długi tekst. Powinno zawierać od 6 do 150 znaków.',
    };

  return { isValid: true, isInvalid: false, message: 'ok' };
};
const validateTermsCheckbox = (hasAgreedToTerms) => ({ isInvalid: !hasAgreedToTerms });

const validateInputs = (formValues) => {
  const validatedInputs = {};

  validatedInputs.firstName = validateName(formValues.firstName);
  validatedInputs.lastName = validateLastName(formValues.lastName);
  validatedInputs.email = validateEmail(formValues.email);
  validatedInputs.title = validateTitle(formValues.title);
  validatedInputs.content = validateContent(formValues.content);
  validatedInputs.termsCheckbox = validateTermsCheckbox(formValues.hasAgreedToTerms);

  return validatedInputs;
};

export default validateInputs;
