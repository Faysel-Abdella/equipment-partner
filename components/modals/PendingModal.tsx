"use client";
import React from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
import { HeadPhoneIcon } from "../icons";
type PendingModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleClick?: () => void;
};

export default function PendingModal({
  isOpen,
  setIsOpen,
  handleClick,
}: PendingModalProps) {
  const handlePrimaryButton = () => {
    setIsOpen(false);
  };

  return (
    <CustomModal
      isOpen={isOpen}
      content={
        <CustomModalContent
          mainContent={
            <div className="flex flex-col items-center  w-[271] bg-white ">
              <h2 className="text-[20px] pb-[20px] font-PretendardBold text-grey-font text-center">
                승인 대기 중입니다
              </h2>

              <p className="font-PretendardMedium text-[16px] text-grey-font-light text-center  leading-relaxed">
                추가 문의사항이 있는 경우
              </p>
              <p className="font-PretendardMedium text-[16px] text-grey-font-light text-center  leading-relaxed">
                아래 고객센터로 문의를 부탁 드립니다.
              </p>

              <div className="w-full text-[20px]  flex gap-[10px] justify-center items-center text-main-color text-center font-PretendardBold  pt-[20px] rounded ">
                <div className="flex items-center gap-[4px]">
                  <HeadPhoneIcon />
                  <p>고객센터</p>
                </div>
                <div>0000-0000</div>
              </div>
            </div>
          }
          primaryButtonText="돌아가기"
          primaryButtonColor="main-color"
          primaryButtonOnClick={handleClick ? handleClick : handlePrimaryButton}
        />
      }
    />
  );
}
