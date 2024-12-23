"use client";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import AlarmList from "../components/AlarmList";

export default function AlarmPage() {
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
            middle={
              <h3 className="w-full text-[16px] text-grey-font font-PretendardBold flex items-center justify-center">
                알림
              </h3>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="relative">
            <div className="!h-[78px]"></div>
            <AlarmList />
          </div>
        </div>
      }
    />
  );
}
