"use client";
import BottomNavigationBar from "@/components/BottomNavigation/BottomNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { AlarmIcon, SearchIcon } from "@/components/TopNavigationBar/Icons";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import React, { useState } from "react";
import OrderList from "./components/OrderList";
import Image from "next/image";
import CustomButtons from "./components/CustomButtonsTop";
import SearchBar from "@/components/Search/SearchBar";
import GatherEquipment from "./components/GatherEquipment";
import { useRouter } from "next/navigation";
export default function Ordering() {
  const [isAll, setIsAll] = useState(true); // Track the active button
  const router = useRouter();

  // Handle button click
  const handleButtonClick = (isAllSelected: boolean) => {
    setIsAll(isAllSelected);
  };
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full scrollbar-hide relative">
          <TopNavigationBar
            leading={
              <div className="!min-w-[62px] !w-[62px] !h-[34px]">
                <p className="text-grey-font text-[24px] font-bold w-full">
                  발주
                </p>
              </div>
            }
            trailing={
              <div className="!w-[68px] !h-[24px] flex justify-between">
                <SearchIcon />

                <button
                  className=""
                  onClick={() => {
                    router.push("/home/alarm");
                  }}
                >
                  <AlarmIcon />
                </button>
              </div>
            }
          />
          <div className="pt-[50px] pb-[100px] h-full overflow-y-scroll overflow-x-hidden scrollbar-hide z-40">
            <div className="px-[16px] space-y-[20px]">
              <GatherEquipment />
              <div>
                <SearchBar
                  placeholder="장비명, 지역 등 검색어를 입력해 주세요"
                  width=""
                  onClick={() => {
                    router.push("/ordering/register-order");
                  }}
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="space-x-[8px]">
                    <CustomButtons
                      title={"전체"}
                      isActive={isAll}
                      onClick={() => handleButtonClick(true)}
                    />
                    <CustomButtons
                      title={"관심목록"}
                      isActive={!isAll}
                      onClick={() => handleButtonClick(false)}
                    />
                  </div>
                  <div className="flex py-[8px] px-[10px] border-1 border-grey-border rounded-[4px] space-x-[4px]">
                    <Image
                      src={`/assets/icons/filter.svg`}
                      alt="filter"
                      width={16}
                      height={16}
                    />
                    <p className="text-[13px] text-grey-font-light font-pretendardRegular">
                      필터
                    </p>
                  </div>
                </div>
              </div>
              <OrderList isAll={isAll} />
            </div>
          </div>
          <BottomNavigationBar />
        </div>
      }
    />
  );
}
