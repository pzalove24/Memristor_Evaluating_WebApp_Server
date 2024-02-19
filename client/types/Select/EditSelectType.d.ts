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
