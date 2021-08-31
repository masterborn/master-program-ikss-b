export const TOGGLE_HIDE_OVERFLOW_ON_BODY = 'hideOverflowOnBody/toggle';

const hideOverflowOnBody = (isHidden) => ({
  type: TOGGLE_HIDE_OVERFLOW_ON_BODY,
  payload: isHidden,
});

export default hideOverflowOnBody;
