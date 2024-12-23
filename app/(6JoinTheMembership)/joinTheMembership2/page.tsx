"use client";

import { useState } from "react";
import { BackIcon, FillFormIcon, MyWorkIcon2 } from "@/components/icons";
import { JoinMembershipRadio } from "@/components/RadioButton/JoinMembershipRadio";
import { CustomButton } from "@/components/button/Button";
import DisplaySpace from "@/components/DisplaySpace";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import { useRouter } from "next/navigation";

type CompanyType = "client" | "provider" | "";

export default function JoinMembership2() {
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
          <div className="pt-[78px] h-full relative overflow-y-scroll overflow-x-hidden scrollbar-hide z-40">
            <div className="h-full bg-white flex flex-col justify-between">
              {/* Main Content */}
              <main className="pt-[20px]  px-4 ">
                <div className="">
                  <h2 className="text-[20px] font-PretendardBold text-grey-font mb-[20px] ">
                    가입할 유형을 선택해 주세요
                  </h2>

                  <div className="flex flex-col gap-[16px]">
                    <JoinMembershipRadio
                      icon={
                        <FillFormIcon className="!w-[36px] !h-[36px] !min-w-[36px] !min-h-[36px]" />
                      }
                      title={
                        <span className="font-PretendardBold text-grey-font text-[16px]">
                          발주사
                          <br />
                          (중장비 사용이 필요합니다)
                        </span>
                      }
                      description={
                        <p className="font-pretendardRegular text-grey-font-light text-[13px]">
                          중장비 임대, 렌탈, 기사구인 등
                          <br />
                          중장비 관련 서비스 구매자
                        </p>
                      }
                      selected={selectedType === "client"}
                      onClick={() => setSelectedType("client")}
                    />

                    <JoinMembershipRadio
                      icon={
                        <MyWorkIcon2
                          className="!w-[36px] !h-[36px] !min-w-[36px] !min-h-[36px]"
                          fillColor={"#429FFF"}
                        />
                      }
                      title={
                        <span className="font-PretendardBold text-grey-font text-[16px]">
                          장비사업자 / 장비기사
                          <br />
                          (중장비 서비스를 제공합니다)
                        </span>
                      }
                      description={
                        <p className="font-pretendardRegular text-grey-font-light text-[13px]">
                          중장비 차주, 기사, 렌탈 사업자 등 
                          <br />
                          중장비 관련 서비스 제공자
                        </p>
                      }
                      selected={selectedType === "provider"}
                      onClick={() => setSelectedType("provider")}
                    />
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="bg-white w-full px-4 absolute bottom-0 !z-50 pb-[40px]">
            <CustomButton
              label={" 다음"}
              backgroundColor={"bg-main-color"}
              disabled={selectedType === ""}
              textStyle={"text-white font-PretendardBold text-[16px]"}
              height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
              onPress={() => {
                router.push("/joinTheMembership");
              }}
            />
          </div>
        </div>
      }
    />
  );
}
