"use client";
import React from "react";
import BusinessList from "./BusinessList";
import CustomButtonsTop from "@/app/(2Ordering)/ordering/components/CustomButtonsTop";

const handleClick = () => {};
const SearchResult = () => {
  return (
    <div className="space-y-[20px] w-full">
      <div className="flex gap-[8px] px-[16px]">
        <CustomButtonsTop
          isActive={false}
          onClick={handleClick}
          title="지역 0"
        />
        <CustomButtonsTop
          isActive={true}
          onClick={handleClick}
          title="장비 2"
        />
        <CustomButtonsTop
          isActive={true}
          onClick={handleClick}
          title="요청 2"
        />
      </div>

      <BusinessList />
    </div>
  );
};

export default SearchResult;
