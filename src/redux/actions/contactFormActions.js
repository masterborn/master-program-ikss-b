export const CHANGE_INPUT_VALUES = 'contactForm/changeInputValues';
export const RESET_INPUT_VALUES = 'contactForm/resetInputValues';

export const changeInputValues = (inputName, value) => ({
  type: CHANGE_INPUT_VALUES,
  payload: {
    inputName,
    value,
  },
});

export const resetInputValues = () => ({
  type: RESET_INPUT_VALUES,
});
