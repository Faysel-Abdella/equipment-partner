import React from "react";
import { CustomButton } from "../button/Button";
import Input from "../input/Input";

export default function MyInformationForm() {
  return (
    <div className="w-full h-full pt-5 flex flex-col gap-y-[30px]">
      <div className={`flex flex-col gap-y-[8px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          이름
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <Input type={""} value={"홍길동"} placeholder={""} />
        </div>
      </div>

      <div className={`flex flex-col gap-y-[8px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          휴대폰번호
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <div className="flex gap-[8px]">
            <div className="w-full">
              <Input type={""} value={"01011112222"} placeholder={""} />
            </div>
            <CustomButton
              label={"인증"}
              backgroundColor={"bg-white border-[1px] border-main-color"}
              textStyle={"font-PretendardBold text-[13px] text-main-color"}
              width="!w-[38px]"
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
              <Input
                type={""}
                placeholder={"서울특별시 금천구 가산로 1"}
                value={""}
                disabled={true}
              />
            </div>
            <CustomButton
              label={"검색"}
              backgroundColor={"bg-white border-[1px] border-main-color"}
              textStyle={"font-PretendardBold text-[13px] text-main-color"}
              width="!w-[38px]"
              height="!h-[42px]"
            />
          </div>
          <Input type={""} value={"101호"} placeholder={""} />
        </div>
      </div>
    </div>
  );
}
