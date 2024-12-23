import React from "react";

type ConfirmContractTableProps = {
  items: Array<{ title: string; desc: string }>;
};

export default function ConfirmContractTable({
  items,
}: ConfirmContractTableProps) {
  return (
    <div className="flex w-full flex-col overflow-x-auto">
      <table className={`w-full border-collapse`}>
        {/* Render Table Body */}
        <tbody className="border-t-[1px] border-b-[1px] border-grey-disabled">
          {items.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              className={` ${
                rowIndex !== items?.length - 1
                  ? "border-b-[1px] border-grey-border "
                  : ""
              }`}
            >
              <td
                className={`px-[12px] py-[14px] !max-w-[99px] !w-[99px] h-auto min-h-[50px] bg-grey-light break-noraml`}
              >
                <h3 className="font-pretendardRegular text-[16px] text-grey-font-light !max-w-[67px] w-[67px]">
                  {item.title}
                </h3>
              </td>
              <td
                className={`px-[12px] py-[14px]  min-h-[50px] bg-white font-pretendardRegular text-[16px] text-grey-font break-all`}
              >
                <p className="!max-w-[163px] w-[163px]">{item.desc}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
