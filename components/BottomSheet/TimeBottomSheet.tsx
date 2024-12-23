"use client";

import React, { useState } from "react";
import BottomSheet from "./BottomSheet";
import RadioTrailing from "../RadioButton/RadioTrailing";

interface SortingBottomSheetProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  topNav?: string;
}

export const TimeBottomSheet: React.FC<SortingBottomSheetProps> = ({
  isOpen,
  setIsOpen,
  topNav,
}) => {
  const [selected, setSelected] = useState(0);

  const data = [
    { title: "오전 반일" },
    { title: "오후 반일" },
    { title: "일" },
    { title: "개월" },
    { title: "40분" },
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
