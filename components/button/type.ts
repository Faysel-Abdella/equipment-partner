import { ButtonProps } from "@nextui-org/react";

export interface IButton extends ButtonProps {
  label: string;
  disabled?: boolean;
  backgroundColor: string;
  textStyle: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}
