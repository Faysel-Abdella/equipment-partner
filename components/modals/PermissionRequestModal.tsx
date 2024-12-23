"use client";
import React from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
type PermissionRequestModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function PermissionRequestModal({
  isOpen,
  setIsOpen,
}: PermissionRequestModalProps) {
  const handlePrimaryButton = () => {
    setIsOpen(false);
  };

  return (
    <CustomModal
      isOpen={isOpen}
      content={
        <CustomModalContent
          mainContent={
            <div className="flex flex-col bg-white w-full px-[36px] text-left rounded-md leading-tight">
              {/* Header */}
              <h2 className="text-[18px] font-PretendardBold text-grey-font mb-[30px] text-center">
                앱 접근 권한 안내
              </h2>

              {/* Permissions */}
              <div className="space-y-[20px]">
                {/* Permission 1 */}
                <div className="flex items-start">
                  <div className="w-[40px] h-[40px]   bg-grey-light  rounded-sm mr-3 mt-1"></div>
                  <div>
                    <span className="font-pretendardRegular text-grey-font text-[16px]">
                      접근 권한1 (필수)
                    </span>
                    <p className="text-[13px] text-grey-font-light mt-1">
                      접근 권한 상세 내용 접근 권한 상세
                    </p>
                  </div>
                </div>

                {/* Permission 2 */}
                <div className="flex items-start">
                  <div className="w-[40px] h-[40px]   bg-grey-light rounded-sm mr-3 mt-1"></div>
                  <div>
                    <span className="font-pretendardRegular text-grey-font text-[16px]">
                      접근 권한2 (필수)
                    </span>
                    <p className="text-[13px] text-grey-font-light mt-1">
                      접근 권한 상세 내용 접근 권한 상세
                    </p>
                  </div>
                </div>

                {/* Permission 3 */}
                <div className="flex items-start">
                  <div className="w-[40px] h-[40px]   bg-grey-light  rounded-sm mr-3 mt-1"></div>
                  <div>
                    <span className="font-pretendardRegular text-grey-font text-[16px]">
                      접근 권한3 (필수)
                    </span>
                    <p className="text-[13px] text-grey-font-light mt-1">
                      접근 권근 상세 내용 접근 권한 상세
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Text */}
              <p className="text-[12px] text-grey-font-light mt-[30px] leading-relaxed">
                서비스 이용 시 동의를 받고 있으며, 동의를 거부하는 경우 서비스
                이용에 제한이 있습니다.
              </p>
            </div>
          }
          primaryButtonText="등록"
          primaryButtonColor="main-color"
          primaryButtonOnClick={handlePrimaryButton}
        />
      }
    />
  );
}
