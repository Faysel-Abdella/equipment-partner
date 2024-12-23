import React from "react";
import ReviewNotFound from "./ReviewNotFound";
import ReviewTopNavBar from "../ReviewTopNavBar";
import ReviewItem from "./ReviewItem";
import { ReviewType } from "@/types/reviewTypes";

const reviewsData: ReviewType[] = [
  {
    reviewer: "발주자명",
    date: "2024.11.01",
    rating: 5,
    content:
      "리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역",
    images: ["/assets/images/owned1.png"],
    recommendation: 0,
    isLiked: false,
  },
  {
    reviewer: "또 다른 발주자",
    date: "2024.11.10",
    rating: 3,
    content:
      "리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역",
    images: [
      "/assets/images/owned1.png",
      "/assets/images/owned2.png",
      "/assets/images/owned1.png",
      "/assets/images/owned2.png",
      "/assets/images/owned1.png",
    ],
    recommendation: 2,
    isLiked: true,
  },
  {
    reviewer: "발주자명",
    date: "2024.11.01",
    rating: 5,
    content:
      "리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역 리뷰 내용 텍스트 영역",
    images: [],
    recommendation: 0,
    isLiked: false,
  },
];

interface ReviewsProps {
  setIsFilterSheetOpen: () => void;
  setIsRatingSheetOpen: () => void;
}

const Reviews: React.FC<ReviewsProps> = ({
  setIsFilterSheetOpen,
  setIsRatingSheetOpen,
}) => {
  if (reviewsData.length === 0) {
    return <ReviewNotFound />;
  }
  return (
    <div className="mt-[-10px] ">
      <ReviewTopNavBar
        setIsFilterSheetOpen={setIsFilterSheetOpen}
        setIsRatingSheetOpen={setIsRatingSheetOpen}
      />
      <div className="px-[16px]">
        {reviewsData.map((review, index) => (
          <>
            <ReviewItem key={index} review={review} />
            {index != reviewsData.length - 1 && (
              <div className="h-[1px] bg-grey-light"></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
