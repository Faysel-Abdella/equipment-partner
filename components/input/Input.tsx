import { Input } from "@nextui-org/input";
import React, { useState } from "react";
import { IInput } from "./type";

const TextInput = ({
  label,
  type,
  width,
  placeholder,
  height = "!h-[42px] !min-h-[42px]",
  disabled = false,
  value: initialValue = "", // Set a default initial value
  onValueChange,
  ...rest
}: IInput) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onValueChange) {
      onValueChange(e);
    }
  };
  return (
    <div className={`flex flex-col gap-y-[20px] ${width}`}>
      {label && (
        <label className="text-grey-font text-[16px] font-PretendardBold">
          {label}
        </label>
      )}
      <Input
        classNames={{
          mainWrapper: `${width ? width : "!w-full"} ${height ? height : ""}`, //max-w-[400px]
          input:
            "shadow-none placeholder:font-pretendardRegular placeholder:text-grey-disabled !text-grey-font placeholder:text-[13px] group-data-[has-value=true]:text-grey-font px-[0px] py-[12px]",
          label: "",
          inputWrapper: `shadow-none border-[1px] border-grey-border ${
            height ? height : ""
          } ${
            disabled
              ? "data-focus-within:bg-grey-light bg-grey-light "
              : "data-focus-within:bg-white bg-white "
          } rounded-[8px]`,
        }}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
