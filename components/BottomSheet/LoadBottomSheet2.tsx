"use client";

import React, { useState } from "react";
import BottomSheet from "./BottomSheet";
import { RadioIcon } from "../icons";
import { CustomButton } from "../button/Button";

interface LoadBottomSheet2Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  topNav?: string;
}

interface Item {
  name: string;
  price: string;
  rentalType: string;
}

export const LoadBottomSheet2: React.FC<LoadBottomSheet2Props> = ({
  isOpen,
  setIsOpen,
  // topNav,
}) => {
  const [selected, setSelected] = useState(0);

  const items: Item[] = [
    {
      name: "작업명 텍스트",
      price: "서울특별시 금천구 가산디지털로12",
      rentalType: "굴착기 미니 017 (브레이크, 크리샤)",
    },
    {
      name: "작업명 텍스트",
      price: "서울특별시 금천구 가산디지털로12",
      rentalType: "굴착기 미니 017 (브레이크, 크리샤)",
    },
    {
      name: "작업명 텍스트",
      price: "서울특별시 금천구 가산디지털로12",
      rentalType: "굴착기 미니 017 (브레이크, 크리샤)",
    },
    {
      name: "작업명 텍스트",
      price: "서울특별시 금천구 가산디지털로12",
      rentalType: "굴착기 미니 017 (브레이크, 크리샤)",
    },
  ];

  const handleItemClick = (index: number) => {
    setSelected(index);
    // setIsOpen(false);
  };

  return (
    <BottomSheet
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      topNav={"불러오기"}
      horizontalPadding="px-0"
    >
      <div className="w-full h-full relative mt-5 overflow-hidden">
        <div className="flex flex-col gap-y-5 h-full  px-4  max-h-[80vh] overflow-y-scroll scrollbar-hide">
          {items.map((item, index) => (
            <button
              key={index}
              className={`flex  border-[1px] rounded-[12px] px-4 py-4 gap-x-[10px] ${
                selected === index ? "border-main-color" : "border-grey-border"
              }`}
              onClick={() => handleItemClick(index)}
            >
              <div
                className={`!w-[22px] !h-[22px] ${
                  selected === index
                    ? ""
                    : "rounded-full border-[1px] border-grey-border"
                } `}
              >
                <RadioIcon
                  fillColor={selected === index ? "#255df9" : "#fff"}
                />
              </div>

              <div className="flex flex-col items-start gap-y-2">
                <div className="flex gap-x-2 items-center">
                  <span className="font-PretendardBold text-grey-font text-[16px]">
                    {item.name}
                  </span>
                </div>
                <div className="flex flex-col gap-y-1 items-start font-pretendardRegular text-grey-font-light text-[13px]">
                  <p>{item.price}</p>
                  <p>{item.rentalType}</p>
                </div>
              </div>
            </button>
          ))}
          <div className="!h-[110px]"></div>
        </div>

        <div className="absolute bottom-4 w-full border-t border-grey-border bg-white px-4 pt-3">
          <CustomButton
            label={"선택"}
            backgroundColor={"bg-main-color"}
            textStyle={"font-PretendardBold text-white text-[16px]"}
          />
        </div>
      </div>
    </BottomSheet>
  );
};
