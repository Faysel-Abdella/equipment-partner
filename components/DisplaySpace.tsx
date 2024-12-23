import { ReactNode } from "react";
import {
  AppleLogo,
  GooglePlayLogo,
  LogoTextIcon,
} from "./TopNavigationBar/Icons";
import { ContactHelpIcon } from "./icons";

interface DisplaySpaceProps {
  content: ReactNode;
}

export default function DisplaySpace({ content }: DisplaySpaceProps) {
  return (
    <div className="w-full h-screen bg-white mlg:bg-white flex justify-center mlg:gap-x-20">
      {/* Cover Screen */}

      <div className="hidden mlg:flex !max-w-[390px] !w-[390px] h-screen !pt-[4vh] !pb-[5.4vh]">
        <div className="w-full h-full mx-auto flex flex-col justify-between">
          <div className="!w-[198px] !h-[50px] !max-w-[198px] !max-h-[50px] ">
            <LogoTextIcon />
          </div>

          <div className="flex w-full flex-col">
            <div className="min-w-full">
              <div className="font-PretendardBold text-[40px] leading-[50px] text-grey-font w-full">
                <h1>나는 모바일에서</h1>
                <h1>간편하게 중장비 부른다!</h1>
              </div>
              <div className="mt-[18px] font-PretendardBold text-[20px] text-grey-font w-full">
                <h3>내 손안에 중장비 배차 사무실 ‘장비파트너&apos;</h3>
                <h3>전국 건설 중장비 배치, 베테랑 장기기사 배정</h3>
              </div>
            </div>

            <div className="mt-[83px] flex gap-x-[4px] items-center font-PretendardBold text-main-color text-[30px]">
              <ContactHelpIcon fillColor={"#255df9"} />
              <p>고객센터</p>
              <p>1555-2838</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mt-[83px] flex items-center font-PretendardBold text-grey-font text-[20px]">
              <p>장비파트너 APP 다운로드</p>
            </div>
            <div className="flex gap-x-[12px] mt-[10px]">
              <button className="w-[139px] h-[48px] bg-black rounded-[6px] flex items-center justify-center px-[12px] gap-x-[8px]">
                <GooglePlayLogo />
                <p className="text-[16px] leading-[px] text-white font-PretendardLight">
                  Google Play
                </p>
              </button>
              <button className="w-[139px] h-[48px] bg-black rounded-[6px] flex items-center justify-center px-[12px] gap-x-[8px]">
                <AppleLogo />
                <p className="text-[16px] leading-[px] text-white font-PretendardLight">
                  App Store
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="!max-w-[390px] !w-full !h-screen overflow-hidden !z-30 border-r border-l border-grey-border pb-safe">
        {content}
      </div>
    </div>
  );
}
