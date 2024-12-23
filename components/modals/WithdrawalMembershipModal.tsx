"use client";
import React, { useState } from "react";
import CustomModalContent from "@/components/modals/CustomModal";
import CustomModal from "./Modal";
import { CustomCheck } from "../CheckBox/CustomCheckbox";

type WithdrawalMemebershipModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClickMembership: () => void;
};

export default function WithdrawalMemebershipModal({
  isOpen,
  setIsOpen,
  onClickMembership,
}: WithdrawalMemebershipModalProps) {
  const [click, setClick] = useState<boolean>(false);

  const handlePrimaryButton = () => {
    setIsOpen(false);
    onClickMembership();
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
            <div className="flex flex-col gap-4 px-[30px] rounded-lg font-pretendardRegular text-[16px] ">
              <h2 className=" font-PretendardBold text-center text-sm  text-grey-font">
                회원 탈퇴
              </h2>
              <p className="text-grey-font-light text-center">
                주의사항을 반드시 확인해주세요
              </p>
              <div className="bg-grey-light text-grey-font-light py-[10px] px-[10px]  text-start rounded-md font-pretendardRegular">
                <p className=" flex items-start gap-[6px] mb-2 leading-5   pl-[2px]">
                  <span className="">•</span>
                  <span className="">
                    회원탈퇴 시
                    <span className="text-red-color font-PretendardBold">
                      {" "}
                      계정 정보는 복구가 불가{" "}
                    </span>
                    하며 7일 이후 재가입 가능합니다.
                  </span>
                </p>
                <p className="flex items-start gap-[6px] mb-2 leading-5   pl-[2px]">
                  <span className="">•</span>
                  <span className="inline-block">
                    탈퇴 후 일부 정보의 보관기간 등 자세한 내용은 이용약관 및
                    개인정보와 연결정보를 확인해주세요.
                  </span>
                </p>
                <p className="flex items-start gap-[6px] leading-5  pl-[2px]">
                  <span className="">•</span>
                  <span className=" flex flex-wrap ">
                    작성하신 리뷰는 탈퇴 후에도 삭제되지 않습니다.
                  </span>
                </p>
              </div>

              <label className="flex items-start gap-2 ">
                <CustomCheck
                  backgroundColor="#255df9"
                  isSelected={click}
                  onChange={() => setClick((prev) => !prev)}
                  width="w-[18px]"
                  height="h-[18px]"
                />
                <p className="font-pretendardRegular text-grey-font leading-5 tracking-tighter ">
                  상기 내용을 모두 확인하였으며 동의합니다.
                </p>
              </label>
            </div>
          }
          primaryButtonText="탈퇴하기"
          primaryButtonColor={click ? "main-color" : "grey-disabled"}
          primaryButtonOnClick={handlePrimaryButton}
          secondaryButtonText="취소"
          secondaryButtonColor="grey-light"
          secondaryButtonOnClick={handleSecondaryButton}
        />
      }
    />
  );
}
