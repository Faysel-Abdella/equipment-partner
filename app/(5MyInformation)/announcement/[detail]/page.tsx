"use client";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon } from "@/components/icons";
import { useRouter } from "next/navigation";

export default function AnnouncementDetailPage() {
  const router = useRouter();

  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full max-w-full overflow-y-scroll scrollbar-hide relative">
          <TopNavigationBar
            leading={
              <button
                className=""
                onClick={() => {
                  router.back();
                }}
              >
                <BackIcon
                  className="min-w-[10px] min-h-[12px]"
                  fillColor="#80808e"
                />
              </button>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="h-full relative">
            <div className="!h-[78px]"></div>
            <div className="w-full flex flex-col px-4">
              {[...Array(1)].map((_, i) => (
                <div
                  key={i}
                  className="!h-[76px] py-4 flex flex-col gap-y-1 border-b-[1px] border-grey-border"
                >
                  <span className="font-pretendardRegular text-[16px] text-grey-font">
                    {" "}
                    공지사항3 제목 텍스트 영역입니다.
                  </span>
                  <span className="font-pretendardRegular text-[13px] text-grey-font-light">
                    2024-11-30
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 font-pretendardRegular text-grey-font text-[16px] px-4">
              안녕하세요 장비파트너입니다. <br />
              공지사항 내용 텍스트 영역입니다.
            </div>
          </div>
        </div>
      }
    />
  );
}
