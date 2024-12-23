"use client";
import React from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
type InquiryRegistrationModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function InquiryRegistrationModal({
  isOpen,
  setIsOpen,
}: InquiryRegistrationModalProps) {
  const handlePrimaryButton = () => {
    setIsOpen(false);
  };

  return (
    <CustomModal
      isOpen={isOpen}
      content={
        <CustomModalContent
          mainContent={
            <div className="flex flex-col items-center">
              <h2 className="text-grey-font font-PretendardBold mb-[8px]">
                문의 등록 완료
              </h2>
              <p className="text-grey-font-light text-center">
                문의사항이 정상적으로 등록되었습니다.
              </p>
            </div>
          }
          primaryButtonText="확인"
          primaryButtonColor="main-color"
          primaryButtonOnClick={handlePrimaryButton}
        />
      }
    />
  );
}
