import CustomNavigationSelect from "@/components/Select/SelectWithNavigation";
import React from "react";

interface CardProps {
  title: string;
  location: string;
  details: string[];
  status: string;
  onStatusClick: () => void;
}

const ChatTopCard: React.FC<CardProps> = ({
  title,
  location,
  details,
  status,
  onStatusClick,
}) => {
  return (
    <div className="!min-h-[41px] bg-white flex px-[16px] py-[10px] justify-between w-full mt-[2px]">
      <div className="flex flex-col gap-y-[5px] h-full w-full">
        {/* Title and Location */}
        <div className="h-[18px] flex gap-x-[12px]">
          <span className="text-[13px] font-PretendardBold text-grey-font">
            {title}
          </span>
          <span className="text-[13px] font-pretendardRegular text-grey-font">
            {location}
          </span>
        </div>

        {/* Details */}
        <div className="h-[18px] flex gap-x-[8px]">
          {details.map((detail, index) => (
            <span
              key={index}
              className="text-[10px] xs:text-[13px] font-pretendardRegular text-grey-font"
            >
              {detail}
            </span>
          ))}
        </div>
      </div>

      {/* Status Selector */}
      <div className="!min-w-[82px] w-[82px] !min-h-[30px] flex justify-end">
        <CustomNavigationSelect text={status} OnClick={onStatusClick} />
      </div>
    </div>
  );
};

export default ChatTopCard;
