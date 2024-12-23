"use client";

import React, { useState } from "react";
import BottomSheet from "./BottomSheet";
import RadioTrailing from "../RadioButton/RadioTrailing";

interface SortingBottomSheetProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  topNav?: string;
}

export const SortMenuBottomSheet: React.FC<SortingBottomSheetProps> = ({
  isOpen,
  setIsOpen,
  topNav,
}) => {
  const [selected, setSelected] = useState(0);

  const data = [
    { title: "추천순" },
    { title: "최근순" },
  ];

  const handleItemClick = (index: number) => {
    setSelected(index);
    setIsOpen(false);
  };

  return (
    <BottomSheet isOpen={isOpen} setIsOpen={setIsOpen} topNav={topNav}>
      <div className="w-full h-full">
        <RadioTrailing
          data={data}
          selected={selected}
          onClick={handleItemClick}
          isBottomBorder={false}
        />
      </div>
    </BottomSheet>
  );
};
