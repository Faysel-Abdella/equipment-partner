"use client";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import JoinMembershipForm from "@/components/forms/JoinMembershipForm";
import { CustomButton } from "@/components/button/Button";
import { useState } from "react";
import InvalidBusinessModal from "@/components/modals/InvalidBusinessModal";
import ValidBusinessModal from "@/components/modals/ValidBusinessModal";

export default function JoinMembershipPage() {
  const router = useRouter();
  const [isValidModalVisible, setValidModalVisible] = useState(false);
  const [isInvalidModalVisible, setInvalidModalVisible] = useState(false);

  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full relative">
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
              <h3 className="text-[16px] text-grey-font font-PretendardBold flex items-center justify-center">
                회원가입
              </h3>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className=" overflow-y-auto scrollbar-hide h-full max-h-screen">
            <div className="!h-[78px]"></div>
            <JoinMembershipForm
              onDuplicateCheckClick={() => {
                setValidModalVisible(true);
              }}
            />
          </div>
          <div className="flex gap-x-[10px] px-4  pb-10 absolute bottom-0 bg-white pt-3 w-full !z-50">
            <div className="!h-[54px] w-full">
              <CustomButton
                label={"가입신청 완료"}
                backgroundColor={"bg-main-color"}
                textStyle={"text-white text-[16px] font-PretendardBold"}
                height="!h-[54px] !min-h-[54px]"
                onPress={() => {
                  setInvalidModalVisible(true);
                }}
              />
            </div>
          </div>
          <ValidBusinessModal
            isOpen={isValidModalVisible}
            setIsOpen={setValidModalVisible}
          />
          <InvalidBusinessModal
            isOpen={isInvalidModalVisible}
            setIsOpen={setInvalidModalVisible}
          />
        </div>
      }
    />
  );
}
