import React, { useState } from "react";

export default function NotificationSettings() {
  const [switchData, setSwitchData] = useState([
    { label: "채팅 신규 도착 알림", isSelected: true },
    { label: "마케팅 수신 동의", isSelected: false },
  ]);

  const handleToggle = (index: number) => {
    setSwitchData((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };
  return (
    <div className="w-full h-full pt-5 flex flex-col gap-y-[20px] px-4">
      {switchData.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center !h-[22px]"
        >
          {/* Label */}
          <span className="text-[16px] font-pretendardRegular text-grey-font">{item.label}</span>

          {/*  Switch */}
          <div
            className={`relative w-[34px] h-[22px] rounded-full cursor-pointer transition-all ${
              item.isSelected ? "bg-main-color" : "bg-grey-disabled"
            }`}
            onClick={() => handleToggle(index)}
          >
            <div
              className={`absolute top-[2px] left-[2px] !w-[18px] !h-[18px] bg-white rounded-full shadow transition-transform ${
                item.isSelected ? "translate-x-[11px]" : ""
              }`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
