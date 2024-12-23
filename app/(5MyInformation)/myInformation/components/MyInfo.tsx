import React from "react";
import Personalle from "./Personalle";
import { useRouter } from "next/navigation";

const MyInfo = () => {
  const router = useRouter();
  return (
    <div>
      <div className="px-4 border-b-[7px] pt-6 border-grey-light">
        <p className="font-PretendardBold text-[24px] text-grey-font">내 정보</p>

        <div className="flex flex-col gap-y-[10px] my-[40px]">
          <div className="text-[13px] text-grey-font-light space-y-1 font-pretendardRegular">
            <p>회원가입하고 일용이</p>
            <p>서비스를 이용해보세요!</p>
          </div>
          <button
            className="flex text-main-light-color text-[16px] xs:text-[20px] font-PretendardBold items-center leading-[20px]"
            onClick={() => {
              router.push("/joinTheMembership/welcome");
            }}
          >
            <p>회원가입/로그인 하기</p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 15L13 10L8 5"
                stroke="#429FFF"
                strokeWidth="1.66667"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <Personalle />
    </div>
  );
};

export default MyInfo;
