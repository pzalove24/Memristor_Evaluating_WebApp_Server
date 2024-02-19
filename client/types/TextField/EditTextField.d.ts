export type TEditTextField = {
    editableRow: any;
    rowData: any;
    fieldData: string;
    subFieldData?: string;
    editedData: any;
    handleSetEditedData: (value: any) => void;
}