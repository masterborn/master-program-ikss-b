import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import contactFormReducer from './contactFormReducer';
import isMobileReducer from './isMobileReducer';
import hideOverflowOnBodyReducer from './hideOverflowOnBodyReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  contactForm: contactFormReducer,
  isMobile: isMobileReducer,
  hideOverflowOnBody: hideOverflowOnBodyReducer,
});

export default rootReducer;
