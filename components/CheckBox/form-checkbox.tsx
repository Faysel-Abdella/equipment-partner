import { ICheckbox } from "./type";
import { CheckIcon } from "../icons";
import { useState } from "react";

export const FormCheck = ({
  backgroundColor,
  isSelected,
  height,
  width,
  onChange,
}: ICheckbox) => {
  const [isselected, setIsselected] = useState(isSelected);

  const handleToggle = () => {
    const newState = !isselected;
    setIsselected(newState);
    onChange(newState);
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleToggle();
        onChange(!isselected);
      }}
      className={`
        cursor-pointer
        flex items-center justify-center
        ${!width ? "w-[15px]" : width}
        ${!height ? "h-[15px]" : height}
         
        rounded-[2px]
        ${isselected ? "bg-main-color" : "border-[1px] border-text-border"}
      `}
      style={{ backgroundColor: isselected ? backgroundColor : "transparent" }}
    >
      {isselected && (
        <CheckIcon
          className={`${
            width ? "" : "!max-h-[6px] !max-w-[9px]"
          } transition-transform duration-300`}
          fillColor={"#255df9"}
          strokeColor="#fff"
        />
      )}
    </button>
  );
};
