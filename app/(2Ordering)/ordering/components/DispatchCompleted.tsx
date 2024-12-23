import React from "react";
import DailyReport from "./DailyReport";
import { CustomButton } from "@/components/button/Button";
import { useRouter } from "next/navigation";

interface DispatchCompletedProps {
  status: string;
}
const DispatchCompleted: React.FC<DispatchCompletedProps> = ({ status }) => {
  const router = useRouter();
  return (
    <div className="space-y-[20px]">
      {/* <div className="space-y-[10px] px-[16px]">
        <p className="text-[16px] font-PretendardBold text-grey-font">계약서</p>
        <CustomButton
          backgroundColor="bg-blue-bg"
          label="계약서 작성하기"
          textStyle="text-main-color text-[13px] font-PretendardBold"
        />
      </div> */}
      <div className="space-y-[10px] px-[16px]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[16px] font-PretendardBold text-grey-font">
            계약서
          </p>
          {status === "completed" ? (
            <p className="inline-block items-center text-[10px] px-[4px] py-[2px] rounded-[2px] text-main-color bg-blue-bg">
              미완성
            </p>
          ) : (
            <p className="inline-block items-center text-[10px] px-[4px] py-[2px] rounded-[2px] text-grey-font bg-grey-light">
              완료
            </p>
          )}
        </div>
        {/* {status === "unfinished" ? (
          <div className="flex items-center justify-between w-full">
            <p className="text-[16px] font-PretendardBold text-grey-font">
              세금계산서
            </p>
            <p className="inline-block items-center text-[10px] px-[4px] py-[2px] rounded-[2px] text-grey-font bg-blue-bg">
              미완성
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <p className="text-[16px] font-PretendardBold text-grey-font">
              세금계산서
            </p>
          </div>
        )} */}

        <CustomButton
          backgroundColor="bg-blue-bg"
          label="신청하기"
          textStyle="text-main-color text-[13px] font-PretendardBold"
          onPress={() => {
            if (status !== "completed") {
              router.push("/chat/john/confirm-contract-incomplete");
            } else {
              router.push("/chat/john/confirmed-contract");
            }
          }}
        />
      </div>
      <div className="h-[5px] bg-grey-light"></div>
      <div className="space-y-[10px] px-[16px]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[16px] font-PretendardBold text-grey-font">
            세금계산서
          </p>
          {status === "completed" ? (
            <p className="inline-block items-center text-[10px] px-[4px] py-[2px] rounded-[2px] text-main-color bg-[#E9EEFE]">
              신청완료
            </p>
          ) : (
            <p className="inline-block items-center text-[10px] px-[4px] py-[2px] rounded-[2px] text-grey-font bg-[#E9EEFE]">
              발행완료
            </p>
          )}
        </div>
        <CustomButton
          backgroundColor="bg-blue-bg"
          label="신청하기"
          textStyle="text-main-color text-[13px] font-PretendardBold"
          onPress={() => {
            if (status == "completed") {
              router.push("/myWorks/tax-invoice");
            }
          }}
        />
      </div>
      <div className="h-[5px] bg-grey-light "></div>
      <DailyReport status={status} />
    </div>
  );
};

export default DispatchCompleted;
