import { CustomCheck } from "@/components/CheckBox/CustomCheckbox";
import React, { useState } from "react";

type Item = {
  label: string;
  selected: boolean;
};

type Row = {
  id: number;
  name: string;
  items: Item[];
};

const RegionSelectionTable2: React.FC = () => {
  const [rowData] = useState<Row[]>([
    {
      id: 1,
      name: "굴착기",
      items: [
        { label: "전체", selected: true },
        { label: "02LC", selected: false },
        { label: "03W", selected: false },
        { label: "06W", selected: false },
        { label: "10LC", selected: false },
        { label: "기타 대형", selected: false },
      ],
    },
    {
      id: 2,
      name: "지게차",
      items: [
        { label: "전체", selected: true },
        { label: "02LC", selected: false },
        { label: "03W", selected: false },
        { label: "06W", selected: false },
        { label: "10LC", selected: false },
        { label: "기타 대형", selected: false },
      ],
    },
    {
      id: 3,
      name: "크레인",
      items: [
        { label: "전체", selected: true },
        { label: "02LC", selected: false },
        { label: "03W", selected: false },
        { label: "06W", selected: false },
        { label: "10LC", selected: false },
        { label: "기타 대형", selected: false },
      ],
    },
    {
      id: 4,
      name: "불도저, 로더",
      items: [
        { label: "전체", selected: true },
        { label: "02LC", selected: false },
        { label: "03W", selected: false },
        { label: "06W", selected: false },
        { label: "10LC", selected: false },
        { label: "기타 대형", selected: false },
      ],
    },
    {
      id: 5,
      name: "덤프",
      items: [
        { label: "전체", selected: true },
        { label: "02LC", selected: false },
        { label: "03W", selected: false },
        { label: "06W", selected: false },
        { label: "10LC", selected: false },
        { label: "기타 대형", selected: false },
      ],
    },
  ]);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="flex w-full overflow-y-auto pb-[270px]">
      {/* Left Column - Main Names */}
      <div className="flex flex-col max-w-[131px] !w-[131px] !z-50 bg-white">
        {rowData.map((row, index) => (
          <button
            key={row.id}
            className={`cursor-pointer min-w-full px-[16px] py-[16px] min-h-[54px] !h-[54px] w-full ${
              selectedIndex === index ? "bg-white" : "bg-grey-light"
            } border-r-[1px] border-grey-border ${
              index == rowData?.length - 1 ? "" : "border-b-[1px]"
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            <span
              className={`text-[16px] ${
                selectedIndex === index
                  ? "text-main-color font-PretendardBold"
                  : "text-grey-disabled font-pretendardRegular"
              }`}
            >
              {row.name}
            </span>
          </button>
        ))}
      </div>

      {/* Right Column - Items for the selected main name */}
      <div className="flex flex-col w-full !z-50">
        {rowData[selectedIndex].items.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer bg-white flex gap-x-[10px] justify-between min-h-[54px] !h-[54px] w-full ${
              selectedIndex === index ? "" : ""
            } ${index == rowData?.length - 1 ? "" : ""}`}
          >
            <div className="flex flex-col w-full h-full">
              <div className=" flex gap-x-[10px] justify-between px-[16px] py-[16px] !h-full border-l border-grey-border">
                <label key={index} className="flex items-center gap-2 mb-2 text-grey-font font-pretendardRegular text-[16px] ">
                  {item.label}
                </label>
                <div className="!w-[18px] !h-[18px] flex items-center justify-center">
                  <CustomCheck
                    label={""}
                    isSelected={item.selected}
                    onChange={() => {}}
                    backgroundColor={""}
                    height="h-[18px]"
                    width="w-[18px]"
                  />
                </div>
              </div>
              <div className="!h-[1px] bg-grey-border mx-[16px] !mt-[-1px]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionSelectionTable2;
