import {Tabs, Tab} from "@nextui-org/react";

export default function OrderDetailHeader() {
  return (
    <div className="flex w-full gap-4 justify-center">
        <Tabs aria-label="Tabs" variant='underlined' className='w-full p-[16px]' fullWidth={true}>
          <Tab key="작업 정보" title="작업 정보" className='border-b border-b-grey-light'/>
          <Tab key="모집 목록" title="모집 목록" className='border-b border-b-grey-light'/>
        </Tabs>
    </div>
  );
}