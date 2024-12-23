import { ReactNode } from "react";
import { SelectIcon } from "../icons";

interface CustomNavigationSelectProps {
  isOpen?: boolean;
  text: ReactNode;
  OnClick?: () => void;
}

export default function CustomNavigationSelect({ text, OnClick }: CustomNavigationSelectProps) {
  return (
    <button
      className="px-[10px] py-[8px] border-[1px] bg-white border-grey-border rounded-[4px] cursor-pointer z-20"
      onClick={OnClick}
    >
      <div className="flex gap-x-[4px] bg-white items-center">
        <p className="text-[12px] xs:text-[13px] font-pretendardRegular text-grey-font-light">
          {text}
        </p>
        <SelectIcon fillColor="#ABAFB7" className="bg-white" />
      </div>
    </button>
  );
}
