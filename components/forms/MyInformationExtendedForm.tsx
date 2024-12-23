import React from "react";
import { CustomButton } from "../button/Button";
import Input from "../input/Input";
import CameraInput from "../cameraInput/CameraInput";

export default function MyInformationExtendedForm() {
  return (
    <div className="w-full h-full pt-5 flex flex-col gap-y-[30px] relative">
      <div className={`flex flex-col gap-y-[8px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          사업자 정보 입력
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <div className="flex gap-[8px]">
            <div className="w-full">
              <Input type={""} placeholder={"전화번호 입력"} />
            </div>
            <CustomButton
              label={"중복확인"}
              backgroundColor={"bg-white border border-main-color"}
              textStyle={"font-PretendardBold text-[13px] text-main-color"}
              width="!w-[38px]"
              height="!h-[42px]"
            />
          </div>
        </div>
      </div>

      <div className={`flex flex-col gap-y-[8px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          사업장명
        </label>
        <div className="flex flex-col gap-y-[10px] w-full">
          <Input type={""} placeholder={"사업장명 입력"} />
        </div>
      </div>

      <div className={`flex flex-col gap-y-[8px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          대표자명
        </label>
        <div className="flex flex-col gap-y-[10px] w-full">
          <Input type={""} placeholder={"사업장명 입력"} />
        </div>
      </div>

      <div className={`flex flex-col gap-y-[8px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          전화번호
        </label>
        <div className="flex flex-col gap-y-[10px] w-full">
          <div className={`flex flex-col gap-y-[8px] `}>
            <label className="text-grey-font-light text-[13px] font-PretendardBold">
              사무실(선택)
            </label>
            <div className="flex flex-col gap-y-[10px] w-full">
              <Input type={""} placeholder={"사업장명 입력"} />
            </div>
          </div>

          <div className={`flex flex-col gap-y-[8px] `}>
            <label className="text-grey-font-light text-[16px] font-PretendardBold">
              휴대폰
            </label>
            <div className="flex flex-col gap-y-[10px] w-full">
              <div className="flex gap-[8px]">
                <div className="w-full">
                  <Input type={""} placeholder={"전화번호 입력"} />
                </div>
                <CustomButton
                  label={"인증"}
                  backgroundColor={"bg-white border border-main-color"}
                  textStyle={"font-PretendardBold text-[13px] text-main-color"}
                  width="!w-[38px]"
                  height="!h-[42px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`flex flex-col gap-y-[8px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          사업장 주소
        </label>
        <div className="flex flex-col gap-y-[10px] ">
          <div className="flex gap-[8px]">
            <div className="w-full">
              <Input type={""} placeholder={"이름 입력"} />
            </div>
            <CustomButton
              label={"검색"}
              backgroundColor={"bg-white border border-main-color"}
              textStyle={"font-PretendardBold text-[13px] text-main-color"}
              width="!w-[38px]"
              height="!h-[42px]"
            />
          </div>
          <div className="w-full">
            <Input type={""} placeholder={"전화번호 입력"} />
          </div>
        </div>
      </div>

      <div className={`flex flex-col gap-y-[8px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          사업자등록증 <br />
          <span className="font-pretendardRegular text-[13px] text-grey-font-light">
            계좌사본을 첨부해주세요
          </span>
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <CameraInput />
        </div>
      </div>

      <div className={`flex flex-col gap-y-[8px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          정산 정보
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <div className="w-full">
            <Input type={""} placeholder={"은행명 입력"} />
          </div>
          <div className="w-full">
            <Input type={""} placeholder={"예금주 입력"} />
          </div>
          <div className="w-full">
            <Input type={""} placeholder={"계좌번호 입력"} />
          </div>
          <span className="font-pretendardRegular text-[13px] text-grey-font-light">
            계좌사본을 첨부해주세요
          </span>
          <CameraInput />
        </div>
      </div>

      <div className={`flex flex-col gap-y-[8px] px-4 `}>
        <label className="text-grey-font text-[16px] font-PretendardBold">
          세금 계산서 정보(선택)
        </label>
        <div className="flex flex-col gap-y-[10px]">
          <div className="w-full">
            <Input type={""} placeholder={"담당자명 입력"} />
          </div>
          <div className="w-full">
            <Input type={""} placeholder={"담당자 연락처 입력"} />
          </div>
          <div className="w-full">
            <Input type={""} placeholder={"담당자 연락처 입력"} />
          </div>
        </div>
      </div>

      <div className={`flex flex-col gap-y-[8px] px-4 `}>
        <div className="flex flex-col !h-[42px] justify-between">
          <label className="text-grey-font text-[16px] font-PretendardBold leading-[22px]">
            기타 서류를 등록해 주세요 (건설업 등록증 등) (선택)
          </label>
        </div>

        <div className="flex flex-col gap-y-[10px]">
          <CameraInput />
        </div>
      </div>

      <div className="!h-[106px] min-h-[106px]"></div>
    </div>
  );
}
