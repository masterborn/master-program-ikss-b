export const inputsInitialState = {
  firstName: '',
  lastName: '',
  email: '',
  title: '',
  content: '',
  hasAgreedToTerms: false,
  _gotcha: '',
};

export const inputsValidationInitialState = {
  firstName: { isValid: false, isInvalid: false, message: '' },
  lastName: { isValid: false, isInvalid: false, message: '' },
  email: { isValid: false, isInvalid: false, message: '' },
  title: { isValid: false, isInvalid: false, message: '' },
  content: { isValid: false, isInvalid: false, message: '' },
  termsCheckbox: { isValid: false, isInvalid: false, message: '' },
};
