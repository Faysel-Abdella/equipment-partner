"use client";
import React from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
import Signature from "@/app/(3Chat)/chat/[detail]/components/Signature";
type SignatureModalProps = {
  isOpen: boolean;
  signature: string;
  setIsOpen: (isOpen: boolean) => void;
  setSignature: (signature: string) => void;
};

export default function SignatureModal({
  isOpen,
  setIsOpen,
  signature,
  setSignature,
}: SignatureModalProps) {
  return (
    <CustomModal
      isOpen={isOpen}
      content={
        <CustomModalContent
          mainContent={
            <div className="w-full h-full">
              <div className="mt-[-6px] flex justify-center">
                <span className="font-PretendardBold text-[20px] text-grey-font text-center">
                  서명
                </span>
              </div>
              <div className="mt-[20px] flex justify-end mb-[10px] px-[20px]">
                <span className="font-pretendardRegular text-[16px] text-main-light-color">
                  전체 지우기
                </span>
              </div>
              <Signature signature={signature} setSignature={setSignature} />
            </div>
          }
          primaryButtonText="확인"
          primaryButtonColor={signature == "" ? "grey-disabled" : "main-color"}
          secondaryButtonOnClick={() => {
            setIsOpen(false);
          }}
          secondaryButtonText="취소"
          secondaryButtonColor="grey-light"
          primaryButtonOnClick={() => {
            setIsOpen(false);
          }}
        />
      }
    />
  );
}
