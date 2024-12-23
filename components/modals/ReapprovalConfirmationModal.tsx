"use client";
import React from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
type ReapprovalConfirmationModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleClick?: () => void;
};

export default function ReapprovalConfirmationModal({
  isOpen,
  setIsOpen,
}: ReapprovalConfirmationModalProps) {
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
                재승인 신청이 완료 되었습니다
              </h2>

              <p className="text-grey-font-light text-center">감사합니다 </p>
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
