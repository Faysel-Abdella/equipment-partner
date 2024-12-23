"use client";

import { BackIcon } from "@/components/icons";
import { CustomButton } from "@/components/button/Button";
import DisplaySpace from "@/components/DisplaySpace";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import JoinMembership2Form from "@/components/forms/JoinMembershipForm2";
import SignUpCompleteModal from "@/components/modals/SignUpCompleteModal";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function JoinMembership2() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full overflow-y-scroll scrollbar-hide relative">
          <TopNavigationBar
            leading={
              <button
                className=""
                onClick={() => {
                  router.back();
                }}
              >
                <BackIcon
                  className="min-w-[10px] min-h-[12px]"
                  fillColor="#80808e"
                />
              </button>
            }
            middle={
              <h3 className="w-full text-[16px] text-grey-font font-PretendardBold flex items-center justify-center">
                회원가입
              </h3>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="pt-[78px] h-full relative overflow-y-scroll overflow-x-hidden scrollbar-hide z-40">
            <div className="h-full bg-white flex flex-col justify-between">
              <JoinMembership2Form />
            </div>
          </div>
          <div className="bg-white w-full px-4 absolute bottom-0 !z-50 pb-[40px]">
            <span className="font-pretendardRegular text-[13px] text-grey-font-light">
              신청 수락은 최대 영업일 3일까지 소요될 수 있으며, 잘못된 정보,
              오타 등으로 인한 가맹 신청은 반려됩니다.
            </span>
            <div className="h-10"></div>
            <CustomButton
              label={" 가입신청 완료"}
              backgroundColor={"bg-main-color"}
              textStyle={"text-white font-PretendardBold text-[16px]"}
              height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
              onPress={() => {
                setShowModal(true);
              }}
            />
          </div>
          <SignUpCompleteModal isOpen={showModal} setIsOpen={setShowModal} />
        </div>
      }
    />
  );
}
