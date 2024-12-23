import React, { useState } from "react";
import { CustomCheck } from "@/components/CheckBox/CustomCheckbox";

type Item = {
  label: string;
  selected: boolean;
};

type Row = {
  id: number;
  location: string;
  items: Item[];
};

interface RegionSelectionTableProps {
  rowData: Row[];
  toggleSelect: (rowName: string, label: string) => void;
}

const RegionSelectionTable1: React.FC<RegionSelectionTableProps> = ({
  rowData,
  toggleSelect,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const generateRandomId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  };
  return (
    <div className="flex w-full overflow-y-auto h-[451px] border-b border-grey-border">
      {/* Left Column */}
      <div className="flex flex-col max-w-[131px] !w-[131px] bg-white">
        {rowData.map((row, index) => (
          <button
            key={generateRandomId()}
            className={`cursor-pointer px-[12px] py-[10px] min-h-[50px] !h-[54px] ${
              selectedIndex === index ? "bg-white" : "bg-grey-light"
            }  ${
              index === rowData?.length - 1 ? "" : "border-b"
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            <span
              className={`text-sm ${
                selectedIndex === index
                  ? "text-main-color font-bold"
                  : "text-grey-disabled font-medium"
              }`}
            >
              {row.location}
            </span>
          </button>
        ))}
      </div>

      {/* Divider Line */}
      <div className="w-[1px] h-full bg-grey-border"></div>

      {/* Right Column */}
      <div className="flex flex-col w-full bg-white">
        {rowData[selectedIndex].items.map((item) => (
          <div
            key={generateRandomId()}
            className="flex justify-between items-center !min-h-[54px] mx-4 py-3 border-b border-grey-light"
          >
            <span className="text-sm text-grey-font">{item.label}</span>
            <CustomCheck
              label=""
              isSelected={item.selected}
              onChange={() =>
                toggleSelect(rowData[selectedIndex].location, item.label)
              }
              backgroundColor=""
              height="h-5"
              width="w-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionSelectionTable1;
