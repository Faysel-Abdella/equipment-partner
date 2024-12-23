"use client";
import { BusinessSearchList } from "@/app/(1Home)/home/components/BusinessList";
import BottomNavigationBar from "@/components/BottomNavigation/BottomNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon } from "@/components/icons";
import SearchBar from "@/components/Search/SearchBar";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import { useRouter } from "next/navigation";
import React from "react";

// interface EquipmentSearchResultProps {
//   params: {
//     searchResult?: string;
//   };
// }

// export default function EquipmentSearchResult({
//   params,
// }: EquipmentSearchResultProps) {

export default function EquipmentSearchResult() {
  const router = useRouter();
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full max-w-full overflow-y-scroll scrollbar-hide relative">
          <TopNavigationBar
            leading={
              <button
                className=""
                onClick={() => {
                  router.push("/home/equipment-buisness-search");
                }}
              >
                <BackIcon
                  className="min-w-[10px] min-h-[12px]"
                  fillColor="#80808e"
                />
              </button>
            }
            middle={
              <div className="!mr-[-16px]">
                <SearchBar
                  placeholder={""}
                  value={"가산 굴착기"}
                  width={"!w-[70%] xs:!w-[328px]"}
                  onClick={() => {
                    router.push("/home/equipment-search/");
                  }}
                />
              </div>
            }
            bottomBorder="border-b-[1px] border-grey-light"
          />
          <div className=" pb-[100px] overflow-y-auto scrollbar-hide relative max-h-screen">
            <div className="!h-[78px]"></div>
            <div className="pt-5">
              <BusinessSearchList />
            </div>
          </div>

          <BottomNavigationBar />
        </div>
      }
    />
  );
}
