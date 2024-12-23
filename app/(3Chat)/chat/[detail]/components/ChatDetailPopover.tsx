"use client";
import { ExportIcon, NotifySlashedIcon, SirenIcon } from "@/components/icons";
import React from "react";

interface ChatDetailPopoverProps {
  x?: string;
  onClick1: () => void;
  onClick2: () => void;
}

export const ChatDetailPopover: React.FC<ChatDetailPopoverProps> = ({
  onClick1,
  onClick2,
}) => {
  interface IconProps {
    className?: string;
    style?: React.CSSProperties;
    fillColor: string;
  }
  const popoverItems: {
    id: number;
    color?: string;
    name: string;
    onClick: () => void;
    icon: React.FC<IconProps>;
  }[] = [
    { id: 1, name: "알림끄기", onClick: () => {}, icon: NotifySlashedIcon },
    { id: 2, name: "나가기", onClick: onClick1, icon: ExportIcon },
    {
      id: 3,
      name: "신고하기",
      onClick: onClick2,
      icon: SirenIcon,
      color: "red",
    },
  ];

  return (
    <div className="!w-[119.4px] !h-[162px] bg-white rounded-[8px] shadow-lg shadow-grey-border">
      <div>
        {popoverItems.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <button
              key={index}
              className="!h-[54px] w-full px-[16px] py-[16px] gap-x-[12px] flex justify-between items-center"
              onClick={item.onClick}
            >
              <IconComponent
                className="!w-5 !h-5 !min-w-5 !min-h-5"
                fillColor={item.color == "red" ? "#F05858" : "#404251"}
              />
              <span className="font-pretendardRegular text-[16px] w-full text-grey-font">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
