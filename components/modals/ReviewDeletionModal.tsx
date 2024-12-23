"use client";
import React from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
type ReviewDeletionModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function ReviewDeletionModal({
  isOpen,
  setIsOpen,
}: ReviewDeletionModalProps) {
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
            <div className="flex flex-col items-center">
              <h2 className="text-grey-font font-PretendardBold">
                해당 리뷰를 삭제하시겠습니까?
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
