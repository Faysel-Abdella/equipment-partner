"use client";
import DisplaySpace from "@/components/DisplaySpace";
import ItemDetail from "../components/ItemDetail";
import { CustomButton } from "@/components/button/Button";
import { BackIcon, LikeIcon, ShareIcon } from "@/components/icons";
import { useEffect, useRef, useState } from "react";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import CustomTab from "@/components/Tabs/Tab";
import RegistrationInfo from "@/app/(4MyWork)/myWorks/components/WorkDetails/RegistrationInfo";
import Reviews from "@/app/(4MyWork)/myWorks/components/WorkDetails/Reviews";
import BasicInfo from "@/app/(4MyWork)/myWorks/components/WorkDetails/BasicInfo";
import { useRouter } from "next/navigation";
import { SortMenuBottomSheet } from "@/components/BottomSheet/SortMenuBottomSheet";
import { StarRatingBottomSheet } from "@/components/BottomSheet/StarBottomSheet";

export default function ItemDetailPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isRatingSheetOpen, setIsRatingSheetOpen] = useState(false);
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const router = useRouter();
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollableElement = scrollableRef.current;

    if (!scrollableElement) return;

    const handleScroll = () => {
      const scrollPosition = scrollableElement.scrollTop;
      setIsScrolled(scrollPosition > 100);
    };

    scrollableElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollableElement.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [tabIndex, setTabIndex] = useState(0);

  const tabComponents = [
    {
      title: "기본정보",
      content: (
        <div className="w-full">
          <BasicInfo />
        </div>
      ),
    },
    {
      title: "등록정보",
      content: (
        <div className="w-full">
          <RegistrationInfo />
        </div>
      ),
    },
    {
      title: "리뷰",
      content: (
        <div className="w-full">
          <Reviews
            setIsFilterSheetOpen={() => {
              setIsFilterSheetOpen(true);
            }}
            setIsRatingSheetOpen={() => {
              setIsRatingSheetOpen(true);
            }}
          />
        </div>
      ),
    },
  ];
  return (
    <DisplaySpace
      content={
        <div className="!h-screen !max-h-screen w-full !max-w-[390px] scrollbar-hide relative">
          <div
            ref={scrollableRef}
            className="h-full w-full overflow-y-scroll scrollbar-hide overflow-x-hidden"
          >
            {isScrolled ? (
              <TopNavigationBar
                leading={
                  <button
                    className=""
                    onClick={() => {
                      router.back();
                    }}
                  >
                    <BackIcon
                      className="!w-[18.33px] !h-[16.82px]"
                      fillColor="#404251"
                    />
                  </button>
                }
                trailing={
                  <div className="gap-x-5 !h-[24px] flex justify-between items-center">
                    <button
                      className="flex !w-[22px] !min-w-[22px] items-center"
                      onClick={() => {
                        // setConfirmationModalVisible(true);
                      }}
                    >
                      <ShareIcon
                        fillColor="#404251"
                        className="!w-[22px] !h-[22px] !min-w-[22px] !min-h-[22px]"
                      />
                    </button>
                    <button
                      onClick={() => {
                        setIsLiked(!isLiked);
                      }}
                    >
                      <LikeIcon
                        fillColor={isLiked ? "#F05858" : "#fff"}
                        strokeColor={isLiked ? "#F05858" : "#404251"}
                      />
                    </button>
                  </div>
                }
                bottomBorder="border-b-[1px] border-grey-border"
              />
            ) : (
              <div
                className="fixed top-0 !max-w-[390px] w-full 
                          flex justify-between overflow-hidden items-center !z-50 h-[47px] pt-[25px]"
              >
                <button
                  className="!h-[22px] w-full px-4  "
                  onClick={() => {
                    router.back();
                  }}
                >
                  {/* Left Arrow */}{" "}
                  <BackIcon
                    fillColor="#fff"
                    className="!w-[18.33px] !h-[16.82px]"
                  />
                </button>

                <button
                  className="absolute left-1/2 transform -translate-x-1/2 text-center !w-[18.33px] !h-[16.82px]"
                  onClick={() => {
                    setIsLiked(!isLiked);
                  }}
                >
                  {/* Heart Icon */}
                  <LikeIcon
                    strokeColor={isLiked ? "#F05858" : "#404251"}
                    fillColor={isLiked ? "#F05858" : ""}
                    className="!w-[18.33px] !h-[16.82px]"
                  />
                </button>
              </div>
            )}
            <ItemDetail />

            {/* Navigation bar appears below the first component */}
            <div className=" ">
              <CustomTab
                items={tabComponents}
                borderColor="border-main-color"
                setTabIndex={setTabIndex}
                selectedBgColor="bg-white"
                unselectedBgColor="bg-white"
                selectedBorderColor="border-main-color border-b-[3px]"
                unselectedBorderColor="border-grey-disabled border-b-[1px]"
                selectedTextColor="text-main-color"
                unselectedTextColor="text-grey-font-light font-PretendardBold "
                separator={false}
              />
            </div>
            {tabIndex === 0 ? (
              <div className="!h-[106px] min-h-[106px] mb-[40px]"></div>
            ) : (
              <></>
            )}
          </div>

          {tabIndex === 0 && (
            <div className="absolute bottom-0 w-full bg-white flex font-PretendardBold !h-[106px] ">
              <div className="w-full flex font-PretendardBold gap-x-[10px] px-4 !h-[106px]  pt-3 border-t-[1px] border-grey-light">
                <div className="gap-x-[10px] flex !w-[118px] items-center !h-[54px]">
                  <button
                    onClick={() => {
                      setIsLiked(!isLiked);
                    }}
                    className="flex flex-col gap-y-2 items-center justify-center !w-[54px] h-[38px]"
                  >
                    <LikeIcon
                      strokeColor={isLiked ? "#F05858" : "#80808E"}
                      fillColor={isLiked ? "#F05858" : "#fff"}
                      className="!w-[22px] !h-[22px] !min-w-[22px] !min-h-[22px]"
                    />
                    <span className="font-pretendardRegular text-[10px] text-grey-font text-center w-full !h-[14px]">
                      관심
                    </span>
                  </button>
                  <div className="flex flex-col gap-y-2 items-center justify-center !w-[54px] h-[38px]">
                    <ShareIcon
                      fillColor="#80808E"
                      className="!w-[22px] !h-[22px] !min-w-[22px] !min-h-[22px]"
                    />
                    <span className="font-pretendardRegular text-[10px] text-grey-font w-full text-center !h-[14px] ">
                      공유하기
                    </span>
                  </div>
                </div>

                <div className="flex w-full !h-[54px]">
                  <CustomButton
                    backgroundColor="bg-main-color"
                    label="문의(채팅)하기"
                    textStyle="text-white text-[13px] xs:text-[16px] font-PretendardBold"
                    height="!h-[54px] !min-h-[54px]"
                  />
                </div>
              </div>
            </div>
          )}

          <SortMenuBottomSheet
            isOpen={isFilterSheetOpen}
            setIsOpen={setIsFilterSheetOpen}
          />
          <StarRatingBottomSheet
            isOpen={isRatingSheetOpen}
            setIsOpen={setIsRatingSheetOpen}
          />
        </div>
      }
    />
  );
}
