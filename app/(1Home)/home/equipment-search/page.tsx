"use client";
import CustomTab from "@/components/Tabs/Tab";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import ConditionSearch from "./components/ConditionSearch";
import { useState } from "react";
import { SelectRegionBottomSheet1 } from "@/components/BottomSheet/SelectRegionBottomSheet";
import {
  equipmentSearchRowData,
  localSearchRowData,
} from "@/components/data/data";
import SearchBar from "@/components/Search/SearchBar";

export interface SelectedData {
  id: string;
  location: string;
  detail: string;
}
export default function EquipmentSearchPage() {
  const router = useRouter();
  const [isRegionSheetOpen, setRegionSheetOpen] = useState(false);
  const [isRegionSheet2Open, setRegionSheet2Open] = useState(false);
  const [selectedData, setSelectedData] = useState<SelectedData[]>([]);
  const [selectedData2, setSelectedData2] = useState<SelectedData[]>([]);
  const recommendedItems = [
    { label: "검색어1", onClick: () => {} },
    { label: "검색어2", onClick: () => {} },
    { label: "검색어3", onClick: () => {} },
    { label: "검색어4", onClick: () => {} },
    { label: "검색어5", onClick: () => {} },
    { label: "검색어6", onClick: () => {} },
  ];
  const tabItems = [
    {
      title: "조건 검색",
      content: (
        <div className="flex w-full h-full flex-col justify-between px-4">
          {" "}
          <ConditionSearch
            handleAddRegion1Click={() => {
              setRegionSheetOpen(true);
              setRegionSheet2Open(false);
            }}
            handleAddRegion2Click={() => {
              // conditionally trun on either one or second button if nothing selected for second show secnd sheet
              setRegionSheetOpen(false);
              setRegionSheet2Open(true);
            }}
            selectedData={selectedData}
            selectedData2={selectedData2}
            setSelectedData={setSelectedData}
            setSelectedData2={setSelectedData2}
          />
        </div>
      ),
    },
    {
      title: "키워드 검색",
      content: (
        <div className="flex flex-col w-full mt-[10px] px-4">
          <SearchBar
            placeholder={"장비명, 지역 등 검색어를 입력해 주세요"}
            width={""}
            onClick={() => {
              router.push("/home/equipment-search/search1");
            }}
          />
          {/* recommended search items */}
          <div className="pt-[30px] flex w-full font-PretendardBold text-[16px] text-grey-font">
            추천 검색어
          </div>
          <div className="pt-4 flex flex-wrap w-full font-pretendardRegular text-[13px] text-main-light-color gap-[10px]">
            {recommendedItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-main-light-color bg-opacity-10 rounded-full flex px-3 py-[7px]"
                >
                  {item.label}
                </div>
              );
            })}
          </div>
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
                  router.push("/home");
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
                장비사업자 검색
              </h3>
            }
          />
          <div className="!z-50 h-full overflow-y-auto overflow-x-hidden scrollbar-hide bg-white">
            <div className="!h-[78px]"></div>
            <div className=" bg-white">
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
                overflowStyle="overflow-auto scrollbar-hide h-[calc(100vh-134px)]"
                overflowStyleHeader="sticky top-[0px] !z-50"
              />
            </div>
          </div>

          {isRegionSheetOpen && (
            <SelectRegionBottomSheet1
              isOpen={isRegionSheetOpen}
              setIsOpen={setRegionSheetOpen}
              topNav="지역 선택"
              selectedData={selectedData}
              setSelectedData={setSelectedData}
              data={localSearchRowData}
              isLocation={true}
            />
          )}

          {isRegionSheet2Open && (
            <SelectRegionBottomSheet1
              isOpen={isRegionSheet2Open}
              setIsOpen={setRegionSheet2Open}
              topNav="지역 선택"
              selectedData={selectedData2}
              setSelectedData={setSelectedData2}
              data={equipmentSearchRowData}
            />
          )}
        </div>
      }
    />
  );
}
