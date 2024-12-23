import React from "react";
import messageSender from "@/public/assets/images/cino.svg";
import Image from "next/image";
import ChatSentPicture from "@/public/assets/images/chatSent.svg";
interface CustomMessageBubbleProps {
  items: {
    message: string;
    timestamp: string;
    read: boolean;
    image?: string;
  }[];
  isRightAligned: boolean;
  profileImage?: string;
}

export default function MessageBubble({
  items,
  isRightAligned,
  profileImage,
}: CustomMessageBubbleProps) {
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
              className="w-[30px] h-[30px] rounded-[8px]"
              alt={"messageSender"}
            />
          ) : (
            <div className="w-[30px] h-[30px] rounded-[8px] bg-[#cfe2f9]" />
          )}
        </div>
      )}
      <div className="flex flex-col gap-y-[10px] max-w-[80%] xs:max-w-none">
        {items.map((item, index) => (
          <div key={index} className="flex">
            {isRightAligned && (
              <div className="flex flex-col self-end pr-[4px] items-end">
                {!item.read && (
                  <span className="text-[8px] xs:text-[10px] text-message-bubble-blue font-pretendardRegular">
                    안 읽음
                  </span>
                )}
                <span className="text-[8px] xs:text-[10px] text-grey-disabled font-pretendardRegular">
                  {item.timestamp}
                </span>
              </div>
            )}
            {item.image != undefined ? (
              <div
                key={index}
                className={`flex flex-col justify-center items-start ${
                  item.image != undefined
                    ? "max-w-[185px] xs:max-w-[197px] min-w-[180px] xs:min-w-[197px] !h-[128px] "
                    : "max-w-[250px] xs:max-w-[276px] "
                } rounded-[12px] overflow-hidden`}
              >
                <Image
                  src={ChatSentPicture}
                  alt={""}
                  className="w-full  h-full object-cover"
                />
              </div>
            ) : (
              <div
                key={index}
                className={`flex flex-col justify-center items-start ${
                  item.image != undefined
                    ? "max-w-[197px] !h-[128px] "
                    : "max-w-[185px] xs:max-w-[276px] "
                } px-[16px] py-[12px] ${
                  isRightAligned
                    ? "bg-message-bubble-blue rounded-l-[24px] rounded-br-[20px]"
                    : "bg-white rounded-r-[24px] rounded-bl-[20px]"
                }`}
              >
                <div
                  className={`break-words font-pretendardRegular text-[13px] xs:text-[16px] ${
                    isRightAligned ? "text-white" : "text-grey-font"
                  }`}
                >
                  {item.message}
                </div>
              </div>
            )}

            {!isRightAligned && (
              <div className="flex flex-col self-end pl-[4px] items-start">
                {!item.read && (
                  <span className="text-[8px] xs:text-[10px] text-message-bubble-blue font-pretendardRegular">
                    안 읽음
                  </span>
                )}
                <div className="text-[8px] text-grey-disabled font-pretendardRegular self-end">
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
