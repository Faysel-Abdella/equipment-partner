export interface ICheckbox {
  label?: string;
  isSelected?: boolean;
  onChange: (checked: boolean) => void;
  backgroundColor: string;
  height?: string;
  width?: string;
  
}
