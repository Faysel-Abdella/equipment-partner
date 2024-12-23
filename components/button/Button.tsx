import { Button } from "@nextui-org/react";
import { IButton } from "./type";

export const CustomButton = ({
  label,
  height,
  disabled = false,
  backgroundColor,
  textStyle,
  width,
  borderRadius = "!rounded-[8px]",
  ...rest
}: IButton) => {
  return (
    <Button
      disabled={disabled}
      className={` shadow-none ${borderRadius} ${
        height ? height + "py-[12px] px-[14px]" : "py-[12px] px-[14px]"
      } ${width ? width : "w-full"} ${
        disabled ? "bg-[#ABAFB7]" : backgroundColor
      } ${textStyle}`}
      {...rest}
    >
      {label}
    </Button>
  );
};
