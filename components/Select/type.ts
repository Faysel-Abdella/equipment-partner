import { Dispatch, SetStateAction } from "react";

export interface ISelect {
  label?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  items: { key: string; label: string }[];
  onItemSelect?: Dispatch<SetStateAction<string>>;
  horizontalPadding?: string;
  iconStyle?: string;
  onPresstoNavigate?: () => void;
  borderRadius?: string;
}
