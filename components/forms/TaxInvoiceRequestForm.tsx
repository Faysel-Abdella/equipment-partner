import React from "react";
import DatePicker from "../datePicker/DatePicker";
import Input from "../input/Input";

export default function TaxInvoiceRequestForm() {
  return (
    <div className="w-full h-full pt-5">
      <div className="px-4">
        <DatePicker
          type={""}
          placeholder={"날짜 선택"}
          label={"발행요청일자"}
        />
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          공급가액
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <div className="flex gap-x-[10px] items-center">
            <div className="w-full !h-[42px]">
              <Input type={""} placeholder={"공급가 입략"} />
            </div>{" "}
            <span>원</span>
          </div>
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          세액
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <span className="font-pretendardRegular text-grey-font text-[13px]">
            자동 계산
          </span>
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>

      <div className={`flex flex-col gap-y-[20px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          합계
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <span className="font-pretendardRegular text-grey-font text-[13px]">
            자동 계산
          </span>
        </div>
      </div>

      <div className="!h-[5px] bg-grey-light w-full my-5"></div>
      <div className="px-4">
        <Input
          type={""}
          label={"이메일주소"}
          value={"abc123@aaa.com"}
          placeholder={""}
        />
      </div>

      {/* <div className="flex gap-x-[10px] px-4 pt-[40px] !h-[54px] pb-10">
        <CustomButton
          label={"저장 후 다음"}
          backgroundColor={"bg-main-color"}
          textStyle={"text-white text-[16px] font-PretendardBold"}
          height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
          onPress={() => {
            router.push("/chat/example7");
          }}
        />
      </div>
      <div className="pb-3"></div> */}
    </div>
  );
}
