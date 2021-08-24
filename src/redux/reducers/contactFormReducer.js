import {
  CHANGE_INPUT_VALUES,
  RESET_INPUT_VALUES,
  CHANGE_FORM_SENDING_STATUS,
  ADD_FORM_TEXT,
} from '../actions/contactFormActions';

const initialState = {
  inputsValues: {
    name: '',
    lastName: '',
    email: '',
    content: '',
    isTermsBoxChecked: false,
  },
  contactFormText: {
    title: '',
    text1: '',
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
          name: '',
          lastName: '',
          email: '',
          content: '',
          isTermsBoxChecked: false,
        },
      };
    case CHANGE_FORM_SENDING_STATUS:
      return {
        ...state,
        status: action.payload.status,
      };
    case ADD_FORM_TEXT:
      return {
        ...state,
        contactFormText: action.payload.text,
      };
    default:
      return state;
  }
};

export default contactFormReducer;
