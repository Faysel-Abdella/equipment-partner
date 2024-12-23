"use client";

import React, { useState } from "react";
import BottomSheet from "./BottomSheet";
import { CloseIcon, RadioIcon } from "../icons";
import { CustomButton } from "../button/Button";

interface LoadBottomSheetProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  topNav?: string;
}

interface Item {
  name: string;
  type: string;
  date: string;
  price: string;
  rentalType: string;
}

export const LoadBottomSheet: React.FC<LoadBottomSheetProps> = ({
  isOpen,
  setIsOpen,
  topNav,
}) => {
  const [selected, setSelected] = useState(0);
  // const router = useRouter();

  const items: Item[] = [
    {
      type: "브레이크, 크리샤",
      name: "굴착기 미니 017",
      date: "2024-12-01 (오후 반입)",
      price: "60만원",
      rentalType: "임대 (장비+기사)",
    },
    {
      type: "브레이크, 크리샤",
      name: "굴착기 미니 017",
      date: "2024-12-01 (오후 반입)",
      price: "60만원",
      rentalType: "임대 (장비+기사)",
    },
    {
      type: "브레이크, 크리샤",
      name: "굴착기 미니 017",
      date: "2024-12-01 (오후 반입)",
      price: "60만원",
      rentalType: "임대 (장비+기사)",
    },
    {
      type: "브레이크, 크리샤",
      name: "굴착기 미니 017",
      date: "2024-12-01 (오후 반입)",
      price: "60만원",
      rentalType: "임대 (장비+기사)",
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
      topNav={topNav}
      topPadding=""
      horizontalPadding=""
    >
      <div className="w-full h-full relative scrollbar-hide ">
        <div
          className={`!z-50  bg-white w-full mx-auto !h-[64px] py-5 px-4 flex justify-center border-b-[1px] border-grey-border rounded-t-[12px]`}
        >
          <div className="relative !h-[34px] !px-[16px] !w-full flex items-center">
            {/* Middle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-center text-[16px] text-grey-font font-PretendardBold flex items-center justify-center">
              불러오기
            </div>

            {/* Trailing */}
            <div className="flex-1 flex justify-end items-center">
              <button
                className=""
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <CloseIcon
                  className="min-w-[24px] min-h-[24px]"
                  fillColor="#404251"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full scrollbar-hide !overflow-y-auto px-4">
          <h4 className="!h-5 pl-8  px-4 font-pretendardRegular text-grey-font-light text-[13px]">
            직접 입력
          </h4>
          <div className="flex flex-col gap-y-5">
            {items.map((item, index) => (
              <button
                key={index}
                className={`flex  border-[1px] rounded-[12px] px-4 py-4 gap-x-[10px] ${
                  selected === index
                    ? "border-main-color"
                    : "border-grey-border"
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
                    <span className="font-pretendardRegular text-grey-font-light text-[13px]">
                      {item.type}
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-1 items-start font-pretendardRegular text-grey-font-light text-[13px]">
                    <p>{item.date}</p>
                    <p>{item.price}</p>
                    <p>{item.rentalType}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 pt-[12px] pb-[40px] w-full border-t-[1px] border-grey-light bg-white">
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
