"use client";

import { BackIcon, StarIconLarge } from "@/components/icons";
import { CustomButton } from "@/components/button/Button";
import DisplaySpace from "@/components/DisplaySpace";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import RequestEvaluation from "@/components/Evaluation/RequestEvaluation";
import { useState } from "react";
import MyReview from "@/components/Evaluation/MyReview";
import { ReviewType } from "@/types/reviewTypes";
import CustomTextArea from "@/components/input/TextArea";
import CameraInput from "@/components/cameraInput/CameraInput";
import ReviewDeletionModal from "@/components/modals/ReviewDeletionModal";
import { useRouter } from "next/navigation";

export default function ViewAssessmentPage() {
  const [isEdit, setEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [stars, setStars] = useState(0);
  const [message, setMessage] = useState("");
  const activeColor = "#F39C12";
  const inactiveColor = "#E0E0E0";
  const reviewsData: ReviewType = {
    reviewer: "",
    date: "2024.11.01",
    rating: 5,
    content:
      "리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역",
    images: ["/assets/images/owned1.png"],
    recommendation: 0,
    isLiked: false,
  };
  const router = useRouter();
  return (
    <DisplaySpace
      content={
        <div className="max-h-screen h-screen w-full overflow-y-scroll scrollbar-hide relative">
          <TopNavigationBar
            leading={
              <button
                className=""
                onClick={() => {
                  router.back();
                }}
              >
                <BackIcon
                  className="min-w-[10px] min-h-[12px]"
                  fillColor="#80808e"
                />
              </button>
            }
            middle={
              <h3 className="w-full text-[16px] text-grey-font font-PretendardBold flex items-center justify-center">
                평가 등록
              </h3>
            }
            trailing={
              <div>
                {" "}
                {!isEdit ? (
                  <button
                    className=""
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    <span className="text-main-color font-pretendardRegular text-[16px]">
                      수정
                    </span>
                  </button>
                ) : (
                  <button
                    className=""
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    <span className="text-red-color font-pretendardRegular text-[16px]">
                      삭제
                    </span>
                  </button>
                )}
              </div>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="pt-[78px] h-full relative overflow-y-scroll overflow-x-hidden scrollbar-hide z-40">
            <div className="bg-white flex flex-col justify-between  overflow-y-scroll scrollbar-hide overflow-x-hidden pb-24">
              {/*  */}
              <RequestEvaluation
                item={{
                  id: 1,
                  name: "굴착기 06W",
                  description: "타이어, W, 휠, 쪽버켓",
                  location: "충북 청주시 상당구",
                  rentalType: "임대 (장비+기사)",
                  rentalPeriod: "24.12.14 (1일)",
                  price: "60만원",
                  taskDescription: "APT 현장 기초 굴착 작업",
                  isFavorite: false,
                }}
              />{" "}
              {isEdit ? (
                <div className="flex flex-col w-full">
                  <div className="flex justify-center my-10 w-full !h-[50px]">
                    {Array.from({ length: 5 }, (_, i) => (
                      <button key={i} onClick={() => setStars(i + 1)}>
                        <StarIconLarge
                          fillColor={i < stars ? activeColor : inactiveColor}
                          className="cursor-pointer !w-[50px] !h-[50px]"
                        />
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-col gap-y-5 px-4">
                    <CustomTextArea
                      placeholder={"깔끔하게 작업 잘 해주십니다."}
                      height="!h-[165px]"
                      value={message}
                      setValue={setMessage}
                    />
                    <CameraInput limit={5} />
                  </div>
                </div>
              ) : (
                <MyReview
                  reviewer={reviewsData.reviewer}
                  content={reviewsData.content}
                  date={reviewsData.date}
                  images={reviewsData.images}
                  rating={reviewsData.rating}
                  recommendation={reviewsData.recommendation}
                  isLiked={false}
                />
              )}
            </div>
          </div>

          <div className="bg-white w-full px-4 absolute bottom-0 !z-50 pb-[40px]">
            {isEdit && (
              <CustomButton
                label={"완료"}
                backgroundColor={"bg-main-color"}
                textStyle={"text-white font-PretendardBold text-[16px]"}
                height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
                onPress={() => {
                  // setShowModal(true);
                }}
              />
            )}
          </div>
          <ReviewDeletionModal isOpen={showModal} setIsOpen={setShowModal} />
        </div>
      }
    />
  );
}
