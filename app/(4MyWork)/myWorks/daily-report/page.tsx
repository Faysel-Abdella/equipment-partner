"use client";
import Image from "next/image";
import React from "react";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import { BackIcon } from "@/components/icons";
import DisplaySpace from "@/components/DisplaySpace";
import { useRouter } from "next/navigation";
export default function DailyReportPage() {
  const router = useRouter();
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full overflow-y-scroll scrollbar-hide relative">
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
                계약서 확인
              </h3>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />

          <div className="pt-[78px] h-full relative overflow-y-scroll overflow-x-hidden scrollbar-hide z-40 px-4">
            <Image
              src={`/assets/images/dailyreport.svg`}
              alt="contract"
              width={358}
              height={351}
              className="mt-5 w-full aspect-auto mb-5"
            />
          </div>
        </div>
      }
    />
  );
}
