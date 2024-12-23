"use client";
import React from "react";
import SearchResult from "../../../components/SearchResult";
import DisplaySpace from "@/components/DisplaySpace";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import { BackIcon } from "@/components/icons";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full overflow-y-scroll scrollbar-hide relative overflow-x-hidden">
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
                검색 결과
              </h3>
            }
          />
          <div className="mt-[80px] space-y-[20px]">
            <div className="h-[1px] bg-grey-border"></div>
            <SearchResult />
          </div>
        </div>
      }
    />
  );
};

export default Page;
