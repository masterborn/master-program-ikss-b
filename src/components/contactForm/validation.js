const validateName = (name) => {
  if (!name) return false;

  return true;
};
const validateLastName = (lastName) => {
  if (!lastName) return false;

  return true;
};
const validateEmail = (email) => {
  if (!email) return false;

  return true;
};
const validateContent = (content) => {
  if (!content) return false;

  return true;
};
const validateTermsCheckbox = (hasAgreedToTerms) => hasAgreedToTerms;

const validateInputs = (formValues) => {
  const areInputsInvalid = {};
  const areInputsValid = {};

  areInputsValid.name = validateName(formValues.name);
  areInputsValid.lastName = validateLastName(formValues.lastName);
  areInputsValid.email = validateEmail(formValues.email);
  areInputsValid.content = validateContent(formValues.content);
  areInputsValid.termsCheckbox = validateTermsCheckbox(formValues.hasAgreedToTerms);

  Object.entries(areInputsValid).forEach(([key, value]) => {
    areInputsInvalid[key] = !value;
  });

  return { areInputsInvalid, areInputsValid };
};

export default validateInputs;
