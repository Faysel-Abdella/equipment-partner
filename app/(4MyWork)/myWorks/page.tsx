"use client";
import DisplaySpace from "@/components/DisplaySpace";
import { AlarmIcon, SearchIcon } from "@/components/TopNavigationBar/Icons";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import React from "react";
import MyWork from "../myWorks/components/MyWork";
import BottomNavigationBar from "@/components/BottomNavigation/BottomNavigationBar";
import { useRouter } from "next/navigation";

const myWorksData = [
  {
    name: "굴착기 06W",
    description: "타이어, W, 휠, 쪽버켓",
    location: "충북 청주시 상당구",
    rentalType: "임대 (장비+기사)",
    rentalPeriod: "24.12.14(하루)",
    price: "60만원",
    taskDescription: "APT 현장 기초 굴착 작업",
    date: "2024-12-01 11:00",
    status: "모집중",
    evaluationStatus: "",
  },
  {
    name: "굴착기 02LC",
    description: "타이어, W, 휠, 쪽버켓",
    location: "인천 미추홀구 인하로",
    rentalType: "임대 (장비+기사)",
    rentalPeriod: "24.11.24-24.12.23(한달)",
    price: "60만원",
    taskDescription: "APT 현장 기초 굴착 작업",
    date: "2024-12-01 11:00",
    status: "평가 등록",
    evaluationStatus: "평가 등록",
  },
  {
    name: "굴착기 02LC",
    description: "타이어, W, 휠, 쪽버켓",
    location: "인천 미추홀구 인하로",
    rentalType: "임대 (장비+기사)",
    rentalPeriod: "24.11.24-24.12.23(한달)",
    price: "60만원",
    taskDescription: "APT 현장 기초 굴착 작업",
    date: "2024-12-01 11:00",
    status: "평가 완료",
    evaluationStatus: "평가 완료",
  },
];

const Page = () => {
  const router = useRouter();
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full scrollbar-hide relative">
          <TopNavigationBar
            leading={
              <div className="!min-w-[117px] !w-[117px] !h-[34px]">
                <p className="text-grey-font text-[24px] font-PretendardBold w-full">
                  내 작업
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
          <div className="pt-[50px] pb-[100px] h-full overflow-y-scroll overflow-x-hidden scrollbar-hide z-40">
            <div className="my-[40px] space-y-[20px] px-[16px]">
              {myWorksData.map((item, index) => (
                <MyWork key={index} item={item} />
              ))}
            </div>
          </div>
          <BottomNavigationBar />
        </div>
      }
    />
  );
};

export default Page;
