"use client";

import React from "react";
import CustomTab from "@/components/Tabs/Tab";
import BottomSheet from "./BottomSheet"; // Ensure BottomSheet is imported
import { EquipmentSection } from "./EquipmentSectionComp";
import { CustomButton } from "../button/Button";

interface EquipmentSearchTabProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  topNav?: string;
}

export const EquipmentSearchTab: React.FC<EquipmentSearchTabProps> = ({
  isOpen,
  setIsOpen,
  // topNav,
}) => {
  const items = [
    {
      title: "굴착기",
      content: <EquipmentSection />,
    },
    {
      title: "지게차",
      content: <div className="text-grey-font p-4"></div>,
    },
    {
      title: "크레인",
      content: <div className="text-grey-font p-4"></div>,
    },
    {
      title: "덤프",
      content: <div className="text-grey-font p-4"></div>,
    },
    {
      title: "로더・불도저",
      content: <div className="text-grey-font p-4"></div>,
    },
  ];

  return (
    <BottomSheet
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      topNav={"장비 선택"}
      horizontalPadding="px-0"
    >
      <div className="h-full overflow-y-scroll scrollbar-hide font-pretendardRegular">
        {/* Tabs */}
        <div className="w-full z-50 cursor-pointer !pb-32">
          <CustomTab
            items={items}
            borderColor="border-grey-font"
            compactTab={true}
            overflowStyle="overflow-auto scrollbar-hide h-[calc(93vh-200px)]"
            overflowStyleHeader="sticky top-[0px] !z-50"
          />
        </div>
      </div>

      {/* Fixed Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 pt-3 bg-white border-t border-grey-border px-4 !h-[106px]">
        <div className="!h-[54px] !min-h-[54px] !max-h-[54px]">
          <CustomButton
            className="w-full rounded-lg bg-main-color text-white !h-[54px] !min-h-[54px] !max-h-[54px]"
            height="!h-[54px] !min-h-[54px] !max-h-[54px]"
            backgroundColor="bg-main-color"
            label="선택"
            textStyle="text-PretendardBold"
            onPress={() => setIsOpen(false)}
          />
        </div>
      </div>
    </BottomSheet>
  );
};
