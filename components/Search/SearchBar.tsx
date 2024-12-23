import { Input } from "@nextui-org/react";
import React, { useState } from "react";
import { SearchIcon } from "../TopNavigationBar/Icons";

interface CustomTabProps {
  placeholder: string;
  value?: string;
  width: string;
  onClick?: () => void;
}

export default function SearchBar({
  value: initialValue = "",
  placeholder,
  width,
  onClick,
}: CustomTabProps) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="flex w-full bg-grey-light rounded-full overflow-hidden  ">
      <Input
        value={value}
        onChange={handleChange}
        label=""
        labelPlacement="outside"
        placeholder={placeholder}
        endContent={
          <button onClick={onClick} className=" flex">
            <SearchIcon className="!max-w-[18px] !max-h-[18px] pointer-events-none flex-shrink-0" />
          </button>
        }
        classNames={{
          mainWrapper: ` ${
            width ? width : "w-full"
          } rounded-full bg-grey-light`,
          input:
            "placeholder:text-grey-disabled placeholder:text-[13px] placeholder:px-0 placeholder:font-pretendardRegular px-[20px] py-[12px] bg-grey-light mx-0",
          label: "text-grey-font",
          inputWrapper: "border-0 bg-grey-light rounded-[8px] ",
        }}
      />
    </div>
  );
}
