"use client";
import { PlusIcon, SendMessageIcon } from "@/components/icons";
import { Input } from "@nextui-org/react";
import React, { useState } from "react";

interface ChatBottomProps {
  onPlusClick: () => void;
  isExtensionVisible: boolean;
  disabled?: boolean;
}

export const ChatBottom: React.FC<ChatBottomProps> = ({
  onPlusClick,
  isExtensionVisible,
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const iconColor = inputValue ? "#404251" : "#ABAFB7";

  return (
    <div
      className={`absolute bottom-0 w-full bg-white max-h-[95px] ${
        !isExtensionVisible
          ? "bottom-0 min-h-[95px] !h-[95px]"
          : "bottom-[200px] xs:bottom-[250px] !h-[65px] min-h-[65px]"
      } !z-40`}
    >
      <div className="flex justify-between h-full items-center gap-x-[12px] text-grey px-[16px]">
        <button onClick={onPlusClick}>
          <PlusIcon
            fillColor={isExtensionVisible ? "#80808E" : "#ABAfb7"}
            className="!w-[16px] !h-[16px]"
          />
        </button>
        <Input
          label=""
          labelPlacement="outside"
          placeholder={disabled ? "입장 대기 중입니다" : ""}
          disabled={disabled}
          value={inputValue}
          onChange={handleInputChange}
          classNames={{
            mainWrapper: `rounded-full data-focus-within:bg-white bg-white w-full !font-pretendardRegular !text-[13px]`,
            base: `data-focus-within:bg-white data-focus:bg-white data-focus:text-[13px] data-focus:font-pretendardRegular text-grey-font !font-pretendardRegular !text-[13px]`,
            input: `px-[5px] py-[12px] mx-0 !text-grey-font placeholder:text-grey-disabled !font-pretendardRegular !text-[13px] !placeholder:font-pretendardRegular !placeholder:text-[13px] !placeholder:text-main-color`,
            label: "!font-pretendardRegular",
            inputWrapper: `${
              disabled
                ? "!bg-grey-light !placeholder:font-pretendardRegular !placeholder:text-[13px]  !placeholder:text-grey-disabled border-[1px] border-grey-border rounded-full w-full shadow-none !font-pretendardRegular !text-[13px] placeholder:text-grey-disabled"
                : "data-focus-within:bg-white data-focus:bg-white !bg-white !text-grey-font border-[1px] border-grey-border rounded-full w-full shadow-none !font-pretendardRegular !text-[13px]"
            }`,
          }}
        />
        <button onClick={onPlusClick} disabled={inputValue === ""}>
          <SendMessageIcon
            fillColor={iconColor}
            className="!w-[22px] !h-[22px]"
          />
        </button>
      </div>
    </div>
  );
};
