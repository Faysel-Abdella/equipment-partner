"use client";
import React, { useState } from "react";
import {
  CallIcon,
  DocumentsIcon,
  PhotosIconDeep,
  SignatureIcon,
  UploadIconDeep,
  WIcon2,
} from "@/components/icons";
import SnackBar from "@/components/SnackBar.tsx/SnackBar";
interface ChatExtensions2Props {
  onClick2: () => void;
  onClick3: () => void;
  onClick4?: () => void;
  onClick5?: () => void;
}

export const ChatExtensions2: React.FC<ChatExtensions2Props> = ({
  onClick2,
  onClick3,
}) => {
  interface IconProps {
    className?: string;
    style?: React.CSSProperties;
    fillColor: string;
  }
  const [snackVisible, setSnackVisible] = useState(false);

  const triggerSnack = () => {
    setSnackVisible(true);
    setTimeout(() => setSnackVisible(false), 30000) // Hide after 3 seconds
  };
  const extensionItems: {
    id: number;
    name: string;
    onClick: () => void;
    // onClick2?: () => void;
    icon: React.FC<IconProps>;
  }[] = [
    { id: 1, name: "사진", onClick: () => {}, icon: PhotosIconDeep },
    { id: 2, name: "전화", onClick: onClick2, icon: CallIcon },
    { id: 3, name: "서류 발송", onClick: onClick3, icon: DocumentsIcon },
    { id: 4, name: "계약서 작성", onClick: () => {}, icon: SignatureIcon },
    {
      id: 5,
      name: "세금계산서 발행 요청",
      onClick: triggerSnack,
      icon: WIcon2,
    },
    { id: 6, name: "", onClick: () => {}, icon: UploadIconDeep },
  ];

  return (
    <div className="absolute bottom-0 w-full h-[200px] xs:h-[250px] bg-white items-center justify-center">
      <div className="grid grid-cols-3 gap-y-[30px] !min-w-full max-w-[390px] px-[16px] h-full place-items-start">
        {extensionItems.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <div
              key={item.id}
              className={`flex  justify-center w-full h-full ${
                index > 2 ? "items-start" : "items-end"
              }`}
            >
              <button
                onClick={item.onClick}
                className="flex flex-col items-center justify-center w-full max-w-[78px] cursor-pointer !h-[70px] gap-y-[10px]"
              >
                <span className="flex items-center justify-center w-[30px] h-[30px] min-w-[30px] min-h-[30px]">
                  <IconComponent fillColor="#000" />
                </span>
                <span className="font-pretendardRegular text-[13px] text-grey-font">
                  {item.name}
                </span>
              </button>
            </div>
          );
        })}
      </div>
      {snackVisible && <div className="w-full relative"><SnackBar message="이미 요청했습니다" /></div>}
    </div>
  );
};
