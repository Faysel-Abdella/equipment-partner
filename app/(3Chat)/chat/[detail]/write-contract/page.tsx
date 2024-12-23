"use client";

import { BackIcon } from "@/components/icons";
import DisplaySpace from "@/components/DisplaySpace";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoadBottomSheet2 } from "@/components/BottomSheet/LoadBottomSheet2";
import { WriteContractForm } from "@/components/forms/WriteContractForm";
import { EquipmentSearchTab } from "@/components/BottomSheet/EquipmentSelectionBottomSheet";

export default function JoinMembership2() {
  const [isLoadBottomSheetVisible, setLoadBottomSheetVisible] = useState(false);
  const [isEquipmentBottomSheetVisible, setEquipmentBottomSheetVisible] =
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
                계약서 작성
              </h3>
            }
            trailing={
              <button
                className=""
                onClick={() => {
                  setLoadBottomSheetVisible(true);
                }}
              >
                <p className="font-pretendardRegular text-[16px] text-main-light-color">
                  불러오기
                </p>
              </button>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="pt-[78px] h-full relative overflow-y-scroll overflow-x-hidden scrollbar-hide z-40">
            <div className="bg-white flex flex-col justify-between">
              <WriteContractForm
                onClick1={() => {
                  setEquipmentBottomSheetVisible(true);
                }}
              />
            <div className="pb-3"></div>

            </div>
          </div>
          <LoadBottomSheet2
            isOpen={isLoadBottomSheetVisible}
            setIsOpen={setLoadBottomSheetVisible}
          />
          <EquipmentSearchTab
            isOpen={isEquipmentBottomSheetVisible}
            setIsOpen={setEquipmentBottomSheetVisible}
          />
        </div>
      }
    />
  );
}
