"use client";
import React from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
import { useRouter } from "next/navigation";

type WithdrawalCompleationModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function WithdrawalCompleationModal({
  isOpen,
  setIsOpen,
}: WithdrawalCompleationModalProps) {
  const handlePrimaryButton = () => {
    setIsOpen(false);
    router.push("/myInformation");
  };
  const router = useRouter();
  return (
    <CustomModal
      isOpen={isOpen}
      content={
        <CustomModalContent
          mainContent={
            <div className="flex flex-col items-center">
              <h2 className="text-grey-font font-PretendardBold">
                탈퇴가 완료되었습니다
              </h2>
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
