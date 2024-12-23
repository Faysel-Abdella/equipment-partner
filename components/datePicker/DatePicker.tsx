import { Input } from "@nextui-org/react";
import React from "react";
import { CalenderIcon } from "../icons";
import { IDateInput } from "./type";

const DatePicker = ({
  label,
  width,
  placeholder,
  height = "!h-[44px]",
  ...rest
}: IDateInput) => {
  return (
    <div className={`flex flex-col gap-y-[20px] ${width}`}>
      {label && (
        <label className="text-grey-font text-[16px] font-PretendardBold">
          {label}
        </label>
      )}
      <Input
        startContent={
          <CalenderIcon
            fillColor="black"
            className="!max-w-[18px] !max-h-[18px] pointer-events-none flex-shrink-0 "
          />
        }
        endContent={<></>}
        classNames={{
          mainWrapper: `${
            width ? width : "w-full"
          } ${height} rounded-[8px] border-0 data-focus-within:bg-hite  shadow-none !bg-white`,
          input:
            "shadow-none   !text-grey-font placeholder:!text-grey-disabled placeholder:text-[13px] pl-[10px] !h-[18px]  placeholder:px-0 placeholder:!font-pretendardRegular  bg-white mx-0 ",
          label: "",
          inputWrapper: `${height} shadow-none border-[1px] border-grey-border data-focus-within:bg-hite gap-x-[10px] px-[16px] py-[12px]  !bg-white rounded-[8px]`,
        }}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default DatePicker;
