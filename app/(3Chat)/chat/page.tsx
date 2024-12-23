"use client";
import BottomNavigationBar from "@/components/BottomNavigation/BottomNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { AlarmIcon, SearchIcon } from "@/components/TopNavigationBar/Icons";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import React from "react";
import ChatList from "./[detail]/components/ChatList";
import { ChatItemProps } from "@/types/chatItemType";
import { useRouter } from "next/navigation";
import CustomTab from "@/components/Tabs/Tab";
import CustomButtonsList from "./components/ChatButtonsList";

export default function Chat() {
  const handleClick = () => {};
  const router = useRouter();
  const chats: ChatItemProps[] = [
    {
      profileImage: "/assets/images/cino.svg",
      name: "홍길동",
      status: "completed", // 배차 완료
      message: "그 시간에 작업 가능합니다.",
      time: "2분 전",
      isMuted: true,
      notificationCount: 2,
      onClick: () => {
        router.push("/chat/홍길동");
      },
    },
    {
      profileImage: "/assets/images/cino2.svg",
      name: "홍길동",
      status: "", // 배차 완료
      message: "그 시간에 작업 가능합니다.",
      time: "2분 전",
      isMuted: false,
      notificationCount: 2,
      onClick: () => {
        router.push("/chat/홍길동");
      },
    },
    {
      profileImage: "/assets/images/cino3.svg",
      name: "홍길동",
      status: "", // 배차 완료
      message: "그 시간에 작업 가능합니다.",
      time: "2분 전",
      isMuted: false,
      notificationCount: 0,
      onClick: () => {
        router.push("/chat/홍길동");
      },
    },
    {
      profileImage: "/assets/images/cino.svg",
      name: "홍길동",
      status: "pending", // 배차 완료
      message: "그 시간에 작업 가능합니다.",
      time: "2분 전",
      isMuted: false,
      notificationCount: 0,
      onClick: () => {
        router.push("/chat/홍길동");
      },
    },
  ];

  const chatTabItems = [
    {
      title: "모집 중",
      content: (
        <div
          key={1}
          className="flex flex-col gap-y-[10px] overflow-y-scroll scrollbar-hide  pt-5"
        >
          <CustomButtonsList handleClick={handleClick} />
          <ChatList chats={chats} />
        </div>
      ),
    },
    {
      title: "종료",
      content: (
        <div
          key={2}
          className="flex flex-col gap-y-[10px] overflow-y-scroll scrollbar-hide pt-5"
        >
          <CustomButtonsList handleClick={handleClick} />
          <ChatList chats={chats} />
        </div>
      ),
    },
  ];

  return (
    <DisplaySpace
      content={
        <div className="!h-screen w-full scrollbar-hide relative">
          <TopNavigationBar
            leading={
              <div className="!min-w-[84px] !w-[84px] !h-[34px]">
                <p className="text-grey-font text-[24px] font-PretendardBold w-full ">
                  채팅
                </p>
              </div>
            }
            trailing={
              <div className="!w-[68px] !h-[24px] flex justify-between">
                <SearchIcon />

                <button
                  className=""
                  onClick={() => {
                    router.push("/home/alarm");
                  }}
                >
                  <AlarmIcon />
                </button>
              </div>
            }
          />

          <CustomTab
            items={chatTabItems}
            borderColor="border-grey-font"
            compactTab={true}
            selectedBgColor="bg-white"
            unselectedBgColor="bg-white"
            selectedBorderColor="border-grey-font border-b-[3px]"
            unselectedBorderColor="border-grey-disabled border-b-[1px]"
            selectedTextColor="text-grey-font font-PretendardBold"
            unselectedTextColor="text-grey-font-light !font-PretendardBold"
            separator={false}
            overflowStyle="overflow-auto scrollbar-hide h-[calc(100vh-140px)] pt-[78px]"
            overflowStyleHeader="sticky top-[78px] !z-50"
          />

          <BottomNavigationBar />
        </div>
      }
    />
  );
}
