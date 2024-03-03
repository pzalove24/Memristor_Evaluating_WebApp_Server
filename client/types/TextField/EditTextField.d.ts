export type TEditTextField = {
  editableRow: any;
  rowData: any;
  fieldData: string;
  subFieldData?: string;
  // editedData: any;
  handleSetEditedData: (value: any) => void;
};

export type TEditFormikListTextField<T> = {
  editableRow: string | null;
  id: string;
  name: string;
  value: unknown;
//   index: number;
  editRowId: string;
  handleChange: (value: any) => void;
};
