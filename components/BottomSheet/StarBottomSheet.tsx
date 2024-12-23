"use client";

import React, { useState } from "react";
import BottomSheet from "./BottomSheet";
import StarGroup from "./StarGroup";
import RadioTrailing from '../RadioButton/RadioTrailing'; // Import the RadioTrailing component

interface EquipmentBottomSheetProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  topNav?: string;
}

export const StarRatingBottomSheet: React.FC<EquipmentBottomSheetProps> = ({
  isOpen,
  setIsOpen,
  topNav,
}) => {
  const [selected, setSelected] = useState(0);

  const data = [
    { title: "5점", stars: 5 },
    { title: "4점", stars: 4 },
    { title: "3점", stars: 3 },
    { title: "2점", stars: 2 },
    { title: "1점", stars: 1 },
  ];

  const handleItemClick = (index: number) => {
    setSelected(index);
    setIsOpen(false);
  };

  return (
    <BottomSheet isOpen={isOpen} setIsOpen={setIsOpen} topNav={topNav}>
      <div className="w-full h-full bg-white rounded-t-lg ">
        <RadioTrailing
          data={data.map((item) => ({
            title: (
              <div className="flex items-center gap-[10px] font-pretendardRegular">
                {/* Render stars dynamically */}
                <StarGroup activeStars={item.stars} />
                <span className="text-grey-font text-[16px]">{item.title}</span>
              </div>
            ),
          }))}
          selected={selected}
          onClick={handleItemClick}
        />
      </div>
    </BottomSheet>
  );
};