import React from "react";
import Personalle from "./Personalle";

const Name = () => {
  return (
    <div>
      <div className="px-4 border-b-[7px] pt-6 border-grey-light">
        <p className="font-PretendardBold text-[24px] text-grey-font">내 정보</p>

        <div className="flex flex-col gap-y-[10px] my-[40px]">
          <div className="flex gap-x-2">
            <p className=" text-[20px] text-grey-font font-PretendardBold">홍길동</p>
            <div className="flex rounded-[2px] bg-main-light-color bg-opacity-15 items-center px-2 py-1 gap-x-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00039 7.00039C8.54739 7.00039 9.80039 5.74739 9.80039 4.20039C9.80039 2.65339 8.54739 1.40039 7.00039 1.40039C5.45339 1.40039 4.20039 2.65339 4.20039 4.20039C4.20039 5.74739 5.45339 7.00039 7.00039 7.00039ZM7.00039 8.40039C5.13139 8.40039 1.40039 9.33839 1.40039 11.2004V11.9004C1.40039 12.2854 1.71539 12.6004 2.10039 12.6004H11.9004C12.2854 12.6004 12.6004 12.2854 12.6004 11.9004V11.2004C12.6004 9.33839 8.86939 8.40039 7.00039 8.40039Z"
                  fill="#429FFF"
                />
              </svg>

              <p className="text-main-light-color text-[13px] font-pretendardRegular">발주사/개인</p>
            </div>
          </div>
        </div>
      </div>
      <Personalle />
    </div>
  );
};

export default Name;
