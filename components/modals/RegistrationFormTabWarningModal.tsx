"use client";
import React from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
type RegistrationFormTabWarningModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function RegistrationFormTabWarningModal({
  isOpen,
  setIsOpen,
}: RegistrationFormTabWarningModalProps) {
  const handlePrimaryButton = () => {
    console.log("Review deleted");
    setIsOpen(false);
  };

  const handleSecondaryButton = () => {
    // console.log('Delete canceled');
    setIsOpen(false);
  };

  return (
    <CustomModal
      isOpen={isOpen}
      content={
        <CustomModalContent
          mainContent={
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-grey-font font-PretendardBold text-[16px] xs:text-[20px] text-center px-4">
                장비를 변경하면 <br />
                <span>작성 내용이 초기화됩니다 모든 내용이 삭제 됩니다</span>
              </h2>
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
