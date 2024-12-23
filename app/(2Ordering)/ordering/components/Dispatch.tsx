import React from "react";
import JobDetails from "./JobDetails";
import DispatchCompleted from "./DispatchCompleted";

interface DispatchProps {
  status: string;
}
const Dispatch: React.FC<DispatchProps> = ({ status }) => {
  return (
    <div className="space-y-[20px] mb-[30px]">
      <JobDetails recruiting={false} />
      <div className="h-[5px] bg-grey-light "></div>
      {status && <DispatchCompleted status={status} />}
    </div>
  );
};

export default Dispatch;
