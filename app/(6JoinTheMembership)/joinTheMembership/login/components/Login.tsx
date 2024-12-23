import { CustomButton } from "@/components/button/Button";
import { MessageIcon, NIcon } from "@/components/icons";
import Input from "@/components/input/Input";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-white pt-[149px] justify-center relative">
      <div className="flex flex-col items-center px-4 gap-y-[40px]">
        <span className="font-PretendardBold text-[20px] text-grey-font">
          로그인
        </span>
        <div className="flex flex-col w-full gap-y-[10px]">
          <Input type={"text"} placeholder={"아이디 입력"} />
          <Input type={"text"} placeholder={"비밀번호 입력"} />
          <CustomButton
            label={"로그인"}
            backgroundColor={"bg-main-color"}
            textStyle={"font-PretendardBold text-[16px] text-white"}
            height={"!max-h-[54px] !h-[54px] !min-h-[54px]"}
            />
        </div>
      </div>

      <div className="w-full h-[18px] gap-x-[10px] flex items-center my-[10px] px-[12px] mt-[60px] mb-5">
        <div className="h-[1px] bg-grey-border flex-grow" />
        <span className="text-grey-font-light font-pretendardRegular text-[13px]">
          아직 장비파트너 회원이 아니세요?
        </span>
        <div className="h-[1px] bg-grey-border flex-grow" />
      </div>
      <div className="flex flex-col gap-y-4 w-full px-4">
        <div className="w-full flex flex-col gap-y-[10px] items-center">
          <button
            className="w-full bg-[#FEE500] relative px-5 py-3 rounded-[8px] !h-[46px]"
            onClick={() => {
              router.push("/");
            }}
          >
            <MessageIcon />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full !h-[46px] ">
              <span className="text-black font-pretendardRegular text-[16px]">
                카카오 로그인
              </span>
            </div>
          </button>

          <button
            className="w-full bg-[#03C75A] relative px-5 py-3 rounded-[8px] !h-[46px]"
            onClick={() => {
              router.push("/");
            }}
          >
            <NIcon />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full !h-[46px] ">
              <span className="text-white font-pretendardRegular text-[16px]">
                네이버 로그인
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
// height={"!max-h-[46px] !h-[46px] !min-h-[46px]"}

