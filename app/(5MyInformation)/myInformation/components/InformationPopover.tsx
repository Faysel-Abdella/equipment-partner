"use client";
import React from "react";

interface InformationPopoverProps {
  x?: string;
  onClick1: () => void;
  onClick2: () => void;
}

export const InformationPopover: React.FC<InformationPopoverProps> = ({
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
    icon?: React.FC<IconProps>;
  }[] = [
    {
      id: 1,
      name: "로그아웃",
      onClick: onClick1,
    },
    {
      id: 2,
      name: "회원탈퇴",
      onClick: onClick2,
    },
  ];

  return (
    <div className="!w-[87px] !h-[108px] bg-white rounded-[8px] shadow-grey-border drop-shadow-md ">
      <div>
        {popoverItems.map((item, index) => {
          return (
            <button
              key={index}
              className="!h-[54px] w-full py-[16px] gap-x-[12px] flex justify-between items-center"
              onClick={item.onClick}
            >
              <span className="font-pretendardRegular text-[16px] w-full text-grey-font leading-[20px]">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
