"use client";
import React from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
import { useRouter } from "next/navigation";
type EquipmentConfirmModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function EquipmentConfirmModal({
  isOpen,
  setIsOpen,
}: EquipmentConfirmModalProps) {
  const router = useRouter();
  const handlePrimaryButton = () => {
    setIsOpen(false);
    router.push("/orderdetails/order1");
  };

  const handleSecondaryButton = () => {
    setIsOpen(false);
  };

  return (
    <CustomModal
      isOpen={isOpen}
      content={
        <CustomModalContent
          mainContent={
            <div className="flex flex-col items-center w-[350px] bg-white rounded-lg px-[16px] py-1">
              {/* Title */}
              <div>
                <h2 className="text-[18px] font-PretendardBold text-center text-grey-font mb-[20px] leading-tight">
                  선택하신 장비 (기사님)로 <br />
                  선택하시겠습니까?
                </h2>
              </div>

              {/* Equipment Information */}
              <div className="flex flex-col w-[284px] item-start  bg-grey-light rounded-lg ">
                <h3 className="font-PretendardBold text-[16px] text-grey-font px-[16px] pt-[16px]">
                  아산중기
                </h3>
                <p className="text-[13px] text-grey-font-light pt-[8px] px-[16px] leading-tight font-pretendardRegular">
                  굴착기 06W · 15년 (60세) · 60만원
                </p>
                <p className="text-[13px] text-grey-font-light pb-[16px] px-[16px] pt-[8px] leading-tight font-pretendardRegular">
                  빠르고 깔끔한 작업!
                </p>
              </div>
            </div>
          }
          primaryButtonText="확인"
          primaryButtonColor="main-color"
          primaryButtonOnClick={handlePrimaryButton}
          secondaryButtonText="취소"
          secondaryButtonColor="grey-light"
          secondaryButtonOnClick={handleSecondaryButton}
        />
      }
    />
  );
}
