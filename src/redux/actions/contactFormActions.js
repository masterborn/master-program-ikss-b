export const CHANGE_INPUT_VALUES = 'contactForm/changeInputValues';
export const RESET_INPUT_VALUES = 'contactForm/resetInputValues';
export const CHANGE_FORM_SENDING_STATUS = 'contactForm/changeFormSendingStatus';

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

export const changeFormSendingStatus = (status) => ({
  type: CHANGE_FORM_SENDING_STATUS,
  payload: {
    status,
  },
});
