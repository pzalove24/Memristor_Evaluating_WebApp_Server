export type TEditSelect = {
  editableRow: any;
  options: any[];
  fieldOption: string;
  rowData: any;
  fieldData: string;
  subFieldData?: string;
  editedData: any;
  handleSetEditedData: (value: any) => void;
};

export type TEditFormikListSelect = {
  editableRow: any;
  options: any[];
  fieldOption: string;
  id: string;
  name: string;
  value: any;
  fieldValue?: string;
  // rowData: any;
  // fieldData: string;
  // subFieldData?: string;
  editRowId: string;
  handleChange: (value: any) => void;
};
