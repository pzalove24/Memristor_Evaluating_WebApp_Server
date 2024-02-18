export type TCheckBoxAutocompleteProps = {
  label: string;
  placeholder: string;
  options: any[];
  fieldDisplay: string;
  subFieldDisplay?: string;
  onChange?: (newValue: any) => void;
  onInputChange?: (newInput: any) => void;
  limitTag: number;
  value?: any
};
