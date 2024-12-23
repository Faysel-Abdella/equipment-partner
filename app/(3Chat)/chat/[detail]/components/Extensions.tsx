"use client";
import React from "react";
import {
  FilesIcon,
  FormIcon,
  PhotosIcon,
  UploadIcon,
  WIcon,
} from "@/components/icons";
import { useRouter } from "next/navigation";
interface ChatExtensionsProps {
  onClick2: () => void;
  onClick3: () => void;
  onClick4?: () => void;
  onClick5: () => void;
}

export const ChatExtensions: React.FC<ChatExtensionsProps> = ({
  onClick2,
  onClick3,
  onClick5,
}) => {
  interface IconProps {
    className?: string;
    style?: React.CSSProperties;
    fillColor: string;
  }
  const router = useRouter();
  const extensionItems: {
    id: number;
    name: string;
    onClick: () => void;
    // onClick2?: () => void;
    icon: React.FC<IconProps>;
  }[] = [
    { id: 1, name: "사진", onClick: () => {}, icon: PhotosIcon },
    { id: 2, name: "서류 발송", onClick: onClick2, icon: UploadIcon },
    { id: 3, name: "계약서 작성", onClick: onClick3, icon: FormIcon },
    {
      id: 4,
      name: "세금계산서 발행 요청",
      onClick: () => {
        router.push("/chat/john/submit-invoice");
      },
      icon: WIcon,
    },
    {
      id: 5,
      name: "발주서 공유",
      onClick: onClick5,
      icon: FilesIcon,
    },
  ];

  return (
    <div className="absolute bottom-0 w-full h-[200px] xs:h-[250px] bg-white !z-40 flex items-center justify-center">
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
    </div>
  );
};
