export const TOGGLE_IS_MOBILE = 'isMobile/toggle';

const toggleIsMobile = (isMobile) => ({
  type: TOGGLE_IS_MOBILE,
  payload: isMobile,
});

export default toggleIsMobile;
