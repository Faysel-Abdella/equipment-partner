"use client";
import React from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
import { useRouter } from "next/navigation";
type ContractCompletionModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function ContractCompletionModal({
  isOpen,
  setIsOpen,
}: ContractCompletionModalProps) {
  const router = useRouter();
  const handlePrimaryButton = () => {
    setIsOpen(false);
    router.push("/chat/example8");
  };

  return (
    <CustomModal
      isOpen={isOpen}
      content={
        <CustomModalContent
          mainContent={
            <div className="flex flex-col items-center px-[40px] tracking-tighter font-pretendardRegular">
              <h2 className="text-grey-font font-PretendardBold mb-[8px]">
                계약서 작성이 완료되었습니다
              </h2>

              <p className="text-grey-font-light text-center text-[16px]">
                상대방의 계약서 수락 및 완료 시 최종 완료되며, 7일 이내 계약서
                작성이 이루어지지 않으면 요청은 자동으로 취소됩니다.
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
