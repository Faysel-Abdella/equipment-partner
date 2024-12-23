"use client";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon, ChevronRight } from "@/components/icons";
import { useRouter } from "next/navigation";

export default function CustomerServicePage() {
  const router = useRouter();

  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full max-w-full relative">
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
            middle={
              <h3 className="w-full text-[16px] text-grey-font font-PretendardBold flex items-center justify-center">
                고객센터
              </h3>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="h-full relative">
            <div className="!h-[78px]"></div>
            <div className="bg-white min-h-screen px-5 font-pretendardRegular">
              <ul className="">
                <li>
                  <button
                    className="w-full flex items-center py-[16px] justify-between text-[15px] border-b border-grey-light text-grey-font"
                    onClick={() => {
                      router.push("/announcement");
                    }}
                  >
                    <span>공지사항</span>
                    <ChevronRight fillColor="#fff" />
                  </button>
                </li>
                <li>
                  <button
                    className="w-full flex items-center justify-between py-[16px] text-[15px] border-b border-grey-light text-grey-font"
                    onClick={() => {
                      router.push("/faq");
                    }}
                  >
                    <span>FAQ</span>
                    <ChevronRight fillColor="#fff" />
                  </button>
                </li>
                <li>
                  <button
                    className="w-full flex items-center justify-between py-[16px] text-[15px]  text-grey-font"
                    onClick={() => {
                      router.push("/1-1-inquiry");
                    }}
                  >
                    <span>1:1 문의</span>
                    <ChevronRight fillColor="#fff" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
    />
  );
}