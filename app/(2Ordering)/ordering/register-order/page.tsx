"use client";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RegisterOrderForm } from "@/components/forms/RegisterOrderForm";
import { TimeBottomSheet } from "@/components/BottomSheet/TimeBottomSheet";
import { WorkLocationBottomSheet } from "@/components/BottomSheet/WorkLocationBottomSheet";
import RegistrationInfoModal from "@/components/modals/RegistrationInfoModal";
import { LoadBottomSheet2 } from "@/components/BottomSheet/LoadBottomSheet2";
import { TimeBottomSheet2 } from "@/components/BottomSheet/TimeBottomSheet2";
import RegistrationFormTabWarningModal from "@/components/modals/RegistrationFormTabWarningModal";
import { EquipmentSelectBottomSheet2 } from "@/components/BottomSheet/EquipmentSelectBottomSheet2";
import { EquipmentSearchTab } from "@/components/BottomSheet/EquipmentSelectionBottomSheet";

export default function RegisterOrderPage() {
  const router = useRouter();
  // const [isSubmitModalVisible, setSubmitModalVisible] = useState(false);
  const [isLoadBottomSheetVisible, setLoadBottomSheetVisible] = useState(false);
  const [isWorkingDaySheetOpen, setIsWorkingDaySheetOpen] = useState(false);
  const [isForkliftDaySheetOpen, setIsForkliftDaySheetOpen] = useState(false);
  const [isWorkPositionSheetOpen, setIsWorkPositionSheetOpen] = useState(false);
  const [isEquipmentSheetOpen, setIsEquipmentSheetOpen] = useState(false);
  const [isEquipmentSheet2Open, setIsEquipmentSheet2Open] = useState(false);
  const [isTabChangeModalOpen, setIsTabChangeModalOpen] = useState(false);
  const [showRegistrationInfoModal, setShowRegistrationInfoModal] =
    useState(false);
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full relative">
          {!isLoadBottomSheetVisible && (
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
                  발주 등록하기
                </h3>
              }
              trailing={
                <button
                  className=""
                  onClick={() => {
                    setIsEquipmentSheet2Open(true);
                  }}
                >
                  <p className="font-pretendardRegular text-[16px] text-main-light-color">
                    불러오기
                  </p>
                </button>
              }
            />
          )}
          <div className=" overflow-y-auto scrollbar-hide h-full max-h-screen mb-[10px]">
            <div className="!h-[78px]"></div>
            <RegisterOrderForm
              onClick1={() => {
                setIsEquipmentSheetOpen(true);
              }}
              onClick2={() => {
                setIsForkliftDaySheetOpen(true);
              }}
              onClick3={() => {
                setIsWorkPositionSheetOpen(true);
              }}
              onClick4={() => {
                // setIsWorkingDaySheetOpen(true);
              }}
              onClick5={() => {
                setIsWorkingDaySheetOpen(true);
              }}
              onTabChange={() => {
                setIsTabChangeModalOpen(true);
              }}
            />
          </div>
          <LoadBottomSheet2
            isOpen={isLoadBottomSheetVisible}
            setIsOpen={setLoadBottomSheetVisible}
          />{" "}
          <TimeBottomSheet
            isOpen={isWorkingDaySheetOpen}
            setIsOpen={setIsWorkingDaySheetOpen}
          />{" "}
          <TimeBottomSheet2
            isOpen={isForkliftDaySheetOpen}
            setIsOpen={setIsForkliftDaySheetOpen}
          />{" "}
          <WorkLocationBottomSheet
            isOpen={isWorkPositionSheetOpen}
            setIsOpen={setIsWorkPositionSheetOpen}
          />
          <EquipmentSearchTab
            isOpen={isEquipmentSheetOpen}
            setIsOpen={setIsEquipmentSheetOpen}
          />
          <EquipmentSelectBottomSheet2
            isOpen={isEquipmentSheet2Open}
            setIsOpen={setIsEquipmentSheet2Open}
          />
          <RegistrationInfoModal
            isOpen={showRegistrationInfoModal}
            setIsOpen={setShowRegistrationInfoModal}
          />
          <RegistrationFormTabWarningModal
            isOpen={isTabChangeModalOpen}
            setIsOpen={setIsTabChangeModalOpen}
          />
        </div>
      }
    />
  );
}
