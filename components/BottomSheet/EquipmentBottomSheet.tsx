"use client";

import React, { useState } from "react";
import BottomSheet from "./BottomSheet";
import RadioTrailing from "../RadioButton/RadioTrailing";

interface EquipmentBottomSheetProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  topNav?: string;
}

export const EquipmentBottomSheet: React.FC<EquipmentBottomSheetProps> = ({
  isOpen,
  setIsOpen,
  topNav,
}) => {
  const [selected, setSelected] = useState(0);

  const data = [
    { title: "전체" },
    { title: "굴착기" },
    { title: "크레인" },
    { title: "지게차" },
    { title: "백호로더" },
    { title: "롤러" },
    { title: "덤프트럭" },
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
