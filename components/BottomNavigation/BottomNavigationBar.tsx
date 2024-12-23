"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { HomeIcon } from "./Icons/home";
import { OrderingIcon } from "./Icons/ordering";
import { ChatIcon } from "./Icons/chat";
import { MyWorkIcon } from "./Icons/myWork";
import { MyInformationIcon } from "./Icons/myInformation";

export default function BottomNavigationBar() {
  interface IconProps {
    className?: string;
    style?: React.CSSProperties;
    fillColor: string;
  }
  const navItems: {
    id: number;
    name: string;
    routeTo: string;
    icon: React.FC<IconProps>;
    notification?: number;
  }[] = [
    { id: 1, name: "홈", routeTo: "/home", icon: HomeIcon },
    { id: 2, name: "발주", routeTo: "/ordering", icon: OrderingIcon },
    { id: 3, name: "채팅", routeTo: "/chat", icon: ChatIcon, notification: 4 },
    { id: 4, name: "내 작업", routeTo: "/myWorks", icon: MyWorkIcon },
    {
      id: 5,
      name: "내 정보",
      routeTo: "/myInformation",
      icon: MyInformationIcon,
    },
  ];

  const router = useRouter();
  const pathname = usePathname();
  const activeColor = "#255DF9";
  const inactiveColor = "#ABAFB7";

  const isLinkActive = (route: string) => pathname.includes(`${route}`);

  return (
    <div className="absolute bottom-0 w-full bg-white max-h-[88px] !h-[88px] min-h-[88px] !z-40 border-t-[1px] border-grey-border">
      <div className="!h-[68px]">
        <div className="flex justify-around items-center w-full h-full">
          {/* Loop through navigation items */}
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const fillColor = isLinkActive(item.routeTo)
              ? activeColor
              : inactiveColor;
            return (
              <button
                key={item.id}
                onClick={() => router.push(item.routeTo)}
                className={`flex flex-col items-center !w-[78px] !h-full justify-center cursor-pointer `}
              >
                <span className="text-xl !w-[30px] !h-[30px] !min-w-[30px] !min-h-[30px] flex items-center justify-center relative">
                  <IconComponent fillColor={fillColor} className="" />
                  {item.notification && (
                    <div
                      className="absolute top-[-3px] right-[-9px] rounded-full !min-w-[17px] !h-[17px] 
                                    flex justify-center items-center !z-40 bg-red-color text-white font-pretendardRegular text-[10px]"
                    >
                      {item.notification}
                    </div>
                  )}
                </span>
                <span
                  className={`text-[13px] leading-[18.2px] font-[400] ${
                    isLinkActive(item.routeTo)
                      ? "text-main-color"
                      : "text-grey-disabled"
                  } mt-[4px]`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
