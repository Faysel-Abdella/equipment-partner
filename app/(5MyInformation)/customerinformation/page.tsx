"use client"
import { ChevronRight } from '@/components/icons' 

export default function Menu() {
  return (
    <div className="bg-white min-h-screen px-5 py-4 font-pretendardRegular">
      <ul className="">
        <li>
          <div className="w-full flex items-center py-[16px] justify-between text-[15px] border-b border-grey-light text-grey-font">
            <span>공지사항</span>
            <ChevronRight/>
          </div>
        </li>
        <li>
          <div className="w-full flex items-center justify-between py-[16px] text-[15px] border-b border-grey-light text-grey-font">
            <span>FAQ</span>
            <ChevronRight  />
          </div>
        </li>
        <li>
          <div className="w-full flex items-center justify-between py-[16px] text-[15px]  text-grey-font">
            <span>1:1 문의</span>
            <ChevronRight/>
          </div>
        </li>
      </ul>
    </div>
  )
}