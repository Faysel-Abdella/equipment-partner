import { Textarea } from "@nextui-org/input";
import React from "react";
import { ITextarea } from "./type";

const CustomTextArea = ({
  label,
  width,
  height,
  placeholder,
  value,
  setValue = () => {},
  ...rest
}: ITextarea) => {
  return (
    <div className={`flex flex-col gap-y-[20px] ${width}`}>
      {label && (
        <label className="text-grey-font text-[16px] font-PretendardBold">
          {label}
        </label>
      )}
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        classNames={{
          mainWrapper: `${width ? width : "w-full"}
            ${
              height ? `${height}` : ""
            } !min-h-[66px] rounded-[8px] border-0 data-focus-within:bg-white`,
          input: `placeholder:text-grey-disabled text-grey-disabled placeholder:text-[13px] text-[13px] group-data-[has-value=true]:text-grey-font
                 !h-[18px] placeholder:px-0 placeholder:font-pretendardRegular font-pretendardRegular bg-white mx-0 ${
                   height ? `${height} !min-h-[66px]` : "!min-h-[111px]"
                 }  `,
          label: "",
          inputWrapper: `border-[1px] border-grey-border data-focus-within:bg-white gap-x-[10px] px-[16px] py-[12px] !bg-white rounded-[8px] 
           ${height ? `${height} !min-h-[66px]` : "!min-h-[111px]"}  `,
        }}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default CustomTextArea;
