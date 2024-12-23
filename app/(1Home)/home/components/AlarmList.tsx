import { LocationIcon, MessageBubbleIcon } from "@/components/icons";
import React, { useState } from "react";

export default function AlarmList() {
  // State to hold alarm data
  const [alarms] = useState([
    {
      icon: MessageBubbleIcon,
      iconColor: "#429FFF",
      iconBgColor: "bg-main-color bg-opacity-20",
      title: "채팅 알림",
      description: "새로운 채팅이 도착했습니다",
      timestamp: "12월 01일",
    },
    {
      icon: LocationIcon,
      iconColor: "#9761FF",
      iconBgColor: "bg-[#EADFFF]",
      title: "신규 발주 알림",
      description: "내 주변에 새로운 발주가 등록되었습니다",
      timestamp: "12월 01일",
    },
  ]);

  return (
    <div className="w-full h-full flex flex-col px-4">
      {alarms.map((alarm, index) => {
        const IconComponent = alarm.icon;
        return (
          <div
            key={index}
            className={`flex items-start gap-x-[10px] py-5 ${
              index !== alarms?.length - 1
                ? "border-b-[1px] border-grey-border"
                : ""
            }`}
          >
            {/* Icon */}
            <div
              className={`${alarm.iconBgColor} !w-[30px] !h-[30px] rounded-full flex items-center justify-center`}
            >
              <IconComponent
                fillColor={alarm.iconColor}
                className="!w-[20px] !h-[20px] "
              />
            </div>

            {/* Alarm Details */}
            <div className="flex-1 flex-col">
              <h3 className="font-PretendardBold text-[16px] text-grey-font leading-[22px]">
                {alarm.title}
              </h3>
              <p className="mt-1 font-pretendardRegular text-[13px] text-grey-font-light leading-[18px]">
                {alarm.description}
              </p>
            </div>

            {/* Timestamp */}
            <div className="font-pretendardRegular text-[13px] text-grey-disabled">
              {alarm.timestamp}
            </div>
          </div>
        );
      })}
    </div>
  );
}
