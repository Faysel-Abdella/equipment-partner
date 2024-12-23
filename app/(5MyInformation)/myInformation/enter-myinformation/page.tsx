"use client";

import { BackIcon, DetailIcon } from "@/components/icons";
import { CustomButton } from "@/components/button/Button";
import DisplaySpace from "@/components/DisplaySpace";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import MyInformationForm from "@/components/forms/MyInformationForm";
import { useRouter } from "next/navigation";
import WithdrawalCompleationModal from "@/components/modals/WithdrawalCompleationModal";
import WithdrawalMembershipModal from "@/components/modals/WithdrawalMembershipModal";
import LogOutModal from "@/components/modals/LogOutModal";
import { InformationPopover } from "../components/InformationPopover";
import { useState } from "react";

export default function EnterInformationPage() {
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const [isLogoutVisible, setLogoutModalVisible] = useState(false);
  const [isWithdrawalModalVisible, setWithdrawalModalVisible] = useState(false);
  const [isWithdrawalCompleteModalVisible, setWithdrawalCompleteModalVisible] =
    useState(false);
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
                내 정보
              </h3>
            }
            trailing={
              <button
                className=""
                onClick={() => {
                  setPopoverVisible(true);
                }}
              >
                <DetailIcon fillColor="#80808e" />
              </button>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="pt-[78px] h-full relative overflow-y-scroll overflow-x-hidden scrollbar-hide z-40">
            <div className="h-full bg-white flex flex-col justify-between">
              <MyInformationForm />
            </div>
          </div>
          <div className="bg-white w-full px-4 absolute bottom-0 !z-50 pb-[40px]">
            <div className="h-10"></div>
            <CustomButton
              label={"저장"}
              backgroundColor={"bg-main-color"}
              textStyle={"text-white font-PretendardBold text-[16px]"}
              height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
              onPress={() => {}}
            />
          </div>
          {isPopoverVisible && (
            <div className="absolute right-0 top-[55px] pr-[12px] !z-50 flex justify-end">
              <InformationPopover
                onClick1={() => {
                  setWithdrawalModalVisible(false);
                  setLogoutModalVisible(true);
                  setPopoverVisible(false);
                }}
                onClick2={() => {
                  setLogoutModalVisible(false);
                  setWithdrawalModalVisible(true);
                  setPopoverVisible(false);
                }}
              />
            </div>
          )}
          <LogOutModal
            isOpen={isLogoutVisible}
            setIsOpen={setLogoutModalVisible}
          />
          <WithdrawalMembershipModal
            isOpen={isWithdrawalModalVisible}
            setIsOpen={setWithdrawalModalVisible}
            onClickMembership={() => {
              setLogoutModalVisible(false);
              setWithdrawalModalVisible(false);
              setWithdrawalCompleteModalVisible(true);
            }}
          />
          <WithdrawalCompleationModal
            isOpen={isWithdrawalCompleteModalVisible}
            setIsOpen={setWithdrawalCompleteModalVisible}
          />
        </div>
      }
    />
  );
}
