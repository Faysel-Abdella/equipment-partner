"use client";
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { OrderItemType } from "@/types/orderItemTypes";

// Static data for all items
const AllItems: OrderItemType[] = [
  {
    id: 1,
    name: "굴착기 06W",
    description: "타이어, W, 휠, 쪽버켓",
    location: "충북 청주시 상당구",
    rentalType: "임대 (장비+기사)",
    rentalPeriod: "24.12.14 (1일)",
    price: "60만원",
    taskDescription: "APT 현장 기초 굴착 작업",
    isFavorite: false, // Favorite state for each item
  },
  {
    id: 2,
    name: "굴착기 02LC",
    description: "",
    location: "서울 강남구",
    rentalType: "임대 (장비+기사) . 렌탈 (장비만)",
    rentalPeriod: "24.11.24-24.12.23 (1개월)",
    price: "견적 제안",
    taskDescription: "터널 굴착 현장 장비 대여",
    isFavorite: false,
  },
  {
    id: 3,
    name: "굴착기 08Y",
    description: "타이어, W, 휠, 쪽버켓",
    location: "경기 수원시",
    rentalType: "임대 (장비+기사)",
    rentalPeriod: "24.12.16 (3일)",
    price: "100만원",
    taskDescription: "기초 굴착 작업",
    isFavorite: false,
  },
  {
    id: 1,
    name: "굴착기 06W",
    description: "타이어, W, 휠, 쪽버켓",
    location: "충북 청주시 상당구",
    rentalType: "임대 (장비+기사)",
    rentalPeriod: "24.12.14 (1일)",
    price: "60만원",
    taskDescription: "APT 현장 기초 굴착 작업",
    isFavorite: true,
  },
  {
    id: 2,
    name: "굴착기 02LC",
    description: "",
    location: "서울 강남구",
    rentalType: "임대 (장비+기사) . 렌탈 (장비만)",
    rentalPeriod: "24.11.24-24.12.23 (1개월)",
    price: "견적 제안",
    taskDescription: "터널 굴착 현장 장비 대여",
    isFavorite: true,
  },
  {
    id: 3,
    name: "굴착기 08Y",
    description: "타이어, W, 휠, 쪽버켓",
    location: "경기 수원시",
    rentalType: "임대 (장비+기사)",
    rentalPeriod: "24.12.16 (3일)",
    price: "100만원",
    taskDescription: "기초 굴착 작업",
    isFavorite: true,
  },
];

interface orderListProps {
  isAll: boolean;
}
const OrderList: React.FC<orderListProps> = ({ isAll }) => {
  // State to manage the items (including their `isFavorite` status)
  const [items, setItems] = useState<OrderItemType[]>(AllItems);
  const [favorites, setFavorites] = useState<OrderItemType[]>([]); // Favorite items state

  // Set favorites by default where isFavorite is true
  useEffect(() => {
    const initialFavorites = items.filter((item) => item.isFavorite === true);
    setFavorites(initialFavorites);
  }, [items]);

  // Function to toggle the favorite state for an item
  const toggleFavorite = (id: number) => {
    setItems((prevItems) => {
      // First, update the `isFavorite` property of the item
      const updatedItems = prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, isFavorite: !item.isFavorite };
        }
        return item;
      });

      // Now, update the `favorites` array
      setFavorites((prevFavorites) => {
        const item = updatedItems.find((item) => item.id === id); // Find the updated item

        // If the item is now a favorite, add it to favorites, otherwise remove it
        if (item?.isFavorite) {
          // Check if the item is already in the favorites list before adding it
          if (!prevFavorites.some((favItem) => favItem.id === id)) {
            return [...prevFavorites, item]; // Add to favorites
          }
        } else {
          return prevFavorites.filter((favItem) => favItem.id !== id); // Remove from favorites
        }

        return prevFavorites; // Return the unchanged favorites array if no change
      });

      return updatedItems; // Return the updated items array
    });
  };

  const itemsToRender = isAll ? items : favorites;
  return (
    <div className="space-y-[20px]">
      {itemsToRender.map((item, index) => (
        <OrderItem key={index} item={item} toggleFavorite={toggleFavorite} />
      ))}
    </div>
  );
};

export default OrderList;
