"use client";
import BottomNavigationBar from "@/components/BottomNavigation/BottomNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import React from "react";
import Name from "../components/Name";
export default function MyInformationIndividual() {
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full overflow-y-scroll scrollbar-hide relative">
          <div className="overflow-y-auto scrollbar-hide relative max-h-screen">
            <Name />
          </div>
          <BottomNavigationBar />
        </div>
      }
    />
  );
}
