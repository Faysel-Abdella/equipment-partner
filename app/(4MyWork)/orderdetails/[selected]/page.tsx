"use client";

import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import { BackIcon } from "@/components/icons";
import DisplaySpace from "@/components/DisplaySpace";
import { useRouter } from "next/navigation";
import CustomTab from "@/components/Tabs/Tab";
import { CustomButton } from "@/components/button/Button";

export default function SelectedOrder() {
  const router = useRouter();
  const tabItems = [
    {
      title: "작업 정보",
      content: (
        <div className="flex flex-col w-full px-4 gap-y-[10px]">
          <div className="flex flex-col gap-y-2 px-4 py-4 border-[1px] rounded-[12px] border-main-color">
            <div className="flex flex-col gap-y-2">
              <span className="font-PretendardBold text-[16px] text-grey-font">
                아산중기
              </span>
              <div className="flex flex-col gap-y-1 font-pretendardRegular text-[13px] text-grey-font-light">
                <span>굴착기 06W∙15년 (60세)∙60만원</span>
                <span>빠르고 깔끔한 작업!</span>
              </div>
            </div>
            <span className="text-[10px] text-grey-disabled font-pretendardRegular">
              2024-12-01 11:30
            </span>
          </div>
          <CustomButton
            label={"상세정보"}
            backgroundColor={"bg-grey-light"}
            textStyle={"text-main-color text-[13px] font-PretendardBold"}
          />
          <CustomButton
            label={"채팅 바로가기"}
            backgroundColor={"bg-grey-light"}
            textStyle={"text-main-color text-[13px] font-PretendardBold"}
          />
        </div>
      ),
    },
    {
      title: "모집 목록",
      content: (
        <div className="flex flex-col w-full px-4 gap-y-[10px]">
          <div className="flex flex-col gap-y-2 px-4 py-4 border-[1px] rounded-[12px] border-main-color">
            <div className="flex flex-col gap-y-2">
              <span className="font-PretendardBold text-[16px] text-grey-font">
                아산중기
              </span>
              <div className="flex flex-col gap-y-1 font-pretendardRegular text-[13px] text-grey-font-light">
                <span>굴착기 06W∙15년 (60세)∙60만원</span>
                <span>빠르고 깔끔한 작업!</span>
              </div>
            </div>
            <span className="text-[10px] text-grey-disabled font-pretendardRegular">
              2024-12-01 11:30
            </span>
          </div>
          <CustomButton
            label={"상세정보"}
            backgroundColor={"bg-grey-light"}
            textStyle={"text-main-color text-[13px] font-PretendardBold"}
          />
          <CustomButton
            label={"채팅 바로가기"}
            backgroundColor={"bg-grey-light"}
            textStyle={"text-main-color text-[13px] font-PretendardBold"}
          />
        </div>
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
                  className="min-w-[10px] min-h-[12px]"
                  fillColor="#80808e"
                />
              </button>
            }
            middle={
              <h3 className="w-full text-[16px] text-grey-font font-PretendardBold flex items-center justify-center">
                내 작업 상세
              </h3>
            }
          />{" "}
          <div className="!z-50 pb-[100px] h-full overflow-y-auto overflow-x-hidden scrollbar-hide bg-white">
            <div className="!h-[78px]"></div>
            <CustomTab
              items={tabItems}
              borderColor="border-main-color" // Custom active border color
              selectedBgColor="bg-white"
              unselectedBgColor="bg-white"
              selectedBorderColor="border-grey-font border-b-[3px] border-t-[0px]"
              unselectedBorderColor="border-grey-disabled border-b-[1px]"
              selectedTextColor="text-grey-font"
              unselectedTextColor="text-grey-font-light"
              separator={false}
            />
          </div>
        </div>
      }
    />
  );
}
