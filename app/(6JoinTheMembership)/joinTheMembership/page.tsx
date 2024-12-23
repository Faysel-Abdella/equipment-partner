"use client";

import { useState } from "react";
import { BackIcon, EnterpriseIcon, PersonIcon } from "@/components/icons";
import { JoinMembershipRadio } from "@/components/RadioButton/JoinMembershipRadio";
import { CustomButton } from "@/components/button/Button";
import DisplaySpace from "@/components/DisplaySpace";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import { useRouter } from "next/navigation";

type CompanyType = "client" | "provider" | "";

export default function JoinMembershipPage() {
  const [selectedType, setSelectedType] = useState<CompanyType>("");
  const router = useRouter();
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full overflow-y-scroll scrollbar-hide relative">
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
                회원가입
              </h3>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="pt-[78px] overflow-y-scroll overflow-x-hidden scrollbar-hide z-40">
            <div className="h-full bg-white flex flex-col justify-between px-4">
              {/* Main Content */}
              <main className="pt-[20px] ">
                <div className="">
                  <h2 className="text-[20px] font-PretendardBold text-grey-font mb-[20px] ">
                    가입할 유형을 선택해 주세요
                  </h2>

                  <div className="flex flex-col gap-[16px]">
                    <JoinMembershipRadio
                      icon={
                        <PersonIcon className="!w-[36px] !h-[36px] !min-w-[36px] !min-h-[36px]" />
                      }
                      title="개인회원"
                      selected={selectedType === "client"}
                      onClick={() => setSelectedType("client")}
                    />

                    <JoinMembershipRadio
                      icon={
                        <EnterpriseIcon className="!w-[36px] !h-[36px] !min-w-[36px] !min-h-[36px]" />
                      }
                      title="기업회원"
                      description={
                        <p className="font-pretendardRegular text-grey-font-light text-[14px]">
                          개인사업자, 법인사업자 <br /> 세금계산서 가능
                        </p>
                      } // must be new line
                      selected={selectedType === "provider"}
                      onClick={() => setSelectedType("provider")}
                    />
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="bg-white w-full px-4 absolute bottom-0 !z-50 pb-[40px] !h-[106px] min-h-[106px]">
            <CustomButton
              label={" 다음"}
              height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
              disabled={selectedType === ""}
              backgroundColor={"bg-main-color"}
              textStyle={"text-white font-PretendardBold text-[16px]"}
              onPress={() => {
                console.log("selectedType", selectedType);
                if (selectedType === "provider") {
                  router.push("/terms2");
                } else {
                  router.push("/terms");
                }
              }}
            />
          </div>
        </div>
      }
    />
  );
}
