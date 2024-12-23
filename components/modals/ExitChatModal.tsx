"use client";
import React from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
type ExitChatModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function ExitChatModal({
  isOpen,
  setIsOpen,
}: ExitChatModalProps) {
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
            <div className="flex flex-col items-center">
              <h2 className="text-grey-font font-PretendardBold text-[20px]">
                채팅창 나가기
              </h2>

              <p className="text-grey-font-light text-center text-[16px]">
                모든 대화 내용이 삭제 됩니다.
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
