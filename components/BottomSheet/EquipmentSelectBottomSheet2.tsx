"use client";

import React, { useState } from "react";
import BottomSheet from "./BottomSheet";
import { RadioIcon } from "../icons";
import { CustomButton } from "../button/Button";

interface EquipmentSelectBottomSheet2Props {
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

export const EquipmentSelectBottomSheet2: React.FC<
  EquipmentSelectBottomSheet2Props
> = ({ isOpen, setIsOpen }) => {
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
      topNav={"불러오기"}
      horizontalPadding="px-0"
    >
      <div className="w-full h-full relative scrollbar-hide overflow-hidden mt-5">
        {/* <h4 className="!h-5 pl-8  px-4 font-pretendardRegular text-grey-font-light text-[13px]">
            직접 입력
          </h4> */}
        <div className="flex flex-col gap-y-5  px-4  overflow-y-scroll scrollbar-hide overflow-auto max-h-[calc(93vh-78px)] !pb-[54px]">
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
          <div className="!h-[110px]"></div>
        </div>
        <div className="absolute bottom-0 pb-4 w-full border-t border-grey-border bg-white px-4 pt-3">
          <CustomButton
            label={"선택"}
            backgroundColor={"bg-main-color"}
            textStyle={"font-PretendardBold text-white text-[16px]"}
            height="!h-[54px] !min-h-[54px]"
            />
        </div>
      </div>
    </BottomSheet>
  );
};
