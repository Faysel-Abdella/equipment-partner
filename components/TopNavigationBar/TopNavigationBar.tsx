"use client";
import React, { ReactNode } from "react";

export interface TopNavigationBarProps {
  leading?: ReactNode;
  middle?: ReactNode;
  trailing?: ReactNode;
  isStatic?: boolean; // New prop to control position
  color?: string;
  bottomBorder?: string;
  padding?: string;
}

export default function TopNavigationBar({
  leading,
  middle,
  trailing,
  isStatic = false, // Default is absolute positioning
  color,
  bottomBorder = "",
  padding=""
}: TopNavigationBarProps) {
  return (
    <div
      className={`!z-50 ${isStatic ? "relative" : "absolute top-0"} ${
        color ? color : "bg-white"
      } w-full mx-auto !max-h-[78px] !h-[78px] flex ${padding} justify-center items-center ${bottomBorder}`}
    >
      {middle ? (
        <div className="relative !h-[34px] !px-[16px] !w-full flex items-center">
          {/* Leading */}
          <div className="flex-1 flex items-center">{leading}</div>

          {/* Middle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            {middle}
          </div>

          {/* Trailing */}
          <div className="flex-1 flex justify-end items-center">{trailing}</div>
        </div>
      ) : (
        <div className="h-[34px] w-full px-[16px] flex justify-between items-center bg-white">
          {/* Leading */}
          {leading}

          {/* Trailing */}
          {trailing}
        </div>
      )}
    </div>
  );
}
