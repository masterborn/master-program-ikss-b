export const OPEN_MODAL = 'modal/open';
export const CLOSE_MODAL = 'modal/close';
export const TOGGLE_MODAL = 'modal/toggle';

export const toggleModal = (isToggled) => ({
  type: TOGGLE_MODAL,
  payload: isToggled,
});
