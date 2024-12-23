import React, { useEffect, useState } from "react";

interface TabItem {
  title: string;
  content: React.ReactNode;
}

interface CustomTabProps {
  items: TabItem[];
  borderColor: string;
  textStyle?: string;
  separator?: boolean;
  selectedBorderColor?: string;
  unselectedBorderColor?: string;
  selectedTextColor?: string;
  unselectedTextColor?: string;
  selectedBgColor?: string;
  unselectedBgColor?: string;
  compactTab?: boolean;
  setTabIndex?: (value: number) => void;
  onTabChange?: () => void;
  overflowStyle?: string;
  overflowStyleHeader?: string;
}

export default function CustomTab({
  items,
  borderColor,
  textStyle,
  compactTab,
  separator = true,
  selectedBgColor = "bg-white",
  selectedBorderColor = "border-t-[1px] border-grey-border",
  unselectedBorderColor = "border-r-[1px] border-grey-border",
  selectedTextColor = "text-main-color",
  unselectedBgColor = "bg-grey-light",
  unselectedTextColor = "text-grey-font-light",
  setTabIndex = () => {},
  onTabChange = () => {},
  overflowStyle = "", //overflow-auto h-[calc(100vh-140px)]
  overflowStyleHeader = "", //sticky top-[78px] !z-50
}: CustomTabProps) {
  const [selected, setSelected] = React.useState(items[0]?.title || "");
  const [tabChange, setTabChanged] = useState(false);
  useEffect(() => {
    const index = items.findIndex((item) => item.title === selected);
    setTabIndex(index);
    if (!tabChange && selected != (items[0]?.title || "")) {
      onTabChange();
      setTabChanged(true);
    }
  }, [selected, items, setTabIndex]);
  return (
    <div className="flex w-full flex-col">
      {compactTab ? (
        <>
          {/* Tab Headers */}
          <div
            className={`flex w-full ${overflowStyleHeader} bg-white overflow-x-auto scrollbar-hide max-w-full whitespace-nowrap`}
          >
            {items.map((item) => (
              <button
                key={item.title}
                onClick={() => {
                  setSelected(item.title);
                }}
                className={`flex-1 min-w-[81px] px-4 py-2 text-center !h-[50px] ${
                  compactTab ? "w-full overflow-hidden" : ""
                } ${
                  separator ? "border-t-[1px] border-grey-border" : "border-0"
                } ${
                  selected === item.title
                    ? `${selectedBgColor}  ${
                        selectedBorderColor ? selectedBorderColor : borderColor
                      }`
                    : `${unselectedBgColor} ${unselectedBorderColor}  `
                }  ${textStyle ? textStyle : "text-[16px]"} ${
                  selected === item.title
                    ? `font-PretendardBold ${selectedTextColor}`
                    : `font-pretendardRegular ${unselectedTextColor}`
                }`}
              >
                <span
                  className={`${
                    compactTab ? "!max-h-[22px] !h-[22px] overflow-hidden" : ""
                  }`}
                >
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={`${overflowStyle}   `}>
            {items.find((item) => item.title === selected)?.content}
          </div>
        </>
      ) : (
        <>
          {/* Tab Headers */}
          <div className={`flex w-full bg-white ${overflowStyleHeader}`}>
            {items.map((item) => (
              <button
                key={item.title}
                onClick={() => setSelected(item.title)}
                className={`w-full flex-1 px-4 py-2 text-center bg-white !h-[54px] overflow-hidden ${
                  selected === item.title
                    ? `border-b-[3px] ${selectedBorderColor}`
                    : "border-b-[1px] border-grey-disabled"
                } ${
                  textStyle ? textStyle : "font-PretendardBold text-[16px]"
                } ${
                  selected === item.title
                    ? selectedTextColor
                    : unselectedTextColor
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={`pt-4 ${overflowStyle}`}>
            {items.find((item) => item.title === selected)?.content}
          </div>
        </>
      )}
    </div>
  );
}
