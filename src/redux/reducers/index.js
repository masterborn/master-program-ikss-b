import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import contactFormReducer from './contactFormReducer';
import isMobileReducer from './isMobileReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  contactForm: contactFormReducer,
  isMobile: isMobileReducer,
});

export default rootReducer;
