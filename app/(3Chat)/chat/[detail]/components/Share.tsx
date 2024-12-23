import React, { ReactNode } from "react";
import messageSender from "@/public/assets/images/cino.svg";
import Image from "next/image";
import { CustomButton } from "@/components/button/Button";
import { ShareIcon } from "@/components/icons";
interface CustomMessageShareProps {
  title: string;
  content: ReactNode;
  timestamp: string;
  read: boolean;
  buttonText: string;
  onClick: () => void;
  onClickShare?: () => void;
  isRightAligned: boolean;
  profileImage?: string;
  images?: string[];
}

export default function MessageShare({
  title,
  content,
  buttonText,
  onClick,
  onClickShare,
  read,
  timestamp,
  isRightAligned,
  profileImage,
  images,
}: CustomMessageShareProps) {
  return (
    <div
      className={`w-full flex pb-[5px] px-[12px] xs:px-[16px] ${
        isRightAligned ? "justify-end" : "justify-start"
      }`}
    >
      {!isRightAligned && (
        <div className="flex items-start pr-[8px] xs:pr-[10px]">
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
      <div className="flex flex-col gap-y-[10px]">
        <div className="flex h-full">
          {isRightAligned && (
            <div className="flex flex-col self-end pr-[4px] items-start h-full justify-end pb-3 relative">
              {!read && (
                <span className="text-[10px] text-message-bubble-blue font-pretendardRegular">
                  안 읽음
                </span>
              )}
              <button
                className="absolute cursor-pointer top-1/2 pl-[4px] transform  text-center flex justify-center items-center w-full "
                onClick={onClickShare}
              >
                <div className="w-full h-full !mt-[-10px]">
                  <ShareIcon fillColor="#ABAFB7" />
                </div>{" "}
              </button>
              <span className="text-[10px] text-grey-disabled font-pretendardRegular">
                {timestamp}
              </span>
            </div>
          )}

          {images && images.length > 0 ? (
            <div className="flex gap-x-1">
              {images?.map((image, index) => {
                return (
                  <div
                    key={index}
                    className={`bg-[#ffeaea] !w-[110px] !h-[110px] xs:!w-[128px] xs:!h-[128px] ${
                      index === 0 ? "rounded-l-[12px]" : "rounded-r-[12px]"
                    }`}
                  >
                    {/* Add content here if necessary */}
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              className={`flex flex-col justify-center items-start !w-[210px] xs:!w-[252px]  
              bg-white border-[1px] border-grey-border rounded-[12px] overflow-hidden mb-3`}
            >
              <div className="w-full h-full flex flex-col justify-between items-center ">
                <div className="h-[38px] px-[16px] bg-[#e9eefe] !min-h-[38px] w-full p-0 m-0 flex items-center ">
                  <span className="font-PretendardBold text-[16px] text-grey-font">
                    {title}{" "}
                  </span>
                </div>
                <div className="p-[16px] space-y-[20px] w-full">
                  {content}
                  <CustomButton
                    label={buttonText}
                    backgroundColor={"bg-grey-light"}
                    height="!h-[42px]"
                    textStyle={
                      "font-PretendardBold text-[13px] text-main-color"
                    }
                    onPress={onClick}
                  />
                </div>
              </div>
            </div>
          )}
          {!isRightAligned && (
            <div className="flex flex-col self-end pl-[4px] items-start h-full justify-end pb-3 relative">
              {!read && (
                <span className="text-[10px] text-message-bubble-blue font-pretendardRegular">
                  안 읽음
                </span>
              )}
              <button
                className="absolute cursor-pointer top-1/2 pl-[4px] transform  text-center flex justify-center items-center w-full "
                onClick={onClick}
              >
                <div className="w-full h-full mt-[-10px]">
                  <ShareIcon fillColor="#ABAFB7" />
                </div>{" "}
              </button>
              <div className="text-[10px] text-grey-disabled font-pretendardRegular self-end">
                {timestamp}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
