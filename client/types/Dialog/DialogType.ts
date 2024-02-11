export type TDialogInputCRUD<T> = {
  open: boolean;
  handleClose: () => void;
  setUpData: T;
};

export type TDialogMethodCRUD<T> = {
  open: boolean;
  handleClose: () => void;
  setUpData: T;
};