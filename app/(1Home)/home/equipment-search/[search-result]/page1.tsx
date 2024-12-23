"use client";
import BottomNavigationBar from "@/components/BottomNavigation/BottomNavigationBar";
import { EquipmentBottomSheet } from "@/components/BottomSheet/EquipmentBottomSheet";
import { SortingBottomSheet } from "@/components/BottomSheet/SortingBottomSheet";
import DisplaySpace from "@/components/DisplaySpace";
import HomePlusButton from "@/components/HomePlus/homePlusButton";
import { AlarmIcon } from "@/components/TopNavigationBar/Icons";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
export default function EquipmentSearchResult() {
  const [ishomePlusOpen, setHomePlusOpen] = useState(false);
  const [isFirstBottomSheetOpen, setFirstBottomSheetOpen] = useState(false);
  const [isSecondBottomSheetOpen, setSecondBottomSheetOpen] = useState(false);
  const router = useRouter();
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full max-w-full overflow-y-scroll scrollbar-hide relative">
          <TopNavigationBar
            leading={
              <div className="xs:w-[300px] max-w-[300px] !h-[34px] overflow-hidden">
                <span className="text-grey-font text-[24px] font-PretendardBold">
                  검색 결과
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
          />
          <div className=" pb-[100px] overflow-y-auto scrollbar-hide relative max-h-screen">
            <div className="!h-[78px]"></div>
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
