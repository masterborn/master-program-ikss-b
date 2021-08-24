import { CHANGE_INPUT_VALUES, RESET_INPUT_VALUES } from '../actions/contactFormActions';

const initialState = {
  name: '',
  lastName: '',
  email: '',
  content: '',
  isTermsBoxChecked: false,
};

const contactFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUES: {
      const { inputName, value } = action.payload;
      return { ...state, [inputName]: value };
    }
    case RESET_INPUT_VALUES:
      return {
        name: '',
        lastName: '',
        email: '',
        content: '',
        isTermsBoxChecked: false,
      };
    default:
      return state;
  }
};

export default contactFormReducer;
