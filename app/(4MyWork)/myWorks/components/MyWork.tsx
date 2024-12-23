import { WorkItem } from "@/types/MyWorkItemType";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type MyWorkProps = {
  item: WorkItem;
};

interface StatusStyles {
  [key: string]: string; // Generic key-value mapping for styles
}

const getStatusTag = (status: string) => {
  const statusStyles: StatusStyles = {
    모집중: "text-main-color bg-[#E3F1FF]",
    배차완료: "text-[#9761FF] bg-[#EFE7FF]",
    작업완료: "text-grey-font bg-grey-light",
    작업취소: "text-red-color bg-[#FDEEEE]",
  };

  return (
    <p
      className={`inline-block items-center text-[10px] px-[4px] py-[2px] rounded-[2px] ${statusStyles[status]}`}
    >
      {status}
    </p>
  );
};

const MyWork: React.FC<MyWorkProps> = ({ item }) => {
  const router = useRouter();
  return (
    <div className="text-[13px] space-y-[10px] text-grey-font-light font-pretendardRegular p-[16px] border-1 border-grey-border rounded-[12px] relative">
      <div className="flex justify-between items-center gap-[10px]">
        <div className="flex items-center gap-[8px]">
          <p>{item.date}</p>
          {/* <p className="inline-block items-center text-[10px] px-[4px] py-[2px] rounded-[2px] text-main-light-color bg-grey-light ">
            {item.status}
          </p> */}
          {getStatusTag(item.status)}
        </div>
        <button
          className="flex justify-end"
          onClick={() => {
            if (item.evaluationStatus == "평가 완료") {
              router.push(`myWorks/view-assessment`);
            }
            if (item.evaluationStatus == "평가 등록") {
              router.push(`/myWorks/register-assessment`);
            }
          }}
        >
          {item.evaluationStatus && (
            <p
              className={`inline-block items-center  text-[10px] px-[4px] py-[2px] rounded-[2px]  underline ${
                item.evaluationStatus == "평가 등록"
                  ? "text-main-light-color decoration-main-light-color"
                  : " text-grey-font-light decoration-grey-font-light "
              } `}
            >
              {item.evaluationStatus}
            </p>
          )}
        </button>
      </div>
      <div className="h-[1px] bg-grey-light"></div>
      <div className="flex gap-[4px]">
        <p className="text-16px text-grey-font font-PretendardBold">
          {item.name}
        </p>
        <p className="">{item.description}</p>
      </div>
      <div className="space-y-[2px]">
        <p className="text-main-color">{item.location}</p>
        <p className="text-grey-font">{item.rentalType}</p>
        <div className="flex gap-[2px]">
          <p className=""> {item.rentalPeriod}</p>
          <Image src={`assets/icons/dot.svg`} alt="dot" width={4} height={18} />
          <p className="text-grey-font">{item.price}</p>
        </div>
      </div>
      <div className="h-[1px] bg-grey-light"></div>
      <p className="">{item.taskDescription}</p>
    </div>
  );
};

export default MyWork;
