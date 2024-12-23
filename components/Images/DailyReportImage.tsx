"use client";
import React from "react";
import TopNavigationBar from "../TopNavigationBar/TopNavigationBar";
import { useRouter } from "next/navigation";
import { BackIcon } from "../icons";
import Image from "next/image";

const DailyReportImage = () => {
  const router = useRouter();
  return (
    <div className="space-y-[40px]">
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
            일보 확인
          </h3>
        }
      />
      <div className="h-[1px] bg-grey-border"></div>
      <div className="px-[16px]">
        <Image
          src={`/assets/images/dailyreport.svg`}
          alt="contract"
          width={358}
          height={351}
        />
      </div>
    </div>
  );
};

export default DailyReportImage;
