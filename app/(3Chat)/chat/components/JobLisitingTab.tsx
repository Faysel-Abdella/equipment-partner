// components/JobListingTab.tsx
import { ChangeEvent } from "react";
import { RadioGroup } from "@nextui-org/react";
import { OrderDetailRadioCard } from "@/components/orderdetails/orderDetailsRadioCard";

interface JobListing {
  id: string;
  title: string;
  description: string;
  subtitle: string;
  time: string;
}

interface JobListingTabProps {
  selectedType: string;
  handleSelectionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  jobs: JobListing[];
}

const JobListingTab: React.FC<JobListingTabProps> = ({ selectedType, handleSelectionChange, jobs }) => {
  return (
    <div className="w-full overflow-y-scroll scrollbar-hide h-full max-h-[80vh]">
      <div className="flex flex-col w-full bg-white">
        {/* Job Listings */}
        <div className="flex w-full flex-col !gap-y-[20px] px-4">
          <RadioGroup value={selectedType} onChange={handleSelectionChange}>
            {jobs.map((job) => (
              <div key={job.id}>
                <div className="flex flex-col items-start gap-y-5 pb-[10px]">
                  <OrderDetailRadioCard
                    title={job.title}
                    selected={selectedType === job.id}
                    buttontext="상세정보"
                    description={
                      <div className="w-full">
                        <div>
                          <span className="text-[13px] font-pretendardRegular text-grey-font-light">
                            {job.description}
                          </span>{" "}
                          <br />
                          <span className="text-[13px] font-pretendardRegular text-grey-font-light">
                            {job.subtitle}
                          </span>
                        </div>
                        <div className="text-[10px] text-grey-disabled mt-2">
                          {job.time}
                        </div>
                      </div>
                    }
                    onClick={() => handleSelectionChange({ target: { value: job.id } } as ChangeEvent<HTMLInputElement>)}
                  />
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
      <div className="!h-[106px]"></div>
    </div>
  );
};

export default JobListingTab;
