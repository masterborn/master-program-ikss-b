import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import contactFormReducer from './contactFormReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  contactForm: contactFormReducer,
});

export default rootReducer;
