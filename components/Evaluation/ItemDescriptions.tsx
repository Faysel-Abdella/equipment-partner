import { OrderItemType } from "@/types/orderItemTypes";
import Image from "next/image";
import React from "react";

const ItemDescriptions: React.FC<OrderItemType> = ({
  description,
  location,
  name,
  price,
  rentalPeriod,
  rentalType,
  taskDescription,
}) => {
  return (
    <div className="text-[13px]  p-[16px] space-y-[10px]">
      <div className="flex justify-between  gap-[4px]">
        <div className="flex items-center gap-[4px]">
          <p className="text-[16px] text-grey-font font-PretendardBold">
            {name}
          </p>
          <p className=" text-grey-font-light font-pretendardRegular">
            {description}
          </p>
        </div>
      </div>
      <div className="text-[13px] font-pretendardRegular">
        <p className="text-main-color">{location}</p>
        <p className="text-grey-font-light">{rentalType}</p>
        <div className="flex gap-[2px]">
          <p className="text-grey-font-light">{rentalPeriod} </p>
          <Image
            src={`/assets/icons/dot.svg`}
            alt="dot"
            width={4}
            height={18}
          />
          <p className="text-grey-font">{price}</p>
        </div>
      </div>
      <div className="h-[1px] bg-grey-light"></div>
      <p className="text-[13px] font-pretendardRegular text-grey-font-light">
        {taskDescription}
      </p>
    </div>
  );
};

export default ItemDescriptions;
