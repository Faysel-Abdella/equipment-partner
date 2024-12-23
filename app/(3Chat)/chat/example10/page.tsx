"use client";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon, DetailIcon, PhoneIcon } from "@/components/icons";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ConfirmationModal from "@/components/modals/ConfirmationModal";

import { ChatDetailPopover } from "../[detail]/components/ChatDetailPopover";
import SelectDocumentModal from "@/components/modals/SelectDocumentModal";
import ChatTopCard from "../[detail]/components/ChatTopCard";
import { ChatBottom } from "../[detail]/components/ChatBottom";
import MessageShare from "../[detail]/components/Share";
import ExitChatModal from "@/components/modals/ExitChatModal";
import { StatusBottomSheet } from "@/components/BottomSheet/StatusBottomSheet";
import { ChatExtensions2 } from "../[detail]/components/Extension2";
import ReceiptShareModal from "@/components/modals/ReceiptShareModal";

export default function Chat6() {
  const router = useRouter();
  // const [signature, setSignature] = useState("");
  const [isExtensionVisible, setExtensionVisible] = useState(false);
  const [showReciptShareModal, setshowReciptShareModal] = useState(false);
  const [showExistChatModal, setShowExistChatModal] = useState(false);

  const [isConfirmationModalVisible, setConfirmationModalVisible] =
    useState(false);
  const [selectDocumentModal, setSelectDocumentModal] = useState(false);
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const [isStatusSheetOpen, setStatusSheetOpen] = useState(false);
  useEffect(() => {
    // setSignature("");
  }, []);
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full scrollbar-hide relative">
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
              <div className="!h-[34px] flex items-center justify-center">
                <p className="text-grey-font text-[16px] font-PretendardBold w-full">
                  홍길동
                </p>
              </div>
            }
            trailing={
              <div className="!w-[68px] !h-[24px] flex justify-between items-center">
                <button
                  className="flex !w-[46px] !min-w-[46px] justify-around items-center"
                  onClick={() => {
                    setConfirmationModalVisible(true);
                  }}
                >
                  <PhoneIcon
                    fillColor="#255DF9"
                    className="!w-[16px] !h-[16px] !min-w-[16px] !min-h-[16px]"
                  />
                  <p className="text-[16px] leading-[20px] font-PretendardBold text-main-color">
                    전화
                  </p>
                </button>
                <button
                  className="!z-40 !w-[10px] flex justify-center"
                  onClick={() => {
                    setPopoverVisible(!isPopoverVisible);
                    console.log("FS");
                  }}
                >
                  <DetailIcon fillColor="#80808E" />
                </button>
              </div>
            }
          />
          <div className="overflow-y-scroll overflow-x-hidden scrollbar-hide z-40 h-full bg-grey-light">
            <div className="h-[79px] w-full bg-white"></div>

            <ChatTopCard
              title="주택정원 정리"
              location="강원도 원주"
              details={["굴착기 6W", "임대 (장비+기사)", "견적 제안받기"]}
              status="모집중"
              onStatusClick={() => {
                setStatusSheetOpen(true);
              }}
            />

            <div className="pt-[10px]"></div>

            <MessageShare
              title={"발주서"}
              content={
                <div className=" flex flex-col w-full">
                  <div className="flex gap-[8px] justify-start text-[12px]  xs:text-[13px] ">
                    <div className="font-PretendardBold text-[13px] xs:text-[16px] text-grey-font">
                      <p>굴착기 미니 017</p>
                    </div>
                    <div className="flex items-start font-pretendardRegular text-grey-font-light  ">
                      <p>브레이크, 크리샤</p>
                    </div>
                  </div>
                  <div className="mt-2 flex text-[13px] xs:text-[16px]  flex-col items-start font-pretendardRegular text-grey-font-light xs:leading-5 space-y-[4px]">
                    <p>2024-12-01 (오후 반입)</p>
                    <p>60만원</p>
                    <p>임대 (장비+기사)</p>
                  </div>
                </div>
              }
              buttonText={"확인하기"}
              onClick={() => {}}
              isRightAligned={true}
              timestamp={"오후 1:32"}
              read={true}
            />
          </div>
          {isPopoverVisible && (
            <div className="absolute right-0 top-[71px] pr-[16px] !z-40 flex justify-end">
                <ChatDetailPopover
                onClick1={() => {
                  setShowExistChatModal(true);
                  setPopoverVisible(false)
                }}
                onClick2={() => {
                  router.push("/1-1-inquiry");
                  setPopoverVisible(false)
                }}
              />
            </div>
          )}
          <ChatBottom
            onPlusClick={() => {
              setExtensionVisible(!isExtensionVisible);
            }}
            // onSendClick={() => {}}
            isExtensionVisible={isExtensionVisible}
          />
          {isExtensionVisible && (
            <ChatExtensions2
              onClick2={() => {
                setSelectDocumentModal(true);
              }}
              onClick3={() => {
                router.push("/chat/john/write-contract");
              }}
            />
          )}{" "}
          <ConfirmationModal
            isOpen={isConfirmationModalVisible}
            setIsOpen={setConfirmationModalVisible}
          />
          <SelectDocumentModal
            isOpen={selectDocumentModal}
            setIsOpen={setSelectDocumentModal}
          />
          <ReceiptShareModal
            isOpen={showReciptShareModal}
            setIsOpen={setshowReciptShareModal}
          />
          <ExitChatModal
            isOpen={showExistChatModal}
            setIsOpen={setShowExistChatModal}
          />
          <StatusBottomSheet
            isOpen={isStatusSheetOpen}
            setIsOpen={setStatusSheetOpen}
          />
        </div>
      }
    />
  );
}
