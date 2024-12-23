"use client";
import DisplaySpace from "@/components/DisplaySpace";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import React, { ChangeEvent, useState } from "react";
import { BackIcon, LikeIcon, ShareIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import Dispatch from "@/app/(2Ordering)/ordering/components/Dispatch";
import CustomTab from "@/components/Tabs/Tab";
import { JobListing } from "@/app/(4MyWork)/orderdetails/page";
import JobListingTab from "@/app/(3Chat)/chat/components/JobLisitingTab";
import EquipmentConfirmModal from "@/components/modals/EquipmentConfirmModal";
import { CustomButton } from "@/components/button/Button";

const Page = () => {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const handleSelectionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value);
  };
  const jobs: JobListing[] = [
    {
      id: "1",
      title: "아산중기",
      description: "굴착기 06W · 15년 (60세) · 60만원",
      subtitle: "빠르고 깔끔한 작업!",
      time: "2024-12-01 11:30",
    },
    {
      id: "2",
      title: "홍길동",
      description: "15년 (60세) · 60만원",
      subtitle: "빠르고 깔끔한 작업!",
      time: "2024-12-01 11:30",
    },
  ];

  const tabComponents = [
    {
      title: "작업 정보",
      content: (
        <div className="w-full overflow-y-scroll scrollbar-hide h-full max-h-[80vh] mb-3">
          <Dispatch status="completed" />
        </div>
      ),
    },

    {
      title: "모집 목록",
      content: (
        <JobListingTab
          selectedType={selectedType}
          handleSelectionChange={handleSelectionChange}
          jobs={jobs}
        />
      ),
    },
  ];
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
                  className="!w-[18.33px] !h-[16.82px]"
                  fillColor="#404251"
                />
              </button>
            }
            middle={
              <h3 className="text-[16px] text-grey-font font-PretendardBold flex items-center justify-center">
                발주 상세
              </h3>
            }
            trailing={
              <div className="gap-x-5 !h-[24px] flex justify-between items-center">
                <button
                  className="flex !w-[22px] !min-w-[22px] items-center"
                  onClick={() => {
                    // setConfirmationModalVisible(true);
                  }}
                >
                  <ShareIcon
                    fillColor="#404251"
                    className="!w-[22px] !h-[22px] !min-w-[22px] !min-h-[22px]"
                  />
                </button>
                <button
                  onClick={() => {
                    setIsLiked(!isLiked);
                  }}
                >
                  <LikeIcon
                    fillColor={isLiked ? "#F05858" : "#fff"}
                    strokeColor={isLiked ? "#F05858" : "#404251"}
                  />
                </button>
              </div>
            }
          />
          <div className="pt-[78px] h-full overflow-hidden overflow-x-hidden scrollbar-hide z-40">
            <CustomTab
              items={tabComponents}
              borderColor="border-main-color"
              selectedBgColor="bg-white"
              unselectedBgColor="bg-white"
              selectedBorderColor="border-grey-font border-b-[3px]"
              unselectedBorderColor="border-grey-disabled border-b-[1px]"
              selectedTextColor="text-grey-font text-[16px] font-PretendardBold"
              unselectedTextColor="text-grey-font-light font-PretendardBold text-[16px]"
              separator={false}
              setTabIndex={setTabIndex}
            />
            {/* <div className="pt-[50px] pb-[100px] h-full overflow-y-scroll overflow-x-hidden scrollbar-hide z-40">
            <Dispatch status="completed" />
          </div> */}
          </div>

          {tabIndex == 1 && (
            <>
              <div className="bg-white w-full px-4 absolute bottom-0 !z-50 pb-[40px]">
                <CustomButton
                  backgroundColor={
                    selectedType == "" ? "bg-grey-disabled" : "bg-main-color"
                  }
                  label="선택"
                  textStyle=" text-white text-[16px] font-PretendardBold"
                  height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
                  onPress={() => {
                    setShowModal(true);
                  }}
                />
              </div>
              <EquipmentConfirmModal
                isOpen={showModal}
                setIsOpen={setShowModal}
              />
            </>
          )}
        </div>
      }
    />
  );
};

export default Page;
