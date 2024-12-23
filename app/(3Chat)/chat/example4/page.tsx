"use client";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon, DetailIcon, PhoneIcon } from "@/components/icons";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChatExtensions } from "../[detail]/components/Extensions";

import ConfirmationModal from "@/components/modals/ConfirmationModal";

import { ChatDetailPopover } from "../[detail]/components/ChatDetailPopover";
import { StatusBottomSheet } from "@/components/BottomSheet/StatusBottomSheet";
import ExitChatModal from "@/components/modals/ExitChatModal";
import { ChatBottom } from "../[detail]/components/ChatBottom";
// import MessageBubble from "../[detail]/components/Message";
import MessageSeparator from "../[detail]/components/messageDateSeparator";
import MessageNotification from "../[detail]/components/MessageNotification";
import SelectDocumentModal from "@/components/modals/SelectDocumentModal";
import ChatTopCard from "../[detail]/components/ChatTopCard";
import ReceiptShareModal from "@/components/modals/ReceiptShareModal";
export default function Chat5() {
  const router = useRouter();
  // const [signature, setSignature] = useState("");
  const [isExtensionVisible, setExtensionVisible] = useState(false);
  const [showReciptShareModal, setshowReciptShareModal] = useState(false);
  const [isConfirmationModalVisible, setConfirmationModalVisible] =
    useState(false);
  const [selectDocumentModal, setSelectDocumentModal] = useState(false);
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const [isStatusSheetOpen, setStatusSheetOpen] = useState(false);
  const [showExistChatModal, setShowExistChatModal] = useState(false);

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
              <div className="!min-w-[62px] !w-[62px] !h-[34px] flex items-center justify-center">
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

            <MessageNotification
              title={"안녕하세요 장비파트너 입니다."}
              subtitle={"견적 문의, 명함 교환 금지 등 알림 영역입니다."}
            />

            <MessageSeparator timestamp={"2024년 11월 01일 금요일"} />

            {/* <MessageShare
              title={"세금계산서 발행 요청"}
              content={<div className=""></div>}
              buttonText={"확인하기"}
              onClick={() => {}}
              isRightAligned={false}
              timestamp={"오후 1:32"}
              read={true}
              images={["@/", "@/"]}
            />
            <CallBubble
              items={[
                {
                  timestamp: "오후 1:32",
                  read: false,
                },
              ]}
              isRightAligned={true}
            /> */}
          </div>
          {/* <CustomModal
            isOpen={false}
            content={
              <CustomModalContent
                mainContent={
                  <div className="w-full h-full">
                    <div className="mt-[-6px] flex justify-center">
                      <span className="font-PretendardBold text-[20px] text-grey-font text-center">
                        서명
                      </span>
                    </div>
                    <div className="mt-[20px] flex justify-end mb-[10px] px-[20px]">
                      <span className="font-pretendardRegular text-[16px] text-main-light-color">
                        전체 지우기
                      </span>
                    </div>
                    <Signature
                      signature={signature}
                      setSignature={setSignature}
                    />
                  </div>
                }
                primaryButtonText="취소"
                primaryButtonColor={
                  signature == "" ? "grey-disabled" : "main-color"
                }
                primaryButtonOnClick={() => {}}
                secondaryButtonText="취소"
                secondaryButtonColor="grey-light"
                secondaryButtonOnClick={() => {}}
              />
            }
          /> */}
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
            isExtensionVisible={isExtensionVisible}
            disabled={true}
          />
          {isExtensionVisible && (
            <ChatExtensions
              onClick2={() => {
                setSelectDocumentModal(true);
              }}
              onClick3={() => {
                router.push("/chat/john/write-contract");
              }}
              onClick5={() => {
                setshowReciptShareModal(true);
              }}
            />
          )}
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