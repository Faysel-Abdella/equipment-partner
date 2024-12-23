"use client";
import Image from "next/image";
import React from "react";
import TopNavigationBar from "../TopNavigationBar/TopNavigationBar";
import { useRouter } from "next/navigation";
import { BackIcon } from "../icons";

const ConfirmContract = () => {
   const router = useRouter();
  return (
    <div className="space-y-[10px]">
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
            계약서 확인
          </h3>
        }
      />
      <div className="h-[4px] bg-grey-font"></div>
      <div className="px-[16px] mt-[160px]">
        <Image
          src={`/assets/images/confirmcontract.svg`}
          alt="contract"
          width={358}
          height={512}
        />
      </div>
    </div>
  );
};

export default ConfirmContract;
