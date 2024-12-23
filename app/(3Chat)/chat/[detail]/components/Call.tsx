import React from "react";
import messageSender from "@/public/assets/images/cino.svg";
import Image from "next/image";
import { PhoneIcon } from "@/components/icons";
interface CustomCallBubbleProps {
  items: {
    timestamp: string;
    read: boolean;
  }[];
  isRightAligned: boolean;
  profileImage?: string;
}

export default function CallBubble({
  items,
  isRightAligned,
  profileImage,
}: CustomCallBubbleProps) {
  return (
    <div
      className={`w-full flex pb-[10px] px-[16px] ${
        isRightAligned ? "justify-end" : "justify-start"
      }`}
    >
      {!isRightAligned && (
        <div className="flex items-start pr-[10px]">
          {profileImage ? (
            <Image
              src={messageSender}
              className="w-[30px] h-[30px] rounded-[10px]"
              alt={"messageSender"}
            />
          ) : (
            <div className="w-[30px] h-[30px] rounded-[10px] bg-[#cfe2f9]" />
          )}
        </div>
      )}
      <div className="flex flex-col gap-y-[10px]">
        {items.map((item, index) => (
          <div key={index} className="flex">
            {isRightAligned && (
              <div className="flex flex-col self-end pr-[4px] items-end">
                {!item.read && (
                  <span className="text-[10px] text-message-bubble-blue font-pretendardRegular">
                    안 읽음
                  </span>
                )}
                <span className="text-[10px] text-grey-disabled font-pretendardRegular">
                  {item.timestamp}
                </span>
              </div>
            )}
            <div
              key={index}
              className={`flex justify-center items-center px-[16px] py-[12px] gap-x-[10px] 
                  rounded-[12px] bg-white border-[1px] border-grey-border ${
                    isRightAligned ? "" : ""
                  }`}
            >
              <div className="!w-[20px] !h-[20px] flex justify-center items-center">
                <PhoneIcon fillColor="#abafb9" strokeColor="#abafb9" />
              </div>
              <span className="font-pretendardRegular text-[13px] text-grey-font-light">
                전화
              </span>
            </div>

            {!isRightAligned && (
              <div className="flex flex-col self-end pl-[4px] items-start">
                {!item.read && (
                  <span className="text-[10px] text-message-bubble-blue font-pretendardRegular">
                    안 읽음
                  </span>
                )}
                <div className="text-[10px] text-grey-disabled font-pretendardRegular self-end">
                  {item.timestamp}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
