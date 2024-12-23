import { useRouter } from "next/navigation";
import React from "react";

interface DailyReportProps {
  status: string;
}
const DailyReport: React.FC<DailyReportProps> = ({ status }) => {
  // Example data
  const reports = [
    {
      date: "2024-12-03",
      status: "미완료",
      action: "확인하기",
      statusColor: "text-red-color",
    },
    { date: "2024-12-02", status: "완료", action: "확인하기", statusColor: "" },
    { date: "2024-12-01", status: "완료", action: "확인하기", statusColor: "" },
  ];
  const router = useRouter();

  return (
    <div className="px-[20px] w-full space-y-[10px]">
      <p className="text-[16px] font-PretendardBold text-grey-font">
        작업일보 (작업확인서)
      </p>
      <div>
        {/* Header Row */}
        <div className="flex px-[20px] py-[12px] justify-center rounded-[6px] items-center text-[13px] font-PretendardBold bg-grey-light text-grey-font-light">
          <p className="w-1/3 text-center">일시</p>
          <p className="w-1/3 text-center">확인여부</p>
          <p className="w-1/3 text-center"></p>
        </div>

        {/* Data Rows */}
        {reports.map((report, index) => (
          <div
            key={index}
            className={`flex px-[20px] py-[12px] justify-center items-center text-[13px] font-pretendardRegular ${
              index == reports?.length-1 ? "" : "border-b border-grey-light "
            }`}
          >
            <p className="w-1/3 text-center text-grey-font-light text-[13px]">
              {report.date}
            </p>
            <p
              className={`w-1/3 text-center text-grey-font text-[13px] ${report.statusColor}`}
            >
              {report.status}
            </p>
            <button
              className="w-1/3 text-center text-main-light-color  text-[13px]"
              onClick={() => {
                if (status == "completed") {
                  router.push("/myWorks/daily-report");
                }
              }}
            >
              {report.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyReport;
