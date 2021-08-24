export const OPEN_MODAL = 'modal/open';
export const CLOSE_MODAL = 'modal/close';

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
