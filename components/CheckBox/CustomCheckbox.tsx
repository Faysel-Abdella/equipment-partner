import { ICheckbox } from "./type";
import { CheckIcon } from "../icons";

export const CustomCheck = ({
  backgroundColor,
  isSelected,
  height,
  width,
  onChange,
}: ICheckbox) => {
  return (
    <button
    onClick={(e) => {
      e.stopPropagation();
      onChange(!isSelected);
    }}
      className={`
        cursor-pointer
        flex items-center justify-center
        ${!width ? "w-[15px]" : width}
        ${!height ? "h-[15px]" : height}
         
        rounded-[2px]
        ${isSelected ? "bg-main-color" : "border-[1px] border-text-border"}
      `}
      style={{ backgroundColor: isSelected ? backgroundColor : "transparent" }}
    >
      {isSelected && (
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
