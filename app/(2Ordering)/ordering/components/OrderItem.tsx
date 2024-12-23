"use client";
import { OrderItemType } from "@/types/orderItemTypes";
import Image from "next/image";
import React from "react";

const OrderItem: React.FC<{
  item: OrderItemType;
  toggleFavorite: (id: number) => void;
}> = ({ item, toggleFavorite }) => {
  return (
    <div className="text-[13px]  p-[16px] space-y-[10px] border-1 rounded-[12px] relative">
      <div className="flex justify-between  gap-[4px]">
        <div className="flex items-center gap-[4px]">
          <p className="text-[16px] text-grey-font font-PretendardBold">
            {item.name}
          </p>
          <p className=" text-grey-font-light font-pretendardRegular">
            {item.description}
          </p>
        </div>
        <div className="justify-end items-start shrink-0">
          <button onClick={() => toggleFavorite(item.id)}>
            {/* Conditionally render the icon based on isFavorite */}
            {item.isFavorite ? (
              <Image
                src={`/assets/icons/fav-filled.svg`} // Image when favorite
                alt="Filled Heart icon"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src={`/assets/icons/fav-outline.svg`} // Image when not favorite
                alt="Empty Heart icon"
                width={24}
                height={24}
              />
            )}
          </button>
        </div>
      </div>
      <div className="text-[13px] font-pretendardRegular">
        <p className="text-main-color">{item.location}</p>
        <p className="text-grey-font-light">{item.rentalType}</p>
        <div className="flex gap-[2px]">
          <p className="text-grey-font-light">{item.rentalPeriod} </p>
          <Image
            src={`/assets/icons/dot.svg`}
            alt="dot"
            width={4}
            height={18}
          />
          <p className="text-grey-font">{item.price}</p>
        </div>
      </div>
      <div className="h-[1px] bg-grey-light"></div>
      <p className="text-[13px] font-pretendardRegular text-grey-font-light">
        {item.taskDescription}
      </p>
    </div>
  );
};

export default OrderItem;
