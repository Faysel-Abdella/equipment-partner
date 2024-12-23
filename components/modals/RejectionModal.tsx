"use client";
import React from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
import { useRouter } from "next/navigation";
type RejectionModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleClick?: () => void;
};

export default function RejectionModal({
  isOpen,
  setIsOpen,
}: RejectionModalProps) {
  const router = useRouter();
  const handlePrimaryButton = () => {
    setIsOpen(false);
    router.push("/sign-up");
  };

  const handleSecondaryButton = () => {
    setIsOpen(false);
    router.push("/joinTheMembership/welcome");
  };

  return (
    <CustomModal
      isOpen={isOpen}
      content={
        <CustomModalContent
          mainContent={
            <div className='flex flex-col items-center  w-[271] bg-white -tracking-2% font-pretendardRegular px-5 xs:px-0'>
              <h2 className='text-[16px] xs:text-[20px] font-PretendardBold text-grey-font mb-4 text-center'>
                아래 사유로 승인이 거절 되었습니다
              </h2>

              <p className="font-pretendardRegular text-[13px] xs:text-[16px] text-grey-font-light text-center  xs:leading-[22px]">
                사유를 확인 후 수정하여
              </p>
              <p className="font-pretendardRegular text-[13px] xs:text-[16px] text-grey-font-light text-center mb-[20px] xs:leading-[22px]">
                다시 신청 부탁드립니다
              </p>

              <div className="flex bg-[#255DF91A] w-full xs:w-[271px] justify-center items-center xs:mx-0 text-main-color text-center  px-4 py-[16px] rounded leading-[22px]">
                admin에서 입력한 <br /> 거절 사유 노출 영역
              </div>
            </div>
          }
          primaryButtonText="수정 및 재승인"
          primaryButtonColor="main-color"
          primaryButtonOnClick={handlePrimaryButton}
          secondaryButtonText="돌아가기"
          secondaryButtonColor="grey-light"
          secondaryButtonOnClick={handleSecondaryButton}
        />
      }
    />
  );
}
