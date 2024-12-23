"use client";
import React from "react";
import ItemDetail from "../../../(1Home)/home/components/ItemDetail";
import BottomNavigationBar from "@/components/BottomNavigation/BottomNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";

const Page = () => {
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full overflow-y-scroll scrollbar-hide relative">
          <div className="mb-[100px] ">
            {/* Some content or the first component */}
            <ItemDetail />

            {/* Navigation bar appears below the first component */}
            <div className="space-y-[20px] ">{/* <DetailsTopNavBar /> */}</div>
          </div>
          <BottomNavigationBar />
        </div>
      }
    />
  );
};

export default Page;
