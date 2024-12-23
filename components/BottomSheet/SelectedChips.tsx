import React from "react";
import Chip from "../chip/CustomChip";
import { ChevronRight, CloseIcon } from "../icons";

interface SelectedChipsProps {
  selectedItems: {id: string, rowName: string; label: string }[];
  removeChip: (rowName: string, label: string) => void;
}

const SelectedChips: React.FC<SelectedChipsProps> = ({
  selectedItems,
  removeChip,
}) => {
  return (
    <div className="flex flex-col gap-y-4 py-4 px-4">
      <h3 className="font-PretendardBold text-grey-font text-[14px]">
        선택 지역 <span className="text-main-color">{selectedItems.length}</span>
        <span className="pl-2 text-grey-font-light font-pretendardRegular text-[13px]">
          최대 5개
        </span>
      </h3>
      <div className="flex flex-wrap gap-[10px] text-[13px] leading-[18px]">
        {selectedItems.map(({id, rowName, label }) => (
          <Chip
            key={id}
            
            className="bg-grey-light rounded-full py-[10px] tracking-tighter  flex items-center justify-center"
            iconPosition="trailing"
            icon={
              <CloseIcon
                className="!w-[16px] !h-[16px] cursor-pointer"
                fillColor="#ABAFB7"
                onClick={() => removeChip(rowName, label)}
              />
            }
            content={
              <div className="flex items-center whitespace-nowrap pr-[6px]">
                <span className="text-grey-font">{rowName}</span>
                <ChevronRight
                  strokeColor="#404251"
                  fillColor="#f2f3f5"
                  className="!w-[10px] !h-[10px]"
                />
                <span className="text-grey-font">{label}</span>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedChips;
