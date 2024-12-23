import { MessageIcon, NIcon } from "@/components/icons";
import { LogoTextIcon } from "@/components/TopNavigationBar/Icons";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-white pt-[149px] justify-center  relative">
      <div className="flex justify-start mb-5 pl-[47px] ">
        <span className="font-PretendardBold text-[16px] text-grey-font">
          나에게 딱 맞는 일거리
          <br />
          <span className="text-main-color"> 장비파트너에</span>서 지금
          시작하세요
        </span>
      </div>
      <div className="!w-[180px] !h-[45px] !max-w-[180px] !max-h-[45px] pl-[47px] ">
        <LogoTextIcon className="!w-[180px] !h-[45px] !max-w-[180px] !max-h-[45px]" />
      </div>
      <div className="absolute bottom-[40px] flex flex-col gap-y-4 w-full px-4">
        <div className="w-full flex flex-col gap-y-[10px] items-center">
          <button className="w-full bg-[#FEE500] relative px-5 py-3 rounded-[8px] !h-[46px]">
            <MessageIcon />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full !h-[46px] ">
              <span className="text-black font-pretendardRegular text-[16px]">
                카카오 로그인
              </span>
            </div>
          </button>

          <button className="w-full bg-[#03C75A] relative px-5 py-3 rounded-[8px] !h-[46px]">
            <NIcon />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full !h-[46px] ">
              <span className="text-white font-pretendardRegular text-[16px]">
                네이버 로그인
              </span>
            </div>
          </button>
        </div>
        <button
          className="font-pretendardRegular text-[16px] text-grey-font-light text-center"
          onClick={() => {
            router.push("/joinTheMembership/login");
          }}
        >
          기존 아이디로 로그인
        </button>
      </div>
    </div>
  );
}
