"use client";
import DisplaySpace from "@/components/DisplaySpace";
import { BackIcon, DownArrow, UpArrow } from "@/components/icons";
import TopNavigationBar from "@/components/TopNavigationBar/TopNavigationBar";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

// Data for the Accordion Items
const accordionData = [
  {
    id: 1,
    title: "Q. 보유한 포인트는 어떻게 쓸 수 있나요?",
    content: [
      "자주 묻는 질문에 대한 답변 영역입니다.자주 묻는 질문에 대한 답변 영역입니다.자주 묻는 질문에 대한 답변 영역입니다.",
    ],
  },
  {
    id: 2,
    title: "Q. 보유한 포인트는 어떻게 쓸 수 있나요?",
    content: [
      "자주 묻는 질문에 대한 답변 영역입니다.자주 묻는 질문에 대한 답변 영역입니다.자주 묻는 질문에 대한 답변 영역입니다.",
    ],
  },
  {
    id: 3,
    title: "Q. 보유한 포인트는 어떻게 쓸 수 있나요?",
    content: [
      "자주 묻는 질문에 대한 답변 영역입니다.자주 묻는 질문에 대한 답변 영역입니다.자주 묻는 질문에 대한 답변 영역입니다.",
    ],
  },
  {
    id: 4,
    title: "Q. 보유한 포인트는 어떻게 쓸 수 있나요?",
    content: [
      "자주 묻는 질문에 대한 답변 영역입니다.자주 묻는 질문에 대한 답변 영역입니다.자주 묻는 질문에 대한 답변 영역입니다.",
    ],
  },
  {
    id: 5,
    title: "Q. 보유한 포인트는 어떻게 쓸 수 있나요?",
    content: [
      "자주 묻는 질문에 대한 답변 영역입니다.자주 묻는 질문에 대한 답변 영역입니다.자주 묻는 질문에 대한 답변 영역입니다.",
    ],
  },
  {
    id: 6,
    title: "Q. 보유한 포인트는 어떻게 쓸 수 있나요?",
    content: ["자주 묻는 질문에 대한 답변 영역입니다."],
  },
];

export default function App() {
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
                공지사항
              </h3>
            }
            bottomBorder="border-b-[1px] border-grey-border"
          />
          <div className="overflow-y-auto scrollbar-hide h-full relative max-h-screen">
            <div className="flex justify-center font-pretendardRegular h-full w-full bg-white items-start ">
              <div className="w-full px-2 pt-[16px]">
                <Accordion
                  variant="light"
                  fullWidth={true}
                  className="bg-white w-full box-border"
                >
                  {accordionData.map((item) => (
                    <AccordionItem
                      key={item.id}
                      aria-label={`Accordion ${item.id}`}
                      indicator={({ isOpen }) =>
                        isOpen ? <UpArrow /> : <DownArrow />
                      }
                      title={
                        <div className="flex items-center w-full">
                          <span className="font-pretendardRegular text-grey-font mr-[2px]">
                            Q.
                          </span>
                          <p className="text-grey-font m-0">
                            {item.title.replace("Q. ", "")}
                          </p>
                        </div>
                      }
                      className="border-b border-grey-light m-0 p-0 w-full"
                      classNames={{
                        startContent: "!p-0",
                        base: "!py-[16px]",
                        content: "!pt-[10px] !pb-0", // Ensures no padding inside the content area
                        trigger: "!p-0", // Ensures no padding for the trigger button
                      }}
                    >
                      {item.content.map((contentItem, index) => (
                        <div
                          key={`${item.id}-${index}`}
                          className="flex items-start w-full "
                        >
                          <span className="font-pretendardRegular text-grey-font-light mr-2">
                            {String.fromCharCode(65 + index)}.
                          </span>
                          <p className="text-grey-font-light m-0">
                            {contentItem}
                          </p>
                        </div>
                      ))}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
