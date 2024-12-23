import SnackBar from "@/components/SnackBar.tsx/SnackBar";
import Image from "next/image";
import React, { useState } from "react";
const RegistrationInfo = () => {
  const present = [
    "사업자등록증",
    "건설기계 보험증",
    "건설기계 등록증",
    "건설기계 검사증",
    "건설기계 조종사 면허증",
    "특수형태 근로 종사자 수료증",
    "건설업 기초안전보건교육 이수증",
  ];
  const absent = ["건설기계 조종사 안전교육 이수증"];
  const [isSnackBarVisible, setIsSnackBarVisible] = useState(false);
  const handleItemClick = () => {
    setIsSnackBarVisible(true);
    setTimeout(() => {
      setIsSnackBarVisible(false); // Hide SnackBar after 3 seconds
    }, 3000);
  };
  return (
    <div className="w-full mt-[-20px] px-[16px] pb-safe">
      <div className="">
        {present.map((item, index) => (
          <button
            className="flex justify-between items-center w-full py-[10px] text-[13px] font-pretendardRegular !text-grey-font border-b-1 border-grey-border"
            key={index}
            onClick={handleItemClick}
          >
            <p key={index}>{item}</p>
            <Image
              src={`/assets/icons/right.svg`}
              alt="right"
              width={16}
              height={16}
            />
          </button>
        ))}
        {absent.map((item, index) => (
          <div
            className="flex justify-between items-center w-full py-[10px] text-[13px]  !text-grey-font "
            key={index}
          >
            <p key={index}>{item}</p>
            <Image
              src={`/assets/icons/close.svg`}
              alt="right"
              width={16}
              height={16}
            />
          </div>
        ))}
      </div>
      {isSnackBarVisible && (
        <SnackBar
          message={"채팅 후 확인 및 공유가 가능합니다."}
          bottomMargin="bottom-[40px]"
        />
      )}
    </div>
  );
};

export default RegistrationInfo;
