import { ChatItemProps } from "@/types/chatItemType";
import Image from "next/image";
import React, { useState } from "react";

const ChatList: React.FC<{ chats: ChatItemProps[] }> = ({ chats }) => {
  const [selectedChatIndex, setSelectedChatIndex] = useState<number | null>(
    null
  );

  return (
    <div className="flex flex-col w-full overflow-y-scroll scrollbar-hide">
      {chats.map((chat, index) => (
        <button
          key={index}
          className={`flex w-full px-[16px] py-[14px] items-center gap-[10px] transition-all duration-300 ${
            selectedChatIndex === index ? "bg-grey-light" : ""
          }`}
          onClick={() => {
            setSelectedChatIndex(index); // Set the active chat
            setTimeout(() => {
              chat.onClick(); // Navigate to the route after a delay
            }, 200); // Adjust delay as needed
          }}
        >
          {/* Profile Picture with Status */}
          <div className="relative items-center rounded-[20px] overflow-hidden !w-full max-w-[64px] h-[64px]">
            <Image
              src={chat.profileImage}
              alt="profile picture"
              width={64}
              height={64}
              className="object-cover !w-[64px] h-[64px]"
            />
            {chat.status === "completed" && (
              <p className="absolute bottom-0 w-full text-center font-pretendardRegular text-[10px] text-white bg-main-color py-[2px] rounded-b-[20px]">
                배차 완료
              </p>
            )}

            {chat.status === "pending" && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-600 bg-opacity-70 rounded-[20px]">
                <p className="font-pretendardRegular text-white text-[10px]">
                  입장 대기
                </p>
              </div>
            )}
          </div>

          {/* Chat Content */}
          <div className="w-full space-y-[4px]">
            <div className="flex justify-between items-start">
              <div className="flex space-x-[4px] items-center">
                <p className="font-pretendardRegular text-[16px] text-grey-font">
                  {chat.name}
                </p>
                {/* Muted Icon (Optional) */}
                {chat.isMuted && (
                  <Image
                    src={`/assets/icons/muted.svg`}
                    alt="muted"
                    width={16}
                    height={16}
                  />
                )}
              </div>
              <p className="font-pretendardRegular text-[10px] text-grey-disabled">
                {chat.time}
              </p>
            </div>

            {/* Message and Notification */}
            <div className="flex justify-between gap-[4px]">
              <p className="font-pretendardRegular text-[13px] text-grey-font-light">
                {chat.message}
              </p>
              {/* Notification Count (Optional) */}
              {chat.notificationCount && chat.notificationCount > 0 ? (
                <p className="flex flex-wrap !w-[17px] !h-[17px]  !min-w-[17px] !min-h-[17px] font-pretendardRegular bg-red-color text-white items-center justify-center rounded-[100px] text-[10px]">
                  {chat.notificationCount}
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ChatList;
