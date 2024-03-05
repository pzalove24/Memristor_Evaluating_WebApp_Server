import React from "react";

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
  type?: React.HTMLInputTypeAttribute;
  name: string;
  value: unknown;
  //   index: number;
  editRowId: string;
  handleChange: (value: any) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: boolean;
  helperText?: React.ReactNode;
};
