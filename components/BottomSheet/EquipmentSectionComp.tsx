import { useState } from "react";

export function EquipmentSection() {
  const categories = [
    {
      title: "장비 분류",
      items: [
        "미니 017",
        "미니 020",
        "미니 030",
        "미니 035",
        "02(공동)",
        "03(금곡)",
        "06(금곡)",
        "08(공림)",
        "10(탐)",
        "기타",
      ],
    },
    {
      title: "어태치먼트",
      desc: "어태치먼트",
      items: [
        "브레이크",
        "크라샤",
        "쪼개켓",
        "채버켓",
        "대버켓",
        "틸트 로테이터",
        "집게",
        "지게발",
        "먼지기",
        "회전 돌격게",
        "리퍼",
        "마이티백",
      ],
    },
  ];

  // State to track selected items
  const [selectedItems, setSelectedItems] = useState<Record<string, string[]>>(
    {}
  );

  const handleSelect = (category: string, item: string) => {
    setSelectedItems((prev) => {
      const currentCategory = prev[category] || [];
      const isSelected = currentCategory.includes(item);

      // Add or remove the item from the category's selected list
      const updatedCategory = isSelected
        ? currentCategory.filter((i) => i !== item)
        : [...currentCategory, item];

      return {
        ...prev,
        [category]: updatedCategory,
      };
    });
  };

  return (
    <div className="space-y-[16px] p-5">
      {categories.map((category, index) => (
        <div key={category.title}>
          <h2 className="text-[16px] font-PretendardBold text-grey-font mb-[16px]">
            {category.title}{" "}
            <span className="pl-2 font-pretendardRegular text-[13px] text-grey-font-light">
              {category.desc}
            </span>
          </h2>
          <div className="grid grid-cols-3 gap-[16px]">
            {category.items.map((item) => {
              const isSelected =
                selectedItems[category.title]?.includes(item) ?? false;

              return (
                <button
                  key={item}
                  onClick={() => handleSelect(category.title, item)}
                  className={`py-[16px] font-pretendardRegular rounded-md border text-grey-font-light sm:!w-[108px] !h-[54px] ${
                    isSelected
                      ? "border-main-color text-main-color"
                      : "border-grey-border hover:border-main-color hover:text-main-color"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
          {index !== categories.length - 1 && (
            <div className="!h-[5px] my-5 bg-grey-light"></div>
          )}
        </div>
      ))}
    </div>
  );
}
