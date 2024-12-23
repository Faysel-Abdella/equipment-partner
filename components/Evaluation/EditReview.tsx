"use client";
import React from "react";
import ItemDescriptions from "./ItemDescriptions";
import { OrderItemType } from "@/types/orderItemTypes";
import Rating from "./Rating";
import { ReviewType } from "@/types/reviewTypes";
import CustomTextArea from "../input/TextArea";
import CameraInput from "../cameraInput/CameraInput";

const EditReview: React.FC<{
  item: OrderItemType;
  review: ReviewType;
}> = ({ item, review }) => {
  return (
    <div className="space-y-[20px]">
      <ItemDescriptions
        id={item.id}
        name={item.name}
        description={item.description}
        location={item.location}
        rentalType={item.rentalType}
        rentalPeriod={item.rentalPeriod}
        price={item.price}
        taskDescription={item.taskDescription}
        isFavorite={item.isFavorite}
      />
      <div className="h-[5px] bg-grey-light"></div>
      <div className="px-[16px] space-y-[20px]">
        <Rating initialRating={review.rating} />
        <CustomTextArea placeholder={review.content} height="h-[165px]" />
        <div className="flex gap-[10px]">
          <CameraInput />
        </div>
      </div>
    </div>
  );
};

export default EditReview;
