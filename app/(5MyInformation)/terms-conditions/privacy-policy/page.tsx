"use client";

import { useState } from "react";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon } from "@/components/icons";
import CustomSelect from "@/components/Select/Select";
import { useRouter } from "next/navigation";

const terms = [
  {
    key: "privacy_policy_v10",
    title: "개인정보 처리방침 (V1.0)",
    sections: [
      {
        id: "general",
        title: "제1조",
        description: "목적",
        content: [
          "① (주)서비스명(이하 “회사”라 함)은 이용자의 개인정보를 소중하게 생각하고, 보호하기 위하여 항상 최선을 다해 노력하고 있습니다. 회사는 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」을 비롯한 모든 개인정보보호 관련 법률규정을 준수하고 있으며, 관련 법령에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다. 또한 「개인정보처리방침」을 제정하여 준수하고 있으며, 이를 인터넷사이트 및 모바일 어플리케이션에 공개하여 이용자가 언제나 용이하게 열람할 수 있도록 하고 있습니다.",
        ],
      },
      {
        id: "definitions",
        title: "제2조",
        description: "정의",
        content: [
          "① 이 방침에서 사용하는 용어의 정의는 다음과 같습니다.",
          {
            term: "이용자",
            definition:
              "접속하여 직방 서비스 이용약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말하며 회원도 포함합니다.",
          },
          {
            term: "서비스",
            definition:
              "구현되는 단말기(PC, 모바일, 태블릿 PC 등의 각종 유무선 장치를 포함)와 상관없이 이용자가 이용할 수 있는 직방 서비스를 의미합니다.",
          },
          {
            term: "회원",
            definition:
              "회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며, 회사가 제공하는 서비스를",
          },
        ],
      },
    ],
  },
  {
    key: "privacy_policy_v05",
    title: "개인정보 처리방침 (V0.5)",
    sections: [
      {
        id: "general",
        title: "제1조",
        description: "목적",
        content: [
          "① (주)서비스명(이하 “회사”라 함)은 이용자의 개인정보를 소중하게 생각하고, 보호하기 위하여 항상 최선을 다해 노력하고 있습니다. 회사는 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」을 비롯한 모든 개인정보보호 관련 법률규정을 준수하고 있으며, 관련 법령에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다. 또한 「개인정보처리방침」을 제정하여 준수하고 있으며, 이를 인터넷사이트 및 모바일 어플리케이션에 공개하여 이용자가 언제나 용이하게 열람할 수 있도록 하고 있습니다.",
        ],
      },
      {
        id: "definitions",
        title: "제2조",
        description: "정의",
        content: [
          "① 이 방침에서 사용하는 용어의 정의는 다음과 같습니다.",
          {
            term: "이용자",
            definition:
              "접속하여 직방 서비스 이용약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말하며 회원도 포함합니다.",
          },
          {
            term: "서비스",
            definition:
              "구현되는 단말기(PC, 모바일, 태블릿 PC 등의 각종 유무선 장치를 포함)와 상관없이 이용자가 이용할 수 있는 직방 서비스를 의미합니다.",
          },
          {
            term: "회원",
            definition:
              "회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며, 회사가 제공하는 서비스를",
          },
        ],
      },
    ],
  },
];

export default function PrivacyPolicy() {
  const [selectedTerm, setSelectedTerm] =
    useState<string>("privacy_policy_v10");

  // Find the selected term
  const activeTerm = terms.find((term) => term.key === selectedTerm);
  const router = useRouter();
  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full overflow-y-scroll scrollbar-hide relative text-grey-font">
          <TopNavigationBar
            leading={
              <button
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
              <div className="!h-[34px] flex items-center justify-center">
                <p className="text-grey-font text-[16px] font-PretendardBold w-full">
                  개인정보 처리방침
                </p>
              </div>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="pt-[78px] overflow-y-scroll overflow-x-hidden scrollbar-hide !z-50">
            <div className="w-full p-[16px] h-full text-grey-font font-pretendardRegular bg-white !text-[13px] leading-[18.2px]">
              {/* Custom Select Dropdown */}
              <div className="w-[164px] !h-[30px]">
                <CustomSelect
                  placeholder={activeTerm?.title}
                  items={terms.map((term) => ({
                    key: term.key,
                    label: term.title,
                  }))}
                  onItemSelect={setSelectedTerm}
                  horizontalPadding="!px-2"
                  iconStyle="end-[2px] w-[15px] h-[15px] !mr-1"
                  height={"!min-h-[30px] !h-[30px] !max-h-[30px]"}
                  borderRadius="rounded-[4px]"
                />
              </div>

              {/* Content Display */}
              <div className="flex flex-col gap-[20px] rounded mt-[20px] font-pretendardRegular text-black">
                <div className="text-[13px] leading-[18.2px]">제1장 총칙</div>
                {activeTerm?.sections.map((section, index) => (
                  <div key={index} className="text-[13px] leading-[18.2px] ">
                    <h3 className="text-[14px] font-medium text-black">
                      {section.title}{" "}
                      {section.description && `(${section.description})`}
                    </h3>
                    <div className="pl-[1px]">
                      {section.content.map((item, idx) =>
                        typeof item === "string" ? (
                          <div key={idx} className="list-none text-black">
                            {item}
                          </div>
                        ) : (
                          <div key={idx} className="flex gap-[3px]">
                            <div className="text-black">{idx}.</div>
                            <div>
                              <span className="text-black">{item.term}:</span>{" "}
                              {item.definition}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )) || (
                  <p className="text-[13px] leading-[18.2px] text-grey-font-light">
                    No content available.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
