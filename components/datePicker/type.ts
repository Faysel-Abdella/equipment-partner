import { InputProps } from "@nextui-org/input";

export interface IDateInput extends InputProps {
  label?: string;
  type: string;
  width?: string;
  height?: string;
  placeholder: string;
}
