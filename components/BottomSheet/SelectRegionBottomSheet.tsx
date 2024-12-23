import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import BottomSheet from "./BottomSheet";
import RegionSelectionTable1 from "@/app/(1Home)/home/components/RegionSelectionTable";
import SelectedChips from "./SelectedChips";
import { SelectedData } from "@/app/(1Home)/home/equipment-search/page";
import { LocationIcon } from "../icons";
import { CustomButton } from "../button/Button";

type Row = {
  id: number;
  location: string;
  items: Item[];
};
type Item = {
  label: string;
  selected: boolean;
};

interface SelectRegionBottomSheetProps1 {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  topNav?: string;
  selectedData: SelectedData[];
  setSelectedData: Dispatch<SetStateAction<SelectedData[]>>;
  data: Row[];
  isLocation?: boolean;
}

export const SelectRegionBottomSheet1: React.FC<
  SelectRegionBottomSheetProps1
> = ({
  isOpen,
  setIsOpen,
  topNav,
  selectedData,
  setSelectedData,
  data,
  isLocation = false,
}) => {
  const initializeRowData = () => {
    // Create a Set for quick lookups
    const selectedSet = new Set(
      selectedData.map((s) => `${s.location}-${s.detail}`)
    );

    // Map over the data and update the selected property
    return data.map((group) => ({
      ...group,
      items: group.items.map((item) => ({
        ...item,
        selected: selectedSet.has(`${group.location}-${item.label}`),
      })),
    }));
  };

  const [rowData, setRowData] = useState(initializeRowData());
  const generateRandomId = (() => {
    let counter = 0; // Counter to ensure uniqueness
    return function generateRandomId() {
      counter += 1;
      const now = Date.now().toString(36); // Base-36 timestamp
      const random = Math.random().toString(36).substr(2, 8); // Larger random string
      return `${now}-${random}-${counter}`;
    };
  })();
  const selectedItems = rowData.flatMap((row) =>
    row.items
      .filter((item) => item.selected)
      .map((item) => ({
        id: generateRandomId(), // Unique ID using a random string
        rowName: row.location,
        label: item.label,
      }))
  );

  const toggleSelect = (rowName: string, label: string) => {
    // Update only rowData
    setRowData((prevData) =>
      prevData.map((row) =>
        row.location === rowName
          ? {
              ...row,
              items: row.items.map((item) =>
                item.label === label
                  ? { ...item, selected: !item.selected }
                  : item
              ),
            }
          : row
      )
    );
  };

  // Use a side effect to compute and update selectedData
  useEffect(() => {
    setSelectedData(() => {
      const updatedSelectedData: SelectedData[] = rowData.flatMap((row) =>
        row.items
          .filter((item) => item.selected)
          .map((item) => ({
            id: generateRandomId(),
            location: row.location,
            detail: item.label,
          }))
      );
      return updatedSelectedData;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowData]);

  return (
    <BottomSheet
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      topNav={topNav}
      horizontalPadding="px-[0px]"
      topPadding="pt-[30px]"
    >
      <div className="max-h-[calc(93vh-64px)] overflow-y-auto scrollbar-hide overflow-x-hidden">
        {isLocation && (
          <div className="flex items-center justify-center z-50 -mx-4 py-4 border-b font-PretendardBold  border-grey-border bg-grey-light">
            <LocationIcon fillColor="#429FFF" />
            <button className="text-main-light-color pl-[10px]">
              현재위치로 설정
            </button>
          </div>
        )}
        <RegionSelectionTable1 rowData={rowData} toggleSelect={toggleSelect} />
        <SelectedChips
          selectedItems={selectedItems}
          removeChip={toggleSelect}
        />
        <div className="flex justify-between  mb-[40px] !pt-[12px] gap-[16px] px-4 border-t border-grey-border bg-white font-PretendardBold">
          <div className="max-w-[76px]">
            <CustomButton
              backgroundColor="bg-white border-1 border-main-color"
              label="초기화"
              textStyle=" text-main-color text-[16px] font-PretendardBold"
              height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
              onPress={() => {
                setRowData((prevData) =>
                  prevData.map((row) => ({
                    ...row,
                    items: row.items.map((item) => ({
                      ...item,
                      selected: false,
                    })),
                  }))
                );
              }}
            />
          </div>
          <CustomButton
            backgroundColor="bg-main-color"
            label="적용하기"
            textStyle=" text-white text-[16px] font-PretendardBold"
            height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
            onPress={() => {
              setIsOpen(false);
            }}
          />
        </div>
      </div>
    </BottomSheet>
  );
};
