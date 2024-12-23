import React from "react";
import { CustomButton } from "../button/Button";
import Input from "../input/Input";

export default function JoinMembership2Form() {
  return (
    <div className="w-full h-full pt-5 flex flex-col gap-y-[30px] ">
      <div className={`flex flex-col gap-y-[8px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          이름
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <Input type={""} placeholder={"이름 입력"} value={""} />
        </div>
      </div>

      <div className={`flex flex-col gap-y-[8px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          휴대폰번호
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <div className="flex gap-[8px]">
            <div className="w-full">
              <Input type={""} placeholder={"휴대폰번호 입력"} value={""} />
            </div>
            <CustomButton
              label={"인증"}
              backgroundColor={"bg-[#e9eefe]"}
              textStyle={"font-PretendardBold text-[13px] text-main-color"}
              width="!w-[38px]"
              borderRadius="!rounded-[6px]"
              height="!h-[42px]"
            />
          </div>
        </div>
      </div>

      <div className={`flex flex-col gap-y-[8px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          주소
        </label>
        <div className="flex flex-col gap-y-[8px]">
          <div className="flex gap-[8px]">
            <div className="w-full">
              <Input type={""} placeholder={"주소 입력"} disabled={true} />
            </div>
            <CustomButton
              label={"검색"}
              backgroundColor={"bg-[#e9eefe]"}
              textStyle={"font-PretendardBold text-[13px] text-main-color"}
              width="!w-[38px]"
              height="!h-[42px]"
              borderRadius="!rounded-[6px]"
            />
          </div>
          <Input type={""} value={""} placeholder={"상세 주소 입력"} />
        </div>
      </div>
    </div>
  );
}
