/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputProps, TextAreaProps } from "@nextui-org/input";

export interface IInput extends InputProps {
  label?: string;
  type: string;
  width?: string;
  placeholder: string;
  onValueChange?: (e: any) => void;
}

export interface ITextarea extends TextAreaProps {
  label?: string;
  width?: string;
  height?: string;
  placeholder: string;
  value?: string;
  setValue?: (value: string) => void;
}
