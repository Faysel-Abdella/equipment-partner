"use client"; 
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  SelectRegionBottomSheet1,
} from "@/components/BottomSheet/SelectRegionBottomSheet";
import SearchBar from "@/components/Search/SearchBar";
import { SelectedData } from '@/app/(1Home)/home/equipment-search/page';
import { equipmentSearchRowData, localSearchRowData } from '@/components/data/data';

export default function OrderSearchPage() {
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

  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full max-w-full overflow-y-scroll scrollbar-hide relative">
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
              <h3 className="w-full text-[16px] text-grey-font font-PretendardBold flex items-center justify-center">
                발주 검색
              </h3>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="!z-50 pb-[100px] h-full overflow-y-auto overflow-x-hidden scrollbar-hide bg-white">
            <div className="!h-[78px]"></div>{" "}
            <div className="flex flex-col w-full py-4 px-4">
              <SearchBar
                placeholder={"장비명, 지역 등 검색어를 입력해 주세요"}
                width={""}
                onClick={() => {
                  router.push("/home/equipment-search");
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
          </div>
          {isRegionSheetOpen && (
            <SelectRegionBottomSheet1
              isOpen={isRegionSheetOpen}
              setIsOpen={setRegionSheetOpen}
              setSelectedData={setSelectedData}
              data={localSearchRowData}
              selectedData={selectedData}
              
            />
          )}

          {isRegionSheet2Open && (
            <SelectRegionBottomSheet1
              isOpen={isRegionSheet2Open}
              setIsOpen={setRegionSheet2Open}
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
