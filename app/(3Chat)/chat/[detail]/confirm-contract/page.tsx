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
              신청 수락은 최대 영업일 3일까지 소요될 수 있으며, 잘못된 정보,
              오타 등으로 인한 가맹 신청은 반려됩니다.
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
                    <td className="px-3 py-[14px] gap-[10px]  border-l border-grey-border">
                      <p className="text-center text-grey-font  font-pretendardRegular text-[16px] !h-[74px] flex items-start justify-center">
                        홍길동
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="!h-[106px]"></div>
          </div>
          <div className="bg-white w-full px-4 absolute bottom-0 !z-50 pb-[40px]">
            <div className="h-4"></div>
            <CustomButton
              label={"완료"}
              backgroundColor={"bg-main-color"}
              textStyle={"text-white font-PretendardBold text-[16px]"}
              height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
              onPress={() => {
                setShowModal(false);
                setShowCompletedModal(true);
              }}
              disabled={
                signatureSvg == "" ||
                signatureSvg ==
                  '<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="react-sketch-canvas" style="width: 100%; height: 100%;" viewBox="0 0 350 163" width="350" height="163"><g id="react-sketch-canvas__eraser-stroke-group" display="none"><rect id="react-sketch-canvas__mask-background" x="0" y="0" width="100%" height="100%" fill="white"></rect></g><defs></defs><g id="react-sketch-canvas__canvas-background-group"><rect id="react-sketch-canvas__canvas-background" x="0" y="0" width="100%" height="100%" fill="#f2f3f5"></rect></g><g id="react-sketch-canvas__stroke-group-0" mask="url(#react-sketch-canvas__eraser-mask-0)"></g></svg>'
              }
            />
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
