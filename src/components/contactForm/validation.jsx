const validateName = (name) => {
  if (!name) return true;

  return false;
};
const validateLastName = (lastName) => {
  if (!lastName) return true;

  return false;
};
const validateEmail = (email) => {
  if (!email) return true;

  return false;
};
const validateContent = (content) => {
  if (!content) return true;

  return false;
};
const validateTermsCheckbox = (isTermsBoxChecked) => !isTermsBoxChecked;

const validateInputs = (formValues) => {
  const areInputsInvalid = {};

  areInputsInvalid.name = validateName(formValues.name);
  areInputsInvalid.lastName = validateLastName(formValues.lastName);
  areInputsInvalid.email = validateEmail(formValues.email);
  areInputsInvalid.content = validateContent(formValues.content);
  areInputsInvalid.termsCheckbox = validateTermsCheckbox(formValues.isTermsBoxChecked);

  return areInputsInvalid;
};

export default validateInputs;
