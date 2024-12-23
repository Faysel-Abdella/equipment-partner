"use client";

import { BackIcon } from "@/components/icons";
import { CustomButton } from "@/components/button/Button";
import DisplaySpace from "@/components/DisplaySpace";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import { useState } from "react";
import ConfirmContractTable from "@/app/(4MyWork)/myWorks/components/ConfirmContractTable";
import SignatureModal from "@/components/modals/SignatureModal";
import ContractCompletionModal from "@/components/modals/ContractCompletionModal";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ConfrimContract() {
  const [showModal, setShowModal] = useState(false);
  const [showCompletedModal, setShowCompletedModal] = useState(false);
  const [signatureSvg, setSignatureSvg] = useState("");
  const data = [
    {
      title: "현장명",
      desc: "주택정원 정리",
    },
    {
      title: "현장위치",
      desc: "서울특별시 금천구 가산로1상세주소",
    },
    {
      title: "장비",
      desc: "굴착기 06W (휠, 쪽버켓)",
    },
    {
      title: "작업일",
      desc: "2024-12-01 (오후 반일)",
    },
    {
      title: "금액(부가세 별도)",
      desc: "60만원",
    },
    {
      title: "추가사항",
      desc: "추가사항 텍스트 영역",
    },
    {
      title: "작성일",
      desc: "2024-11-30",
    },
  ];
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
                계약서 확인
              </h3>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="pt-[78px] h-full relative overflow-y-scroll overflow-x-hidden scrollbar-hide z-40 px-4">
            <h2 className="font-pretendardRegular text-[16px] text-grey-font my-5">
              업체명 (이하 ‘사업주’)과(와) 사업장명 (이하 ‘장비사업자’)은 다음과
              같이 계약을 체결한다.
            </h2>
            <ConfirmContractTable items={data} /> {/* signature table */}
            <div className="flex w-full flex-col overflow-x-hidden py-5">
              <table className="table-auto border-collapse border-t border-b border-grey-disabled w-full">
                <tbody>
                  <tr className="!h-[50px] bg-grey-light">
                    <td className="px-3 py-[14px] gap-[10px] text-center border-t border-r border-t-grey-disabled">
                      <h3 className="text-center text-grey-font-light font-pretendardRegular text-[16px]">
                        발주사
                      </h3>
                    </td>
                    <td className="px-3 py-[14px] gap-[10px]text-center border-t  border-grey-disabled">
                      <p className="text-center text-grey-font-light  font-pretendardRegular text-[16px]">
                        장비사업자
                      </p>
                    </td>
                  </tr>
                  <tr className="!h-[102px] bg-white ">
                    <td className="px-3 py-[14px] flex flex-col items-center gap-[10px] text-center  ">
                      <h3 className="text-center text-grey-font  font-pretendardRegular text-[16px]">
                        아산중기
                      </h3>
                      {signatureSvg == "" ? (
                        <CustomButton
                          label={"서명"}
                          backgroundColor={"bg-[#E9EEFE]"}
                          textStyle={"text-main-color font-bold text-sm"}
                          onPress={() => {
                            setSignatureSvg("");
                            setShowModal(true);
                          }}
                          width="!w-[81px]"
                        />
                      ) : (
                        <button
                          onClick={() => {
                            setSignatureSvg("");
                            setShowModal(true);
                          }}
                        >
                          <div
                            className="!w-[89.73px] !h-[42px] flex border-[1px] rounded-[4px] border-grey-border bg-transparent"
                            dangerouslySetInnerHTML={{
                              __html: JSON.parse(signatureSvg),
                            }}
                          />
                        </button>
                      )}{" "}
                    </td>
                    <td className="px-3 py-[14px] border-l border-grey-border">
                      <p className="text-center text-grey-font  font-pretendardRegular text-[16px]  flex items-start justify-center">
                        홍길동
                      </p>
                      <div className="w-full flex justify-center mt-[10px]">
                        <Image
                          src={`/assets/images/signature.svg`}
                          alt="contract"
                          width={90}
                          height={42}
                          className="!w-[89.73px] !h-[42px]"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <SignatureModal
            isOpen={showModal}
            setIsOpen={setShowModal}
            signature={signatureSvg}
            setSignature={setSignatureSvg}
          />
          <ContractCompletionModal
            isOpen={showCompletedModal}
            setIsOpen={setShowCompletedModal}
          />
        </div>
      }
    />
  );
}
