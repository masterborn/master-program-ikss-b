import validator from 'validator';

const MAX_NAME_LENGTH = 20;
const MIN_NAME_LENGTH = 3;
const MAX_CONTENT_LENGTH = 150;
const MIN_CONTENT_LENGTH = 6;

const validateName = (name) => {
  if (name.length < MIN_NAME_LENGTH)
    return { isValid: false, isInvalid: true, message: 'Zbyt krótkie imię.' };
  if (name.length > MAX_NAME_LENGTH)
    return { isValid: false, isInvalid: true, message: 'Zbyt długie imię.' };
  if (!validator.isAlpha(name, 'pl-PL'))
    return { isValid: false, isInvalid: true, message: 'Wprowadzono niedozwolone znaki.' };

  return { isValid: true, isInvalid: false, message: 'ok' };
};
const validateLastName = (lastName) => {
  if (lastName.length < MIN_NAME_LENGTH)
    return { isValid: false, isInvalid: true, message: 'Zbyt krótkie nazwisko.' };
  if (lastName.length > MAX_NAME_LENGTH)
    return { isValid: false, isInvalid: true, message: 'Zbyt długie nazwisko.' };
  if (!validator.isAlpha(lastName, 'pl-PL'))
    return { isValid: false, isInvalid: true, message: 'Wprowadzono niedozwolone znaki.' };

  return { isValid: true, isInvalid: false, message: 'ok' };
};
const validateEmail = (email) => {
  if (!validator.isEmail(email))
    return { isValid: false, isInvalid: true, message: 'Niepoprawny adres email.' };

  return { isValid: true, isInvalid: false, message: 'ok' };
};
const validateContent = (content) => {
  if (content.length < MIN_CONTENT_LENGTH)
    return { isValid: false, isInvalid: true, message: 'Zbyt krótki tekst.' };
  if (content.length > MAX_CONTENT_LENGTH)
    return { isValid: false, isInvalid: true, message: 'Zbyt długi tekst.' };

  return { isValid: true, isInvalid: false, message: 'ok' };
};
const validateTermsCheckbox = (hasAgreedToTerms) => ({ isInvalid: !hasAgreedToTerms });

const validateInputs = (formValues) => {
  const validatedInputs = {};

  validatedInputs.name = validateName(formValues.name);
  validatedInputs.lastName = validateLastName(formValues.lastName);
  validatedInputs.email = validateEmail(formValues.email);
  validatedInputs.content = validateContent(formValues.content);
  validatedInputs.termsCheckbox = validateTermsCheckbox(formValues.hasAgreedToTerms);

  return validatedInputs;
};

export default validateInputs;
