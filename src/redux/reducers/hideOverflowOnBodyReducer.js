import { TOGGLE_HIDE_OVERFLOW_ON_BODY } from '../actions/hideOverflowOnBodyActions';

const initialState = false;

const hideOverflowOnBodyReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HIDE_OVERFLOW_ON_BODY:
      return action.payload;
    default:
      return state;
  }
};

export default hideOverflowOnBodyReducer;
