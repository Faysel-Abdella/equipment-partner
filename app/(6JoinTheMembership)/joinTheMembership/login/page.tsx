"use client";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import Login from "./components/Login";

export default function LoginPage() {
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
          />
          <div className="pb-[100px] overflow-x-hidden scrollbar-hide h-full relative max-h-screen">
            <Login />
          </div>
        </div>
      }
    />
  );
}
