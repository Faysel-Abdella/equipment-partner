import React from "react";
import { OrderingIcon } from "../BottomNavigation/Icons/ordering";
import { ContactHelpIcon } from "../icons";
import { useRouter } from "next/navigation";

interface HomePlusButtonProps {
  isOpen: boolean;
  setPlusOpen: (value: boolean) => void;
}

const HomePlusButton: React.FC<HomePlusButtonProps> = ({
  isOpen,
  setPlusOpen,
}) => {
  const router = useRouter();
  return (
    <div
      className={` ${
        isOpen
          ? "bg-black/85 !z-50 w-full h-screen  absolute top-0 left-0 px-0 mx-0 overflow-hidden "
          : ""
      }`}
    >
      <div className="absolute bottom-[104px] right-0 pr-[16px] !w-full flex flex-col items-end justify-end ">
        {isOpen && (
          <div className=" mb-[20px] flex flex-col gap-y-[20px]  items-end">
            {/* ??w-[185px] max-w-[185px] */}
            <div className="flex justify-between gap-0 items-center ">
              {/* //w-[185px] max-w-[185px] */}
              <div className="pr-[16px] h-[40px] flex flex-col justify-center items-end">
                <h4 className="text-[16px] text-white font-pretendardRegular text-end">
                  고객센터 전화하기 <br />
                  (월대문의, 긴급배차)
                </h4>
              </div>
              <button
                className="rounded-full !w-[60px] !h-[60px] bg-white flex items-center justify-center"
                onClick={() => {
                }}
              >
                <div
                  className={`!w-[28px] !h-[28px] flex items-center justify-center `}
                >
                  <ContactHelpIcon fillColor={"#255df9"} />
                </div>
              </button>
            </div>
            <div className="flex justify-between gap-0 items-center !max-w-[162px] !w-[162px]">
              <div className="pr-[16px] h-[40px] w-[113px] flex flex-col justify-center">
                <h4 className="text-[16px] text-white font-pretendardRegular">
                  발주 등록하기
                </h4>
              </div>
              <button
                className="rounded-full !w-[60px] !h-[60px] bg-white flex items-center justify-center"
                onClick={() => {
                  router.push("/ordering/register-order");
                }}
              >
                <div
                  className={`!w-[28px] !h-[28px] flex items-center justify-center  `}
                >
                  <OrderingIcon fillColor={"#255df9"} />
                </div>
              </button>
            </div>
          </div>
        )}
        <button
          className="rounded-full !w-[60px] !h-[60px] bg-main-color flex items-center justify-center z-40"
          onClick={() => setPlusOpen(!isOpen)}
        >
          <div
            className={`!w-[28px] !h-[28px] flex items-center justify-center ${
              isOpen ? "transition-transform duration-300 rotate-[-225deg]" : ""
            }`}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 2.15234V25.8447" stroke="white" strokeWidth="3" />
              <path d="M25.8477 14L2.15535 14" stroke="white" strokeWidth="3" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomePlusButton;
