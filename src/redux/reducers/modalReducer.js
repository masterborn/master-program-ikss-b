import { TOGGLE_MODAL } from '../actions/modalActions';

const initialState = {
  isModalOpened: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, isModalOpened: action.payload };
    default:
      return state;
  }
};

export default modalReducer;
