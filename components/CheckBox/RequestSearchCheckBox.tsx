import { ChevronRight } from "@/components/icons";
import { CustomCheck } from "./CustomCheckbox";
interface CustomCheckboxProps {
  id: string;
  label: string;
  onClick?: () => void;
  required?: boolean;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  next?: boolean;
}

export default function RequestSearchCheckBox({
  id,
  label,
  checked,
  onCheckedChange,
  next,
}: CustomCheckboxProps) {
  return (
    <div
      className="flex items-center justify-between cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        onCheckedChange(!checked);
      }}
    >
      <div className="flex items-center gap-x-[10px]">
        <CustomCheck
          label={""}
          isSelected={checked}
          onChange={onCheckedChange}
          backgroundColor={""}
          height="h-[18px]"
          width="w-[18px]"
        />
        <label
          htmlFor={id}
          className="font-pretendardRegular text-gray-600 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </div>
      {next && <ChevronRight className="h-4 w-4 text-gray-400" />}
    </div>
  );
}
