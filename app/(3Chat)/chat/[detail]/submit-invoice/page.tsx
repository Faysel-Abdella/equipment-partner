"use client";

import { BackIcon } from "@/components/icons";
import DisplaySpace from "@/components/DisplaySpace";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoadBottomSheet2 } from "@/components/BottomSheet/LoadBottomSheet2";
import { EquipmentSearchTab } from "@/components/BottomSheet/EquipmentSelectionBottomSheet";
import TaxInvoiceRequestForm from "@/components/forms/TaxInvoiceRequestForm";
import { CustomButton } from "@/components/button/Button";

export default function SubmitInvoice() {
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
                세금 계산서 요청
              </h3>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="!h-[calc(100vh-98px)] pt-[78px] overflow-auto bg-white relative overflow-y-scroll overflow-x-hidden scrollbar-hide z-40">
            <div className="h-full bg-white flex flex-col justify-between mb-2">
              <TaxInvoiceRequestForm />
            </div>
          </div>
          <div className="bg-white w-full px-4 absolute bottom-0 !z-50 pt-3 !h-[106px]">
            <CustomButton
              label={"요청"}
              backgroundColor={"bg-main-color"}
              textStyle={"text-white text-[16px] font-PretendardBold"}
              height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
              onPress={() => {
                router.push("/chat/example7");
              }}
            />
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
