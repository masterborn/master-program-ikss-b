import { TOGGLE_IS_MOBILE } from '../actions/isMobileActions';

const initialState = false;

const isMobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_MOBILE:
      return action.payload;
    default:
      return state;
  }
};

export default isMobileReducer;
