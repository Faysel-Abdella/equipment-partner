"use client";
import React, { useState } from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
import { CustomButton } from "@/components/button/Button";
import TextInput from "../input/Input";
import { ContactHelpIcon } from "../icons";

type SignUpCompleteModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function SignUpCompleteModal({
  isOpen,
  setIsOpen,
}: SignUpCompleteModalProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrimaryButton = () => {
    setIsOpen(false);
  };
  const handleSetSelectedIndex = (index: number) => {
    console.log(index);
    setSelectedIndex(index);
    //must select multiple
  };

  // Button labels
  const buttonLabels = [
    "네이버 검색",
    "당근마켓 검색",
    "유튜브 광고",
    "지면 광고",
    "지인 소개",
    "오프라인 광고",
  ];
  return (
    <CustomModal
      isOpen={isOpen}
      content={
        <CustomModalContent
          mainContent={
            <div className="flex flex-col bg-white w-full px-[36px] h-full text-left rounded-lg font-pretendardRegular leading-tight">
              {/* Title */}
              <h2 className="text-[20px] font-PretendardBold text-center text-grey-font pb-[20px]">
                가입 신청 완료
              </h2>

              {/* Description */}
              <p className="text-[16px] text-grey-font-light leading-tight tracking-[-0.02em] ">
                -신청일 기준 영업일 1~3일 안으로 승인 처리됩니다. <br />
                -기간이 경과한 후에도 완료되지 않은 경우 및 문의 사항이 있는
                경우 고객 센터로 문의를 부탁 드립니다.
              </p>

              {/* Customer Center */}
              <div className="flex items-center gap-[4px] justify-center text-main-color text-[20px] font-PretendardBold py-[20px] border-b border-grey-border mb-[20px]">
                <div className="flex items-center gap-[4px]">
                  <ContactHelpIcon fillColor="#255DF9" />
                  <p>고객센터</p>
                </div>
                <p className="">1555-2838</p>
              </div>

              {/* Subtext */}
              <div className="text-center mb-6 font-PretendardBold">
                <span className="text-grey-font-light text-[16px] font-bold">
                  잠깐!
                </span>
                <p className="text-[16px] text-grey-font-light mt-1">
                  가입하시게 된 경로를 선택해주세요!
                </p>
              </div>

              {/* Buttons Grid */}
              <div className="grid grid-cols-2 gap-3 mb-[8px]  font-pretendardRegular text-[13px]">
                {buttonLabels.map((label, index) => (
                  <CustomButton
                    key={index}
                    className={`border !h-[42px] !max-h-[42px] ${
                      selectedIndex === index
                        ? "border-blue-500"
                        : "border-grey-border"
                    } bg-white text-grey-font-light px-[32px] py-[12px] rounded-[6px]`}
                    label={label}
                    height="h-[40px]"
                    backgroundColor=""
                    textStyle="text-grey-font"
                    onPress={() => handleSetSelectedIndex(index)}
                  />
                ))}
              </div>
              <div className="">
                <TextInput
                  type="text"
                  placeholder="기타 내용을 입력해주세요."
                  height="42px"
                  className="m-0 text-grey-font-light  focus:border-main-color focus:ring-main-color focus:ring-1"
                  onClick={() => handleSetSelectedIndex(-1)}
                />
              </div>
            </div>
          }
          primaryButtonText="확인"
          primaryButtonColor={
            selectedIndex == null ? "[#ABAFB7]" : "main-color"
          }
          primaryButtonOnClick={handlePrimaryButton}
          primaryDisabled={selectedIndex === null}
        />
      }
    />
  );
}
