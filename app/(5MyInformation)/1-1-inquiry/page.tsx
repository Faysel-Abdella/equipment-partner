"use client";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import OneToOneInquiryForm from "@/components/forms/OneToOneInquiryForm";
import { CustomButton } from "@/components/button/Button";
import { useState } from "react";
import InquiryRegistrationModal from "@/components/modals/InquiryRegistrationModal";

export default function OnetoOneInquiry() {
  const router = useRouter();
  const [isformFilled, setIsFormFilled] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
                1:1 문의
              </h3>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="!h-[calc(100vh-110px)] pt-[78px] overflow-auto  bg-white relative overflow-y-scroll overflow-x-hidden scrollbar-hide z-40">
            <div className="w-full flex flex-col mb-2">
              <div className="w-full px-4 font-pretendardRegular text-grey-font-light text-[13px] mt-5">
                서비스 이용 관련해서 불편하신 점이 있으신가요? <br /> 문의사항을
                남겨 주시면 이메일 주소로 답변을 보내드립니다.
              </div>
              <OneToOneInquiryForm
                isFormFilled={isformFilled}
                setFormFilled={setIsFormFilled}
              />
            </div>
          </div>
          <div className="bg-white w-full px-4 absolute bottom-0 !z-50 pt-3 !h-[106px]">
            <CustomButton
              label={"문의하기"}
              backgroundColor={
                isformFilled ? "bg-main-color" : "bg-grey-disabled"
              }
              textStyle={"text-white text-[16px] font-PretendardBold"}
              height="!h-[54px] min-h-[54px]"
              disabled={!isformFilled}
              onPress={() => {
                setShowModal(true);
              }}
            />
          </div>
          <InquiryRegistrationModal
            isOpen={showModal}
            setIsOpen={setShowModal}
          />
        </div>
      }
    />
  );
}
