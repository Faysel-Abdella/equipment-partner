"use client";

import { ChangeEvent, useState } from "react";
import { RadioGroup } from "@nextui-org/react";
import { OrderDetailRadioCard } from "@/components/orderdetails/orderDetailsRadioCard";
import DisplaySpace from "@/components/DisplaySpace";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import { BackIcon, LikeIcon, ShareIcon } from "@/components/icons";
import CustomTab from "@/components/Tabs/Tab";
import { CustomButton } from "@/components/button/Button";
import { useRouter } from "next/navigation";
import EquipmentConfirmModal from "@/components/modals/EquipmentConfirmModal";

export interface JobListing {
  id: string;
  title: string;
  description: string;
  subtitle: string;
  time: string;
}

export default function JobListing() {
  const [selectedType, setSelectedType] = useState<string>(""); // State for selected job
  const [showModal, setShowModal] = useState(false);
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

  const handleSelectionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value);
  };

  const tabComponents = [
    {
      title: "작업 정보",
      content: (
        <div className="w-full overflow-y-scroll scrollbar-hide h-full max-h-[80vh]">
          <div className="flex flex-col w-full bg-white">
            {/* Job Listings */}
            <div className="flex w-full flex-col !gap-y-[20px] px-4">
              <RadioGroup value={selectedType} onChange={handleSelectionChange}>
                {jobs.map((job) => (
                  <div key={job.id}>
                    <div className="flex flex-col items-start gap-y-5 pb-[10px]">
                      <OrderDetailRadioCard
                        title={job.title}
                        selected={selectedType === job.id}
                        buttontext="상세정보"
                        description={
                          <div className="w-full">
                            <div>
                              <span className="text-[13px] font-pretendardRegular text-grey-font-light">
                                {job.description}
                              </span>{" "}
                              <br />
                              <span className="text-[13px] font-pretendardRegular text-grey-font-light">
                                {job.subtitle}
                              </span>
                            </div>
                            <div className="text-[10px] text-grey-disabled mt-2">
                              {job.time}
                            </div>
                          </div>
                        }
                        onClick={() => setSelectedType(job.id)}
                      />
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
          <div className="!h-[106px]"></div>
        </div>
      ),
    },

    {
      title: "모집 목록",
      content: (
        <div className="w-full overflow-y-scroll scrollbar-hide h-full max-h-[80vh]">
          <div className="flex flex-col w-full bg-white">
            {/* Job Listings */}
            <div className="flex w-full flex-col !gap-y-[20px] px-4">
              <RadioGroup value={selectedType} onChange={handleSelectionChange}>
                {jobs.map((job) => (
                  <div key={job.id}>
                    <div className="flex flex-col items-start gap-y-5  pb-[10px]">
                      <OrderDetailRadioCard
                        title={job.title}
                        selected={selectedType === job.id}
                        buttontext="상세정보"
                        description={
                          <div className="w-full">
                            <div>
                              <span className="text-[13px] font-pretendardRegular text-grey-font-light">
                                {job.description}
                              </span>{" "}
                              <br />
                              <span className="text-[13px] font-pretendardRegular text-grey-font-light">
                                {job.subtitle}
                              </span>
                            </div>
                            <div className="text-[10px] text-grey-disabled mt-2">
                              {job.time}
                            </div>
                          </div>
                        }
                        onClick={() => setSelectedType(job.id)}
                      />
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
          <div className="!h-[106px]"></div>
        </div>
      ),
    },
  ];

  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full overflow-hidden scrollbar-hide relative">
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
            />
          </div>
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
          <EquipmentConfirmModal isOpen={showModal} setIsOpen={setShowModal} />
        </div>
      }
    />
  );
}
