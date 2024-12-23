"use client";
import CustomTab from "@/components/Tabs/Tab";
import React from "react";
export default function EquipmentSearchTab() {
  const items = [
    { title: "조건 검색", content: <div>...</div> },
    { title: "키워드 검색", content: <div>..</div> },
  ];
  return (
    <div className="pt-[78px] overflow-y-scroll overflow-x-hidden scrollbar-hide z-40">
      <div className="w-full !z-50 cursor-pointer">
        <CustomTab items={items} borderColor="border-grey-font" compactTab={true} />
      </div>
    </div>
  );
}
