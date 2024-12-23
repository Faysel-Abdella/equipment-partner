"use client";
import BottomNavigationBar from "@/components/BottomNavigation/BottomNavigationBar";
import { EquipmentBottomSheet } from "@/components/BottomSheet/EquipmentBottomSheet";
import { SortingBottomSheet } from "@/components/BottomSheet/SortingBottomSheet";
import BusinessList from "./components/BusinessList";
import GreetingsCarousel from "@/components/Carousel/Greetings";
import RecommendedCarousel from "@/components/Carousel/Recommended";
import DisplaySpace from "@/components/DisplaySpace";
import HomePlusButton from "@/components/HomePlus/homePlusButton";
import { LocationIcon } from "@/components/icons";
import SearchBar from "@/components/Search/SearchBar";
import CustomNavigationSelect from "@/components/Select/SelectWithNavigation";
import { AlarmIcon } from "@/components/TopNavigationBar/Icons";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
export default function Home() {
  const [ishomePlusOpen, setHomePlusOpen] = useState(false);
  const [isFirstBottomSheetOpen, setFirstBottomSheetOpen] = useState(false);
  const [isSecondBottomSheetOpen, setSecondBottomSheetOpen] = useState(false);
  const router = useRouter();
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full scrollbar-hide relative">
          <TopNavigationBar
            leading={
              <div className="xs:w-[300px] max-w-[300px] !h-[34px] overflow-hidden">
                <span className="text-main-color text-[24px] font-PretendardBold leading-[34px]">
                  홍길동{" "}
                </span>
                <span className="text-grey-font text-[24px] font-PretendardBold leading-[34px]">
                  님 안녕하세요!
                </span>
              </div>
            }
            trailing={
              <button
                className="!w-[24px] !h-[24px]"
                onClick={() => {
                  router.push("/home/alarm");
                }}
              >
                <AlarmIcon />
              </button>
            }
            padding="pt-[24px] pb-[20px]"
          />

          <div className="!z-50 pb-[100px] h-full overflow-y-auto overflow-x-hidden scrollbar-hide bg-white">
            <div className="!h-[78px]"></div>
            <GreetingsCarousel />
            <div className="flex flex-col gap-y-[10px] pl-4 mt-5">
              <div className="flex justify-between !h-[28px] pr-4">
                <span className="font-PretendardBold text-[16px] xs:text-[20px] text-grey-font">
                  장파가 추천하는 뜨끈한 신규 장비
                </span>
                <span className="font-pretendardRegular text-[13px] xs:text-[16px] text-grey-font-light">
                  더보기
                </span>
              </div>
              <RecommendedCarousel />
            </div>
            <div className="w-full mb-[20px] px-4 mt-[30px]">
              <SearchBar
                placeholder={"장비명, 지역 등 검색어를 입력해 주세요"}
                width={""}
                onClick={() => {
                  router.push("/home/equipment-search");
                }}
              />
            </div>
            <div className="w-full flex justify-between items-center !max-h-[34px] px-[16px]">
              <div className="flex gap-x-1 items-center !h-[18px]">
                <LocationIcon fillColor="#429FFF" />
                <span className="font-PretendardBold text-[13px] text-grey-font flex items-center">
                  인천 부평구
                </span>
              </div>
              <div className="flex gap-x-[10px]">
                <CustomNavigationSelect
                  text="최근 등록순"
                  OnClick={() => {
                    setFirstBottomSheetOpen(true);
                  }}
                />
                <CustomNavigationSelect
                  text="장비 전체"
                  OnClick={() => {
                    setSecondBottomSheetOpen(true);
                  }}
                />
              </div>
            </div>
            <div className="pt-5">
              <BusinessList />
            </div>
          </div>

          <SortingBottomSheet
            isOpen={isFirstBottomSheetOpen}
            setIsOpen={setFirstBottomSheetOpen}
          />
          <EquipmentBottomSheet
            isOpen={isSecondBottomSheetOpen}
            setIsOpen={setSecondBottomSheetOpen}
          />
          <HomePlusButton
            isOpen={ishomePlusOpen}
            setPlusOpen={setHomePlusOpen}
          />
          <BottomNavigationBar />
        </div>
      }
    />
  );
}
