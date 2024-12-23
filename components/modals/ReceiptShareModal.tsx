"use client";
import React, { useState } from "react";
import CustomCheckbox from "../CheckBox/custom-checkbox";
import CustomModal from "./Modal";
import { CustomButton } from "../button/Button";
import { useRouter } from "next/navigation";

type ReceiptShareModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function ReceiptShareModal({ isOpen }: ReceiptShareModalProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const router = useRouter();
  return (
    <CustomModal
      isOpen={isOpen}
      content={
        <div className="flex flex-col bg-white w-full px-[20px] py-[20px] rounded-lg font-pretendardRegular tracking-tighter">
          <h2 className="text-[18px] xs:text-[20px] font-PretendardBold text-grey-font mb-5 text-center">
            발주서 공유
          </h2>

          {/* List of Items */}
          <div className="flex flex-col gap-4 mb-6 text-[13px] xs:text-[16px]">
            {/* Item 1 */}
            <div
              className={`flex flex-col rounded-lg border ${
                selected.includes("item1")
                  ? "border-main-color"
                  : "border-grey-border"
              }  p-4`}
            >
              <CustomCheckbox
                id="item1"
                label={
                  <div className="flex gap-[8px]">
                    <div className="font-PretendardBold">
                      <p>굴착기 미니 017</p>
                    </div>
                    <div className="flex items-start text-grey-font-light">
                      <p>브레이크, 크리샤</p>
                    </div>
                  </div>
                }
                checked={selected.includes("item1")}
                onCheckedChange={() => handleCheckboxChange("item1")}
                next={false}
                size="18"
              />
              <div className="mt-2 text-grey-font-light text-[12px] xs:text-[13px] leading-5 space-y-[4px] px-[28px]">
                <p>2024-12-01 (오후 반입)</p>
                <p>60만원</p>
                <p>임대 (장비+기사)</p>
              </div>
            </div>

            {/* Item 2 */}
            <div
              className={`flex flex-col rounded-lg border ${
                selected.includes("item2")
                  ? "border-main-color"
                  : "border-grey-border"
              } p-4`}
            >
              <CustomCheckbox
                id="item2"
                label={
                  <div className="flex gap-[8px]">
                    <div className="font-PretendardBold">
                      <p>굴착기 미니 017</p>
                    </div>
                    <div className="flex items-start text-grey-font-light">
                      <p>브레이크, 크리샤</p>
                    </div>
                  </div>
                }
                checked={selected.includes("item2")}
                onCheckedChange={() => handleCheckboxChange("item2")}
                size="18"
                next={false}
              />
              <div className="mt-2 text-grey-font-light text-[12px] xs:text-[13px] space-y-[4px] px-[28px] leading-5">
                <p>2024-12-01 (오후 반입)</p>
                <p>60만원</p>
                <p>임대 (장비+기사)</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-[10px]">
            <div className="w-full">
              <CustomButton
                backgroundColor="bg-white border-1 border-main-color"
                label="닫기"
                textStyle=" text-main-color text-[13px] xs:text-[16px] font-PretendardBold"
                height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
                onPress={() => {}}
              />
            </div>
            <div className="w-full">
              <CustomButton
                backgroundColor="bg-main-color"
                label="선택 발송"
                textStyle=" text-white text-[13px] xs:text-[16px] font-PretendardBold"
                height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
                onPress={() => {
                  router.push("/chat/example10");
                }}
              />
            </div>
          </div>
        </div>
      }
    />
  );
}
