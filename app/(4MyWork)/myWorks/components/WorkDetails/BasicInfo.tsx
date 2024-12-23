import React from "react";
import Owned from "../../../../../components/Carousel/Owned";
import WorkReport from "../../../../../components/Carousel/WorkReport";

const BasicInfo = () => {
  return (
    <div className="space-y-[20px] ">
      <div className="px-[16px] space-y-[10px] ">
        <p className="text-[16px] font-PretendardBold text-grey-font">
          상세 정보
        </p>
        <div className=" text-[13px] font-pretendardRegular">
          <div className="flex">
            <p className="w-[78px] text-grey-font-light">업체 및 대표자</p>
            <p className="w-[90px] text-grey-font"> ㅇㅇ기업 / 김**</p>
          </div>
          <div className="flex">
            <p className="w-[78px] text-grey-font-light">거래 횟수</p>
            <p className="w-[90px] text-grey-font">12건 </p>
          </div>
          <div className="flex">
            <p className="w-[78px] text-grey-font-light">연락처</p>
            <p className="w-[90px] text-grey-font">010-****-****</p>
          </div>
        </div>
      </div>
      <div className="h-[5px] bg-grey-light"></div>
      <div className="space-y-[10px] px-[16px]">
        <p className="text-[16px] font-PretendardBold text-grey-font">소개</p>
        <p className="text-[13px] font-pretendardRegular text-grey-font-light">
          소개 영역
        </p>
      </div>
      <div className="h-[5px] bg-grey-light"></div>
      <div className="space-y-[10px] px-[16px]">
        <p className="text-[16px] font-PretendardBold text-grey-font">
          {" "}
          작업 가능 지역
        </p>
        <p className="text-[13px] font-pretendardRegular text-grey-font-light">
          경기 평택시
        </p>
        <p className="text-[13px] font-pretendardRegular text-grey-font-light">
          경기 평택시
        </p>
        <p className="text-[13px] font-pretendardRegular text-grey-font-light">
          경기 평택시
        </p>
      </div>
      <div className="h-[5px] bg-grey-light"></div>
      <div className="px-[16px] space-y-[10px]">
        <p className="text-[16px] font-PretendardBold text-grey-font">
          단가정보
        </p>
        <div className=" text-[13px] font-pretendardRegular ">
          <div className="flex gap-[10px]">
            <p className="w-[25px] text-grey-font-light  ">일대</p>
            <p className="text-grey-font">600,000원</p>
          </div>
          <div className="flex gap-[10px]">
            <p className="w-[25px] text-grey-font-light ">월대</p>
            <p className="text-grey-font">12,000,000원</p>
          </div>
        </div>
      </div>
      <div className="h-[5px] bg-grey-light"></div>
      <div className="px-[16px] space-y-[10px]">
        <p className="text-[16px] font-PretendardBold text-grey-font">
          보유 장비
        </p>
        <Owned />
      </div>
      <div className="h-[5px] bg-grey-light"></div>
      <div className="px-[16px] space-y-[10px]">
        <p className="text-[16px] font-PretendardBold text-grey-font">
          소속 기사
        </p>
        <div className="space-y-[4px] text-center w-[100px] border-1 rounded-[4px] font-pretendardRegular  text-[13px] px-[10px] py-[6px]">
          <p className="text-grey-font-light">김** 기사님</p>
          <p className="text-grey-font">포크레인 V30</p>
          <p className="text-grey-font-light">15년차</p>
        </div>
      </div>
      <div className="h-[5px] bg-grey-light"></div>
      <div className="px-[16px] space-y-[10px]">
        <p className="text-[16px] font-PretendardBold text-grey-font">
          {" "}
          전문 작업 분야
        </p>
        <p className="text-[13px] font-pretendardRegular text-grey-font-light">
          전문 작업 분야 소개 영역
        </p>
      </div>
      <div className="h-[5px] bg-grey-light"></div>
      <div className="px-[16px] space-y-[10px]">
        <p className="text-[16px] font-PretendardBold text-grey-font">
          작업 일보
        </p>
        <WorkReport />
      </div>
    </div>
  );
};

export default BasicInfo;
