"use client";
import React from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
type ConfirmationModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function ConfirmationModal({
  isOpen,
  setIsOpen,
}: ConfirmationModalProps) {
  const handlePrimaryButton = () => {
    setIsOpen(false);
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
            <div className="flex flex-col items-center px-[45.5px] py-[4px]">
              <h2 className="text-grey-font font-PretendardBold text-[20px] pb-[8px]">전화하기</h2>
              <p className="text-grey-font-light text-center text-[16px]">
                통화가 이루어지면 작업이 성사되지 않아도 환급 되지 않습니다.
              </p>
            </div>
          }
          primaryButtonText="삭제"
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
