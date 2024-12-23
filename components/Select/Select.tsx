import React, { useState } from "react";
import { ISelect } from "./type";
import { Select, SelectItem } from "@nextui-org/react";
import { SelectorIcon } from "../icons";
import CustomTextArea from "../input/TextArea";

const CustomSelect = ({
  label,
  width,
  placeholder,
  items,
  height = "!h-[44px]",
  horizontalPadding = "px-[16px] py-[12px]",
  iconStyle = "end-[16px] w-[18px] h-[18px] ",
  borderRadius = "rounded-[8px]",
  onItemSelect,
  onPresstoNavigate,
}: ISelect) => {
  const [selectedValue, setSelectedValue] = useState<string>(placeholder || "");
  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    if (onItemSelect) {
      onItemSelect(value);
    }
  };
  const handleClick = () => {
    if (onPresstoNavigate) {
      onPresstoNavigate();
    }
  };
  return (
    <div className={`flex flex-col gap-y-[20px] ${width}`}>
      {label && (
        <label className="text-grey-font text-[16px] font-PretendardBold">
          {label}
        </label>
      )}
      <Select
        value={selectedValue}
        onChange={(e) => handleSelectChange(e.target.value)}
        onClick={handleClick}
        classNames={{
          base: `${
            width ? width : "w-full"
          }  ${borderRadius} border-0 !bg-white ${height} `,
          trigger: `${
            width ? width : "w-full"
          } !bg-white  ${horizontalPadding} border-[1px] border-grey-border shadow-none ${borderRadius} ${height}`,
          innerWrapper: `!bg-white`,
          mainWrapper: ` ${height}`,
          popoverContent: `${
            !!onPresstoNavigate
              ? "hidden"
              : "!bg-white w-full shadow-none p-0 border-[1px] border-grey-border "
          } ${borderRadius}`,
          listbox:
            "!bg-white text-[13px] font-pretendardRegular text-grey-font-light ",
          listboxWrapper: "!bg-white",
          value: `w-full bg-white text-[13px] font-pretendardRegular text-grey-font-light group-data-[has-value=true]:text-grey-font !h-[18px] shadow-none text-grey-disabled placeholder:text-[13px] placeholder:px-0 placeholder:font-pretendardRegular`,
          selectorIcon: `absolute ${iconStyle}  transition-transform duration-150 ease motion-reduce:transition-none data-[open=true]:rotate-180`,
          //   : `placeholder:text-grey-disabled placeholder:text-[13px] !h-[18px] placeholder:px-0 placeholder:font-pretendardRegular bg-white !h-[px] `,
        }}
        placeholder={placeholder}
        label=""
        className="bg-white"
        selectorIcon={
          <SelectorIcon
            className="!max-h-[7px] !max-w-[12px] text-grey-font-light !z-30 relative"
            fillColor="#abafb9"
          />
        }
      >
        {items.map((animal) => (
          <SelectItem key={animal.key} className="">
            {animal.label}
          </SelectItem>
        ))}
      </Select>

      {selectedValue === "기타" && (
        <div className="w-full !h-[66px] overflow-hidden">
          <CustomTextArea placeholder={"직접 입력 "} height="!h-[66px]" />
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
