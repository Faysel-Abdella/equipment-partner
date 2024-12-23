"use client";

import React, { useState } from "react";
import BottomSheet from "./BottomSheet";
import RadioTrailing from "../RadioButton/RadioTrailing";

interface SortingBottomSheetProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  topNav?: string;
}

export const WorkLocationBottomSheet: React.FC<SortingBottomSheetProps> = ({
  isOpen,
  setIsOpen,
  topNav,
}) => {
  const [selected, setSelected] = useState(0);

  const data = [
    { title: "서울" },
    { title: "경기" },
    { title: "인천" },
    { title: "대전" },
    { title: "세종" },
    { title: "경기" },
    { title: "충남" },
    { title: "광주" },
    { title: "전남" },
    { title: "충남" },
    { title: "대구" },
    { title: "경북" },
  ];

  const handleItemClick = (index: number) => {
    setSelected(index);
    setIsOpen(false);
  };

  return (
    <BottomSheet isOpen={isOpen} setIsOpen={setIsOpen} topNav={topNav}>
      <div className="w-full h-full mb-5">
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
