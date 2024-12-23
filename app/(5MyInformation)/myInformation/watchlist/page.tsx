"use client";
import CustomTab from "@/components/Tabs/Tab";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SelectRegionBottomSheet1 } from "@/components/BottomSheet/SelectRegionBottomSheet";
import WorkWatchlist from "../components/WorkWatchlist";
import {
  equipmentSearchRowData,
  localSearchRowData,
} from "@/components/data/data";
import { SelectedData } from "@/app/(1Home)/home/equipment-search/page";
import { BusinessSearchList } from "@/app/(1Home)/home/components/BusinessList";

export default function WatchlistPage() {
  const router = useRouter();
  const [isRegionSheetOpen, setRegionSheetOpen] = useState(false);
  const [isRegionSheet2Open, setRegionSheet2Open] = useState(false);
  const [selectedData, setSelectedData] = useState<SelectedData[]>([]);
  const [selectedData2, setSelectedData2] = useState<SelectedData[]>([]);
  const tabItems = [
    {
      title: "관심 작업",
      content: (
        <div className="px-4">
          <WorkWatchlist isAll={true} />
        </div>
      ),
    },
    {
      title: "관심 장비 및 기사",
      content: (
        <div className="flex justify-center !overflow-hidden">
          <BusinessSearchList />
        </div>
      ),
    },
  ];

  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full max-w-full overflow-y-scroll scrollbar-hide relative overflow-x-hidden">
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
                관심 목록
              </h3>
            }
          />
          <div className="!z-50 pb-[100px] h-full overflow-y-auto overflow-x-hidden scrollbar-hide bg-white">
            <div className="!h-[78px]"></div>
            <div className=" bg-white ">
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
          {isRegionSheetOpen && (
            <SelectRegionBottomSheet1
              isOpen={isRegionSheetOpen}
              setIsOpen={setRegionSheetOpen}
              topNav="지역 선택"
              data={localSearchRowData}
              selectedData={selectedData}
              setSelectedData={setSelectedData}
            />
          )}

          {isRegionSheet2Open && (
            <SelectRegionBottomSheet1
              isOpen={isRegionSheet2Open}
              setIsOpen={setRegionSheet2Open}
              topNav="지역 선택"
              data={equipmentSearchRowData}
              setSelectedData={setSelectedData2}
              selectedData={selectedData2}
            />
          )}
        </div>
      }
    />
  );
}
