import { OrderItemType } from "@/types/orderItemTypes";
import React from "react";
import ItemDescriptions from "./ItemDescriptions";

const RequestEvaluation: React.FC<{
  item: OrderItemType;
}> = ({ item }) => {
  return (
    <div>
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
    </div>
  );
};

export default RequestEvaluation;
