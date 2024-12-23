"use client";
import React from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
type RegistrationInfoModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function RegistrationInfoModal({
  isOpen,
  setIsOpen,
}: RegistrationInfoModalProps) {
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
            <div className="flex flex-col bg-white w-full text-left">
              <h2 className="text-[18px] font-PretendardBold text-grey-font mb-[20px] text-center">
                등록 정보
              </h2>

              <div className="text-grey-font-light text-[14px] mx-[36px] leading-6">
                <div className="flex justify-between mb-1">
                  <span className="font-PretendardMedium">장비</span>
                  <span>포크레인 06 미니</span>
                </div>

                <div className="flex justify-between mb-1">
                  <span className="font-PretendardMedium">작업일</span>
                  <span>2024.12.01 (3일)</span>
                </div>

                <div className="flex justify-between mb-1">
                  <span className="font-PretendardMedium">작업 위치</span>
                  <span>인천 부평구 갈산동</span>
                </div>

                <div className="flex justify-between mb-1">
                  <span className="font-PretendardMedium">구분</span>
                  <span>임대 (장비+기사)</span>
                </div>

                <div className="flex justify-between mb-1">
                  <span className="font-PretendardMedium">희망 비용</span>
                  <span>제안 받기</span>
                </div>

                <div className="flex justify-between mb-1">
                  <span className="font-PretendardMedium">결제 일정</span>
                  <span>작업 종료일</span>
                </div>
                <div className="border-y border-grey-border my-[10px]">
                  <div className="font-PretendardMedium mt-4 mb-2">
                    현장사진
                  </div>
                  <div className="flex gap-3 mb-4">
                    <div className="w-[60px] h-[60px] bg-red-100 rounded"></div>
                    <div className="w-[60px] h-[60px] bg-red-100 rounded"></div>
                  </div>
                </div>

                <div className="font-PretendardMedium mb-[4px]">
                  우대사항 및 요청사항
                </div>
                <p className="text-grey-font-light leading-relaxed">
                  늦지 말아주세요 늦지 말아주세요 늦지 말아주세요
                </p>
              </div>
            </div>
          }
          primaryButtonText="등록"
          primaryButtonColor="main-color"
          primaryButtonOnClick={handlePrimaryButton}
          secondaryButtonText="수정"
          secondaryButtonColor="grey-light"
          secondaryButtonOnClick={handleSecondaryButton}
        />
      }
    />
  );
}
