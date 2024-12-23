import CustomNavigationSelect from "@/components/Select/SelectWithNavigation";
import React from "react";

interface ReviewsProps {
  setIsFilterSheetOpen:  () => void;
  setIsRatingSheetOpen: () => void;
}

const ReviewTopNavBar: React.FC<ReviewsProps> = ({
  setIsFilterSheetOpen,
  setIsRatingSheetOpen,
}) => {
  return (
    <div className="flex items-center justify-between mx-[16px] py-[20px] border-b-1 border-grey-border">
      <p className="text-[16px] font-PretendardBold text-grey-font">
        전체 리뷰 10건
      </p>
      <div className="flex gap-[10px]">
        <CustomNavigationSelect
          text={`평점 전체`}
          OnClick={setIsFilterSheetOpen}
        />
        <CustomNavigationSelect
          text={`추천순`}
          OnClick={setIsRatingSheetOpen}
        />
      </div>
    </div>
  );
};

export default ReviewTopNavBar;
