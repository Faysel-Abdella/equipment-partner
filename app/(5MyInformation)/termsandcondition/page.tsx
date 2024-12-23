"use client";

import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import BottomNavigationBar from "@/components/BottomNavigation/BottomNavigationBar";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon } from "@/components/icons";

const terms = [
  {
    key: "general",
    title: "개인정보 처리방침 (v7.0)",
    content: [
      {
        section: "제1조 총칙",
        description: "목적",
        details: [
          '① (주)네이버(이하 "회사"라 함)은 이용자의 개인정보를 소중하게 생각하며, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「개인정보 보호법」 등 관련 법령을 준수하고 있습니다. 회사는 "개인정보처리방침"을 통하여 이용자의 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.',
        ],
      },
      {
        section: "제2조 정의",
        description: "정의",
        details: [
          "① 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.",
          "1. 서비스 : 구현되는 단말기(PC, 스마트폰, 태블릿 PC 등의 각종 유무선 장치를 포함)와 상관없이 회원이 이용할 수 있는 네이버 및 네이버 제반 서비스를 의미합니다.",
          "2. 회원 : 회사의 서비스에 접속하여 이 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.",
          "3. 아이디(ID) : 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 문자와 숫자의 조합을 의미합니다.",
        ],
      },
    ],
  },
  {
    key: "service",
    title: "서비스 이용약관 (v0.5)",
    content: [
      {
        section: "제1조 총칙",
        description: "목적",
        details: [
          '① (주)네이버(이하 "회사"라 함)은 이용자의 개인정보를 소중하게 생각하며, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「개인정보 보호법」 등 관련 법령을 준수하고 있습니다. 회사는 "서비스이용약관"을 통하여 이용자의 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.',
        ],
      },
      {
        section: "제2조 정의",
        description: "정의",
        details: [
          "① 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.",
          "1. 서비스 : 구현되는 단말기(PC, 스마트폰, 태블릿 PC 등의 각종 유무선 장치를 포함)와 상관없이 회원이 이용할 수 있는 네이버 및 네이버 제반 서비스를 의미합니다.",
          "2. 회원 : 회사의 서비스에 접속하여 이 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.",
          "3. 아이디(ID) : 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 문자와 숫자의 조합을 의미합니다.",
        ],
      },
    ],
  },
];

export default function TermsComparison() {
  const [selectedTerm, setSelectedTerm] = useState<string>(terms[0].key);

  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full overflow-y-scroll scrollbar-hide relative">
          <TopNavigationBar
            leading={
              <button className="" onClick={() => {}}>
                <BackIcon
                  className="min-w-[10px] min-h-[12px] "
                  fillColor="#80808e"
                />
              </button>
            }
            middle={
              <div className="!h-[34px] flex items-center justify-center">
                <p className="text-grey-font text-[16px] font-PretendardBold w-full">
                  서비스 이용약관
                </p>
              </div>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="pt-[78px] overflow-y-scroll overflow-x-hidden scrollbar-hide !z-50">
            <div className="w-full p-[16px] h-full text-grey-font font-pretendardRegular bg-white !text-[13px]">
              {/* Select Dropdown */}
              <Select
                className="max-w-xs text-grey-font h-full w-[126px] text-[13px] font-pretendardRegular"
                placeholder="Select a Term"
                selectedKeys={[selectedTerm]}
                radius={"none"}
                onSelectionChange={(keys) => {
                  const key = Array.from(keys)[0] as string; // Extract the selected key
                  setSelectedTerm(key);
                }}
              >
                {terms.map((term) => (
                  <SelectItem key={term.key} value={term.key}>
                    {term.title}
                  </SelectItem>
                ))}
              </Select>

              {/* Content Display */}
              <div className="rounded mt-[20px] h-full text-black">
                {terms
                  .find((term) => term.key === selectedTerm)
                  ?.content.map((section, index) => (
                    <div key={index} className="text-[13px] space-y-[10px]">
                      <h3 className="text-[13px]">{section.section}</h3>
                      <p className="text-[13px]">
                        <strong>{section.description}</strong>
                      </p>
                      <ul className="text-[13px]">
                        {section.details.map((detail, idx) => (
                          <li key={idx} className="">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )) || "No content available"}
              </div>
            </div>
          </div>
          <BottomNavigationBar />
        </div>
      }
    />
  );
}
