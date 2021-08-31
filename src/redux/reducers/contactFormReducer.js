import {
  CHANGE_INPUT_VALUES,
  RESET_INPUT_VALUES,
  CHANGE_FORM_SENDING_STATUS,
} from '../actions/contactFormActions';

const initialState = {
  inputsValues: {
    firstName: '',
    lastName: '',
    email: '',
    title: '',
    content: '',
    hasAgreedToTerms: false,
  },
  status: 'initial',
};

const contactFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUES: {
      const { inputName, value } = action.payload;
      return {
        ...state,
        inputsValues: {
          ...state.inputsValues,
          [inputName]: value,
        },
      };
    }
    case RESET_INPUT_VALUES:
      return {
        ...state,
        inputsValues: {
          firstName: '',
          lastName: '',
          email: '',
          title: '',
          content: '',
          hasAgreedToTerms: false,
        },
      };
    case CHANGE_FORM_SENDING_STATUS:
      return {
        ...state,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default contactFormReducer;
