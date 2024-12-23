import Image from "next/image";
import React from "react";

interface JobDetailsProps {
  recruiting: boolean;
}

const JobDetails: React.FC<JobDetailsProps> = ({ recruiting }) => {
  const data = {
    장비: "굴착기 06W",
    작업일: "2024.12.01",
    작업위치: "인천 부평구 갈산동",
    희망비용: "제안받기",
    구분: "임대 (장비+기사)",
    지급일자: "작업 종료일",
  };

  return (
    <div className="space-y-[20px] overflow-y-hidden relative ">
      <div className="space-y-[10px] px-[16px]">
        <p className="text-[16px] text-grey-font font-PretendardBold">
          상세 정보
        </p>
        {recruiting ? (
          <p className="inline-block items-center text-[10px] px-[4px] py-[2px] rounded-[2px] text-main-color bg-blue-bg ">
            모집중
          </p>
        ) : (
          <p className="inline-block items-center text-[10px] px-[4px] py-[2px] rounded-[2px] text-[#9761FF] bg-[#EFE7FF] ">
            배차완료
          </p>
        )}
        {Object.entries(data).map(([key, value]) => (
          <div
            key={key}
            className="flex gap-[4px] text-[13px] font-pretendardRegular"
          >
            <p className="w-[45px] text-grey-font-light">{key}</p>
            <p className="text-grey-font"> {value}</p>
          </div>
        ))}
      </div>
      <div className="h-[1px] bg-grey-light px-[20px]"></div>
      <div className="text-[13px] space-y-[10px] px-[16px] font-pretendardRegular">
        <p className="text-grey-font-light">우대사항 및 요청사항</p>
        <p className="text-grey-font">늦지 말아주세요</p>
      </div>
      <div className="h-[1px] bg-grey-light px-[20px]"></div>
      <div className="space-y-[10px] px-[16px]">
        <p className="text-[13px] font-pretendardRegular text-grey-font-light">
          등록 이미지
        </p>
        <Image
          src={`/assets/images/item.png`}
          alt="item picture"
          width={78}
          height={77}
          className="rounded-[6px]"
        />
      </div>
      {/* <div className="fixed bottom-[20px] w-full px-[16px] flex gap-[10px] text-[16px] font-PretendardBold">
        <CustomButton
          backgroundColor="bg-white border-1 border-main-color"
          label="수정"
          textStyle=" text-main-color"
        />
        <CustomButton
          backgroundColor="bg-main-color"
          label="작업 취소"
          textStyle=" text-white"
        />
      </div>
      <div className="h-[5px] bg-grey-light "></div>
      <div className="space-y-[10px] px-[16px]">
        <p className="text-[16px] font-PretendardBold text-grey-font">계약서</p>
        <CustomButton
          backgroundColor="bg-blue-bg"
          label="계약서 작성하기"
          textStyle="text-main-color text-[13px] font-PretendardBold"
        />
      </div>
      <div className="h-[5px] bg-grey-light "></div>
      <div className="space-y-[10px] px-[16px]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[16px] font-PretendardBold text-grey-font">
            세금계산서
          </p>
          <p className="inline-block items-center text-[10px] px-[4px] py-[2px] rounded-[2px] text-main-color bg-blue-bg ">
            미완성
          </p>
        </div>

        <CustomButton
          backgroundColor="bg-blue-bg"
          label="신청하기"
          textStyle="text-main-color text-[13px] font-PretendardBold"
        />
      </div>
      <div className="h-[5px] bg-grey-light "></div>
      <div className="px-[16px] space-y-[10px]">
        <p className="text-[16px] font-PretendardBold text-grey-font">
          작업일보 (작업확인서)
        </p>
        <p className="h-[58px] flex gap-[10px] items-center justify-center text-[13px] text-grey-font-light font-pretendardRegular">
          작업일보 내역이 없습니다
        </p>
      </div> */}
    </div>
  );
};

export default JobDetails;
