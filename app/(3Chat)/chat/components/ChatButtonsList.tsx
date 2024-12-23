import { useState } from "react";
import CustomButtonsTop from "@/app/(2Ordering)/ordering/components/CustomButtonsTop";

interface CustomButtonsListProps {
  handleClick?: (title: string) => void; // Optional callback
}

export default function CustomButtonsList({
  handleClick,
}: CustomButtonsListProps) {
  const [activeButton, setActiveButton] = useState<string>("전체");

  const buttonData = ["전체", "모집 중", "배차 완료", "안 읽음"];

  const handleButtonClick = (title: string) => {
    setActiveButton(title);
    if (handleClick) {
      handleClick(title); 
    }
  };

  return (
    <div className="flex px-4 gap-[6px]">
      {buttonData.map((title) => (
        <CustomButtonsTop
          key={title}
          isActive={activeButton === title}
          title={title}
          onClick={() => handleButtonClick(title)}
        />
      ))}
    </div>
  );
}
